"use client";

// Profil: mascot + ad/email, statistika, onboarding məlumatları, fənn üzrə irəliləyiş.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Flame, CircleCheck, LogOut } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadProgress, type ProgressState } from "@/lib/progress";
import { displayName, signOut } from "@/lib/auth";
import { subjects } from "@/lib/content";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";

const GOAL_LABEL: Record<string, string> = {
  "5": "Rahat · 5 dəq/gün",
  "10": "Normal · 10 dəq/gün",
  "15": "Ciddi · 15 dəq/gün",
  "20": "İntensiv · 20 dəq/gün",
};
const FOCUS_LABEL: Record<string, string> = {
  riyaziyyat: "Riyaziyyat",
  "azerbaycan-dili": "Azərbaycan dili",
  "ingilis-dili": "İngilis dili",
  hamisi: "Hamısı",
};

export default function ProfilePage() {
  const { user, ready } = useAuthUser();
  const router = useRouter();
  const [state, setState] = useState<ProgressState | null>(null);

  useEffect(() => {
    if (user) loadProgress(user.id).then(setState);
  }, [user]);

  if (!ready || !user || !state) return <PageSkeleton />;

  const meta = user.user_metadata ?? {};
  const grade = meta.grade ? `${meta.grade}-ci sinif` : "—";
  const goal = meta.goal ? GOAL_LABEL[String(meta.goal)] ?? "—" : "—";
  const focus = meta.focus ? FOCUS_LABEL[String(meta.focus)] ?? "—" : "—";

  const info = [
    { k: "Sinif", v: grade },
    { k: "Gündəlik hədəf", v: goal },
    { k: "Fokus", v: focus },
    { k: "Email", v: user.email ?? "—" },
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
          <Stat Icon={Star} value={state.totalXp} label="XP" color="text-accent" />
          <Stat Icon={Flame} value={state.streakDays} label="gün seriya" color="text-orange-500" />
          <Stat Icon={CircleCheck} value={state.completedLessons.length} label="tamamlandı" color="text-brand" />
        </div>

        {/* Fənn üzrə irəliləyiş */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <h2 className="text-lg font-bold text-fg">Fənlər üzrə irəliləyiş</h2>
          <div className="mt-4 space-y-4">
            {subjects.map((s) => {
              const ls = s.units.flatMap((u) => u.lessons);
              const done = ls.filter((l) => state.completedLessons.includes(l.id)).length;
              const pct = ls.length ? Math.round((done / ls.length) * 100) : 0;
              return (
                <div key={s.slug}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-fg">{s.name}</span>
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

        {/* Məlumat */}
        <div className="mt-4 rounded-2xl border border-line bg-panel p-5">
          <h2 className="text-lg font-bold text-fg">Haqqında</h2>
          <dl className="mt-3 divide-y divide-line">
            {info.map((row) => (
              <div key={row.k} className="flex justify-between py-2.5 text-sm">
                <dt className="text-muted">{row.k}</dt>
                <dd className="font-semibold text-fg">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <button
          type="button"
          onClick={logout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-line bg-panel px-5 py-3 font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
        >
          <LogOut size={18} /> Hesabdan çıx
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
