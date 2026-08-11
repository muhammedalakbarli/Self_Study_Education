"use client";

// Öyrən səhifəsi: statistika zolağı + fənn tabları + öyrənmə yolu.
// (Holberton radar/qrafik və son tarixlər çıxarıldı.)

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Flame, Gift, Shield, Heart, Gem } from "lucide-react";
import { useContent } from "@/components/ContentProvider";
import { loadProgress, loadActiveDays, lessonState, grantStreakFreeze, type ProgressState } from "@/lib/progress";
import { loadHearts, MAX_HEARTS } from "@/lib/hearts";
import StreakCalendar from "@/components/StreakCalendar";
import { useAuthUser } from "@/lib/useAuthUser";
import { userGrade, subjectsForGrade } from "@/lib/grade";
import { track } from "@/lib/analytics";
import { useT } from "@/lib/i18n";
import { levelFromXp } from "@/lib/levels";
import {
  syncQuestRewards,
  todaysQuests,
  questValue,
  isQuestDone,
  chestAvailable,
  openChest,
  loadQuestState,
  type QuestState,
} from "@/lib/quests";
import ChestModal from "@/components/ChestModal";
import RadialProgress from "@/components/RadialProgress";
import LearningPath, { type PathNode } from "@/components/LearningPath";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";

export default function DashboardPage() {
  const { user, ready } = useAuthUser();
  const { subjects } = useContent();
  // Yalnız istifadəçinin sinfinə (onboarding) uyğun fənlər.
  const grade = userGrade(user);
  const shown = useMemo(() => subjectsForGrade(subjects, user), [subjects, user]);
  const [state, setState] = useState<ProgressState | null>(null);
  const [activeSlug, setActiveSlug] = useState("");
  const [quests, setQuests] = useState<QuestState | null>(null);
  const [calOpen, setCalOpen] = useState(false);
  const [activeDays, setActiveDays] = useState<string[]>([]);
  const [chestOpen, setChestOpen] = useState(false);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const t = useT();

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);
  useEffect(() => {
    if (user) loadHearts().then(setHearts).catch(() => {});
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

  // Aktiv fənn həmişə göstərilən (sinif üzrə) siyahının içindən; ilk yükləmədə birincisi.
  const active = shown.find((s) => s.slug === activeSlug) ?? shown[0];

  // activeSlug göstərilən siyahıda deyilsə (sinif dəyişəndə) ilk fənnə keç.
  useEffect(() => {
    if (shown.length && !shown.some((s) => s.slug === activeSlug)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSlug(shown[0].slug);
    }
  }, [shown, activeSlug]);

  const { nodes, currentLesson, scorePct } = useMemo(() => {
    const completed = state?.completedLessons ?? [];
    const lessons = active ? active.units.flatMap((u) => u.lessons) : [];
    const order = lessons.map((l) => l.id);
    const nodes: PathNode[] = (active?.units ?? []).flatMap((u) =>
      u.lessons.map((l, li) => ({
        id: l.id,
        title: l.title,
        state: lessonState(order, l.id, completed),
        href: `/lessons/${l.id}`,
        unitTitle: li === 0 ? u.title : undefined,
      })),
    );
    const currentLesson = lessons.find((l) => !completed.includes(l.id)) ?? null;
    const doneCount = lessons.filter((l) => completed.includes(l.id)).length;
    const scorePct = lessons.length
      ? Math.round((doneCount / lessons.length) * 100)
      : 0;
    return { nodes, currentLesson, scorePct };
  }, [active, state]);

  if (!ready || !state) return <PageSkeleton />;

  // Bu sinif üçün hələ məzmun yoxdursa (məs. 7–8-ci sinif) — dostcasına mesaj.
  if (shown.length === 0 || !active) {
    return (
      <div className="min-h-screen bg-ink">
        <main className="mx-auto max-w-lg px-4 py-16 text-center">
          <Mascot size={90} mood="happy" />
          <h1 className="mt-5 text-2xl font-bold text-fg">{t("dash.gradeSoonTitle")}</h1>
          <p className="mt-2 text-muted">
            {t("dash.gradeSoon").replace("{n}", String(grade))}
          </p>
          <Link
            href="/ayarlar"
            className="mt-6 inline-block rounded-2xl bg-brand px-6 py-3 font-extrabold text-white btn-pop"
          >
            {t("dash.changeGrade")}
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="text-3xl font-bold text-fg">{t("dash.title")}</h1>

        {/* Statistika zolağı — Canlar · Zümrüd · Streak (bir xətdə) */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <StatChip Icon={Heart} value={hearts} label={t("stat.hearts")} color="text-red-500" />
          <StatChip Icon={Gem} value={state.gems} label={t("stat.gems")} color="text-emerald-500" />
          <StatChip
            Icon={Flame}
            value={state.streakDays}
            label={t("stat.streak")}
            color="text-orange-500"
            badge={state.streakFreezes}
            onClick={() => {
              setCalOpen(true);
              if (user) loadActiveDays(user.id).then(setActiveDays);
            }}
          />
        </div>

        {calOpen && (
          <StreakCalendar
            streakDays={state.streakDays}
            activeDays={activeDays}
            onClose={() => setCalOpen(false)}
          />
        )}

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

              {/* Bütün görevlər bitəndə — mükafat sandığı */}
              {quests && chestAvailable(quests) && (
                <button
                  type="button"
                  onClick={() => setChestOpen(true)}
                  className="mt-1 flex w-full items-center gap-3 rounded-2xl border-2 border-accent/40 bg-accent/10 px-4 py-3 text-left transition hover:bg-accent/15"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-accent text-white shadow-sm">
                    <Gift size={24} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-extrabold text-fg">{t("chest.readyShort")}</span>
                    <span className="block text-xs text-muted">{t("chest.open")} →</span>
                  </span>
                </button>
              )}
            </div>
          )}
        </div>

        {chestOpen && user && (
          <ChestModal
            onOpen={async () => {
              const reward = await openChest(user.id);
              track("chest_opened", { reward });
              // Sandıqdan həm də seriya qoruyucu (freeze) qazan — cap 2.
              await grantStreakFreeze().catch(() => 0);
              await loadProgress(user.id).then(setState).catch(() => {});
              await loadQuestState().then(setQuests).catch(() => {});
              return reward;
            }}
            onClose={() => setChestOpen(false)}
          />
        )}

        {/* Fənn tab-ları (yalnız cari sinif) */}
        <div className="mt-6 flex flex-wrap gap-2">
          {shown.map((s) => {
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
  onClick,
  badge,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number;
  label: string;
  color: string;
  onClick?: () => void;
  badge?: number; // >0 olanda küncdə qalxan (freeze) nişanı
}) {
  const inner = (
    <>
      <Icon size={22} className={color} />
      <div className="leading-tight">
        <div className="text-lg font-extrabold text-fg">{value}</div>
        <div className="text-[11px] text-muted">{label}</div>
      </div>
      {badge != null && badge > 0 && (
        <span
          title="Seriya qoruyucu"
          className="absolute -right-1.5 -top-1.5 flex items-center gap-0.5 rounded-full bg-sky-500 px-1.5 py-0.5 text-[10px] font-extrabold text-white shadow"
        >
          <Shield size={10} strokeWidth={2.5} />
          {badge}
        </span>
      )}
    </>
  );
  const cls = "relative flex items-center gap-2.5 rounded-2xl border border-line bg-panel px-4 py-3";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${cls} text-left transition hover:border-orange-400 active:scale-[0.97]`}>
        {inner}
      </button>
    );
  }
  return <div className={cls}>{inner}</div>;
}
