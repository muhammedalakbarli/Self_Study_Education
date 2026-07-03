"use client";

// Layihənin uçdan-uca axını (dark Holberton stili):
// 15 əsas tapşırıq → bonus təklifi → 5 bonus → nəticə.
// Bonus tapşırıqlarda əlavə XP qazanılır. Sonda qazanılan XP progress-ə yazılır.

import { useState } from "react";
import Link from "next/link";
import type { Lesson, Task } from "@/lib/types";
import { gradeTask, type UserAnswer } from "@/lib/grading";
import { completeLesson } from "@/lib/progress";
import TaskInput from "@/components/tasks/TaskInput";
import TaskFigure from "@/components/TaskFigure";

interface Props {
  slug: string;
  lesson: Lesson;
  userId: string;
}

type Phase = "main" | "bonusPrompt" | "bonus" | "done";

export default function LessonRunner({ slug, lesson, userId }: Props) {
  const mainTasks = lesson.tasks;
  const bonusTasks = lesson.bonusTasks ?? [];

  const [phase, setPhase] = useState<Phase>("main");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);
  const [checked, setChecked] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const inBonus = phase === "bonus";
  const list: Task[] = inBonus ? bonusTasks : mainTasks;
  const task = list[index];
  const total = list.length;
  const progressPct = total ? Math.round((index / total) * 100) : 0;

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

  function advance() {
    setAnswer(null);
    setChecked(false);
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      return;
    }
    // Cari siyahı bitdi
    if (!inBonus && bonusTasks.length > 0) {
      setPhase("bonusPrompt");
      setIndex(0);
    } else {
      completeLesson(userId, lesson.id, earnedXp);
      setPhase("done");
    }
  }

  function startBonus() {
    setPhase("bonus");
    setIndex(0);
    setAnswer(null);
    setChecked(false);
  }

  function finishWithoutBonus() {
    completeLesson(userId, lesson.id, earnedXp);
    setPhase("done");
  }

  // ── Bonus təklifi ──
  if (phase === "bonusPrompt") {
    return (
      <div className="mx-auto max-w-xl py-12 text-center">
        <h1 className="text-2xl font-bold text-white">Əsas hissə bitdi!</h1>
        <p className="mt-2 text-muted">
          İndiyə qədər <b className="text-brand-soft">+{earnedXp} XP</b> qazandın.
        </p>
        <p className="mt-4 text-slate-300">
          {bonusTasks.length} bonus sual var — əlavə XP qazanmaq istəyirsən?
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={startBonus}
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Bonusa başla
          </button>
          <button
            onClick={finishWithoutBonus}
            className="rounded-lg border border-line px-5 py-3 font-medium text-slate-200 hover:border-slate-500"
          >
            Bitir
          </button>
        </div>
      </div>
    );
  }

  // ── Nəticə ──
  if (phase === "done") {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Layihə tamamlandı!</h1>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand/15 px-5 py-2 text-lg font-semibold text-brand-soft">
          +{earnedXp} XP
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href={`/subjects/${slug}`}
            className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
          >
            Yola qayıt
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border border-line px-5 py-3 font-medium text-slate-200 hover:border-slate-500"
          >
            Ana səhifə
          </Link>
        </div>
      </div>
    );
  }

  // ── Tapşırıq (main və ya bonus) ──
  return (
    <div>
      <div className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-panel-2">
        <div
          className={`h-full rounded-full transition-all ${inBonus ? "bg-amber-400" : "bg-brand"}`}
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-sm font-medium text-muted">
        <span>
          {inBonus ? "Bonus" : "Tapşırıq"} {index + 1} / {total}
        </span>
        {inBonus && (
          <span className="rounded-full bg-amber-400/15 px-2.5 py-0.5 text-amber-400">
            Bonus
          </span>
        )}
      </div>

      <h2 className="mt-2 text-xl font-semibold text-white">{task.prompt}</h2>

      <TaskFigure figure={task.figure} />

      <div className="mt-6">
        <TaskInput
          task={task}
          value={answer}
          onChange={(v) => setAnswer(v)}
          disabled={checked}
        />
      </div>

      {checked && (
        <div
          className={`mt-5 rounded-xl px-4 py-3 font-medium ${
            lastCorrect
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-brand/15 text-brand-soft"
          }`}
        >
          {lastCorrect ? "Doğru! Afərin." : "Səhv. Növbəti dəfə alınacaq!"}
        </div>
      )}

      <div className="mt-6">
        {!checked ? (
          <button
            type="button"
            onClick={handleCheck}
            disabled={answer === null || answer === ""}
            className="w-full rounded-lg bg-brand px-5 py-3 text-lg font-semibold text-white
              hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            Yoxla
          </button>
        ) : (
          <button
            type="button"
            onClick={advance}
            className="w-full rounded-lg bg-emerald-500 px-5 py-3 text-lg font-semibold text-white hover:bg-emerald-600"
          >
            {index + 1 < total ? "Növbəti" : inBonus ? "Bitir" : "Davam et"}
          </button>
        )}
      </div>
    </div>
  );
}
