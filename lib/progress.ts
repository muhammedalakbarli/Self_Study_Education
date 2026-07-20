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

  // XP + streak-i atomik server RPC ilə yenilə (oxu-dəyiş-yaz race yoxdur; streak
  // günü Asia/Baku vaxtı ilə serverdə hesablanır). Bax 0011 migration.
  await supabase.rpc("add_user_xp", { p_amount: earnedXp, p_touch_streak: true });
}

// Statistikaya əlavə XP yaz (məs. gündəlik quest mükafatı) — streak-ə toxunmadan.
// userId artıq lazım deyil (RPC auth.uid() işlədir), imza uyğunluq üçün saxlanılır.
export async function addXp(_userId: string, amount: number): Promise<void> {
  if (!amount) return;
  const supabase = createClient();
  await supabase.rpc("add_user_xp", { p_amount: amount, p_touch_streak: false });
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
