// Səhv edilən tapşırıqların id-lərini yadda saxlayır (localStorage) — Praktika "Səhvlər" üçün.

const KEY = "bilik-mistakes";

export function loadMistakes(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addMistake(taskId: string) {
  if (typeof window === "undefined") return;
  const set = new Set(loadMistakes());
  set.add(taskId);
  localStorage.setItem(KEY, JSON.stringify([...set]));
}

export function removeMistake(taskId: string) {
  if (typeof window === "undefined") return;
  const next = loadMistakes().filter((id) => id !== taskId);
  localStorage.setItem(KEY, JSON.stringify(next));
}
