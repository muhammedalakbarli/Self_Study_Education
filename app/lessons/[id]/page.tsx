"use client";

// Layihə (project) səhifəsi — holberton3 üslubu:
// şəkil → başlıq → başlama/son tarix → ətraflı qaydalar → tapşırıqlar (15 + 5 bonus).

import { use, useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, orderedLessonIds } from "@/lib/content";
import { loadProgress } from "@/lib/progress";
import { projectDates } from "@/lib/dates";
import LessonRunner from "@/components/lesson/LessonRunner";
import LessonVisual from "@/components/LessonVisual";

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);

  const found = getLesson(id);

  useEffect(() => {
    if (!loadProgress().name) {
      router.replace("/");
      return;
    }
    setReady(true);
  }, [router]);

  if (!found) notFound();
  if (!ready) return null;

  const { subject, lesson } = found;
  const index = orderedLessonIds(subject.slug).indexOf(lesson.id);
  const dates = projectDates(Math.max(0, index));
  const bonusCount = lesson.bonusTasks?.length ?? 0;

  if (started) {
    return (
      <div className="min-h-screen bg-ink">
        <main className="mx-auto w-full max-w-xl px-4 py-8">
          <LessonRunner slug={subject.slug} lesson={lesson} />
        </main>
      </div>
    );
  }

  const statusColor =
    dates.status === "aktiv"
      ? "text-emerald-400"
      : dates.status === "gələcək"
        ? "text-sky-400"
        : "text-orange-400";

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto w-full max-w-2xl px-4 py-8">
        <Link
          href={`/subjects/${subject.slug}`}
          className="text-sm text-muted hover:text-white"
        >
          ← {subject.name}
        </Link>

        <div className="mt-4 rounded-2xl border border-line bg-panel p-6">
          {/* Başlıq */}
          <div className="text-sm font-semibold text-brand">
            {subject.name} · Layihə {index + 1}
          </div>
          <h1 className="mt-1 text-2xl font-bold text-white">{lesson.title}</h1>
          <p className="mt-2 text-slate-300">{lesson.intro}</p>

          {/* Şəkil (holberton3: qaydalardan əvvəl) */}
          <LessonVisual visual={lesson.visual} />

          {/* Başlama / son tarix */}
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-lg bg-panel-2 px-3 py-1.5 text-slate-300">
              Başlama: <b className="text-white">{dates.startLabel}</b>
            </span>
            <span className="rounded-lg bg-panel-2 px-3 py-1.5 text-slate-300">
              Son tarix: <b className="text-white">{dates.deadlineLabel}</b>
            </span>
            <span className={`rounded-lg bg-panel-2 px-3 py-1.5 font-medium ${statusColor}`}>
              {dates.status === "aktiv"
                ? "Aktiv"
                : dates.status === "gələcək"
                  ? "Gələcək"
                  : "Vaxtı keçib"}
            </span>
          </div>

          {/* Qaydalar (holberton3: şəkil altında ətraflı) */}
          {lesson.sections && lesson.sections.length > 0 && (
            <div className="mt-6 space-y-4">
              <h2 className="text-lg font-bold text-white">Qaydalar</h2>
              {lesson.sections.map((s, i) => (
                <div key={i}>
                  {s.heading && (
                    <h3 className="font-semibold text-brand-soft">{s.heading}</h3>
                  )}
                  <p className="mt-1 leading-relaxed text-slate-300">{s.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tapşırıqlar */}
          <div className="mt-6 rounded-xl bg-panel-2 px-4 py-3 text-sm text-slate-300">
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
            className="mt-4 w-full rounded-lg bg-brand px-5 py-3 text-lg font-semibold text-white hover:bg-brand-dark"
          >
            Layihəyə başla
          </button>
        </div>
      </main>
    </div>
  );
}
