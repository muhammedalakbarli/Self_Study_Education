"use client";

// Admin · İstifadəçilər — cədvəl (say, email, qoşulma saat:dəqiqə, son giriş, vaxt, XP…),
// sütun üzrə sıralama, CSV export, sətrə klik → detal modalı + əməliyyatlar (Plus/bot/sil).
// Yalnız is_admin() girə bilir (data admin-only RPC-lərdən gəlir).

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Users, Flame, Crown, UserPlus, Star, Search, Download,
  X, Trash2, Bot, ChevronDown, ChevronUp,
} from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import {
  checkIsAdmin, adminUsers, adminUserStats, adminUserDetail,
  adminSetBot, adminGrantPlus, adminRevokePlus, adminDeleteUser,
  type AdminUserRow, type AdminUserStats, type AdminUserDetail,
} from "@/lib/adminApi";
import { PageSkeleton } from "@/components/Skeleton";

function fmtDate(s: string | null): string {
  if (!s) return "—";
  return new Date(s).toLocaleDateString("az-AZ", { year: "numeric", month: "short", day: "numeric" });
}
function fmtDateTime(s: string | null): string {
  if (!s) return "—";
  return new Date(s).toLocaleString("az-AZ", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit", timeZone: "Asia/Baku",
  });
}
function fmtDuration(sec: number | null): string {
  const s = Number(sec) || 0;
  if (s <= 0) return "—";
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0) return m > 0 ? `${h} saat ${m} dəq` : `${h} saat`;
  if (m > 0) return `${m} dəq`;
  return `${s} san`;
}

type SortKey = "created_at" | "last_sign_in_at" | "active_seconds" | "total_xp" | "streak_days" | "completed";

