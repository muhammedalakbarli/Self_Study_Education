"use client";

// Admin · İstifadəçilər — say, email, streak, qoşulma tarixi, XP, zümrüd, Plus, dərs.
// Yalnız is_admin() girə bilir (data admin-only RPC-lərdən gəlir).

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Flame, Crown, UserPlus, Star, Search } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import {
  checkIsAdmin,
  adminUsers,
  adminUserStats,
  type AdminUserRow,
  type AdminUserStats,
} from "@/lib/adminApi";
import { PageSkeleton } from "@/components/Skeleton";

function fmtDate(s: string | null): string {
  if (!s) return "—";
  return new Date(s).toLocaleDateString("az-AZ", { year: "numeric", month: "short", day: "numeric" });
}

// Tarix + saat:dəqiqə (Bakı vaxtı) — qoşulma və son giriş üçün.
function fmtDateTime(s: string | null): string {
  if (!s) return "—";
  return new Date(s).toLocaleString("az-AZ", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Baku",
  });
}

// Aktiv keçirilən vaxt: saniyələr → "2 saat 15 dəq" / "45 dəq" / "30 san".
function fmtDuration(sec: number | null): string {
  const s = Number(sec) || 0;
  if (s <= 0) return "—";
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0) return m > 0 ? `${h} saat ${m} dəq` : `${h} saat`;
  if (m > 0) return `${m} dəq`;
  return `${s} san`;
}

export default function AdminUsersPage() {
  const router = useRouter();
  const { user, ready } = useAuthUser();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<AdminUserRow[] | null>(null);
  const [stats, setStats] = useState<AdminUserStats | null>(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (user) checkIsAdmin().then(setIsAdmin);
  }, [user]);
  useEffect(() => {
    if (isAdmin === false) router.replace("/dashboard");
  }, [isAdmin, router]);
  useEffect(() => {
    if (isAdmin !== true) return;
    adminUserStats().then(setStats);
    adminUsers("", 500).then(setRows);
  }, [isAdmin]);

  const filtered = useMemo(() => {
    if (!rows) return [];
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((r) => r.email.toLowerCase().includes(s) || r.name.toLowerCase().includes(s));
  }, [rows, q]);

  if (!ready || !user || isAdmin !== true || !rows) return <PageSkeleton />;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Link href="/admin" className="flex items-center gap-1.5 text-sm font-bold text-muted hover:text-fg">
          <ArrowLeft size={16} /> Admin
        </Link>
        <h1 className="mt-3 text-2xl font-bold text-fg">İstifadəçilər</h1>

        {/* Aqreqat kartlar */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <StatCard Icon={Users} label="Ümumi" value={stats?.total ?? rows.length} tint="text-brand" />
          <StatCard Icon={Flame} label="Aktiv 7g" value={stats?.active7 ?? 0} tint="text-orange-500" />
          <StatCard Icon={Flame} label="Aktiv 30g" value={stats?.active30 ?? 0} tint="text-amber-500" />
          <StatCard Icon={UserPlus} label="Yeni 7g" value={stats?.new7 ?? 0} tint="text-emerald-500" />
          <StatCard Icon={Crown} label="Plus" value={stats?.plus_count ?? 0} tint="text-amber-500" />
          <StatCard Icon={Star} label="Ümumi XP" value={stats?.total_xp ?? 0} tint="text-accent" />
        </div>

        {/* Axtarış */}
        <div className="mt-5 flex items-center gap-2 rounded-2xl border-2 border-line bg-panel px-4 py-2.5">
          <Search size={18} className="text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Email və ya ad üzrə axtar…"
            className="flex-1 bg-transparent font-semibold text-fg outline-none"
          />
          <span className="text-sm text-muted">{filtered.length}</span>
        </div>

        {/* Cədvəl */}
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-panel">
          <table className="w-full min-w-[960px] text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-3 py-3 font-bold">Ad</th>
                <th className="px-3 py-3 font-bold">Qoşuldu</th>
                <th className="px-3 py-3 font-bold">Son giriş</th>
                <th className="px-3 py-3 font-bold">Vaxt</th>
                <th className="px-3 py-3 text-right font-bold">XP</th>
                <th className="px-3 py-3 text-right font-bold">Streak</th>
                <th className="px-3 py-3 text-right font-bold">Zümrüd</th>
                <th className="px-3 py-3 text-right font-bold">Dərs</th>
                <th className="px-3 py-3 font-bold">Son aktiv</th>
                <th className="px-3 py-3 text-center font-bold">Plus</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.user_id} className="border-b border-line/60 last:border-b-0">
                  <td className="max-w-[220px] truncate px-4 py-2.5 font-semibold text-fg">{r.email}</td>
                  <td className="px-3 py-2.5 text-muted">{r.name}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-muted">{fmtDateTime(r.created_at)}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-muted">{fmtDateTime(r.last_sign_in_at)}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-semibold text-fg">{fmtDuration(r.active_seconds)}</td>
                  <td className="px-3 py-2.5 text-right font-bold text-amber-500">{r.total_xp}</td>
                  <td className="px-3 py-2.5 text-right text-orange-500">🔥{r.streak_days}</td>
                  <td className="px-3 py-2.5 text-right text-emerald-600">{r.gems}</td>
                  <td className="px-3 py-2.5 text-right text-brand">{Number(r.completed)}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-muted">{fmtDate(r.last_active_date)}</td>
                  <td className="px-3 py-2.5 text-center">
                    {r.is_plus ? <Crown size={16} className="mx-auto text-amber-500" /> : <span className="text-muted">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  Icon,
  label,
  value,
  tint,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: number;
  tint: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4 text-center">
      <Icon size={20} className={`mx-auto ${tint}`} />
      <div className="mt-1 text-xl font-extrabold text-fg">{value.toLocaleString("az")}</div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}
