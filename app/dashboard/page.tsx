"use client";

// Şagird ana səhifəsi: XP, streak və fənn kartları.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { subjects } from "@/lib/content";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { colorClasses } from "@/lib/ui";

export default function DashboardPage() {
  const router = useRouter();
  const [state, setState] = useState<ProgressState | null>(null);

  useEffect(() => {
    const p = loadProgress();
    if (!p.name) {
      router.replace("/");
      return;
    }
    setState(p);
  }, [router]);

  if (!state) return null;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
      {/* Başlıq + statistika */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-slate-500">Salam,</p>
          <h1 className="text-2xl font-bold">{state.name} 👋</h1>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 rounded-xl bg-amber-100 px-4 py-2 font-semibold text-amber-700">
            ⭐ {state.totalXp} XP
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-orange-100 px-4 py-2 font-semibold text-orange-700">
            🔥 {state.streakDays} gün
          </div>
        </div>
      </div>

      {/* Fənlər */}
      <h2 className="mt-10 text-lg font-semibold text-slate-700">Fənlər</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {subjects.map((subject) => {
          const c = colorClasses(subject.color);
          const lessonCount = subject.units.reduce(
            (n, u) => n + u.lessons.length,
            0
          );
          const done = subject.units
            .flatMap((u) => u.lessons)
            .filter((l) => state.completedLessons.includes(l.id)).length;
          return (
            <Link
              key={subject.slug}
              href={`/subjects/${subject.slug}`}
              className={`rounded-2xl border ${c.border} ${c.bgSoft} p-5 transition hover:shadow-md`}
            >
              <div className="text-4xl">{subject.icon}</div>
              <div className="mt-3 font-semibold">{subject.name}</div>
              <div className="mt-1 text-sm text-slate-500">
                {done} / {lessonCount} dərs
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
