"use client";

// Layihə (project) səhifəsi:
// şəkil → başlıq → başlama/son tarix → ətraflı qaydalar → tapşırıqlar (15 + 5 bonus).

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, orderedLessonIds } from "@/lib/content";
import { useAuthUser } from "@/lib/useAuthUser";
import LessonRunner from "@/components/lesson/LessonRunner";
import LessonVisual from "@/components/LessonVisual";
import { PageSkeleton } from "@/components/Skeleton";

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user, ready } = useAuthUser();
  const [started, setStarted] = useState(false);

  const found = getLesson(id);

  if (!found) notFound();
  if (!ready || !user) return <PageSkeleton />;

  const { subject, lesson } = found;
  const index = orderedLessonIds(subject.slug).indexOf(lesson.id);
  const bonusCount = lesson.bonusTasks?.length ?? 0;

  if (started) {
    return (
      <div className="min-h-screen bg-ink">
        <main className="mx-auto w-full max-w-xl px-4 py-8">
          <LessonRunner slug={subject.slug} lesson={lesson} userId={user.id} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto w-full max-w-2xl px-4 py-8">
        <Link
          href={`/subjects/${subject.slug}`}
          className="text-sm text-muted hover:text-fg"
        >
          ← {subject.name}
        </Link>

        <div className="mt-4 rounded-2xl border border-line bg-panel p-6">
          {/* Başlıq */}
          <div className="text-sm font-semibold text-brand">
            {subject.name} · Dərs {index + 1}
          </div>
          <h1 className="mt-1 text-2xl font-bold text-fg">{lesson.title}</h1>
          <p className="mt-2 text-muted">{lesson.intro}</p>

          {/* Şəkil (qaydalardan əvvəl) */}
          <LessonVisual visual={lesson.visual} />

          {/* Qaydalar (şəkil altında ətraflı) */}
          {lesson.sections && lesson.sections.length > 0 && (
            <div className="mt-6 space-y-4">
              <h2 className="text-lg font-bold text-fg">Qaydalar</h2>
              {lesson.sections.map((s, i) => (
                <div key={i}>
                  {s.heading && (
                    <h3 className="font-semibold text-brand-soft">{s.heading}</h3>
                  )}
                  <p className="mt-1 leading-relaxed text-fg">{s.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tapşırıqlar */}
          <div className="mt-6 rounded-xl bg-panel-2 px-4 py-3 text-sm text-muted">
            {lesson.tasks.length} tapşırıq
            {bonusCount > 0 && (
              <>
                {" "}
                + <span className="font-semibold text-brand-soft">{bonusCount} bonus</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setStarted(true)}
            className="mt-4 w-full rounded-2xl bg-brand px-5 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
          >
            Tapşırıqlara başla
          </button>
        </div>
      </main>
    </div>
  );
}
