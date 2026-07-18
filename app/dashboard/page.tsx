"use client";

// Bilik Yolu dashboard: işıqlı tema, fənn tab-ları,
// cari dərs / səviyyə (radar) / növbəti dərslər panelləri + score halqası və öyrənmə yolu.

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { subjects } from "@/lib/content";
import { loadProgress, isLessonLocked, type ProgressState } from "@/lib/progress";
import { useAuthUser } from "@/lib/useAuthUser";
import { displayName } from "@/lib/auth";
import { projectDates } from "@/lib/dates";
import RadialProgress from "@/components/RadialProgress";
import LearningPath, { type PathNode } from "@/components/LearningPath";

export default function DashboardPage() {
  const { user, ready } = useAuthUser();
  const [state, setState] = useState<ProgressState | null>(null);
  const [activeSlug, setActiveSlug] = useState(subjects[0].slug);

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  const active = subjects.find((s) => s.slug === activeSlug)!;

  // Aktiv fənnin dərsləri düz sıra ilə + node vəziyyətləri
  const { nodes, lessons, currentLesson, scorePct } = useMemo(() => {
    const completed = state?.completedLessons ?? [];
    const lessons = active.units.flatMap((u) => u.lessons);
    const nodes: PathNode[] = lessons.map((l, i) => {
      const locked = isLessonLocked(active.slug, l.id, completed);
      const done = completed.includes(l.id);
      return {
        id: l.id,
        title: l.title,
        state: done ? "done" : locked ? "locked" : "current",
        href: `/lessons/${l.id}`,
        deadline: projectDates(i).deadlineLabel,
      };
    });
    const currentLesson = lessons.find((l) => !completed.includes(l.id)) ?? null;
    const doneCount = lessons.filter((l) => completed.includes(l.id)).length;
    const scorePct = lessons.length
      ? Math.round((doneCount / lessons.length) * 100)
      : 0;
    return { nodes, lessons, currentLesson, scorePct };
  }, [active, state]);

  if (!ready || !state) return null;

  // Radar üçün hər fənnin tamamlanma nisbəti
  const radarValues = subjects.map((s) => {
    const ls = s.units.flatMap((u) => u.lessons);
    const done = ls.filter((l) => state.completedLessons.includes(l.id)).length;
    return ls.length ? done / ls.length : 0;
  });

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Öyrənmə yolun</h1>
        <p className="text-sm text-muted">
          Salam, {displayName(user)} — davam edək
        </p>

        {/* Fənn tab-ları */}
        <div className="mt-5 flex flex-wrap gap-2">
          {subjects.map((s) => {
            const on = s.slug === activeSlug;
            return (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                className={`rounded-2xl px-4 py-2 text-sm font-extrabold uppercase tracking-wide transition ${
                  on
                    ? "bg-brand text-white btn-pop"
                    : "bg-panel text-muted hover:bg-panel-2 border-2 border-line"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>

        {/* Üst panellər */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {/* Cari dərs */}
          <div className="rounded-2xl border border-line bg-panel p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted">
              Cari dərs
            </div>
            <div className="mt-4 flex items-center gap-4">
              <RadialProgress value={scorePct} size={84} stroke={8} />
              <div>
                <div className="font-semibold text-fg">
                  {currentLesson ? currentLesson.title : "Hamısı bitdi!"}
                </div>
                <div className="text-sm text-muted">{active.name}</div>
              </div>
            </div>
            {currentLesson && (
              <Link
                href={`/lessons/${currentLesson.id}`}
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
              >
                Davam et
              </Link>
            )}
          </div>

          {/* Səviyyən — radar */}
          <div className="rounded-2xl border border-line bg-panel p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted">
              Səviyyən
            </div>
            <div className="mt-2 flex justify-center">
              <SubjectRadar values={radarValues} labels={subjects.map((s) => s.name)} />
            </div>
          </div>

          {/* Yaxınlaşan son tarixlər */}
          <div className="rounded-2xl border border-line bg-panel p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted">
              Yaxınlaşan son tarixlər
            </div>
            <ul className="mt-3 space-y-2">
              {lessons
                .map((l, i) => ({ l, i }))
                .filter(({ l }) => !state.completedLessons.includes(l.id))
                .slice(0, 4)
                .map(({ l, i }) => {
                  const d = projectDates(i);
                  return (
                    <li key={l.id} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-lg bg-panel-2 leading-none">
                        <span className="text-sm font-bold text-fg">
                          {d.deadline.getDate()}
                        </span>
                        <span className="text-[9px] text-muted">
                          {d.deadlineLabel.split(" ")[1]?.slice(0, 3)}
                        </span>
                      </span>
                      <div className="min-w-0">
                        <div className="truncate text-sm text-fg">{l.title}</div>
                        <div className="text-[11px] text-muted">
                          son tarix: {d.deadlineLabel}
                        </div>
                      </div>
                    </li>
                  );
                })}
              {lessons.every((l) => state.completedLessons.includes(l.id)) && (
                <li className="text-sm text-muted">Hamısı tamamlandı</li>
              )}
            </ul>
          </div>
        </div>

        {/* Progress + öyrənmə yolu */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <RadialProgress value={scorePct} size={110} label="nəticən" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-fg">
                {active.name} — öyrənmə yolu
              </h2>
              <p className="text-sm text-muted">
                Düyünlərə klikləyib dərsə başla. Hər dərs açıldıqca yol uzanır.
              </p>
              <Link
                href={`/subjects/${active.slug}`}
                className="mt-2 inline-block text-sm font-semibold text-brand hover:underline"
              >
                Bütün bölmələrə bax →
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <LearningPath nodes={nodes} />
          </div>
        </div>
      </main>
    </div>
  );
}

// 3 fənn üçün sadə üçbucaq radar (spider) qrafiki
function SubjectRadar({ values, labels }: { values: number[]; labels: string[] }) {
  const size = 180;
  const c = size / 2;
  const R = 62;
  const angles = [-90, 30, 150].map((d) => (d * Math.PI) / 180);

  const point = (v: number, i: number) => ({
    x: c + R * v * Math.cos(angles[i]),
    y: c + R * v * Math.sin(angles[i]),
  });
  const outer = angles.map((a) => ({
    x: c + R * Math.cos(a),
    y: c + R * Math.sin(a),
  }));

  const dataPts = values.map((v, i) => point(Math.max(0.05, v), i));
  const toPath = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";

  return (
    <svg width={size} height={size}>
      {/* şəbəkə */}
      {[0.33, 0.66, 1].map((r, i) => (
        <path
          key={i}
          d={toPath(outer.map((p) => ({ x: c + (p.x - c) * r, y: c + (p.y - c) * r })))}
          fill="none"
          stroke="#d9d5ec"
          strokeWidth="1"
        />
      ))}
      {/* səviyyə etiketləri (yuxarı ox boyunca) */}
      {[
        { r: 0.33, label: "Başlanğıc" },
        { r: 0.66, label: "Orta" },
        { r: 1, label: "Usta" },
      ].map((lvl, i) => (
        <text
          key={i}
          x={c + 3}
          y={c - R * lvl.r}
          fill="#8b88a0"
          fontSize="8"
          dominantBaseline="middle"
        >
          {lvl.label}
        </text>
      ))}
      {/* oxlar */}
      {outer.map((p, i) => (
        <line key={i} x1={c} y1={c} x2={p.x} y2={p.y} stroke="#d9d5ec" strokeWidth="1" />
      ))}
      {/* data */}
      <path d={toPath(dataPts)} fill="rgba(91,75,245,0.28)" stroke="#5b4bf5" strokeWidth="2" />
      {/* etiketlər */}
      {outer.map((p, i) => (
        <text
          key={i}
          x={c + (p.x - c) * 1.28}
          y={c + (p.y - c) * 1.28}
          fill="#6a687e"
          fontSize="9"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {labels[i].split(" ")[0]}
        </text>
      ))}
    </svg>
  );
}
