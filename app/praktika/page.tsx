"use client";

// Praktika: tamamlanmış dərsləri təkrar həll et (məşq). Boşdursa öyrənməyə dəvət.

import { useEffect, useState } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { subjects } from "@/lib/content";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";

export default function PracticePage() {
  const { user, ready } = useAuthUser();
  const [state, setState] = useState<ProgressState | null>(null);

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  if (!ready || !state) return <PageSkeleton />;

  // Tamamlanmış dərslər (fənn adı ilə)
  const done = subjects
    .flatMap((s) => s.units.flatMap((u) => u.lessons.map((l) => ({ l, subject: s.name }))))
    .filter(({ l }) => state.completedLessons.includes(l.id));

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Praktika et</h1>
        <p className="mt-1 text-sm text-muted">
          Tamamladığın dərsləri təkrar həll edərək möhkəmləndir.
        </p>

        {done.length === 0 ? (
          <div className="mt-10 flex flex-col items-center rounded-3xl border border-line bg-panel p-10 text-center">
            <Mascot size={100} />
            <h2 className="mt-4 text-xl font-extrabold text-fg">Hələ məşq yoxdur</h2>
            <p className="mt-1 max-w-xs text-muted">
              Əvvəlcə bir neçə dərs bitir — sonra burada onları təkrar edə bilərsən.
            </p>
            <Link
              href="/dashboard"
              className="mt-6 rounded-2xl bg-brand px-6 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
            >
              Öyrənməyə başla
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {done.map(({ l, subject }) => (
              <Link
                key={l.id}
                href={`/lessons/${l.id}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-panel p-4 transition hover:border-brand"
              >
                <div className="min-w-0">
                  <div className="truncate font-bold text-fg">{l.title}</div>
                  <div className="text-xs text-muted">{subject}</div>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <RotateCcw size={18} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
