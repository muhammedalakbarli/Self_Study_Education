"use client";

// Öyrən səhifəsi: statistika zolağı + fənn tabları + öyrənmə yolu.
// (Holberton radar/qrafik və son tarixlər çıxarıldı.)

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Flame, Gift, Shield, Heart, Gem, Trophy, ChevronRight } from "lucide-react";
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
      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Üst stat zolağı — Streak · Zümrüd · Can (Duolingo kimi sağ yuxarı) */}
        <div className="mb-5 flex items-center justify-center gap-6 lg:justify-end">
          <StatMini
            Icon={Flame}
            value={state.streakDays}
            color="text-orange-500"
            badge={state.streakFreezes}
            onClick={() => {
              setCalOpen(true);
              if (user) loadActiveDays(user.id).then(setActiveDays);
            }}
          />
          <StatMini Icon={Gem} value={state.gems} color="text-emerald-500" />
          <StatMini Icon={Heart} value={hearts} color="text-red-500" />
        </div>

        {calOpen && (
          <StreakCalendar
            streakDays={state.streakDays}
            activeDays={activeDays}
            onClose={() => setCalOpen(false)}
          />
        )}

        <div className="lg:grid lg:grid-cols-[1fr_20rem] lg:items-start lg:gap-6">
          {/* ── Mərkəz: fənn tabları + bölmə başlığı + yol ── */}
          <div className="min-w-0">
            {/* Fənn tab-ları (yalnız cari sinif) */}
            <div className="flex flex-wrap gap-2">
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

            {/* Bölmə başlığı (Duolingo yaşıl banner üslubu) */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-brand to-brand-dark p-5 text-white shadow-lg">
              <RadialProgress value={scorePct} size={64} stroke={6} />
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-lg font-extrabold">{t(`subject.${active.slug}`)}</h2>
                <p className="truncate text-sm text-white/80">
                  {currentLesson ? `${t("dash.next")}: ${currentLesson.title}` : t("dash.allDone")}
                </p>
              </div>
              {currentLesson && (
                <Link
                  href={`/lessons/${currentLesson.id}`}
                  className="shrink-0 rounded-2xl bg-white px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-brand btn-pop [--pop:#c9c2f5] hover:bg-white/90"
                >
                  {t("dash.resume")}
                </Link>
              )}
            </div>

            {/* Öyrənmə yolu */}
            <div className="mt-4">
              <LearningPath nodes={nodes} />
            </div>
          </div>

          {/* ── Sağ sütun: səviyyə · liqa · gündəlik tapşırıqlar ── */}
          <aside className="mt-6 space-y-4 lg:mt-0 lg:sticky lg:top-4">
            <div className="rounded-2xl border border-line bg-panel p-5">
              <LevelBar xp={state.totalXp} t={t} />
            </div>

            {/* Liqa kartı */}
            <Link
              href="/liqa"
              className="flex items-center gap-3 rounded-2xl border border-line bg-panel p-5 transition hover:bg-panel-2"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-sm">
                <Trophy size={22} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-extrabold text-fg">{t("nav.league")}</span>
                <span className="block text-xs text-muted">{t("dash.leagueHint")}</span>
              </span>
              <ChevronRight size={18} className="shrink-0 text-muted" />
            </Link>

            {/* Gündəlik tapşırıqlar */}
            {quests && (
              <div className="rounded-2xl border border-line bg-panel p-5">
                <div className="mb-3 text-sm font-extrabold text-fg">{t("quest.title")}</div>
                <div className="space-y-3">
                  {todaysQuests(quests.date).map((q) => {
                    const val = questValue(quests, q.kind);
                    const done = isQuestDone(quests, q);
                    const label = t(q.labelKey).replace("{n}", String(q.goal));
                    return (
                      <div key={q.id}>
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
                    );
                  })}

                  {chestAvailable(quests) && (
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
              </div>
            )}
          </aside>
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
      </main>
    </div>
  );
}

// Üst stat zolağı üçün kompakt element (ikon + rəqəm) — Duolingo top-bar üslubu.
function StatMini({
  Icon,
  value,
  color,
  badge,
  onClick,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string; fill?: string; strokeWidth?: number }>;
  value: number;
  color: string;
  badge?: number;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <Icon size={26} className={color} fill="currentColor" strokeWidth={0} />
      <span className="text-lg font-extrabold text-fg">{value}</span>
      {badge != null && badge > 0 && (
        <span className="absolute -right-2 -top-1.5 flex items-center gap-0.5 rounded-full bg-sky-500 px-1.5 py-0.5 text-[10px] font-extrabold text-white shadow">
          <Shield size={10} strokeWidth={2.5} />
          {badge}
        </span>
      )}
    </>
  );
  const cls = "relative flex items-center gap-1.5";
  return onClick ? (
    <button type="button" onClick={onClick} className={`${cls} transition active:scale-95`}>
      {inner}
    </button>
  ) : (
    <div className={cls}>{inner}</div>
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
