// İstifadəçi irəliləyişi — Supabase verilənlər bazasında saxlanılır.
// XP və streak → user_stats; tamamlanmış dərslər → user_progress.
// Bütün yazılar autentifikasiya olunmuş client ilə gedir (RLS: yalnız öz sətirləri).

import { createClient } from "./supabase/client";

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

// Bugünün tarixi (Asia/Baku) — "YYYY-MM-DD". Serverdəki streak məntiqi ilə eyni zona.
function bakuToday(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Baku" });
}

// Saxlanmış streak yalnız aktivlik olanda serverdə yenilənir. Oxuyanda isə real
// vəziyyəti göstərmək lazımdır: son aktivlik bugün və ya dünəndirsə seriya durur,
// daha köhnədirsə seriya qırılıb (0). Belə: bir neçə gün girməyəndə "1 gün" qalmaz.
export function effectiveStreak(streakDays: number, lastActiveDate: string | null): number {
  if (!lastActiveDate) return 0;
  const today = bakuToday();
  const y = new Date(today + "T00:00:00Z");
  y.setUTCDate(y.getUTCDate() - 1);
  const yesterday = y.toISOString().slice(0, 10);
  if (lastActiveDate === today || lastActiveDate === yesterday) return streakDays;
  return 0; // seriya qırılıb
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
  const lastActiveDate = stats?.last_active_date ?? null;
  return {
    totalXp: stats?.total_xp ?? 0,
    // Qırılmış seriyanı oxuyanda 0 göstər (server yalnız növbəti dərsdə yeniləyir).
    streakDays: effectiveStreak(stats?.streak_days ?? 0, lastActiveDate),
    lastActiveDate,
    completedLessons: rows.map((r: { lesson_id: string }) => r.lesson_id),
  };
}

// Aktiv günlər — istifadəçinin dərs tamamladığı tarixlər (Asia/Baku, "YYYY-MM-DD").
// Streak təqvimini (Duolingo üslubu) doldurmaq üçün. completed_at hər dərsin ilk
// tamamlanma vaxtıdır; son aktivlik günü ayrıca əlavə olunur.
export async function loadActiveDays(userId: string): Promise<string[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("user_progress")
    .select("completed_at")
    .eq("user_id", userId);
  const days = new Set<string>();
  for (const r of (data ?? []) as { completed_at: string }[]) {
    days.add(new Date(r.completed_at).toLocaleDateString("en-CA", { timeZone: "Asia/Baku" }));
  }
  return [...days];
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
// `order` — fəndəki dərs id-lərinin sırası (useContent().orderedLessonIds(slug)-dən).
export function isLessonLocked(
  order: string[],
  lessonId: string,
  completed: string[],
): boolean {
  const index = order.indexOf(lessonId);
  if (index <= 0) return false;
  const prev = order[index - 1];
  return !completed.includes(prev);
}

export { emptyState };
