"use client";

// Dərsin uçdan-uca axını: 15 əsas tapşırıq → bonus təklifi → 5 bonus → nəticə.
// Gamification: dərs içi combo (ard-arda düzgün → bonus XP), səs effektləri,
// dərs sonu bayramı (konfetti + XP count-up + statistika + level-up).

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Lesson, Task } from "@/lib/types";
import ResultSheet from "@/components/lesson/ResultSheet";
import { gradeTask, type UserAnswer } from "@/lib/grading";
import { completeLesson, loadProgress } from "@/lib/progress";
import { addMistake, removeMistake } from "@/lib/mistakes";
import { bumpQuest, bumpQuests } from "@/lib/quests";
import { addWeeklyXp } from "@/lib/leaderboard";
import { levelFromXp } from "@/lib/levels";
import { playCorrect, playWrong, playComplete, playLevelUp, playCombo } from "@/lib/sound";
import { vibrateCorrect, vibrateWrong, vibrateCelebrate } from "@/lib/haptics";
import { useCountUp } from "@/lib/useCountUp";
import { useT } from "@/lib/i18n";
import TaskInput from "@/components/tasks/TaskInput";
import TaskFigure from "@/components/TaskFigure";
import Mascot from "@/components/Mascot";
import Confetti from "@/components/Confetti";

interface Props {
  slug: string;
  lesson: Lesson;
  userId: string;
}

type Phase = "main" | "bonusPrompt" | "bonus" | "done";

const COMBO_STEP = 5; // hər 5 ard-arda düzgün → bonus
const COMBO_BONUS = 5; // bonus XP

