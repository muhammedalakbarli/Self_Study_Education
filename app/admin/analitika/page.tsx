"use client";

// Admin · Analitika — platforma statistikası: məzmun, istifadəçilər, liqa, rəylər.
// Yalnız is_admin() girə bilir. Yeni DB tələb etmir: mövcud mənbələrdən oxuyur
// (content tree, get_leaderboard RPC, league + task_feedback cədvəlləri).

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthUser } from "@/lib/useAuthUser";
import { checkIsAdmin } from "@/lib/adminApi";
import { createClient } from "@/lib/supabase/client";
import { loadLeaderboard, type LeaderRow } from "@/lib/leaderboard";
import { useContent } from "@/components/ContentProvider";
import { FEEDBACK_LABELS, type FeedbackCategory } from "@/lib/feedback";
import type { Subject, Task, TaskType } from "@/lib/types";
import { PageSkeleton } from "@/components/Skeleton";

const TIER_NAMES = ["Bürünc", "Gümüş", "Qızıl", "Platin", "Almaz"];
const TYPE_NAMES: Record<TaskType, string> = {
  multiple_choice: "Çoxseçimli",
  fill_blank: "Boşluq doldur",
  numeric: "Rəqəm",
  word_order: "Söz sırası",
  listening: "Dinləmə",
};

interface FbRow { task_id: string; category: string; resolved: boolean }

function allTasks(subjects: Subject[]): Task[] {
  return subjects.flatMap((s) =>
    s.units.flatMap((u) => u.lessons.flatMap((l) => [...l.tasks, ...(l.bonusTasks ?? [])])),
  );
}
function promptFor(subjects: Subject[], taskId: string): string | null {
  for (const s of subjects)
    for (const u of s.units)
      for (const l of u.lessons) {
        const t = [...l.tasks, ...(l.bonusTasks ?? [])].find((x) => x.id === taskId);
        if (t) return t.prompt;
      }
  return null;
}

