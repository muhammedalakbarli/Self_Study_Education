"use client";

// Holberton-üslubu tünd üst nav bar: loqo + XP/streak.

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { loadProgress } from "@/lib/progress";

export default function AppHeader() {
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const p = loadProgress();
    setXp(p.totalXp);
    setStreak(p.streakDays);
  }, []);

  return (
    <header className="border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo size={32} />
          <span className="text-lg font-bold tracking-tight text-white">
            Bilik Yolu
          </span>
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1.5 rounded-full bg-panel px-3 py-1.5 font-semibold text-amber-400">
            ⭐ {xp} XP
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-panel px-3 py-1.5 font-semibold text-orange-400">
            🔥 {streak}
          </span>
        </div>
      </div>
    </header>
  );
}