export default function LessonRunner({ slug, lesson, userId }: Props) {
  const t = useT();
  const mainTasks = lesson.tasks;
  const bonusTasks = lesson.bonusTasks ?? [];

  const [phase, setPhase] = useState<Phase>("main");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);
  const [checked, setChecked] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [comboBonus, setComboBonus] = useState(0); // bu addımda verilən combo bonusu
  const [startXp, setStartXp] = useState<number | null>(null);

  // Level-up aşkarı üçün dərsə başlamazdan əvvəlki XP.
  useEffect(() => {
    loadProgress(userId).then((p) => setStartXp(p.totalXp)).catch(() => setStartXp(0));
  }, [userId]);

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
    setAnswered((a) => a + 1);
    if (result.correct) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setBestCombo((b) => Math.max(b, nextCombo));
      const bonus = nextCombo % COMBO_STEP === 0 ? COMBO_BONUS : 0;
      setComboBonus(bonus);
      setEarnedXp((x) => x + result.earnedXp + bonus);
      setCorrectCount((c) => c + 1);
      removeMistake(task.id);
      bumpQuest("correct", 1);
      playCorrect();
      if (nextCombo >= 2) playCombo(nextCombo);
      vibrateCorrect();
    } else {
      setCombo(0);
      setComboBonus(0);
      addMistake(task.id);
      playWrong();
      vibrateWrong();
    }
  }

  if (total === 0) {
    return <div className="py-12 text-center text-muted">{t("run.noTasks")}</div>;
  }

  function finishLesson(finalXp: number) {
    completeLesson(userId, lesson.id, finalXp).catch(() => {});
    bumpQuests({ xp: finalXp, lessons: 1 });
    addWeeklyXp(finalXp);
    const up =
      startXp !== null &&
      levelFromXp(startXp).level < levelFromXp(startXp + finalXp).level;
    if (up) playLevelUp();
    else playComplete();
    setPhase("done");
  }

  function advance() {
    setAnswer(null);
    setChecked(false);
    setComboBonus(0);
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      return;
    }
    if (!inBonus && bonusTasks.length > 0) {
      setPhase("bonusPrompt");
      setIndex(0);
    } else {
      finishLesson(earnedXp);
    }
  }

  function startBonus() {
    setPhase("bonus");
    setIndex(0);
    setAnswer(null);
    setChecked(false);
  }

  // ── Bonus təklifi ──
  if (phase === "bonusPrompt") {
    return (
      <div className="mx-auto max-w-xl py-12 text-center">
        <div className="flex justify-center">
          <Mascot size={92} mood="celebrate" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-fg">{t("run.mainDone")}</h1>
        <p className="mt-2 text-muted">
          {t("run.earnedSoFar").replace("{n}", String(earnedXp))}
        </p>
        <p className="mt-4 text-muted">
          {t("run.bonusOffer").replace("{n}", String(bonusTasks.length))}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={startBonus}
            className="rounded-2xl bg-brand px-5 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
          >
            {t("run.startBonus")}
          </button>
          <button
            onClick={() => finishLesson(earnedXp)}
            className="rounded-2xl border-2 border-line px-5 py-3 font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
          >
            {t("run.finish")}
          </button>
        </div>
      </div>
    );
  }

  // ── Nəticə (bayram) ──
  if (phase === "done") {
    return (
      <DoneScreen
        slug={slug}
        earnedXp={earnedXp}
        accuracy={answered ? Math.round((correctCount / answered) * 100) : 0}
        bestCombo={bestCombo}
        leveledUp={
          startXp !== null &&
          levelFromXp(startXp).level < levelFromXp(startXp + earnedXp).level
        }
        newLevel={startXp !== null ? levelFromXp(startXp + earnedXp).level : 0}
      />
    );
  }

  // ── Tapşırıq (main və ya bonus) — immersiv tam-ekran ──
  const ctaText =
    index + 1 < total ? t("run.next") : inBonus ? t("run.finish") : t("run.continue");

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      {/* Yuxarı bar: X + qalın progress + combo */}
      <div className="mx-auto flex w-full max-w-xl items-center gap-4 px-4 pt-5">
        <Link
          href={`/subjects/${slug}`}
          aria-label="Çıx"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-panel-2 hover:text-fg"
        >
          <X size={26} />
        </Link>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-panel-2">
          <motion.div
            className={`h-full origin-left rounded-full ${inBonus ? "bg-accent" : "bg-brand"}`}
            initial={false}
            animate={{ scaleX: Math.max(progressPct / 100, 0.02) }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{ width: "100%" }}
          />
        </div>
        <AnimatePresence>
          {combo >= 2 && !checked && (
            <motion.span
              key={combo}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: [1.35, 1], opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="shrink-0 rounded-full bg-orange-500/15 px-2.5 py-1 text-sm font-extrabold text-orange-500"
            >
              🔥 {combo}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Sual sahəsi */}
      <div className="mx-auto w-full max-w-xl flex-1 px-4 pt-8 pb-44">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted">
          {inBonus ? t("run.bonus") : t("run.task")} {index + 1} / {total}
          {inBonus && (
            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-accent">
              {t("run.bonus")}
            </span>
          )}
        </div>
        <h2 className="mt-3 text-2xl font-bold text-fg">{task.prompt}</h2>
        <TaskFigure figure={task.figure} />
        <div className="mt-7">
          <TaskInput
            task={task}
            value={answer}
            onChange={(v) => setAnswer(v)}
            disabled={checked}
            reveal={checked}
          />
        </div>
      </div>

      {/* Aşağı YOXLA çubuğu */}
      <AnimatePresence>
        {!checked && (
          <motion.div
            key="checkbar"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 34 }}
            className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-line bg-panel"
          >
            <div className="mx-auto max-w-xl px-4 py-4">
              <button
                type="button"
                onClick={handleCheck}
                disabled={answer === null || answer === ""}
                className="w-full rounded-2xl bg-brand px-5 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t("run.check")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nəticə lövhəsi */}
      <AnimatePresence>
        {checked && (
          <ResultSheet
            key="sheet"
            correct={lastCorrect}
            correctText={correctAnswerText(task)}
            comboBonus={comboBonus}
            ctaLabel={ctaText}
            onContinue={advance}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Tapşırığın düzgün cavabını mətn kimi qaytarır (nəticə lövhəsi üçün).
function correctAnswerText(task: Task): string {
  if (task.type === "multiple_choice") return task.options[task.correctIndex];
  if (task.type === "numeric") return String(task.answer);
  return task.accepted[0] ?? "";
}

// ── Bayram ekranı ──
function DoneScreen({
  slug,
  earnedXp,
  accuracy,
  bestCombo,
  leveledUp,
  newLevel,
}: {
  slug: string;
  earnedXp: number;
  accuracy: number;
  bestCombo: number;
  leveledUp: boolean;
  newLevel: number;
}) {
  const t = useT();
  const xp = useCountUp(earnedXp, 900);

  useEffect(() => {
    vibrateCelebrate();
  }, []);

  return (
    <div className="mx-auto max-w-xl py-14 text-center">
      <Confetti />
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 12 }}
      >
        <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 0.8, delay: 0.3 }}>
          <Mascot size={110} mood="celebrate" />
        </motion.div>
      </motion.div>

      {leveledUp && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.25, 1], opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide text-accent"
        >
          ⭐ {t("cel.levelUp")} — {t("level.label")} {newLevel}
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-4 text-2xl font-bold text-fg"
      >
        {t("cel.done")}
      </motion.h1>

      <motion.div
        className="mt-6 grid grid-cols-3 gap-3"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
      >
        <Stat value={`+${xp}`} label={t("cel.xp")} tone="text-accent" />
        <Stat value={`${accuracy}%`} label={t("cel.accuracy")} tone="text-emerald-500" />
        <Stat value={`🔥 ${bestCombo}`} label={t("cel.combo")} tone="text-orange-500" />
      </motion.div>

      <div className="mt-8 flex justify-center gap-3">
        <Link
          href={`/subjects/${slug}`}
          className="rounded-2xl bg-brand px-5 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
        >
          {t("run.backToPath")}
        </Link>
        <Link
          href="/dashboard"
          className="rounded-2xl border-2 border-line px-5 py-3 font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
        >
          {t("run.home")}
        </Link>
      </div>
    </div>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.8 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 18 } },
      }}
      className="rounded-2xl border border-line bg-panel px-3 py-4"
    >
      <div className={`text-xl font-extrabold ${tone}`}>{value}</div>
      <div className="mt-0.5 text-[11px] text-muted">{label}</div>
    </motion.div>
  );
}
