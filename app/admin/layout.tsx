"use client";

// Admin çərçivəsi — bütün /admin/* səhifələri üçün vahid yan-panel (peşəkar, kohesiv).
// Aktiv bölmə vurğulanır; müəllim müraciətlərində qırmızı badge.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard, BookOpen, Users, BarChart3, School,
  GraduationCap, Megaphone, MessageSquare, ExternalLink,
  TrendingUp, Gauge, ShieldAlert, ShieldCheck,
} from "lucide-react";
import { Toaster } from "sonner";
import Logo from "@/components/Logo";
import { ConfirmProvider } from "@/components/admin/ConfirmDialog";
import { checkIsAdmin, adminListTeacherRequests } from "@/lib/adminApi";

const NAV = [
  { href: "/admin/panel", label: "Panel", Icon: LayoutDashboard },
  { href: "/admin", label: "Məzmun", Icon: BookOpen, exact: true },
  { href: "/admin/istifadeciler", label: "İstifadəçilər", Icon: Users },
  { href: "/admin/analitika", label: "Analitika", Icon: BarChart3 },
  { href: "/admin/gelir", label: "Gəlir", Icon: TrendingUp },
  { href: "/admin/mezmun-performans", label: "Performans", Icon: Gauge },
  { href: "/admin/mekteb", label: "Məktəb", Icon: School },
  { href: "/admin/muellimler", label: "Müəllimlər", Icon: GraduationCap, badge: "teachers" as const },
  { href: "/admin/elan", label: "Elanlar", Icon: Megaphone },
  { href: "/admin/feedback", label: "Rəylər", Icon: MessageSquare },
  { href: "/admin/audit", label: "Audit log", Icon: ShieldAlert },
  { href: "/admin/adminler", label: "Adminlər", Icon: ShieldCheck },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [pending, setPending] = useState(0);

  useEffect(() => { checkIsAdmin().then(setIsAdmin); }, []);
  useEffect(() => {
    if (isAdmin) adminListTeacherRequests().then((r) => setPending(r.length)).catch(() => {});
  }, [isAdmin, pathname]);

  // Admin deyilsə layout çərçivəsi göstərmə (səhifələr özləri yönləndirir).
  if (!isAdmin) return <>{children}</>;

  const isActive = (item: (typeof NAV)[number]) =>
    item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <ConfirmProvider>
    <div className="min-h-screen bg-ink">
      <Toaster richColors position="top-center" toastOptions={{ style: { fontWeight: 600 } }} />
      {/* Yan panel — desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-line bg-panel px-3 py-4 lg:flex">
        <Link href="/admin/panel" className="mb-4 flex items-center gap-2 px-2">
          <Logo size={26} />
          <span className="text-base font-extrabold text-fg">Admin</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((item) => {
            const on = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold transition ${
                  on ? "bg-brand/10 text-brand" : "text-muted hover:bg-panel-2 hover:text-fg"
                }`}
              >
                <item.Icon size={18} />
                <span className="flex-1">{item.label}</span>
                {item.badge === "teachers" && pending > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-extrabold text-white">
                    {pending}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <Link href="/dashboard" className="mt-2 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-muted hover:text-fg">
          <ExternalLink size={16} /> Sayta qayıt
        </Link>
      </aside>

      {/* Üst panel — mobil (yatay scroll) */}
      <div className="sticky top-0 z-30 flex items-center gap-1 overflow-x-auto border-b border-line bg-panel px-3 py-2 lg:hidden">
        {NAV.map((item) => {
          const on = isActive(item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold ${
                on ? "bg-brand/10 text-brand" : "text-muted"
              }`}
            >
              <item.Icon size={14} /> {item.label}
              {item.badge === "teachers" && pending > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-extrabold text-white">
                  {pending}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Məzmun sahəsi */}
      <div className="lg:pl-56">{children}</div>
    </div>
    </ConfirmProvider>
  );
}
