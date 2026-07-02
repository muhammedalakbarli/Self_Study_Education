"use client";

// Fənn səhifəsi (dark Holberton stili): hər bölmə üçün öyrənmə yolu (node path).

import { use, useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";
import Link from "next/link";
import { getSubject, orderedLessonIds } from "@/lib/content";
import { loadProgress, isLessonLocked, type ProgressState } from "@/lib/progress";
import { projectDates } from "@/lib/dates";
import AppHeader from "@/components/AppHeader";
import LearningPath, { type PathNode } from "@/components/LearningPath";

export default function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [state, setState] = useState<ProgressState | null>(null);

  const subject = getSubject(slug);

  useEffect(() => {
    const p = loadProgress();
    if (!p.name) {
      router.replace("/");
      return;
    }
    setState(p);
  }, [router]);

  if (!subject) notFound();
  if (!state) return null;

  const completed = state.completedLessons;

  return (
    <div className="min-h-screen bg-ink">
      <AppHeader />

      <main className="mx-auto max-w-4xl px-4 py-6">
        <Link href="/dashboard" className="text-sm text-muted hover:text-white">
          ← Öyrənmə yolun
        </Link>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-4xl">{subject.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-white">{subject.name}</h1>
            <p className="text-sm text-muted">{subject.grade}-ci sinif</p>
          </div>
        </div>

        {subject.units.map((unit) => {
          const order = orderedLessonIds(slug);
          const nodes: PathNode[] = unit.lessons.map((l) => {
            const locked = isLessonLocked(slug, l.id, completed);
            const done = completed.includes(l.id);
            return {
              id: l.id,
              title: l.title,
              state: done ? "done" : locked ? "locked" : "current",
              href: `/lessons/${l.id}`,
              deadline: projectDates(order.indexOf(l.id)).deadlineLabel,
            };
          });

          return (
            <section
              key={unit.id}
              className="mt-6 rounded-2xl border border-line bg-panel p-5"
            >
              <h2 className="text-lg font-bold text-white">{unit.title}</h2>
              <p className="text-sm text-muted">{unit.description}</p>
              <div className="mt-6">
                <LearningPath nodes={nodes} />
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
