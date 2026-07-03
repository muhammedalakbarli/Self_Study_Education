// İstifadəçi irəliləyişi: XP, streak və tamamlanmış dərslər.
// MVP mərhələsində məlumat brauzerin localStorage-ında saxlanılır.
// Sonrakı addım: bu funksiyaları Supabase user_progress/user_stats cədvəlləri ilə əvəz etmək.

import { orderedLessonIds } from "./content";

// İrəliləyiş hər istifadəçi üçün ayrıca saxlanılır (id-yə görə açar).
// Beləliklə eyni brauzerdə fərqli hesablar bir-birinin progress-ini görmür.
// (Həftə 3-də bu localStorage qatı Supabase user_progress/user_stats ilə əvəz olunacaq.)
function storageKey(userId: string): string {
  return `tedris-progress-v1:${userId || "guest"}`;
}

export interface ProgressState {
  name: string; // istifadəçinin adı (sadə "giriş" əvəzi)
  totalXp: number;
  streakDays: number;
  lastActiveDate: string | null; // "YYYY-MM-DD"
  completedLessons: string[]; // tamamlanmış dərs id-ləri
}

const emptyState: ProgressState = {
  name: "",
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

export function loadProgress(userId: string): ProgressState {
  if (typeof window === "undefined") return { ...emptyState };
  try {
    const raw = localStorage.getItem(storageKey(userId));
    if (!raw) return { ...emptyState };
    return { ...emptyState, ...JSON.parse(raw) };
  } catch {
    return { ...emptyState };
  }
}

function save(userId: string, state: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(storageKey(userId), JSON.stringify(state));
}

// Streak-i günə görə yenilə: eyni gün → dəyişməz, ardıcıl gün → +1, boşluq → 1-ə sıfırlan
function touchStreak(state: ProgressState) {
  const today = todayStr();
  if (state.lastActiveDate === today) return;
  if (state.lastActiveDate && daysBetween(state.lastActiveDate, today) === 1) {
    state.streakDays += 1;
  } else {
    state.streakDays = 1;
  }
  state.lastActiveDate = today;
}

// Dərs tamamlananda çağırılır: XP əlavə et, dərsi tamamlanmış işarələ, streak-i yenilə
export function completeLesson(
  userId: string,
  lessonId: string,
  earnedXp: number,
): ProgressState {
  const state = loadProgress(userId);
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
  }
  state.totalXp += earnedXp;
  touchStreak(state);
  save(userId, state);
  return state;
}

// Dərs kiliddədirmi? Fəndəki əvvəlki dərs tamamlanmayıbsa kiliddədir (ilk dərs həmişə açıqdır).
export function isLessonLocked(
  slug: string,
  lessonId: string,
  completed: string[]
): boolean {
  const order = orderedLessonIds(slug);
  const index = order.indexOf(lessonId);
  if (index <= 0) return false;
  const prev = order[index - 1];
  return !completed.includes(prev);
}
