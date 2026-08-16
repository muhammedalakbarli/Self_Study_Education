"use client";

// Admin · Audit log — kim hansı admin əməliyyatını nə vaxt etdi (hesabatlılıq).

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { checkIsAdmin, adminAuditList, type AdminAuditRow } from "@/lib/adminApi";
import { PageSkeleton } from "@/components/Skeleton";

const LABEL: Record<string, string> = {
  grant_plus: "Plus verdi", revoke_plus: "Plus aldı", set_bot: "Bot işarələdi",
  unset_bot: "Bot işarəsini götürdü", delete_user: "Hesab sildi",
};
const TONE: Record<string, string> = {
  delete_user: "text-red-500", grant_plus: "text-amber-500", revoke_plus: "text-muted",
};

export default function AdminAuditPage() {
  const router = useRouter();
  const { user, ready } = useAuthUser();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<AdminAuditRow[] | null>(null);

  useEffect(() => { if (user) checkIsAdmin().then(setIsAdmin); }, [user]);
  useEffect(() => { if (isAdmin === false) router.replace("/dashboard"); }, [isAdmin, router]);
  useEffect(() => { if (isAdmin === true) adminAuditList(200).then(setRows); }, [isAdmin]);

  if (!ready || !user || isAdmin !== true || !rows) return <PageSkeleton />;

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <h1 className="flex items-center gap-2 text-2xl font-extrabold text-fg">
        <ShieldAlert size={22} className="text-brand" /> Audit log
      </h1>
      <p className="mt-1 text-sm text-muted">Bütün həssas admin əməliyyatları (Plus, bot, hesab silmə).</p>

      {rows.length === 0 ? (
        <p className="mt-6 text-muted">Hələ qeyd yoxdur.</p>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-panel">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-4 py-3 font-bold">Tarix</th>
                <th className="px-3 py-3 font-bold">Admin</th>
                <th className="px-3 py-3 font-bold">Əməliyyat</th>
                <th className="px-3 py-3 font-bold">Hədəf / detal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-line/60 last:border-b-0">
                  <td className="whitespace-nowrap px-4 py-2.5 text-muted">
                    {new Date(r.created_at).toLocaleString("az-AZ", { dateStyle: "short", timeStyle: "short" })}
                  </td>
                  <td className="max-w-[180px] truncate px-3 py-2.5 text-fg">{r.admin_email ?? "—"}</td>
                  <td className={`whitespace-nowrap px-3 py-2.5 font-bold ${TONE[r.action] ?? "text-fg"}`}>
                    {LABEL[r.action] ?? r.action}
                  </td>
                  <td className="max-w-[240px] truncate px-3 py-2.5 text-muted">{r.detail ?? r.target_id ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
