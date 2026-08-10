"use client";

// Əsas naviqasiya: desktop-da sol yan panel, mobil-də alt panel.
// Bölmələr: Öyrən · Praktika et · Profil · Daha çoxu.

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LogOut,
  Settings,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Logo from "./Logo";
import {
  IconLearn,
  IconPractice,
  IconLeague,
  IconProfile,
  IconMore,
} from "./NavIcons";
import { signOut } from "@/lib/auth";
import { checkIsAdmin } from "@/lib/adminApi";
import { loadDueTaskIds } from "@/lib/srs";
import { useT } from "@/lib/i18n";

// Hər bölmənin öz rəngi — uşaqlar üçün rəngarəng, cəlbedici naviqasiya.
// icon: həmişə rəngli ikon; activeBg/activeText: aktiv olanda rəngli fon+mətn.
// Hər bölmənin öz rəngli qrafik ikonu (NavIcons) + aktiv fon/mətn rəngi.
const NAV = [
  {
    href: "/dashboard",
    key: "nav.learn",
    Icon: IconLearn,
    match: ["/dashboard", "/subjects", "/lessons"],
    activeBg: "bg-indigo-500/15",
    activeText: "text-indigo-600 dark:text-indigo-400",
  },
  {
    href: "/praktika",
    key: "nav.practice",
    Icon: IconPractice,
    match: ["/praktika"],
    activeBg: "bg-emerald-500/15",
    activeText: "text-emerald-600 dark:text-emerald-400",
  },
  {
    href: "/liqa",
    key: "nav.league",
    Icon: IconLeague,
    match: ["/liqa"],
    activeBg: "bg-amber-500/15",
    activeText: "text-amber-600 dark:text-amber-400",
  },
  {
    href: "/profil",
    key: "nav.profile",
    Icon: IconProfile,
    match: ["/profil"],
    activeBg: "bg-pink-500/15",
    activeText: "text-pink-600 dark:text-pink-400",
  },
  {
    href: "/daha",
    key: "nav.more",
    Icon: IconMore,
    match: ["/daha"],
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
          {NAV.map(({ href, key, Icon, match, activeBg, activeText }) => {
            const label = t(key);
            const on = isActive(match);
            const cls = `flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-extrabold transition ${
              on ? `${activeBg} ${activeText}` : "text-muted hover:bg-panel-2 hover:text-fg"
            }`;
            const iconEl = (
              <span className="relative">
                <Icon size={28} />
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
        {NAV.map(({ href, key, Icon, match, activeText }) => {
          const on = isActive(match);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1 text-[11px] font-extrabold transition ${
                on ? activeText : "text-muted"
              }`}
            >
              <span className={`relative transition ${on ? "" : "opacity-70"}`}>
                <Icon size={30} />
                {showDot(href, on) && (
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-panel" />
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
