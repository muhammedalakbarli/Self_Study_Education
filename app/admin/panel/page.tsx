"use client";

// Admin · Panel — ümumi baxış (KPI göstəriciləri, siqnallar, böyümə, sürətli keçidlər).
// Böyük-şirkət admin panelinin "ana səhifəsi". Data mövcud admin RPC-lərindən.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users, Flame, Crown, Star, UserPlus, TrendingUp, GraduationCap,
  MessageSquare, ChevronRight, Activity,
} from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import {
  checkIsAdmin, adminUserStats, adminGrowth, adminListTeacherRequests,
  type AdminUserStats, type AdminGrowth,
} from "@/lib/adminApi";
import { createClient } from "@/lib/supabase/client";
import { PageSkeleton } from "@/components/Skeleton";

export default function AdminPanelPage() {
  const router = useRouter();
  const { user, ready } = useAuthUser();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [stats, setStats] = useState<AdminUserStats | null>(null);
  const [growth, setGrowth] = useState<AdminGrowth | null>(null);
  const [pendingTeachers, setPendingTeachers] = useState(0);
  const [openFeedback, setOpenFeedback] = useState(0);

  useEffect(() => { if (user) checkIsAdmin().then(setIsAdmin); }, [user]);
  useEffect(() => { if (isAdmin === false) router.replace("/dashboard"); }, [isAdmin, router]);
  useEffect(() => {
    if (isAdmin !== true) return;
    adminUserStats().then(setStats);
    adminGrowth().then(setGrowth);
    adminListTeacherRequests().then((r) => setPendingTeachers(r.length)).catch(() => {});
    createClient().from("task_feedback").select("resolved").then(({ data }) =>
      setOpenFeedback((data ?? []).filter((f: { resolved: boolean }) => !f.resolved).length),
    );
  }, [isAdmin]);

  if (!ready || !user || isAdmin !== true || !stats) return <PageSkeleton />;

  const g = growth;
  const convRate = g && g.funnel.signed_up > 0
    ? Math.round((g.funnel.plus / g.funnel.signed_up) * 1000) / 10 : 0;

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 lg:px-8">
      <div className="flex items-center gap-2">
        <Activity size={22} className="text-brand" />
        <h1 className="text-2xl font-extrabold text-fg">İdarəetmə paneli</h1>
      </div>
      <p className="mt-1 text-sm text-muted">Platformanın ümumi vəziyyəti — bir baxışda.</p>

      {/* Siqnallar */}
      {(pendingTeachers > 0 || openFeedback > 0) && (
        <div className="mt-5 space-y-2">
          {pendingTeachers > 0 && (
            <Alert href="/admin/muellimler" Icon={GraduationCap}
              text={`${pendingTeachers} müəllimlik müraciəti gözləyir`} tone="amber" />
          )}
          {openFeedback > 0 && (
            <Alert href="/admin/feedback" Icon={MessageSquare}
              text={`${openFeedback} açıq istifadəçi rəyi var`} tone="brand" />
          )}
        </div>
      )}

      {/* Əsas KPI-lar */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <Kpi Icon={Users} label="Ümumi istifadəçi" value={stats.total} tint="text-brand" />
        <Kpi Icon={Activity} label="Aktiv (bu gün)" value={g?.dau ?? 0} tint="text-emerald-500" />
        <Kpi Icon={Flame} label="Aktiv (7 gün)" value={stats.active7} tint="text-orange-500" />
        <Kpi Icon={TrendingUp} label="Aktiv (30 gün)" value={stats.active30} tint="text-sky-500" />
        <Kpi Icon={UserPlus} label="Yeni (7 gün)" value={stats.new7} tint="text-emerald-500" />
        <Kpi Icon={Crown} label="Plus abunə" value={stats.plus_count} tint="text-amber-500" />
        <Kpi Icon={Star} label="Ümumi XP" value={stats.total_xp} tint="text-accent" />
        <Kpi Icon={TrendingUp} label="Plus konversiya" value={convRate} suffix="%" tint="text-amber-500" />
      </div>

      {/* Böyümə funnel + qrafik */}
      {g && (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card title="Qıf (funnel)">
            <Funnel label="Qeydiyyat" v={g.funnel.signed_up} max={g.funnel.signed_up} tone="bg-brand" />
            <Funnel label="İlk dərsi etdi" v={g.funnel.activated} max={g.funnel.signed_up} tone="bg-emerald-500" />
            <Funnel label="7 gündə qayıtdı" v={g.funnel.retained7} max={g.funnel.signed_up} tone="bg-amber-500" />
            <Funnel label="Plus aldı" v={g.funnel.plus} max={g.funnel.signed_up} tone="bg-yellow-400" />
          </Card>
          <Card title="Qeydiyyat (son 14 gün)">
            <Bars data={g.signups_daily} />
          </Card>
        </div>
      )}

      {/* Sürətli keçidlər */}
      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-muted">Bölmələr</h2>
      <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Quick href="/admin/istifadeciler" label="İstifadəçilər" desc="Cədvəl, detal, əməliyyatlar" />
        <Quick href="/admin/analitika" label="Analitika" desc="Böyümə, məzmun, liqa" />
        <Quick href="/admin" label="Məzmun" desc="Fənn/bölmə/dərs CRUD" />
        <Quick href="/admin/mekteb" label="Məktəb (B2B)" desc="Siniflər, müəllimlər" />
        <Quick href="/admin/muellimler" label="Müəllimlər" desc="Müraciət təsdiqi" />
        <Quick href="/admin/elan" label="Elanlar" desc="Bildiriş göndər" />
      </div>
    </main>
  );
}