export default function AdminAnalyticsPage() {
  const router = useRouter();
  const { user, ready } = useAuthUser();
  const { subjects } = useContent();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [leaders, setLeaders] = useState<LeaderRow[] | null>(null);
  const [tiers, setTiers] = useState<number[] | null>(null); // hər sətir bir istifadəçinin tier-i
  const [feedback, setFeedback] = useState<FbRow[] | null>(null);

  useEffect(() => {
    if (user) checkIsAdmin().then(setIsAdmin);
  }, [user]);
  useEffect(() => {
    if (isAdmin === false) router.replace("/dashboard");
  }, [isAdmin, router]);
  useEffect(() => {
    if (isAdmin !== true) return;
    loadLeaderboard(1000).then(setLeaders);
    const sb = createClient();
    sb.from("league").select("tier").then(({ data }) => setTiers((data ?? []).map((r) => r.tier as number)));
    sb.from("task_feedback").select("task_id,category,resolved").then(({ data }) => setFeedback((data as FbRow[]) ?? []));
  }, [isAdmin]);

  // ── Məzmun statistikası (DB yox — content tree-dən) ──
  const content = useMemo(() => {
    const tasks = allTasks(subjects);
    const byGrade = new Map<number, { subjects: number; lessons: number; tasks: number }>();
    const bySubject = new Map<string, number>(); // ad → tapşırıq sayı
    const byType = new Map<TaskType, number>();
    let units = 0;
    let lessons = 0;
    for (const s of subjects) {
      const g = byGrade.get(s.grade) ?? { subjects: 0, lessons: 0, tasks: 0 };
      g.subjects += 1;
      units += s.units.length;
      for (const u of s.units) {
        g.lessons += u.lessons.length;
        lessons += u.lessons.length;
        for (const l of u.lessons) {
          const n = l.tasks.length + (l.bonusTasks?.length ?? 0);
          g.tasks += n;
          bySubject.set(s.name, (bySubject.get(s.name) ?? 0) + n);
        }
      }
      byGrade.set(s.grade, g);
    }
    for (const t of tasks) byType.set(t.type, (byType.get(t.type) ?? 0) + 1);
    return {
      subjects: subjects.length,
      units,
      lessons,
      tasks: tasks.length,
      byGrade: [...byGrade.entries()].sort((a, b) => a[0] - b[0]),
      bySubject: [...bySubject.entries()].sort((a, b) => b[1] - a[1]),
      byType: [...byType.entries()].sort((a, b) => b[1] - a[1]),
    };
  }, [subjects]);

  if (!ready || !user || isAdmin !== true || !leaders || !tiers || !feedback) return <PageSkeleton />;

  const totalXp = leaders.reduce((n, l) => n + l.xp, 0);
  const avgXp = leaders.length ? Math.round(totalXp / leaders.length) : 0;
  const tierCounts = TIER_NAMES.map((_, i) => tiers.filter((t) => t === i).length);
  const openFb = feedback.filter((f) => !f.resolved).length;
  const fbByCat = (Object.keys(FEEDBACK_LABELS) as FeedbackCategory[]).map((c) => ({
    c,
    n: feedback.filter((f) => f.category === c).length,
  }));
  const topReported = [...feedback.reduce((m, f) => m.set(f.task_id, (m.get(f.task_id) ?? 0) + 1), new Map<string, number>())]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-4xl px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-fg">Admin · Analitika</h1>
          <div className="flex gap-3 text-sm text-muted">
            <Link href="/admin" className="hover:text-fg">Məzmun</Link>
            <Link href="/admin/feedback" className="hover:text-fg">Rəylər</Link>
          </div>
        </div>

        {/* Əsas göstəricilər */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="İstifadəçi (XP-li)" value={leaders.length} />
          <Stat label="Ümumi XP" value={totalXp} />
          <Stat label="Orta XP" value={avgXp} />
          <Stat label="Açıq rəy" value={openFb} />
        </div>

        {/* Məzmun */}
        <Section title="Məzmun">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Fənn" value={content.subjects} small />
            <Stat label="Bölmə" value={content.units} small />
            <Stat label="Dərs" value={content.lessons} small />
            <Stat label="Tapşırıq" value={content.tasks} small />
          </div>
          <Table
            head={["Sinif", "Fənn", "Dərs", "Tapşırıq"]}
            rows={content.byGrade.map(([g, v]) => [`${g}-ci sinif`, v.subjects, v.lessons, v.tasks])}
          />
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <Table title="Fənn üzrə tapşırıq" head={["Fənn", "Say"]} rows={content.bySubject.map(([n, c]) => [n, c])} />
            <Table
              title="Tapşırıq növü"
              head={["Növ", "Say"]}
              rows={content.byType.map(([t, c]) => [TYPE_NAMES[t] ?? t, c])}
            />
          </div>
        </Section>

        {/* İstifadəçilər + liqa */}
        <Section title="İstifadəçilər və liqa">
          <Table
            title="Liqa pillə bölgüsü"
            head={["Pillə", "İstifadəçi"]}
            rows={TIER_NAMES.map((n, i) => [n, tierCounts[i]])}
          />
          <Table
            title="Top 10 istifadəçi (ümumi XP)"
            head={["#", "Ad", "XP"]}
            rows={leaders.slice(0, 10).map((l, i) => [i + 1, l.name, l.xp])}
          />
        </Section>

        {/* Rəylər */}
        <Section title="Rəylər">
          <div className="grid gap-4 sm:grid-cols-2">
            <Table
              title="Kateqoriya üzrə"
              head={["Kateqoriya", "Say"]}
              rows={fbByCat.map(({ c, n }) => [FEEDBACK_LABELS[c], n])}
            />
            <Table
              title="Ən çox şikayət olunan suallar"
              head={["Sual", "Say"]}
              rows={topReported.map(([id, n]) => [promptFor(subjects, id) ?? id, n])}
            />
          </div>
        </Section>
      </main>
    </div>
  );
}

function Stat({ label, value, small }: { label: string; value: number; small?: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4">
      <div className={`font-extrabold text-fg ${small ? "text-xl" : "text-2xl"}`}>
        {value.toLocaleString("az-AZ")}
      </div>
      <div className="mt-0.5 text-xs text-muted">{label}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="mb-2 text-lg font-bold text-fg">{title}</h2>
      {children}
    </div>
  );
}

function Table({
  title,
  head,
  rows,
}: {
  title?: string;
  head: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
      {title && <div className="border-b border-line px-4 py-2 text-sm font-bold text-fg">{title}</div>}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-muted">
            {head.map((h, i) => (
              <th key={i} className={`px-4 py-2 font-semibold ${i > 0 ? "text-right" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={head.length} className="px-4 py-3 text-center text-xs text-muted">Məlumat yoxdur</td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={i} className="border-t border-line">
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`px-4 py-2 ${j > 0 ? "text-right font-semibold text-fg" : "text-muted"} ${j === 0 ? "max-w-[240px] truncate" : ""}`}
                  >
                    {typeof c === "number" ? c.toLocaleString("az-AZ") : c}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
