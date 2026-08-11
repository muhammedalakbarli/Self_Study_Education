// İrəliləyiş — user_stats oxu, dərs tamamla (add_user_xp RPC), dərs vəziyyəti.
import { supabase } from "./supabase";

export interface Progress {
  totalXp: number;
  streakDays: number;
  gems: number;
  completedLessons: string[];
}

function bakuToday(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Baku" });
}
// Qırılmış seriyanı 0 göstər (server yalnız növbəti dərsdə yeniləyir).
function effectiveStreak(streak: number, last: string | null): number {
  if (!last) return 0;
  const today = bakuToday();
  const y = new Date(today + "T00:00:00Z");
  y.setUTCDate(y.getUTCDate() - 1);
  const yest = y.toISOString().slice(0, 10);
  return last === today || last === yest ? streak : 0;
}

export async function loadProgress(userId: string): Promise<Progress> {
  const [statsRes, progRes] = await Promise.all([
    supabase.from("user_stats").select("total_xp, streak_days, last_active_date, gems").eq("user_id", userId).maybeSingle(),
    supabase.from("user_progress").select("lesson_id").eq("user_id", userId),
  ]);
  const s = statsRes.data;
  return {
    totalXp: s?.total_xp ?? 0,
    streakDays: effectiveStreak(s?.streak_days ?? 0, s?.last_active_date ?? null),
    gems: s?.gems ?? 0,
    completedLessons: (progRes.data ?? []).map((r: { lesson_id: string }) => r.lesson_id),
  };
}

export async function completeLesson(userId: string, lessonId: string, earnedXp: number): Promise<void> {
  await supabase.from("user_progress").upsert(
    { user_id: userId, lesson_id: lessonId, score: earnedXp },
    { onConflict: "user_id,lesson_id" },
  );
  await supabase.rpc("add_user_xp", { p_amount: earnedXp, p_touch_streak: true });
}

export type LessonUIState = "done" | "current" | "locked";
// Ciddi ardıcıl: ilk tamamlanmamış "cari", ondan əvvəlkilər "done", sonrakılar "locked".
export function lessonState(order: string[], id: string, completed: string[]): LessonUIState {
  const done = new Set(completed);
  const firstIncomplete = order.find((x) => !done.has(x));
  if (done.has(id)) return "done";
  if (id === firstIncomplete) return "current";
  return "locked";
}
