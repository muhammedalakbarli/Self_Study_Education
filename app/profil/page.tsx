"use client";

// Profil: mascot + ad/email, statistika, fənn üzrə irəliləyiş, nişanlar (achievements).

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  Flame,
  CircleCheck,
  LogOut,
  Footprints,
  Rocket,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { displayName, signOut } from "@/lib/auth";
import { subjects } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";

export default function ProfilePage() {
  const { user, ready } = useAuthUser();
  const router = useRouter();
  const [state, setState] = useState<ProgressState | null>(null);
  const t = useT();

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  if (!ready || !user || !state) return <PageSkeleton />;

  // Ən azı bir fənn tam bitibmi (nişan üçün)?
  const anySubjectDone = subjects.some((s) => {
    const ls = s.units.flatMap((u) => u.lessons);
    return ls.length > 0 && ls.every((l) => state.completedLessons.includes(l.id));
  });

  const badges: { Icon: LucideIcon; title: string; earned: boolean }[] = [
    { Icon: Footprints, title: "İlk addım", earned: state.completedLessons.length >= 1 },
    { Icon: CircleCheck, title: "5 dərs", earned: state.completedLessons.length >= 5 },
    { Icon: Star, title: "100 XP", earned: state.totalXp >= 100 },
    { Icon: Flame, title: "3 gün seriya", earned: state.streakDays >= 3 },
    { Icon: Rocket, title: "7 gün seriya", earned: state.streakDays >= 7 },
    { Icon: Crown, title: "Fənn ustası", earned: anySubjectDone },
  ];

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
        </div>

        {/* Statistika */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <Stat Icon={Star} value={state.totalXp} label={t("stat.xp")} color="text-accent" />
          <Stat Icon={Flame} value={state.streakDays} label={t("stat.streak")} color="text-orange-500" />
          <Stat Icon={CircleCheck} value={state.completedLessons.length} label={t("stat.completed")} color="text-brand" />
        </div>

        {/* Nişanlar (achievements) */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <h2 className="text-lg font-bold text-fg">{t("profile.badges")}</h2>
          <p className="text-sm text-muted">{t("profile.badgesHint")}</p>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {badges.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center gap-2 text-center"
                title={b.title}
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl transition ${
                    b.earned
                      ? "bg-accent/15 text-accent ring-2 ring-accent/40"
                      : "bg-panel-2 text-muted/50 ring-1 ring-line"
                  }`}
                >
                  <b.Icon size={28} strokeWidth={2.4} />
                </span>
                <span
                  className={`text-[11px] leading-tight ${
                    b.earned ? "font-semibold text-fg" : "text-muted"
                  }`}
                >
                  {b.title}
                </span>
              </div>
            ))}
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
