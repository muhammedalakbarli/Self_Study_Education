"use client";

// Landing (marketing) səhifəsi — məhsulu izah edir, sonra giriş/qeydiyyata yönləndirir.
// Artıq daxil olmuş istifadəçi birbaşa dashboard-a keçir.

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Target, Sparkles, GraduationCap } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { subjects } from "@/lib/content";
import Logo from "@/components/Logo";
import Mascot from "@/components/Mascot";

export default function LandingPage() {
  const router = useRouter();

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

  const features = [
    {
      Icon: Target,
      title: "Öz sürətinlə",
      body: "Hər şagird öz tempi ilə irəliləyir — bir dərs bitəndə növbəti açılır.",
    },
    {
      Icon: Sparkles,
      title: "Oyun kimi",
      body: "XP qazan, seriyanı qoru, layihələri tamamla — öyrənmək əyləncəli olur.",
    },
    {
      Icon: GraduationCap,
      title: "Məktəb proqramı",
      body: "5-ci sinif kurikulumuna uyğun: hər mövzu izah + tapşırıqlarla.",
    },
  ];

  return (
    <div className="min-h-screen bg-ink">
      {/* Naviqasiya */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="text-lg font-extrabold text-fg">Bilik Yolu</span>
        </div>
        <Link
          href="/login"
          className="rounded-2xl border-2 border-line px-4 py-2 text-sm font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
        >
          Daxil ol
        </Link>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-5">
        <section className="flex flex-col items-center py-14 text-center sm:py-20">
          <Mascot size={96} />
          <span className="mt-5 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            Azərbaycan məktəbliləri üçün · 5-ci sinif
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-fg sm:text-6xl">
            Öyrənməyi{" "}
            <span className="text-brand">əyləncəyə</span> çevir
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Riyaziyyat, Azərbaycan dili və İngilis dilini addım-addım, oyun kimi
            öyrən. Pulsuz, sadə və maraqlı.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-2xl bg-brand px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
            >
              Pulsuz başla
            </Link>
            <Link
              href="/login"
              className="rounded-2xl border-2 border-line bg-panel px-8 py-4 text-lg font-extrabold text-fg btn-pop btn-pop-ghost hover:border-brand"
            >
              Artıq hesabım var
            </Link>
          </div>

          {/* Statistika */}
          <div className="mt-14 grid w-full max-w-lg grid-cols-3 gap-4">
            {[
              { n: subjects.length, l: "fənn" },
              { n: totalLessons, l: "dərs" },
              { n: `${totalTasks}+`, l: "tapşırıq" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-line bg-panel py-5"
              >
                <div className="text-3xl font-extrabold text-brand">{s.n}</div>
                <div className="text-sm text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Üstünlüklər */}
        <section className="grid gap-5 py-8 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-panel p-6 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <f.Icon size={26} strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-fg">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </section>

        {/* Fənlər */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-extrabold text-fg">Fənlər</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {subjects.map((s) => (
              <div
                key={s.slug}
                className="flex items-center gap-3 rounded-2xl border border-line bg-panel px-5 py-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
                  {s.icon}
                </span>
                <span className="font-bold text-fg">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Son CTA */}
        <section className="my-8 rounded-3xl bg-brand px-6 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Bu gün öyrənməyə başla
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Hesab yarat, ilk dərsini bitir və XP qazan. Tamamilə pulsuz.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-brand btn-pop [--pop:#c9c2f5] hover:bg-white/90"
          >
            Pulsuz başla
          </Link>
        </section>
      </main>

      {/* Alt */}
      <footer className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted">
        <div className="flex items-center justify-center gap-2">
          <Logo size={22} />
          <span className="font-bold text-fg">Bilik Yolu</span>
        </div>
        <p className="mt-2">Azərbaycan məktəbliləri üçün interaktiv öyrənmə platforması</p>
      </footer>
    </div>
  );
}
