"use client";

// Əsas naviqasiya: desktop-da sol yan panel, mobil-də alt panel.
// Bölmələr: Öyrən · Praktika et · Profil · Daha çoxu.

import Link from "next/link";
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
} from "lucide-react";
import Logo from "./Logo";
import { signOut } from "@/lib/auth";
import { useT } from "@/lib/i18n";

const NAV = [
  { href: "/dashboard", key: "nav.learn", Icon: House, match: ["/dashboard", "/subjects", "/lessons"] },
  { href: "/praktika", key: "nav.practice", Icon: Dumbbell, match: ["/praktika"] },
  { href: "/liqa", key: "nav.league", Icon: Trophy, match: ["/liqa"] },
  { href: "/profil", key: "nav.profile", Icon: User, match: ["/profil"] },
  { href: "/daha", key: "nav.more", Icon: LayoutGrid, match: ["/daha"] },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useT();

  const isActive = (match: string[]) =>
    match.some((m) => pathname === m || pathname.startsWith(m + "/"));

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
          <span className="text-lg font-extrabold text-fg">Bilik Yolu</span>
        </Link>

        <nav className="mt-8 flex flex-col gap-1.5">
          {NAV.map(({ href, key, Icon, match }) => {
            const label = t(key);
            const on = isActive(match);
            const cls = `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
              on ? "bg-brand/10 text-brand" : "text-muted hover:bg-panel-2 hover:text-fg"
            }`;

            // "Daha çoxu" — üzərinə gələndə yan flyout (Ayarlar, Yardım mərkəzi)
            if (href === "/daha") {
              return (
                <div key={href} className="group relative">
                  <Link href={href} className={`${cls} justify-between`}>
                    <span className="flex items-center gap-3">
                      <Icon size={22} strokeWidth={on ? 2.6 : 2.2} />
                      {label}
                    </span>
                    <ChevronRight size={16} />
                  </Link>
                  {/* Flyout */}
                  <div className="invisible absolute left-full top-0 z-40 pl-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="w-56 rounded-2xl border border-line bg-panel p-1.5 shadow-xl">
                      <FlyoutLink href="/ayarlar" Icon={Settings} label={t("nav.settings")} />
                      <FlyoutLink href="/yardim" Icon={HelpCircle} label={t("nav.help")} />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={href} href={href} className={cls}>
                <Icon size={22} strokeWidth={on ? 2.6 : 2.2} />
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
        {NAV.map(({ href, key, Icon, match }) => {
          const on = isActive(match);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1.5 text-[11px] font-bold ${
                on ? "text-brand" : "text-muted"
              }`}
            >
              <Icon size={22} strokeWidth={on ? 2.6 : 2.2} />
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
