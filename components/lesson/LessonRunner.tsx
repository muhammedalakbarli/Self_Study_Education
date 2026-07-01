"use client";

// Dərsin uçdan-uca axını: izah → tapşırıqlar → nəticə.
// Hər tapşırıqda: cavab seç → "Yoxla" → geri-bildirim → "Növbəti".
// Sonda qazanılan XP progress-ə yazılır (completeLesson).

import { useState } from "react";
import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { gradeTask, type UserAnswer } from "@/lib/grading";
import { completeLesson } from "@/lib/progress";
import TaskInput from "@/components/tasks/TaskInput";

interface Props {
  slug: string;
  lesson: Lesson;
}

export default function LessonRunner({ slug, lesson }: Props) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);
  const [checked, setChecked] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const task = lesson.tasks[index];
  const total = lesson.tasks.length;
  const progressPct = Math.round(((index + (finished ? 1 : 0)) / total) * 100);

  function handleCheck() {
    if (answer === null || answer === "") return;
    const result = gradeTask(task, answer);
    setChecked(true);
    setLastCorrect(result.correct);
    if (result.correct) {
      setEarnedXp((x) => x + result.earnedXp);
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      setAnswer(null);
      setChecked(false);
    } else {
      completeLesson(lesson.id, earnedXp);
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <div className="text-6xl">🎉</div>
        <h1 className="mt-4 text-2xl font-bold">Dərs tamamlandı!</h1>
        <p className="mt-2 text-slate-600">
          {total} tapşırıqdan {correctCount}-ni düzgün həll etdin.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-lg font-semibold text-amber-700">
          ⭐ +{earnedXp} XP
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href={`/subjects/${slug}`}
            className="rounded-xl bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-600"
          >
            Bölməyə qayıt
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border-2 border-slate-200 px-5 py-3 font-medium hover:border-slate-300"
          >
            Ana səhifə
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      {/* İrəliləyiş çubuğu */}
      <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="text-sm font-medium text-slate-500">
        Tapşırıq {index + 1} / {total}
      </div>
      <h2 className="mt-2 text-xl font-semibold">{task.prompt}</h2>

      <div className="mt-6">
        <TaskInput
          task={task}
          value={answer}
          onChange={(v) => setAnswer(v)}
          disabled={checked}
        />
      </div>

      {/* Geri-bildirim */}
      {checked && (
        <div
          className={`mt-5 rounded-xl px-4 py-3 font-medium ${
            lastCorrect
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          {lastCorrect ? "✅ Doğru! Afərin." : "❌ Səhv. Növbəti dəfə alınacaq!"}
        </div>
      )}

      <div className="mt-6">
        {!checked ? (
          <button
            type="button"
            onClick={handleCheck}
            disabled={answer === null || answer === ""}
            className="w-full rounded-xl bg-sky-500 px-5 py-3 text-lg font-semibold text-white
              hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Yoxla
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-lg font-semibold text-white hover:bg-emerald-600"
          >
            {index + 1 < total ? "Növbəti" : "Bitir"}
          </button>
        )}
      </div>
    </div>
  );
}
