"use client";

// Profil: mascot + ad/email, statistika, fənn üzrə irəliləyiş, nişanlar (achievements).

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  Flame,
  CircleCheck,
  LogOut,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { displayName, signOut } from "@/lib/auth";
import { subjects } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { levelFromXp } from "@/lib/levels";
import { computeAchievements, type AchievementKind } from "@/lib/achievements";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";

const ACH_ICON: Record<AchievementKind, LucideIcon> = {
  xp: Star,
  streak: Flame,
  lessons: CircleCheck,
  level: Crown,
};
const TIER_RING = ["ring-line", "ring-amber-700/50", "ring-slate-400/60", "ring-yellow-500/70"];
const TIER_TINT = [
  "bg-panel-2 text-muted/50",
  "bg-amber-700/10 text-amber-700",
  "bg-slate-400/15 text-slate-500",
  "bg-yellow-500/15 text-yellow-600",
];

export default function ProfilePage() {
  const { user, ready } = useAuthUser();
  const router = useRouter();
  const [state, setState] = useState<ProgressState | null>(null);
  const t = useT();

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  if (!ready || !user || !state) return <PageSkeleton />;

  const lv = levelFromXp(state.totalXp);
  const achievements = computeAchievements(state);

  async function logout() {
    await signOut();
    router.replace("/");
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-3xl px-4 py-6">
        {/* Başlıq kartı */}
        <div className="flex flex-col items-center rounded-3xl border border-line bg-panel p-8 text-center">
          <Mascot size={96} />
          <h1 className="mt-3 text-2xl font-extrabold text-fg">
            {displayName(user)}
          </h1>
          <p className="text-sm text-muted">{user.email}</p>

          {/* Səviyyə */}
          <div className="mt-4 w-full max-w-xs">
            <div className="flex items-center justify-between text-sm">
              <span className="font-extrabold text-brand">
                {t("level.label")} {lv.level} · {t(lv.titleKey)}
              </span>
              <span className="text-xs text-muted">
                {lv.xpInLevel}/{lv.xpForNext} XP
              </span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-panel-2">
              <div
                className="h-full rounded-full bg-accent transition-all"
                style={{ width: `${lv.progress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Statistika */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <Stat Icon={Star} value={state.totalXp} label={t("stat.xp")} color="text-accent" />
          <Stat Icon={Flame} value={state.streakDays} label={t("stat.streak")} color="text-orange-500" />
          <Stat Icon={CircleCheck} value={state.completedLessons.length} label={t("stat.completed")} color="text-brand" />
        </div>

        {/* Nişanlar (pilləli achievements) */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <h2 className="text-lg font-bold text-fg">{t("profile.badges")}</h2>
          <p className="text-sm text-muted">{t("profile.badgesHint")}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => {
              const Icon = ACH_ICON[a.kind];
              return (
                <div key={a.id} className="flex items-center gap-3">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-2 ${TIER_TINT[a.tier]} ${TIER_RING[a.tier]}`}
                  >
                    <Icon size={26} strokeWidth={2.4} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate font-bold text-fg">{t(a.titleKey)}</span>
                      <span className="shrink-0 text-xs font-bold text-muted">
                        {a.tier}/3
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-panel-2">
                      <div
                        className="h-full rounded-full bg-accent transition-all"
                        style={{ width: `${a.progress * 100}%` }}
                      />
                    </div>
                    <div className="mt-1 text-[11px] text-muted">
                      {a.nextGoal === null ? `${a.value}` : `${a.value}/${a.nextGoal}`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fənn üzrə irəliləyiş */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <h2 className="text-lg font-bold text-fg">{t("profile.progress")}</h2>
          <div className="mt-4 space-y-4">
            {subjects.map((s) => {
              const ls = s.units.flatMap((u) => u.lessons);
              const done = ls.filter((l) => state.completedLessons.includes(l.id)).length;
              const pct = ls.length ? Math.round((done / ls.length) * 100) : 0;
              return (
                <div key={s.slug}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-fg">{t(`subject.${s.slug}`)}</span>
                    <span className="text-muted">
                      {done}/{ls.length}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-panel-2">
                    <div
                      className="h-full rounded-full bg-brand transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={logout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-line bg-panel px-5 py-3 font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
        >
          <LogOut size={18} /> {t("profile.logout")}
        </button>
      </main>
    </div>
  );
}

function Stat({
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
