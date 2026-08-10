"use client";

// Əsas naviqasiya: desktop-da sol yan panel, mobil-də alt panel.
// Bölmələr: Öyrən · Praktika et · Profil · Daha çoxu.

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  Dumbbell,
  Trophy,
  User,
  LayoutGrid,
  LogOut,
  Settings,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Logo from "./Logo";
import { signOut } from "@/lib/auth";
import { checkIsAdmin } from "@/lib/adminApi";
import { loadDueTaskIds } from "@/lib/srs";
import { useT } from "@/lib/i18n";

// Hər bölmənin öz rəngi — uşaqlar üçün rəngarəng, cəlbedici naviqasiya.
// icon: həmişə rəngli ikon; activeBg/activeText: aktiv olanda rəngli fon+mətn.
const NAV = [
  {
    href: "/dashboard",
    key: "nav.learn",
    Icon: House,
    match: ["/dashboard", "/subjects", "/lessons"],
    icon: "text-indigo-500",
    activeBg: "bg-indigo-500/15",
    activeText: "text-indigo-600 dark:text-indigo-400",
  },
  {
    href: "/praktika",
    key: "nav.practice",
    Icon: Dumbbell,
    match: ["/praktika"],
    icon: "text-emerald-500",
    activeBg: "bg-emerald-500/15",
    activeText: "text-emerald-600 dark:text-emerald-400",
  },
  {
    href: "/liqa",
    key: "nav.league",
    Icon: Trophy,
    match: ["/liqa"],
    icon: "text-amber-500",
    activeBg: "bg-amber-500/15",
    activeText: "text-amber-600 dark:text-amber-400",
  },
  {
    href: "/profil",
    key: "nav.profile",
    Icon: User,
    match: ["/profil"],
    icon: "text-pink-500",
    activeBg: "bg-pink-500/15",
    activeText: "text-pink-600 dark:text-pink-400",
  },
  {
    href: "/daha",
    key: "nav.more",
    Icon: LayoutGrid,
    match: ["/daha"],
    icon: "text-sky-500",
    activeBg: "bg-sky-500/15",
    activeText: "text-sky-600 dark:text-sky-400",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useT();
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasDue, setHasDue] = useState(false);

  useEffect(() => {
    checkIsAdmin().then(setIsAdmin);
  }, []);
  // Təkrar vaxtı çatan tapşırıq varsa Praktika üzərində qırmızı nöqtə göstər.
  useEffect(() => {
    loadDueTaskIds()
      .then((ids) => setHasDue(ids.length > 0))
      .catch(() => {});
  }, [pathname]);

  const isActive = (match: string[]) =>
    match.some((m) => pathname === m || pathname.startsWith(m + "/"));

  // Praktika ikonunun küncündə "diqqət" nöqtəsi (təkrar var və o səhifədə deyil).
  const showDot = (href: string, on: boolean) =>
    href === "/praktika" && hasDue && !on;

  async function logout() {
    await signOut();
    router.replace("/");
  }

  return (
    <>
      {/* Desktop — sol panel */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-line bg-panel px-3 py-5 lg:flex">
        <Link href="/dashboard" className="flex items-center gap-2.5 px-2">
          <Logo size={32} />
          <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-lg font-extrabold text-transparent">
            Bilik Yolu
          </span>
        </Link>

        <nav className="mt-8 flex flex-col gap-1.5">
          {NAV.map(({ href, key, Icon, match, icon, activeBg, activeText }) => {
            const label = t(key);
            const on = isActive(match);
            const cls = `flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-extrabold transition ${
              on ? `${activeBg} ${activeText}` : "text-muted hover:bg-panel-2 hover:text-fg"
            }`;
            const iconEl = (
              <span className="relative">
                <Icon size={22} strokeWidth={on ? 2.8 : 2.4} className={icon} />
                {showDot(href, on) && (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-panel" />
                )}
              </span>
            );

            // "Daha çoxu" — üzərinə gələndə yan flyout (Ayarlar, Yardım mərkəzi)
            if (href === "/daha") {
              return (
                <div key={href} className="group relative">
                  <Link href={href} className={`${cls} justify-between`}>
                    <span className="flex items-center gap-3">
                      {iconEl}
                      {label}
                    </span>
                    <ChevronRight size={16} />
                  </Link>
                  {/* Flyout */}
                  <div className="invisible absolute left-full top-0 z-40 pl-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="w-56 rounded-2xl border border-line bg-panel p-1.5 shadow-xl">
                      <FlyoutLink href="/ayarlar" Icon={Settings} label={t("nav.settings")} />
                      <FlyoutLink href="/yardim" Icon={HelpCircle} label={t("nav.help")} />
                      {isAdmin && (
                        <FlyoutLink href="/admin" Icon={ShieldCheck} label="Admin" />
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={href} href={href} className={cls}>
                {iconEl}
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={logout}
          className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-muted transition hover:bg-panel-2 hover:text-fg"
        >
          <LogOut size={20} strokeWidth={2.2} />
          {t("nav.logout")}
        </button>
      </aside>

      {/* Mobil — alt panel */}
      <nav className="fixed inset-x-0 bottom-0 z-30 flex justify-around border-t border-line bg-panel py-1.5 lg:hidden">
        {NAV.map(({ href, key, Icon, match, icon, activeBg, activeText }) => {
          const on = isActive(match);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[11px] font-extrabold transition ${
                on ? activeText : "text-muted"
              }`}
            >
              <span
                className={`relative flex h-9 w-9 items-center justify-center rounded-2xl transition ${
                  on ? activeBg : ""
                }`}
              >
                <Icon size={22} strokeWidth={on ? 2.8 : 2.4} className={icon} />
                {showDot(href, on) && (
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-panel" />
                )}
              </span>
              {t(key)}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

function FlyoutLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-muted transition hover:bg-panel-2 hover:text-fg"
    >
      <Icon size={20} />
      {label}
    </Link>
  );
}
