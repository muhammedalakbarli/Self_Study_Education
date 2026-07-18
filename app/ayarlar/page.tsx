"use client";

// Ayarlar → Preferences: dərs təcrübəsi (səs, animasiya, motivasiya, dinləmə) + görünüş (tünd rejim).

import { useEffect, useState } from "react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadPrefs, savePrefs, type Prefs, type DarkMode } from "@/lib/prefs";
import { PageSkeleton } from "@/components/Skeleton";
import Toggle from "@/components/Toggle";

const LESSON_ROWS: { key: keyof Prefs; label: string; hint: string }[] = [
  { key: "sound", label: "Səs effektləri", hint: "Cavab və təbriklərdə səslər" },
  { key: "animations", label: "Animasiyalar", hint: "Ulduz və keçid animasiyaları" },
  { key: "motivational", label: "Motivasiya mesajları", hint: "Ruhlandırıcı bildirişlər" },
  { key: "listening", label: "Dinləmə çalışmaları", hint: "Səsli tapşırıqlar" },
];

export default function SettingsPage() {
  const { user, ready } = useAuthUser();
  const [prefs, setPrefs] = useState<Prefs | null>(null);

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

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Ayarlar</h1>
        <p className="mt-1 text-sm text-muted">Preferences</p>

        {/* Dərs təcrübəsi */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          Dərs təcrübəsi
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          {LESSON_ROWS.map((row) => (
            <div
              key={row.key}
              className="flex items-center justify-between gap-4 border-b border-line px-4 py-3.5 last:border-b-0"
            >
              <div>
                <div className="font-bold text-fg">{row.label}</div>
                <div className="text-xs text-muted">{row.hint}</div>
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
          Görünüş
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          <div className="flex items-center justify-between gap-4 px-4 py-3.5">
            <div>
              <div className="font-bold text-fg">Tünd rejim</div>
              <div className="text-xs text-muted">Dark mode</div>
            </div>
            <select
              value={prefs.darkMode}
              onChange={(e) => setDark(e.target.value as DarkMode)}
              className="rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-bold text-fg outline-none focus:border-brand"
            >
              <option value="system">Sistem default</option>
              <option value="light">İşıqlı</option>
              <option value="dark">Tünd</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}
