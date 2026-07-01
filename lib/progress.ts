// İstifadəçi irəliləyişi: XP, streak və tamamlanmış dərslər.
// MVP mərhələsində məlumat brauzerin localStorage-ında saxlanılır.
// Sonrakı addım: bu funksiyaları Supabase user_progress/user_stats cədvəlləri ilə əvəz etmək.

import { orderedLessonIds } from "./content";

const STORAGE_KEY = "tedris-progress-v1";

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

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return { ...emptyState };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...emptyState };
    return { ...emptyState, ...JSON.parse(raw) };
  } catch {
    return { ...emptyState };
  }
}

function save(state: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function setName(name: string): ProgressState {
  const state = loadProgress();
  state.name = name;
  save(state);
  return state;
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
export function completeLesson(lessonId: string, earnedXp: number): ProgressState {
  const state = loadProgress();
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
  }
  state.totalXp += earnedXp;
  touchStreak(state);
  save(state);
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
