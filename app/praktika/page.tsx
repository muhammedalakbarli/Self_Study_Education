"use client";

// Praktika Mərkəzi: Səhvlər · Qarışıq · Sürət raundu · Bölmə üzrə.
// İstənilən tapşırıq dəstini PracticeRunner ilə həll etdirir (dərsi tamamlamır).

import { useEffect, useMemo, useState } from "react";
import { AlertCircle, Shuffle, Timer, ChevronRight, Check } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { subjects, getTaskById, getAllTasks } from "@/lib/content";
import { loadMistakes, removeMistake } from "@/lib/mistakes";
import { isDailyDone, markDailyDone } from "@/lib/daily";
import type { Task } from "@/lib/types";
import { PageSkeleton } from "@/components/Skeleton";
import PracticeRunner from "@/components/lesson/PracticeRunner";
import Mascot from "@/components/Mascot";

const shuffle = <T,>(a: T[]): T[] => [...a].sort(() => Math.random() - 0.5);
const sample = <T,>(a: T[], n: number): T[] => shuffle(a).slice(0, n);

type Session = { tasks: Task[]; title: string; timed?: boolean; daily?: boolean };

export default function PracticePage() {
  const { user, ready } = useAuthUser();
  const [state, setState] = useState<ProgressState | null>(null);
  const [mistakes, setMistakes] = useState<string[]>([]);
  const [activeSlug, setActiveSlug] = useState(subjects[0].slug);
  const [session, setSession] = useState<Session | null>(null);
  const [dailyDone, setDailyDone] = useState(false);

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);
  useEffect(() => {
    loadMistakes().then(setMistakes);
  }, []);
  useEffect(() => {
    if (user) setDailyDone(isDailyDone(user.user_metadata));
  }, [user]);

  const completedTasks = useMemo(() => {
    const done = state?.completedLessons ?? [];
    return subjects.flatMap((s) =>
      s.units.flatMap((u) =>
        u.lessons
          .filter((l) => done.includes(l.id))
          .flatMap((l) => [...l.tasks, ...(l.bonusTasks ?? [])]),
      ),
    );
  }, [state]);

  const mistakeTasks = useMemo(
    () => mistakes.map(getTaskById).filter((t): t is Task => !!t),
    [mistakes],
  );

  if (!ready || !state) return <PageSkeleton />;

  if (session) {
    return (
      <div className="min-h-screen bg-ink">
        <main className="mx-auto w-full max-w-xl px-4 py-8">
          <PracticeRunner
            tasks={session.tasks}
            title={session.title}
            timed={session.timed}
            onExit={() => {
              setSession(null);
              loadMistakes().then(setMistakes);
            }}
            onCorrect={(id) => removeMistake(id)}
            onFinish={
              session.daily
                ? () => {
                    markDailyDone();
                    setDailyDone(true);
                  }
                : undefined
            }
          />
        </main>
      </div>
    );
  }

  const active = subjects.find((s) => s.slug === activeSlug)!;
  const speedPool = completedTasks.filter((t) => t.type === "multiple_choice");
  const dailyPool = completedTasks.length >= 5 ? completedTasks : getAllTasks();

  function startDaily() {
    setSession({ tasks: sample(dailyPool, 5), title: "Gündəlik challenge", daily: true });
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Praktika et</h1>
        <p className="mt-1 text-sm text-muted">
          Biliyini möhkəmləndir — səhvlərini düzəlt, təkrar et, yarış.
        </p>

        {/* Gündəlik challenge */}
        <div className="mt-6 flex items-center gap-4 rounded-3xl bg-brand p-5 text-white">
          <Mascot size={64} mood={dailyDone ? "celebrate" : "happy"} />
          <div className="flex-1">
            <div className="text-lg font-extrabold">Gündəlik challenge</div>
            <div className="text-sm text-white/85">
              {dailyDone
                ? "Bu gün tamamlandı — sabah yenə!"
                : "5 tapşırıq həll et, formada qal."}
            </div>
          </div>
          {dailyDone ? (
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
              <Check size={24} strokeWidth={3} />
            </span>
          ) : (
            <button
              type="button"
              onClick={startDaily}
              className="rounded-2xl bg-white px-5 py-2.5 font-extrabold uppercase tracking-wide text-brand btn-pop [--pop:#c9c2f5] hover:bg-white/90"
            >
              Başla
            </button>
          )}
        </div>

        {/* Rejim kartları */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ModeCard
            Icon={AlertCircle}
            tint="text-orange-500"
            title="Səhvlər üzərində iş"
            desc={
              mistakeTasks.length > 0
                ? `${mistakeTasks.length} səhv tapşırıq səni gözləyir`
                : "Səhvin yoxdur — əla!"
            }
            disabled={mistakeTasks.length === 0}
            onClick={() =>
              setSession({ tasks: shuffle(mistakeTasks), title: "Səhvlər" })
            }
          />
          <ModeCard
            Icon={Shuffle}
            tint="text-brand"
            title="Qarışıq praktika"
            desc="Tamamladığın dərslərdən 10 təsadüfi tapşırıq"
            disabled={completedTasks.length === 0}
            onClick={() =>
              setSession({ tasks: sample(completedTasks, 10), title: "Qarışıq praktika" })
            }
          />
          <ModeCard
            Icon={Timer}
            tint="text-emerald-500"
            title="Sürət raundu"
            desc="60 saniyədə neçə düzgün cavab?"
            disabled={speedPool.length === 0}
            onClick={() =>
              setSession({ tasks: speedPool, title: "Sürət raundu", timed: true })
            }
          />
        </div>

        {/* Bölmə üzrə praktika */}
        <h2 className="mt-8 text-lg font-bold text-fg">Bölmə üzrə praktika</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {subjects.map((s) => {
            const on = s.slug === activeSlug;
            return (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                className={`rounded-2xl px-4 py-2 text-sm font-extrabold uppercase tracking-wide transition ${
                  on
                    ? "bg-brand text-white btn-pop"
                    : "border-2 border-line bg-panel text-muted hover:bg-panel-2"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>

        <div className="mt-3 overflow-hidden rounded-2xl border border-line bg-panel">
          {active.units.map((u) => {
            const unitTasks = u.lessons.flatMap((l) => [
              ...l.tasks,
              ...(l.bonusTasks ?? []),
            ]);
            return (
              <button
                key={u.id}
                onClick={() =>
                  setSession({ tasks: sample(unitTasks, 10), title: u.title })
                }
                className="flex w-full items-center gap-3 border-b border-line px-4 py-3.5 text-left transition last:border-b-0 hover:bg-panel-2"
              >
                <span className="flex-1 font-bold text-fg">{u.title}</span>
                <span className="text-xs text-muted">{unitTasks.length} tapşırıq</span>
                <ChevronRight size={18} className="text-muted" />
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function ModeCard({
  Icon,
  tint,
  title,
  desc,
  disabled,
  onClick,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  tint: string;
  title: string;
  desc: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex items-start gap-4 rounded-2xl border border-line bg-panel p-5 text-left transition hover:border-brand disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-line"
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-panel-2 ${tint}`}>
        <Icon size={24} />
      </span>
      <div>
        <div className="font-extrabold text-fg">{title}</div>
        <div className="mt-0.5 text-sm text-muted">{desc}</div>
      </div>
    </button>
  );
}
