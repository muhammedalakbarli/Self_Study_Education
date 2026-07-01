"use client";

// Dərs səhifəsi: qısa izah, sonra tapşırıq axını (LessonRunner).

import { use, useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";
import Link from "next/link";
import { getLesson } from "@/lib/content";
import { loadProgress } from "@/lib/progress";
import LessonRunner from "@/components/lesson/LessonRunner";

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

  if (started) {
    return <LessonRunner slug={subject.slug} lesson={lesson} />;
  }

  // İzah ekranı
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8">
      <Link
        href={`/subjects/${subject.slug}`}
        className="text-sm text-slate-500 hover:text-slate-700"
      >
        ← {subject.name}
      </Link>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <div className="text-sm font-medium text-sky-600">{subject.name}</div>
        <h1 className="mt-1 text-2xl font-bold">{lesson.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">{lesson.intro}</p>

        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 w-full rounded-xl bg-sky-500 px-5 py-3 text-lg font-semibold text-white hover:bg-sky-600"
        >
          Tapşırıqlara başla ({lesson.tasks.length})
        </button>
      </div>
    </main>
  );
}
