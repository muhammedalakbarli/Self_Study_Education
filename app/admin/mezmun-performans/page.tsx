"use client";

// Admin · Məzmun performansı — dərs üzrə tamamlama və öyrənən sayı (ən çox/ən az).

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, ArrowUpDown } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { checkIsAdmin, adminLessonStats, type AdminLessonStat } from "@/lib/adminApi";
import { PageSkeleton } from "@/components/Skeleton";

export default function AdminContentPerfPage() {
  const router = useRouter();
  const { user, ready } = useAuthUser();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<AdminLessonStat[] | null>(null);
  const [asc, setAsc] = useState(false);
  const [grade, setGrade] = useState<number | "all">("all");

  useEffect(() => { if (user) checkIsAdmin().then(setIsAdmin); }, [user]);
  useEffect(() => { if (isAdmin === false) router.replace("/dashboard"); }, [isAdmin, router]);
  useEffect(() => { if (isAdmin === true) adminLessonStats(500).then(setRows); }, [isAdmin]);

  const grades = useMemo(
    () => [...new Set((rows ?? []).map((r) => r.grade))].sort((a, b) => a - b),
    [rows],
  );
  const filtered = useMemo(() => {
    let out = [...(rows ?? [])];
    if (grade !== "all") out = out.filter((r) => r.grade === grade);
    out.sort((a, b) => (asc ? Number(a.completions) - Number(b.completions) : Number(b.completions) - Number(a.completions)));
    return out;
  }, [rows, grade, asc]);

  if (!ready || !user || isAdmin !== true || !rows) return <PageSkeleton />;

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <h1 className="flex items-center gap-2 text-2xl font-extrabold text-fg">
        <BookOpen size={22} className="text-brand" /> Məzmun performansı
      </h1>
      <p className="mt-1 text-sm text-muted">Hansı dərslər çox/az tamamlanır — zəif nöqtələri tap.</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value === "all" ? "all" : Number(e.target.value))}
          className="rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-semibold text-fg"
        >
          <option value="all">Bütün siniflər</option>
          {grades.map((g) => <option key={g} value={g}>{g}-ci sinif</option>)}
        </select>
        <button
          onClick={() => setAsc((v) => !v)}
          className="flex items-center gap-1.5 rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-bold text-fg hover:border-brand"
        >
          <ArrowUpDown size={15} /> {asc ? "Ən az tamamlanan" : "Ən çox tamamlanan"}
        </button>
        <span className="text-sm text-muted">{filtered.length} dərs</span>
      </div>

      <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-panel">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
              <th className="px-4 py-3 font-bold">Dərs</th>
              <th className="px-3 py-3 font-bold">Fənn</th>
              <th className="px-3 py-3 text-right font-bold">Tamamlanma</th>
              <th className="px-3 py-3 text-right font-bold">Öyrənən</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.lesson_id} className="border-b border-line/60 last:border-b-0">
                <td className="max-w-[240px] truncate px-4 py-2.5 font-semibold text-fg">{r.title}</td>
                <td className="whitespace-nowrap px-3 py-2.5 text-muted">{r.subject} · {r.grade}</td>
                <td className="px-3 py-2.5 text-right font-bold text-brand">{Number(r.completions)}</td>
                <td className="px-3 py-2.5 text-right text-muted">{Number(r.learners)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