function Kpi({ Icon, label, value, tint, suffix = "" }: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string; value: number; tint: string; suffix?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4">
      <Icon size={18} className={tint} />
      <div className="mt-2 text-2xl font-extrabold text-fg">{value.toLocaleString("az")}{suffix}</div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}

function Alert({ href, Icon, text, tone }: {
  href: string; Icon: React.ComponentType<{ size?: number; className?: string }>;
  text: string; tone: "amber" | "brand";
}) {
  const cls = tone === "amber" ? "border-amber-500/40 bg-amber-500/10 text-amber-600" : "border-brand/40 bg-brand/5 text-brand";
  return (
    <Link href={href} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 font-bold transition hover:brightness-105 ${cls}`}>
      <Icon size={18} />
      <span className="flex-1">{text}</span>
      <ChevronRight size={16} />
    </Link>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4">
      <div className="mb-3 text-sm font-bold text-fg">{title}</div>
      {children}
    </div>
  );
}

function Funnel({ label, v, max, tone }: { label: string; v: number; max: number; tone: string }) {
  const pct = max > 0 ? Math.round((v / max) * 100) : 0;
  return (
    <div className="mb-2">
      <div className="mb-0.5 flex justify-between text-sm">
        <span className="font-semibold text-fg">{label}</span>
        <span className="text-muted">{v} ({pct}%)</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-panel-2">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${Math.max(pct, 2)}%` }} />
      </div>
    </div>
  );
}

function Bars({ data }: { data: { d: string; n: number }[] }) {
  const max = Math.max(1, ...data.map((x) => x.n));
  const total = data.reduce((s, x) => s + x.n, 0);
  return (
    <div>
      <div className="mb-2 text-xs text-muted">cəmi <b className="text-fg">{total}</b> · ən çox <b className="text-fg">{max}</b></div>
      <div className="flex h-24 items-end gap-[3px]">
        {data.map((x, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end" title={`${x.d}: ${x.n}`}>
            <span className={`text-[9px] font-bold leading-none ${x.n > 0 ? "text-fg" : "text-transparent"}`}>{x.n}</span>
            <div className={`mt-0.5 w-full rounded-sm bg-brand ${x.n === 0 ? "opacity-30" : ""}`}
              style={{ height: `${Math.max((x.n / max) * 100, x.n > 0 ? 6 : 3)}%` }} />
            <span className="mt-1 text-[9px] leading-none text-muted">{x.d.slice(8)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Quick({ href, label, desc }: { href: string; label: string; desc: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-line bg-panel p-4 transition hover:border-brand hover:bg-panel-2">
      <div className="flex items-center justify-between">
        <span className="font-extrabold text-fg group-hover:text-brand">{label}</span>
        <ChevronRight size={16} className="text-muted transition group-hover:translate-x-0.5" />
      </div>
      <div className="mt-1 text-xs text-muted">{desc}</div>
    </Link>
  );
}
