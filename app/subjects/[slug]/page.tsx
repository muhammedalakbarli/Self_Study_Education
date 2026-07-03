"use client";

// Fənn səhifəsi (dark Holberton stili): hər bölmə üçün öyrənmə yolu (node path).

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSubject } from "@/lib/content";
import { loadProgress, isLessonLocked, type ProgressState } from "@/lib/progress";
import { useAuthUser } from "@/lib/useAuthUser";
import { projectDates } from "@/lib/dates";
import LearningPath, { type PathNode } from "@/components/LearningPath";

export default function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { user, ready } = useAuthUser();
  const [state, setState] = useState<ProgressState | null>(null);

  const subject = getSubject(slug);

  useEffect(() => {
    if (user) setState(loadProgress(user.id));
  }, [user]);

  if (!subject) notFound();
  if (!ready || !state) return null;

  const completed = state.completedLessons;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-4xl px-4 py-6">
        <Link href="/dashboard" className="text-sm text-muted hover:text-white">
          ← Öyrənmə yolun
        </Link>

        <div className="mt-4 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
            {subject.icon}
          </span>
          <div>
            <h1 className="text-2xl font-bold text-white">{subject.name}</h1>
            <p className="text-sm text-muted">{subject.grade}-ci sinif</p>
          </div>
        </div>

        {/* Bütün bölmələrin layihələri tək, birləşmiş yolda (aşağıdan yuxarıya) */}
        {(() => {
          const allLessons = subject.units.flatMap((u) => u.lessons);
          const nodes: PathNode[] = allLessons.map((l, i) => {
            const locked = isLessonLocked(slug, l.id, completed);
            const done = completed.includes(l.id);
            return {
              id: l.id,
              title: l.title,
              state: done ? "done" : locked ? "locked" : "current",
              href: `/lessons/${l.id}`,
              deadline: projectDates(i).deadlineLabel,
            };
          });

          return (
            <section className="mt-6 rounded-2xl border border-line bg-panel p-5">
              <h2 className="text-lg font-bold text-white">Öyrənmə yolu</h2>
              <p className="text-sm text-muted">
                İlk layihə ən altdadır — yuxarı qalxdıqca yeni mövzular açılır.
              </p>

              {/* Bölmələr siyahısı (orientasiya üçün) */}
              <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                {subject.units.map((u, i) => (
                  <li
                    key={u.id}
                    className="rounded-full bg-panel-2 px-3 py-1 text-slate-300"
                  >
                    {i + 1}. {u.title}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <LearningPath nodes={nodes} />
              </div>
            </section>
          );
        })()}
      </main>
    </div>
  );
}