export default function AdminUsersPage() {
  const router = useRouter();
  const { user, ready } = useAuthUser();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<AdminUserRow[] | null>(null);
  const [stats, setStats] = useState<AdminUserStats | null>(null);
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("created_at");
  const [sortDir, setSortDir] = useState<-1 | 1>(-1);
  const [detailId, setDetailId] = useState<string | null>(null);

  useEffect(() => { if (user) checkIsAdmin().then(setIsAdmin); }, [user]);
  useEffect(() => { if (isAdmin === false) router.replace("/dashboard"); }, [isAdmin, router]);
  useEffect(() => {
    if (isAdmin !== true) return;
    adminUserStats().then(setStats);
    adminUsers("", 1000).then(setRows);
  }, [isAdmin]);

  async function reload() {
    adminUserStats().then(setStats);
    adminUsers("", 1000).then(setRows);
  }

  const filtered = useMemo(() => {
    if (!rows) return [];
    const s = q.trim().toLowerCase();
    const out = s
      ? rows.filter((r) => r.email.toLowerCase().includes(s) || r.name.toLowerCase().includes(s))
      : [...rows];
    out.sort((a, b) => {
      const av = a[sortKey] ?? "", bv = b[sortKey] ?? "";
      if (av < bv) return -sortDir;
      if (av > bv) return sortDir;
      return 0;
    });
    return out;
  }, [rows, q, sortKey, sortDir]);

  function toggleSort(k: SortKey) {
    if (sortKey === k) setSortDir((d) => (d === 1 ? -1 : 1));
    else { setSortKey(k); setSortDir(-1); }
  }

  function exportCsv() {
    const head = ["Email", "Ad", "Mənbə", "Təsdiq", "Qoşuldu", "Son giriş", "Vaxt(san)", "XP", "Streak", "Zümrüd", "Dərs", "Son aktiv", "Plus"];
    const lines = filtered.map((r) => [
      r.email, r.name, r.provider, r.email_confirmed ? "bəli" : "xeyr",
      r.created_at, r.last_sign_in_at ?? "", r.active_seconds, r.total_xp, r.streak_days,
      r.gems, r.completed, r.last_active_date ?? "", r.is_plus ? "bəli" : "xeyr",
    ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","));
    const csv = [head.join(","), ...lines].join("\n");
    const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `imparo-istifadeciler-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!ready || !user || isAdmin !== true || !rows) return <PageSkeleton />;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-1.5 text-sm font-bold text-muted hover:text-fg">
            <ArrowLeft size={16} /> Admin
          </Link>
          <button
            onClick={exportCsv}
            className="flex items-center gap-1.5 rounded-xl border-2 border-line bg-panel px-3 py-1.5 text-sm font-bold text-fg hover:border-brand"
          >
            <Download size={15} /> CSV
          </button>
        </div>
        <h1 className="mt-3 text-2xl font-bold text-fg">İstifadəçilər</h1>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <StatCard Icon={Users} label="Ümumi" value={stats?.total ?? rows.length} tint="text-brand" />
          <StatCard Icon={Flame} label="Aktiv 7g" value={stats?.active7 ?? 0} tint="text-orange-500" />
          <StatCard Icon={Flame} label="Aktiv 30g" value={stats?.active30 ?? 0} tint="text-amber-500" />
          <StatCard Icon={UserPlus} label="Yeni 7g" value={stats?.new7 ?? 0} tint="text-emerald-500" />
          <StatCard Icon={Crown} label="Plus" value={stats?.plus_count ?? 0} tint="text-amber-500" />
          <StatCard Icon={Star} label="Ümumi XP" value={stats?.total_xp ?? 0} tint="text-accent" />
        </div>

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

        <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-panel">
          <table className="w-full min-w-[1040px] text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-3 py-3 font-bold">Ad</th>
                <th className="px-3 py-3 font-bold">Mənbə</th>
                <SortTh label="Qoşuldu" k="created_at" {...{ sortKey, sortDir, toggleSort }} />
                <SortTh label="Son giriş" k="last_sign_in_at" {...{ sortKey, sortDir, toggleSort }} />
                <SortTh label="Vaxt" k="active_seconds" {...{ sortKey, sortDir, toggleSort }} />
                <SortTh label="XP" k="total_xp" right {...{ sortKey, sortDir, toggleSort }} />
                <SortTh label="Streak" k="streak_days" right {...{ sortKey, sortDir, toggleSort }} />
                <SortTh label="Dərs" k="completed" right {...{ sortKey, sortDir, toggleSort }} />
                <th className="px-3 py-3 text-center font-bold">Plus</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.user_id}
                  onClick={() => setDetailId(r.user_id)}
                  className="cursor-pointer border-b border-line/60 last:border-b-0 hover:bg-panel-2"
                >
                  <td className="max-w-[220px] truncate px-4 py-2.5 font-semibold text-fg">
                    {r.email}
                    {!r.email_confirmed && <span className="ml-1 text-[10px] text-amber-500">●</span>}
                  </td>
                  <td className="px-3 py-2.5 text-muted">{r.name}</td>
                  <td className="px-3 py-2.5 text-muted">{r.provider === "google" ? "Google" : "Email"}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-muted">{fmtDateTime(r.created_at)}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-muted">{fmtDateTime(r.last_sign_in_at)}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-semibold text-fg">{fmtDuration(r.active_seconds)}</td>
                  <td className="px-3 py-2.5 text-right font-bold text-amber-500">{r.total_xp}</td>
                  <td className="px-3 py-2.5 text-right text-orange-500">🔥{r.streak_days}</td>
                  <td className="px-3 py-2.5 text-right text-brand">{Number(r.completed)}</td>
                  <td className="px-3 py-2.5 text-center">
                    {r.is_plus ? <Crown size={16} className="mx-auto text-amber-500" /> : <span className="text-muted">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {detailId && (
        <UserDetailModal
          uid={detailId}
          onClose={() => setDetailId(null)}
          onChanged={reload}
        />
      )}
    </div>
  );
}

function SortTh({
  label, k, right, sortKey, sortDir, toggleSort,
}: {
  label: string; k: SortKey; right?: boolean;
  sortKey: SortKey; sortDir: -1 | 1; toggleSort: (k: SortKey) => void;
}) {
  const active = sortKey === k;
  return (
    <th className={`px-3 py-3 font-bold ${right ? "text-right" : ""}`}>
      <button onClick={() => toggleSort(k)} className={`inline-flex items-center gap-1 hover:text-fg ${active ? "text-fg" : ""}`}>
        {label}
        {active && (sortDir === 1 ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
      </button>
    </th>
  );
}

function UserDetailModal({ uid, onClose, onChanged }: { uid: string; onClose: () => void; onChanged: () => void }) {
  const [d, setD] = useState<AdminUserDetail | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => { adminUserDetail(uid).then(setD); }, [uid]);

  async function act(fn: () => Promise<{ ok: boolean; error?: string }>, confirmMsg?: string) {
    if (confirmMsg && !confirm(confirmMsg)) return;
    setBusy(true);
    const r = await fn();
    setBusy(false);
    if (!r.ok) { alert("Xəta: " + (r.error ?? "")); return; }
    onChanged();
    if (confirmMsg?.includes("Sil")) { onClose(); return; }
    setD(await adminUserDetail(uid));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4" onClick={onClose}>
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-panel p-5 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold text-fg">{d?.name ?? "…"}</h2>
            <p className="truncate text-sm text-muted">{d?.email}</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-muted hover:bg-panel-2"><X size={20} /></button>
        </div>

        {!d ? (
          <p className="mt-6 text-center text-muted">Yüklənir…</p>
        ) : (
          <>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              <Info label="XP" value={String(d.total_xp)} />
              <Info label="Streak" value={`🔥 ${d.streak_days}`} />
              <Info label="Zümrüd" value={String(d.gems)} />
              <Info label="Can" value={d.is_plus ? "∞" : String(d.hearts)} />
              <Info label="Tamamlanan" value={String(d.completed)} />
              <Info label="Vaxt" value={fmtDuration(d.active_seconds)} />
              <Info label="Mənbə" value={d.provider === "google" ? "Google" : "Email"} />
              <Info label="Təsdiq" value={d.email_confirmed ? "✓" : "—"} />
              <Info label="Plus" value={d.is_plus ? "Bəli" : "Xeyr"} />
              <Info label="Qoşuldu" value={fmtDateTime(d.created_at)} />
              <Info label="Son giriş" value={fmtDateTime(d.last_sign_in_at)} />
              <Info label="Son aktiv" value={fmtDate(d.last_active_date)} />
            </div>

            {d.subjects.length > 0 && (
              <div className="mt-4">
                <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted">Fənn üzrə tamamlanan</div>
                <div className="flex flex-wrap gap-2">
                  {d.subjects.map((s) => (
                    <span key={s.subject} className="rounded-lg bg-panel-2 px-2.5 py-1 text-sm font-semibold text-fg">
                      {s.subject}: <span className="text-brand">{s.done}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-col gap-2">
              {d.is_plus ? (
                <ActionBtn Icon={Crown} label="Plus-u ləğv et" tone="ghost" busy={busy}
                  onClick={() => act(() => adminRevokePlus(uid))} />
              ) : (
                <ActionBtn Icon={Crown} label="Plus ver (12 ay)" tone="gold" busy={busy}
                  onClick={() => act(() => adminGrantPlus(uid, 12))} />
              )}
              <ActionBtn Icon={Bot} label={d.is_bot ? "Bot işarəsini götür" : "Bot kimi işarələ (gizlət)"} tone="ghost" busy={busy}
                onClick={() => act(() => adminSetBot(uid, !d.is_bot))} />
              <ActionBtn Icon={Trash2} label="Hesabı sil" tone="danger" busy={busy}
                onClick={() => act(() => adminDeleteUser(uid), "Bu hesabı və bütün datasını silmək istədiyinə əminsən? Geri qaytarıla bilməz.")} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-panel-2 px-3 py-2">
      <div className="text-[10px] uppercase tracking-wide text-muted">{label}</div>
      <div className="truncate font-bold text-fg">{value}</div>
    </div>
  );
}

function ActionBtn({
  Icon, label, tone, busy, onClick,
}: {
  Icon: React.ComponentType<{ size?: number }>;
  label: string; tone: "gold" | "ghost" | "danger"; busy: boolean; onClick: () => void;
}) {
  const cls =
    tone === "gold" ? "bg-amber-500 text-white hover:bg-amber-600"
    : tone === "danger" ? "border-2 border-red-500/40 text-red-500 hover:bg-red-500/10"
    : "border-2 border-line text-fg hover:border-brand";
  return (
    <button disabled={busy} onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 font-bold disabled:opacity-50 ${cls}`}>
      <Icon size={16} /> {label}
    </button>
  );
}

function StatCard({
  Icon, label, value, tint,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string; value: number; tint: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4 text-center">
      <Icon size={20} className={`mx-auto ${tint}`} />
      <div className="mt-1 text-xl font-extrabold text-fg">{value.toLocaleString("az")}</div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}
