// İstifadəçi irəliləyişi — Supabase verilənlər bazasında saxlanılır.
// XP və streak → user_stats; tamamlanmış dərslər → user_progress.
// Bütün yazılar autentifikasiya olunmuş client ilə gedir (RLS: yalnız öz sətirləri).

import { createClient } from "./supabase/client";
import { orderedLessonIds } from "./content";

export interface ProgressState {
  totalXp: number;
  streakDays: number;
  lastActiveDate: string | null; // "YYYY-MM-DD"
  completedLessons: string[]; // tamamlanmış dərs id-ləri
}

const emptyState: ProgressState = {
  totalXp: 0,
  streakDays: 0,
  lastActiveDate: null,
  completedLessons: [],
};

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

// Profil sətrini yaradır (user_progress/user_stats ona FK ilə bağlıdır).
// İlk girişdə çağırılır; varsa toxunmur.
export async function ensureProfile(userId: string, name: string): Promise<void> {
  const supabase = createClient();
  await supabase
    .from("profiles")
    .upsert({ id: userId, name: name || "İstifadəçi" }, { onConflict: "id", ignoreDuplicates: true });
}

// İstifadəçinin irəliləyişini DB-dən oxuyur.
export async function loadProgress(userId: string): Promise<ProgressState> {
  const supabase = createClient();
  const [statsRes, progRes] = await Promise.all([
    supabase
      .from("user_stats")
      .select("total_xp, streak_days, last_active_date")
      .eq("user_id", userId)
      .maybeSingle(),
    supabase.from("user_progress").select("lesson_id").eq("user_id", userId),
  ]);

  const stats = statsRes.data;
  const rows = progRes.data ?? [];
  return {
    totalXp: stats?.total_xp ?? 0,
    streakDays: stats?.streak_days ?? 0,
    lastActiveDate: stats?.last_active_date ?? null,
    completedLessons: rows.map((r: { lesson_id: string }) => r.lesson_id),
  };
}

// Dərs tamamlananda: user_progress-ə yaz, user_stats-ı yenilə (XP + streak).
export async function completeLesson(
  userId: string,
  lessonId: string,
  earnedXp: number,
): Promise<void> {
  const supabase = createClient();

  await supabase
    .from("user_progress")
    .upsert(
      { user_id: userId, lesson_id: lessonId, score: earnedXp },
      { onConflict: "user_id,lesson_id" },
    );

  // Statistikanı oxu-dəyiş-yaz (XP topla, streak-i günə görə yenilə).
  const { data: cur } = await supabase
    .from("user_stats")
    .select("total_xp, streak_days, last_active_date")
    .eq("user_id", userId)
    .maybeSingle();

  const today = todayStr();
  const last = cur?.last_active_date ?? null;
  let streak = cur?.streak_days ?? 0;
  if (last === today) {
    // eyni gün — dəyişmir
  } else if (last && daysBetween(last, today) === 1) {
    streak += 1;
  } else {
    streak = 1;
  }

  await supabase.from("user_stats").upsert(
    {
      user_id: userId,
      total_xp: (cur?.total_xp ?? 0) + earnedXp,
      streak_days: streak,
      last_active_date: today,
    },
    { onConflict: "user_id" },
  );
}

// Statistikaya əlavə XP yaz (məs. gündəlik quest mükafatı) — streak-ə toxunmadan.
export async function addXp(userId: string, amount: number): Promise<void> {
  if (!amount) return;
  const supabase = createClient();
  const { data: cur } = await supabase
    .from("user_stats")
    .select("total_xp, streak_days, last_active_date")
    .eq("user_id", userId)
    .maybeSingle();
  await supabase.from("user_stats").upsert(
    {
      user_id: userId,
      total_xp: (cur?.total_xp ?? 0) + amount,
      streak_days: cur?.streak_days ?? 0,
      last_active_date: cur?.last_active_date ?? todayStr(),
    },
    { onConflict: "user_id" },
  );
}

// Dərs kiliddədirmi? Fəndəki əvvəlki dərs tamamlanmayıbsa kiliddədir (ilk dərs həmişə açıqdır).
export function isLessonLocked(
  slug: string,
  lessonId: string,
  completed: string[],
): boolean {
  const order = orderedLessonIds(slug);
  const index = order.indexOf(lessonId);
  if (index <= 0) return false;
  const prev = order[index - 1];
  return !completed.includes(prev);
}

export { emptyState };
