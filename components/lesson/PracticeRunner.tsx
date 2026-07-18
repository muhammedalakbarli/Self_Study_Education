"use client";

// Praktika runner — istənilən tapşırıq siyahısını həll etdirir (dərsi tamamlamır).
// review: adi (Yoxla → Növbəti) · timed: sürət raundu (60 san, tıkla-keç).

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Task, MultipleChoiceTask } from "@/lib/types";
import { gradeTask, type UserAnswer } from "@/lib/grading";
import TaskInput from "@/components/tasks/TaskInput";
import TaskFigure from "@/components/TaskFigure";
import Mascot from "@/components/Mascot";

const shuffle = <T,>(a: T[]): T[] => [...a].sort(() => Math.random() - 0.5);

interface Props {
  tasks: Task[];
  title: string;
  timed?: boolean;
  onExit: () => void;
  onCorrect?: (taskId: string) => void;
  onFinish?: () => void; // dəst bitəndə (nəticə ekranı) çağırılır
}

export default function PracticeRunner(props: Props) {
  return props.timed ? <SpeedRunner {...props} /> : <ReviewRunner {...props} />;
}

// ── Adi praktika ──────────────────────────────────────────────
function ReviewRunner({ tasks, title, onExit, onCorrect, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);
  const [checked, setChecked] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const task = tasks[index];
  const total = tasks.length;

  function check() {
    if (answer === null || answer === "") return;
    const r = gradeTask(task, answer);
    setChecked(true);
    setLastCorrect(r.correct);
    if (r.correct) {
      setCorrect((c) => c + 1);
      onCorrect?.(task.id);
    }
  }

  function next() {
    setAnswer(null);
    setChecked(false);
    if (index + 1 < total) setIndex((i) => i + 1);
    else {
      setDone(true);
      onFinish?.();
    }
  }

  function restart() {
    setIndex(0);
    setCorrect(0);
    setAnswer(null);
    setChecked(false);
    setDone(false);
  }

  if (done)
    return <Result correct={correct} total={total} onExit={onExit} onRestart={restart} />;

  return (
    <div>
      <Header progress={(index / total) * 100} title={title} onExit={onExit} />

      <div className="mt-4 text-sm font-medium text-muted">
        Sual {index + 1} / {total}
      </div>
      <h2 className="mt-2 text-xl font-semibold text-fg">{task.prompt}</h2>
      <TaskFigure figure={task.figure} />

      <div className="mt-6">
        <TaskInput task={task} value={answer} onChange={setAnswer} disabled={checked} />
      </div>

      {checked && (
        <div
          className={`mt-5 flex items-center gap-3 rounded-xl px-4 py-3 font-medium ${
            lastCorrect ? "bg-emerald-500/15 text-emerald-600" : "bg-brand/15 text-brand-soft"
          }`}
        >
          <Mascot size={40} mood={lastCorrect ? "celebrate" : "sad"} />
          <span>{lastCorrect ? "Doğru! Afərin." : "Səhv. Növbəti dəfə alınacaq!"}</span>
        </div>
      )}

      <div className="mt-6">
        {!checked ? (
          <button
            type="button"
            onClick={check}
            disabled={answer === null || answer === ""}
            className="w-full rounded-2xl bg-brand px-5 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            Yoxla
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className="w-full rounded-2xl bg-emerald-500 px-5 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop btn-pop-green hover:bg-emerald-600"
          >
            {index + 1 < total ? "Növbəti" : "Bitir"}
          </button>
        )}
      </div>
    </div>
  );
}

// ── Sürət raundu ──────────────────────────────────────────────
function SpeedRunner({ tasks, title, onExit, onFinish }: Props) {
  const DURATION = 60;
  const mc = tasks.filter((t): t is MultipleChoiceTask => t.type === "multiple_choice");

  const [time, setTime] = useState(DURATION);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [order, setOrder] = useState<MultipleChoiceTask[]>(() => shuffle(mc));
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (time <= 0) {
      setDone(true);
      onFinish?.();
      return;
    }
    const t = setTimeout(() => setTime((x) => x - 1), 1000);
    return () => clearTimeout(t);
  }, [time, done]);

  const task = order[i];

  function pick(idx: number) {
    if (picked !== null || done) return;
    const r = gradeTask(task, idx);
    setPicked(idx);
    if (r.correct) setCorrect((c) => c + 1);
    setAnswered((a) => a + 1);
    setTimeout(() => {
      setPicked(null);
      if (i + 1 < order.length) setI(i + 1);
      else {
        setOrder(shuffle(mc));
        setI(0);
      }
    }, 450);
  }

  function restart() {
    setTime(DURATION);
    setCorrect(0);
    setAnswered(0);
    setOrder(shuffle(mc));
    setI(0);
    setPicked(null);
    setDone(false);
  }

  if (done)
    return (
      <Result correct={correct} total={answered} timed onExit={onExit} onRestart={restart} />
    );

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onExit}
          aria-label="Çıx"
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-panel-2 hover:text-fg"
        >
          <X size={24} />
        </button>
        <div className="flex-1 text-center text-2xl font-extrabold text-fg">{time}s</div>
        <div className="w-9 text-right text-sm font-bold text-brand">{correct}</div>
      </div>

      <h2 className="mt-8 text-center text-xl font-semibold text-fg">{task.prompt}</h2>
      <div className="mt-6 grid gap-3">
        {task.options.map((opt, idx) => {
          const isPicked = picked === idx;
          const correctIdx = task.correctIndex;
          let tone = "border-line bg-panel text-fg hover:border-brand";
          if (picked !== null) {
            if (idx === correctIdx) tone = "border-emerald-500 bg-emerald-500/10 text-emerald-700";
            else if (isPicked) tone = "border-brand bg-brand/10 text-brand-soft";
            else tone = "border-line bg-panel text-muted";
          }
          return (
            <button
              key={idx}
              type="button"
              onClick={() => pick(idx)}
              className={`rounded-2xl border-2 px-4 py-3.5 text-left text-lg font-semibold transition ${tone}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Ortaq başlıq (X + progress) ──
function Header({
  progress,
  title,
  onExit,
}: {
  progress: number;
  title: string;
  onExit: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onExit}
        aria-label="Çıx"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-panel-2 hover:text-fg"
      >
        <X size={24} />
      </button>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-panel-2">
        <div
          className="h-full rounded-full bg-brand transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// ── Nəticə ──
function Result({
  correct,
  total,
  timed,
  onExit,
  onRestart,
}: {
  correct: number;
  total: number;
  timed?: boolean;
  onExit: () => void;
  onRestart: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl py-12 text-center">
      <div className="flex justify-center">
        <Mascot size={110} mood="celebrate" />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-fg">
        {timed ? "Vaxt bitdi!" : "Praktika bitdi!"}
      </h1>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand/15 px-5 py-2 text-lg font-semibold text-brand-soft">
        {correct} / {total} düzgün
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-2xl bg-brand px-5 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
        >
          Yenidən
        </button>
        <button
          type="button"
          onClick={onExit}
          className="rounded-2xl border-2 border-line px-5 py-3 font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
        >
          Praktikaya qayıt
        </button>
      </div>
    </div>
  );
}
