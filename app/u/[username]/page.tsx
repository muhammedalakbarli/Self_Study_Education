"use client";

// İctimai profil — /u/{username}. Giriş tələb etmir; get_public_profile ilə açıq məlumat.

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { Star, Flame, Crown, type LucideIcon } from "lucide-react";
import { getPublicProfile, memberDate, type PublicProfile } from "@/lib/profileApi";
import { levelFromXp } from "@/lib/levels";
import { computeAchievements, type AchievementKind } from "@/lib/achievements";
import { TIER_KEYS } from "@/lib/leaderboard";
import { useT } from "@/lib/i18n";
import { PageSkeleton } from "@/components/Skeleton";
import Avatar from "@/components/Avatar";
import OrderBadge from "@/components/OrderBadge";
import Logo from "@/components/Logo";

const ACH_ICON: Record<AchievementKind, LucideIcon> = {
  xp: Star,
  streak: Flame,
  lessons: Star,
  level: Crown,
};

export default function PublicProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const t = useT();
  const [p, setP] = useState<PublicProfile | null | undefined>(undefined);

  useEffect(() => {
    getPublicProfile(decodeURIComponent(username)).then(setP);
  }, [username]);

  if (p === undefined) return <PageSkeleton />;

  if (p === null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink px-4 text-center">
        <Logo size={40} />
        <p className="text-lg font-bold text-fg">{t("profile.notFound")}</p>
        <Link href="/" className="rounded-2xl bg-brand px-5 py-3 font-extrabold text-white btn-pop">
          Bilik Yolu
        </Link>
      </div>
    );
  }

  const lv = levelFromXp(p.totalXp);
  const achievements = computeAchievements({
    totalXp: p.totalXp,
    streakDays: p.streakDays,
    completedLessons: [],
    lastActiveDate: null,
  }).filter((a) => a.kind !== "lessons");

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-lg px-4 py-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="font-extrabold text-fg">Bilik Yolu</span>
        </Link>

        {/* Kimlik */}
        <div className="mt-6 flex flex-col items-center rounded-3xl border border-line bg-panel p-8 text-center">
          <Avatar config={p.avatar} seed={p.username} size={104} />
          <h1 className="mt-3 text-2xl font-bold text-fg">{p.name}</h1>
          <p className="text-sm font-bold text-muted">@{p.username}</p>
          <p className="mt-1 text-xs text-muted">
            {t("profile.memberSince").replace("{d}", memberDate(p.createdAt))}
          </p>
          <div className="mt-3 rounded-full bg-brand/10 px-4 py-1 text-sm font-extrabold text-brand">
            {t("level.label")} {lv.level} · {t(TIER_KEYS[Math.min(p.tier, 4)])}
          </div>
        </div>

        {/* Statistika */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat Icon={Star} value={p.totalXp} label={t("stat.xp")} color="text-accent" />
          <Stat Icon={Flame} value={p.streakDays} label={t("stat.streak")} color="text-orange-500" />
        </div>

        {/* Nişanlar */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <h2 className="text-lg font-bold text-fg">{t("profile.badges")}</h2>
          <div className="mt-4 flex flex-wrap gap-5">
            {achievements.map((a) => (
              <div key={a.id} className="flex flex-col items-center gap-1.5 text-center">
                <OrderBadge Icon={ACH_ICON[a.kind]} tier={a.tier} size={54} />
                <span className="max-w-[80px] text-[11px] font-semibold text-fg">
                  {t(a.titleKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
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
  Icon: LucideIcon;
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
