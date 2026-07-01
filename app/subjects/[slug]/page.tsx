"use client";

// Fənn səhifəsi: bölmələr və dərslərin siyahısı (skill tree).
// Hər dərs: tamamlanmış / açıq / kiliddə statusu ilə göstərilir.

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSubject } from "@/lib/content";
import { loadProgress, isLessonLocked, type ProgressState } from "@/lib/progress";
import { colorClasses } from "@/lib/ui";
import { notFound } from "next/navigation";

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

  const c = colorClasses(subject.color);
  const completed = state.completedLessons;

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
      <Link href="/dashboard" className="text-sm text-slate-500 hover:text-slate-700">
        ← Ana səhifə
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-4xl">{subject.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{subject.name}</h1>
          <p className="text-slate-500">{subject.grade}-ci sinif</p>
        </div>
      </div>

      {subject.units.map((unit) => (
        <section key={unit.id} className="mt-8">
          <h2 className="text-lg font-semibold text-slate-700">{unit.title}</h2>
          <p className="text-sm text-slate-500">{unit.description}</p>

          <div className="mt-4 grid gap-3">
            {unit.lessons.map((lesson, i) => {
              const isDone = completed.includes(lesson.id);
              const locked = isLessonLocked(slug, lesson.id, completed);

              const inner = (
                <div
                  className={`flex items-center gap-4 rounded-xl border p-4 ${
                    locked
                      ? "border-slate-200 bg-slate-50 opacity-60"
                      : `${c.border} bg-white hover:shadow-md`
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-white ${
                      isDone ? "bg-emerald-500" : locked ? "bg-slate-300" : c.bg
                    }`}
                  >
                    {isDone ? "✓" : locked ? "🔒" : i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm text-slate-500">
                      {lesson.tasks.length} tapşırıq
                    </div>
                  </div>
                  {!locked && (
                    <span className={`text-sm font-medium ${c.text}`}>
                      {isDone ? "Təkrar et" : "Başla"} →
                    </span>
                  )}
                </div>
              );

              return locked ? (
                <div key={lesson.id}>{inner}</div>
              ) : (
                <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
