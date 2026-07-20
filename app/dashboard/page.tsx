"use client";

// Öyrən səhifəsi: statistika zolağı + fənn tabları + öyrənmə yolu.
// (Holberton radar/qrafik və son tarixlər çıxarıldı.)

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Star, Flame, CircleCheck } from "lucide-react";
import { useContent } from "@/components/ContentProvider";
import { loadProgress, isLessonLocked, type ProgressState } from "@/lib/progress";
import { useAuthUser } from "@/lib/useAuthUser";
import { displayName } from "@/lib/auth";
import { useT } from "@/lib/i18n";
import { levelFromXp } from "@/lib/levels";
import {
  syncQuestRewards,
  todaysQuests,
  questValue,
  isQuestDone,
  type QuestState,
} from "@/lib/quests";
import RadialProgress from "@/components/RadialProgress";
import LearningPath, { type PathNode } from "@/components/LearningPath";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";
import SpeechBubble from "@/components/SpeechBubble";

export default function DashboardPage() {
  const { user, ready } = useAuthUser();
  const { subjects } = useContent();
  const [state, setState] = useState<ProgressState | null>(null);
  const [activeSlug, setActiveSlug] = useState(subjects[0].slug);
  const [quests, setQuests] = useState<QuestState | null>(null);
  const t = useT();

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  // Gündəlik questlər: tamamlananların mükafatını ver + cari halı yüklə.
  // Mükafat XP verildikdən sonra statistikanı yenidən yüklə (dərhal əks olunsun).
  useEffect(() => {
    if (!user) return;
    syncQuestRewards(user.id)
      .then((qs) => {
        setQuests(qs);
        return loadProgress(user.id);
      })
      .then((p) => setState(p))
      .catch(() => {});
  }, [user]);

  const active = subjects.find((s) => s.slug === activeSlug)!;

  const { nodes, currentLesson, scorePct } = useMemo(() => {
    const completed = state?.completedLessons ?? [];
    const lessons = active.units.flatMap((u) => u.lessons);
    const order = lessons.map((l) => l.id);
    const nodes: PathNode[] = active.units.flatMap((u) =>
      u.lessons.map((l, li) => {
        const locked = isLessonLocked(order, l.id, completed);
        const done = completed.includes(l.id);
        return {
          id: l.id,
          title: l.title,
          state: done ? "done" : locked ? "locked" : "current",
          href: `/lessons/${l.id}`,
          unitTitle: li === 0 ? u.title : undefined,
        };
      }),
    );
    const currentLesson = lessons.find((l) => !completed.includes(l.id)) ?? null;
    const doneCount = lessons.filter((l) => completed.includes(l.id)).length;
    const scorePct = lessons.length
      ? Math.round((doneCount / lessons.length) * 100)
      : 0;
    return { nodes, currentLesson, scorePct };
  }, [active, state]);

  if (!ready || !state) return <PageSkeleton />;

  const totalCompleted = state.completedLessons.length;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Salamlama — Ulduz + danışıq balonu */}
        <div className="flex items-end gap-3">
          <Mascot size={72} />
          <SpeechBubble className="mb-2 flex-1 font-semibold" tail="left">
            {t("dash.greeting")}, {displayName(user)}! {t("dash.continue")} 🌟
          </SpeechBubble>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-fg">{t("dash.title")}</h1>

        {/* Statistika zolağı */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <StatChip Icon={Star} value={state.totalXp} label={t("stat.xp")} color="text-accent" />
          <StatChip
            Icon={Flame}
            value={state.streakDays}
            label={t("stat.streak")}
            color="text-orange-500"
          />
          <StatChip
            Icon={CircleCheck}
            value={totalCompleted}
            label={t("stat.completed")}
            color="text-brand"
          />
        </div>

        {/* Səviyyə + gündəlik questlər */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <LevelBar xp={state.totalXp} t={t} />
          {quests && (
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-fg">{t("quest.title")}</span>
              </div>
              {todaysQuests(quests.date).map((q) => {
                const val = questValue(quests, q.kind);
                const done = isQuestDone(quests, q);
                const label = t(q.labelKey).replace("{n}", String(q.goal));
                return (
                  <div key={q.id} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className={done ? "font-bold text-emerald-600" : "font-semibold text-fg"}>
                          {label}
                        </span>
                        <span className="text-xs text-muted">
                          {Math.min(val, q.goal)}/{q.goal}
                        </span>
                      </div>
                      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-panel-2">
                        <div
                          className={`h-full rounded-full transition-all ${done ? "bg-emerald-500" : "bg-brand"}`}
                          style={{ width: `${Math.min((val / q.goal) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-14 shrink-0 text-right text-xs font-bold text-accent">
                      +{q.rewardXp} XP
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Fənn tab-ları */}
        <div className="mt-6 flex flex-wrap gap-2">
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
                {t(`subject.${s.slug}`)}
              </button>
            );
          })}
        </div>

        {/* Öyrənmə yolu */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <RadialProgress value={scorePct} size={72} stroke={7} />
              <div>
                <h2 className="text-lg font-bold text-fg">{t(`subject.${active.slug}`)}</h2>
                <p className="text-sm text-muted">
                  {currentLesson
                    ? `${t("dash.next")}: ${currentLesson.title}`
                    : t("dash.allDone")}
                </p>
              </div>
            </div>
            {currentLesson && (
              <Link
                href={`/lessons/${currentLesson.id}`}
                className="rounded-2xl bg-brand px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
              >
                {t("dash.resume")}
              </Link>
            )}
          </div>

          <div className="mt-6">
            <LearningPath nodes={nodes} />
          </div>
        </div>
      </main>
    </div>
  );
}

function LevelBar({ xp, t }: { xp: number; t: (k: string) => string }) {
  const lv = levelFromXp(xp);
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-lg font-extrabold text-white">
            {lv.level}
          </span>
          <div>
            <div className="text-sm font-extrabold text-fg">
              {t("level.label")} {lv.level}
            </div>
            <div className="text-xs text-muted">{t(lv.titleKey)}</div>
          </div>
        </div>
        <span className="text-xs text-muted">
          {lv.xpInLevel}/{lv.xpForNext} XP
        </span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-panel-2">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${lv.progress * 100}%` }}
        />
      </div>
    </div>
  );
}

function StatChip({
  Icon,
  value,
  label,
  color,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-panel px-4 py-3">
      <Icon size={22} className={color} />
      <div className="leading-tight">
        <div className="text-lg font-extrabold text-fg">{value}</div>
        <div className="text-[11px] text-muted">{label}</div>
      </div>
    </div>
  );
}
