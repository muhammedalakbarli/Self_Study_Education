"use client";

// Öyrən səhifəsi: statistika zolağı + fənn tabları + öyrənmə yolu.
// (Holberton radar/qrafik və son tarixlər çıxarıldı.)

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Star, Flame, CircleCheck } from "lucide-react";
import { subjects } from "@/lib/content";
import { loadProgress, isLessonLocked, type ProgressState } from "@/lib/progress";
import { useAuthUser } from "@/lib/useAuthUser";
import { displayName } from "@/lib/auth";
import { isDailyDone } from "@/lib/daily";
import RadialProgress from "@/components/RadialProgress";
import LearningPath, { type PathNode } from "@/components/LearningPath";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";

export default function DashboardPage() {
  const { user, ready } = useAuthUser();
  const [state, setState] = useState<ProgressState | null>(null);
  const [activeSlug, setActiveSlug] = useState(subjects[0].slug);

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  const active = subjects.find((s) => s.slug === activeSlug)!;

  const { nodes, currentLesson, scorePct } = useMemo(() => {
    const completed = state?.completedLessons ?? [];
    const lessons = active.units.flatMap((u) => u.lessons);
    const nodes: PathNode[] = active.units.flatMap((u) =>
      u.lessons.map((l, li) => {
        const locked = isLessonLocked(active.slug, l.id, completed);
        const done = completed.includes(l.id);
        return {
          id: l.id,
          title: l.title,
          state: done ? "done" : locked ? "locked" : "current",
          href: `/lessons/${l.id}`,
          unitTitle: li === 0 ? u.title : undefined,
        };
      }),
    );
    const currentLesson = lessons.find((l) => !completed.includes(l.id)) ?? null;
    const doneCount = lessons.filter((l) => completed.includes(l.id)).length;
    const scorePct = lessons.length
      ? Math.round((doneCount / lessons.length) * 100)
      : 0;
    return { nodes, currentLesson, scorePct };
  }, [active, state]);

  if (!ready || !state) return <PageSkeleton />;

  const totalCompleted = state.completedLessons.length;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Salamlama */}
        <div className="flex items-center gap-3">
          <Mascot size={52} />
          <div>
            <h1 className="text-2xl font-bold text-fg">Öyrən</h1>
            <p className="text-sm text-muted">
              Salam, {displayName(user)} — davam edək
            </p>
          </div>
        </div>

        {/* Statistika zolağı */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <StatChip Icon={Star} value={state.totalXp} label="XP" color="text-accent" />
          <StatChip
            Icon={Flame}
            value={state.streakDays}
            label="gün seriya"
            color="text-orange-500"
          />
          <StatChip
            Icon={CircleCheck}
            value={totalCompleted}
            label="tamamlandı"
            color="text-brand"
          />
        </div>

        {/* Gündəlik challenge banneri */}
        {!isDailyDone(user?.user_metadata) && (
          <Link
            href="/praktika"
            className="mt-4 flex items-center justify-between gap-3 rounded-2xl border-2 border-brand/30 bg-brand/10 px-5 py-3.5 transition hover:bg-brand/15"
          >
            <span className="font-bold text-brand">
              Gündəlik challenge səni gözləyir — 5 tapşırıq
            </span>
            <span className="text-sm font-extrabold uppercase tracking-wide text-brand">
              Başla →
            </span>
          </Link>
        )}

        {/* Fənn tab-ları */}
        <div className="mt-6 flex flex-wrap gap-2">
          {subjects.map((s) => {
            const on = s.slug === activeSlug;
            return (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                className={`rounded-2xl px-4 py-2 text-sm font-extrabold uppercase tracking-wide transition ${
                  on
                    ? "bg-brand text-white btn-pop"
                    : "border-2 border-line bg-panel text-muted hover:bg-panel-2"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>

        {/* Öyrənmə yolu */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <RadialProgress value={scorePct} size={72} stroke={7} />
              <div>
                <h2 className="text-lg font-bold text-fg">{active.name}</h2>
                <p className="text-sm text-muted">
                  {currentLesson
                    ? `Növbəti: ${currentLesson.title}`
                    : "Bütün dərslər bitdi!"}
                </p>
              </div>
            </div>
            {currentLesson && (
              <Link
                href={`/lessons/${currentLesson.id}`}
                className="rounded-2xl bg-brand px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
              >
                Davam et
              </Link>
            )}
          </div>

          <div className="mt-6">
            <LearningPath nodes={nodes} />
          </div>
        </div>
      </main>
    </div>
  );
}

function StatChip({
  Icon,
  value,
  label,
  color,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-panel px-4 py-3">
      <Icon size={22} className={color} />
      <div className="leading-tight">
        <div className="text-lg font-extrabold text-fg">{value}</div>
        <div className="text-[11px] text-muted">{label}</div>
      </div>
    </div>
  );
}
