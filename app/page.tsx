"use client";

// Landing (marketing) səhifəsi — Duolingo-dan ilham (iki-sütunlu hero + növbələşən
// bölmələr), amma öz indigo brendimiz və Ulduz mascotu ilə.

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { useContent } from "@/components/ContentProvider";
import { useT } from "@/lib/i18n";
import Logo from "@/components/Logo";
import Mascot from "@/components/Mascot";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function LandingPage() {
  const router = useRouter();
  const t = useT();
  const { subjects } = useContent();

  useEffect(() => {
    getCurrentUser().then((u) => {
      if (u) router.replace("/dashboard");
    });
  }, [router]);

  const totalLessons = subjects.reduce(
    (n, s) => n + s.units.reduce((m, u) => m + u.lessons.length, 0),
    0,
  );
  const totalTasks = subjects.reduce(
    (n, s) =>
      n +
      s.units.reduce(
        (m, u) =>
          m +
          u.lessons.reduce(
            (k, l) => k + l.tasks.length + (l.bonusTasks?.length ?? 0),
            0,
          ),
        0,
      ),
    0,
  );

  return (
    <div className="min-h-screen bg-ink">
      {/* Naviqasiya */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="text-lg font-extrabold text-fg">Bilik Yolu</span>
        </div>
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <Link
            href="/login"
            className="rounded-2xl border-2 border-line px-4 py-2 text-sm font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
          >
            {t("home.login")}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* Hero — iki sütun */}
        <section className="grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-2">
          {/* Ulduz */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative flex aspect-square w-64 items-center justify-center rounded-full bg-gradient-to-br from-brand/15 to-accent/20 sm:w-80">
              <Mascot size={210} />
              <span className="absolute left-2 top-6 rounded-2xl bg-accent px-3 py-1.5 text-sm font-extrabold text-white shadow-lg sm:left-0">
                +10 XP
              </span>
              <span className="absolute bottom-8 right-1 rounded-2xl bg-brand px-3 py-1.5 text-sm font-extrabold text-white shadow-lg sm:right-0">
                {t("home.aferin")}
              </span>
            </div>
          </div>

          {/* Mətn + CTA */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
              {t("home.badge")}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-fg sm:text-5xl lg:text-6xl">
              {t("home.hero1")}
              <span className="text-brand">{t("home.hero2")}</span>
              {t("home.hero3")}
            </h1>
            <p className="mt-5 text-lg text-muted lg:max-w-md">{t("home.heroBody")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/signup"
                className="rounded-2xl bg-brand px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
              >
                {t("home.ctaStart")}
              </Link>
              <Link
                href="/login"
                className="rounded-2xl border-2 border-line bg-panel px-8 py-4 text-lg font-extrabold text-fg btn-pop btn-pop-ghost hover:border-brand"
              >
                {t("home.haveAccount")}
              </Link>
            </div>
          </div>
        </section>

        {/* Statistika */}
        <section className="grid grid-cols-3 gap-4 pb-6">
          {[
            { n: subjects.length, l: t("home.stat.subjects") },
            { n: totalLessons, l: t("home.stat.lessons") },
            { n: `${totalTasks}+`, l: t("home.stat.tasks") },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-line bg-panel py-5 text-center">
              <div className="text-3xl font-extrabold text-brand">{s.n}</div>
              <div className="text-sm text-muted">{s.l}</div>
            </div>
          ))}
        </section>

        {/* Niyə Bilik Yolu — növbələşən bölmələr */}
        <section className="space-y-14 py-14 sm:space-y-20">
          <Row
            reverse={false}
            tag={t("home.r1.tag")}
            title={t("home.r1.title")}
            body={t("home.r1.body")}
            media={<GameMedia />}
          />
          <Row
            reverse={true}
            tag={t("home.r2.tag")}
            title={t("home.r2.title")}
            body={t("home.r2.body")}
            media={<PathMedia />}
          />
          <Row
            reverse={false}
            tag={t("home.r3.tag")}
            title={t("home.r3.title")}
            body={t("home.r3.body")}
            media={<SubjectsMedia />}
          />
        </section>

        {/* Son CTA */}
        <section className="my-8 rounded-3xl bg-brand px-6 py-14 text-center">
          <div className="flex justify-center">
            <Mascot size={96} mood="celebrate" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white">{t("home.finalTitle")}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">{t("home.finalBody")}</p>
          <Link
            href="/signup"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-brand btn-pop [--pop:#c9c2f5] hover:bg-white/90"
          >
            {t("home.ctaStart")}
          </Link>
        </section>
      </main>

      {/* Alt */}
      <footer className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted">
        <div className="flex items-center justify-center gap-2">
          <Logo size={22} />
          <span className="font-bold text-fg">Bilik Yolu</span>
        </div>
        <p className="mt-2">{t("auth.tagline")}</p>
      </footer>
    </div>
  );
}

// Növbələşən bölmə sətri (illüstrasiya + mətn)
function Row({
  media,
  tag,
  title,
  body,
  reverse,
}: {
  media: ReactNode;
  tag: string;
  title: string;
  body: string;
  reverse: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-8 lg:gap-14 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-1/2">{media}</div>
      <div className="w-full text-center lg:w-1/2 lg:text-left">
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand">
          {tag}
        </span>
        <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">{title}</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}

// Panel: oyunlaşdırma
function GameMedia() {
  const t = useT();
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-line bg-brand/5">
      <Mascot size={150} mood="celebrate" />
      <span className="absolute left-6 top-6 rounded-2xl bg-accent px-3 py-1.5 text-sm font-extrabold text-white shadow">
        +10 XP
      </span>
      <span className="absolute bottom-6 right-6 rounded-2xl bg-brand px-3 py-1.5 text-sm font-extrabold text-white shadow">
        {t("home.streakBadge")}
      </span>
    </div>
  );
}

// Panel: öyrənmə yolu (mini path)
function PathMedia() {
  const nodes = [
    { done: true },
    { done: true },
    { done: false, current: true },
    { done: false },
  ];
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-line bg-accent/10">
      <div className="flex items-center">
        {nodes.map((n, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold ${
                n.done
                  ? "bg-brand text-white"
                  : n.current
                    ? "bg-panel text-brand ring-4 ring-brand"
                    : "bg-panel-2 text-muted ring-2 ring-line"
              }`}
            >
              {n.done ? <Check size={22} strokeWidth={3} /> : i + 1}
            </div>
            {i < nodes.length - 1 && (
              <div className={`h-1.5 w-8 ${n.done ? "bg-brand" : "bg-line"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Panel: fənlər
function SubjectsMedia() {
  const { subjects } = useContent();
  return (
    <div className="flex aspect-[4/3] flex-col justify-center gap-3 rounded-3xl border border-line bg-brand/5 p-8">
      {subjects.map((s) => (
        <div
          key={s.slug}
          className="flex items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
            {s.icon}
          </span>
          <span className="font-bold text-fg">{s.name}</span>
        </div>
      ))}
    </div>
  );
}
