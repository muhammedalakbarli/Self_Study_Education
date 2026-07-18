// İstifadəçi tərcihləri (localStorage). Animasiyalar tərcihi bütün app-a tətbiq olunur.

export type DarkMode = "system" | "light" | "dark";

export interface Prefs {
  sound: boolean;
  animations: boolean;
  motivational: boolean;
  listening: boolean;
  darkMode: DarkMode;
}

export const DEFAULT_PREFS: Prefs = {
  sound: true,
  animations: true,
  motivational: true,
  listening: true,
  darkMode: "system",
};

const KEY = "bilik-prefs";

export function loadPrefs(): Prefs {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
  } catch {
    return DEFAULT_PREFS;
  }
}

export function savePrefs(p: Prefs) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
  applyPrefs(p);
}

// Tərcihləri DOM-a tətbiq et (hazırda: animasiyaları söndürmək).
export function applyPrefs(p: Prefs) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("no-anim", !p.animations);
}
