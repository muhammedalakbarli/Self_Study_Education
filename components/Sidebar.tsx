"use client";

// Əsas naviqasiya: desktop-da sol yan panel, mobil-də alt panel.
// Bölmələr: Öyrən · Praktika et · Profil · Daha çoxu.

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogOut,
  Settings,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Dumbbell,
  User,
  Target,
  ShoppingBag,
} from "lucide-react";
import Logo from "./Logo";
import {
  IconLearn,
  IconPractice,
  IconLeague,
  IconProfile,
  IconMore,
  IconQuests,
  IconShop,
} from "./NavIcons";
import { signOut } from "@/lib/auth";
import { checkIsAdmin } from "@/lib/adminApi";
import { loadDueTaskIds } from "@/lib/srs";
import { useT } from "@/lib/i18n";

// Hər bölmənin öz rəngi — uşaqlar üçün rəngarəng, cəlbedici naviqasiya.
// icon: həmişə rəngli ikon; activeBg/activeText: aktiv olanda rəngli fon+mətn.
// Mobil alt panel — Duolingo kimi əsas bölmələr (Ayarlar/Yardım Profil içindədir).
const MOBILE_HREFS = ["/dashboard", "/praktika", "/liqa", "/gorevler", "/magaza", "/profil"];

// Hər bölmənin öz rəngli qrafik ikonu (NavIcons) + aktiv fon/mətn rəngi.
const NAV = [
  {
    href: "/dashboard",
    key: "nav.learn",
    Icon: IconLearn,
    match: ["/dashboard", "/subjects", "/lessons"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
  {
    href: "/praktika",
    key: "nav.practice",
    Icon: IconPractice,
    match: ["/praktika"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
  {
    href: "/liqa",
    key: "nav.league",
    Icon: IconLeague,
    match: ["/liqa"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
  {
    href: "/gorevler",
    key: "nav.quests",
    Icon: IconQuests,
    match: ["/gorevler"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
  {
    href: "/magaza",
    key: "nav.shop",
    Icon: IconShop,
    match: ["/magaza"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
  {
    href: "/profil",
    key: "nav.profile",
    Icon: IconProfile,
    match: ["/profil"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
  {
    href: "/daha",
    key: "nav.more",
    Icon: IconMore,
    match: ["/daha"],
    activeBg: "bg-brand/12",
    activeText: "text-brand",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useT();
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasDue, setHasDue] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    checkIsAdmin().then(setIsAdmin);
  }, []);
  // Səhifə dəyişəndə mobil "Daha çoxu" vərəqini bağla.
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);
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
          <span className="text-lg font-extrabold text-brand">
            Imparo
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

      {/* Mobil "Daha çoxu" vərəqi — alt paneldən yuxarı açılır */}
      <AnimatePresence>
        {moreOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMoreOpen(false)}
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              aria-hidden
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              className="fixed inset-x-0 bottom-[68px] z-40 mx-3 rounded-3xl border border-line bg-panel p-2 shadow-2xl lg:hidden"
            >
              <SheetLink href="/praktika" Icon={Dumbbell} label={t("nav.practice")} dot={hasDue} onNavigate={() => setMoreOpen(false)} />
              <SheetLink href="/gorevler" Icon={Target} label={t("nav.quests")} onNavigate={() => setMoreOpen(false)} />
              <SheetLink href="/magaza" Icon={ShoppingBag} label={t("nav.shop")} onNavigate={() => setMoreOpen(false)} />
              <SheetLink href="/profil" Icon={User} label={t("nav.profile")} onNavigate={() => setMoreOpen(false)} />
              <SheetLink href="/ayarlar" Icon={Settings} label={t("nav.settings")} onNavigate={() => setMoreOpen(false)} />
              <SheetLink href="/yardim" Icon={HelpCircle} label={t("nav.help")} onNavigate={() => setMoreOpen(false)} />
              {isAdmin && (
                <SheetLink href="/admin" Icon={ShieldCheck} label="Admin" onNavigate={() => setMoreOpen(false)} />
              )}
              <button
                type="button"
                onClick={logout}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-red-500 transition hover:bg-red-500/10"
              >
                <LogOut size={20} /> {t("nav.logout")}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobil — alt panel: yalnız ikonlar (yazısız). "Daha çoxu" vərəq açır. */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-line bg-panel py-2 lg:hidden">
        {NAV.filter(({ href }) => MOBILE_HREFS.includes(href)).map(
          ({ href, Icon, match, activeBg }) => {
            const isMore = href === "/daha";
            const on = isMore ? moreOpen : isActive(match);
            const iconSpan = (
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                  on ? activeBg : "opacity-80"
                }`}
              >
                <Icon size={34} />
                {!isMore && showDot(href, on) && (
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-panel" />
                )}
                {/* Daha çoxu içindəki Praktika üçün diqqət nöqtəsi */}
                {isMore && hasDue && !moreOpen && (
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-panel" />
                )}
              </span>
            );
            const aria = t(NAV.find((n) => n.href === href)!.key);
            return isMore ? (
              <button
                key={href}
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-label={aria}
                className="flex flex-1 flex-col items-center"
              >
                {iconSpan}
              </button>
            ) : (
              <Link
                key={href}
                href={href}
                aria-label={aria}
                className="flex flex-1 flex-col items-center"
              >
                {iconSpan}
              </Link>
            );
          },
        )}
      </nav>
    </>
  );
}

// Mobil "Daha çoxu" vərəqindəki sətir.
function SheetLink({
  href,
  Icon,
  label,
  dot,
  onNavigate,
}: {
  href: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  dot?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-fg transition hover:bg-panel-2"
    >
      <span className="relative">
        <Icon size={22} className="text-muted" />
        {dot && (
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-panel" />
        )}
      </span>
      <span className="flex-1">{label}</span>
      <ChevronRight size={18} className="text-muted" />
    </Link>
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
