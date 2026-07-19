"use client";

// Ayarlar → Tərcihlər: dərs təcrübəsi (səs, animasiya, motivasiya, dinləmə) +
// görünüş (tünd rejim) + dil (interfeys dili).

import { useEffect, useState } from "react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadPrefs, savePrefs, type Prefs, type DarkMode, type Lang } from "@/lib/prefs";
import { useT, LANG_NAMES } from "@/lib/i18n";
import { PageSkeleton } from "@/components/Skeleton";
import Toggle from "@/components/Toggle";

const LESSON_ROWS: { key: keyof Prefs; labelKey: string; hintKey: string }[] = [
  { key: "sound", labelKey: "settings.sound", hintKey: "settings.soundHint" },
  { key: "animations", labelKey: "settings.animations", hintKey: "settings.animationsHint" },
  { key: "motivational", labelKey: "settings.motivational", hintKey: "settings.motivationalHint" },
  { key: "listening", labelKey: "settings.listening", hintKey: "settings.listeningHint" },
];

export default function SettingsPage() {
  const { user, ready } = useAuthUser();
  const [prefs, setPrefs] = useState<Prefs | null>(null);
  const t = useT();

  useEffect(() => {
    setPrefs(loadPrefs());
  }, []);

  if (!ready || !user || !prefs) return <PageSkeleton />;

  function setToggle(key: keyof Prefs, value: boolean) {
    const next = { ...prefs!, [key]: value };
    setPrefs(next);
    savePrefs(next);
  }

  function setDark(value: DarkMode) {
    const next = { ...prefs!, darkMode: value };
    setPrefs(next);
    savePrefs(next);
  }

  function setLang(value: Lang) {
    const next = { ...prefs!, lang: value };
    savePrefs(next);
    // Bütün səhifədəki mətnlərin yenilənməsi üçün təzələ.
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">{t("settings.title")}</h1>
        <p className="mt-1 text-sm text-muted">{t("settings.subtitle")}</p>

        {/* Dərs təcrübəsi */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          {t("settings.lessonExp")}
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          {LESSON_ROWS.map((row) => (
            <div
              key={row.key}
              className="flex items-center justify-between gap-4 border-b border-line px-4 py-3.5 last:border-b-0"
            >
              <div>
                <div className="font-bold text-fg">{t(row.labelKey)}</div>
                <div className="text-xs text-muted">{t(row.hintKey)}</div>
              </div>
              <Toggle
                checked={prefs[row.key] as boolean}
                onChange={(v) => setToggle(row.key, v)}
              />
            </div>
          ))}
        </div>

        {/* Görünüş */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          {t("settings.appearance")}
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          <div className="flex items-center justify-between gap-4 px-4 py-3.5">
            <div>
              <div className="font-bold text-fg">{t("settings.dark")}</div>
              <div className="text-xs text-muted">{t("settings.darkHint")}</div>
            </div>
            <select
              value={prefs.darkMode}
              onChange={(e) => setDark(e.target.value as DarkMode)}
              className="rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-bold text-fg outline-none focus:border-brand"
            >
              <option value="system">{t("settings.system")}</option>
              <option value="light">{t("settings.light")}</option>
              <option value="dark">{t("settings.darkOpt")}</option>
            </select>
          </div>
        </div>

        {/* Dil */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          {t("settings.language")}
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          <div className="flex items-center justify-between gap-4 px-4 py-3.5">
            <div>
              <div className="font-bold text-fg">{t("settings.language")}</div>
              <div className="text-xs text-muted">{t("settings.languageHint")}</div>
            </div>
            <select
              value={prefs.lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-bold text-fg outline-none focus:border-brand"
            >
              {(Object.keys(LANG_NAMES) as Lang[]).map((l) => (
                <option key={l} value={l}>
                  {LANG_NAMES[l]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}
