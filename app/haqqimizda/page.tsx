import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight, Sparkles, BookOpen, GraduationCap, Crown, School,
  Target, Gamepad2, HeartHandshake, Mail,
} from "lucide-react";
import Logo from "@/components/Logo";
import Mascot from "@/components/Mascot";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description:
    "Imparo — Azərbaycan məktəbliləri üçün oyunlaşdırılmış təhsil platforması. Missiyamız: ən yaxşı təhsili qurmaq və hamıya çatdırmaq.",
};

const PRODUCTS = [
  {
    Icon: BookOpen,
    title: "Imparo",
    desc: "1–8-ci siniflər üçün interaktiv öyrənmə platforması — Riyaziyyat, Azərbaycan dili və İngilis dili, oyun kimi.",
    href: "/",
  },
  {
    Icon: Crown,
    title: "Imparo Plus",
    desc: "Limitsiz can, 2× zümrüd və reklamsız təcrübə ilə öyrənməni daha rahat və sürətli et.",
    href: "/plus",
  },
  {
    Icon: School,
    title: "Imparo Məktəb",
    desc: "Müəllimlər üçün: sinif yarat, tapşırıq ver, şagirdlərin irəliləyişini izlə — hamısı bir yerdə.",
    href: "/mekteb",
  },
];

const VALUES = [
  {
    Icon: Gamepad2,
    title: "Oyun kimi öyrənmə",
    desc: "XP, seriya, liqa və mükafatlar — motivasiyanı yüksək saxlayan, asılılıq yaradan (yaxşı mənada) təcrübə.",
  },
  {
    Icon: Target,
    title: "Kurikuluma uyğun",
    desc: "Bütün məzmun Azərbaycan təhsil proqramına (1–8 sinif) uyğun hazırlanır — məktəblə sinxron.",
  },
  {
    Icon: HeartHandshake,
    title: "Hamı üçün əlçatan",
    desc: "Əsas öyrənmə pulsuzdur. Hədəfimiz keyfiyyətli təhsili hər azərbaycanlı şagirdə çatdırmaqdır.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink">
      {/* Naviqasiya */}
      <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="text-lg font-extrabold text-brand">Imparo</span>
          </Link>
          <Link
            href="/login"
            className="rounded-2xl border-2 border-line px-4 py-2 text-sm font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
          >
            Daxil ol
          </Link>
        </div>
      </header>

      {/* Missiya */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand ring-1 ring-brand/20">
              <Sparkles size={15} /> Missiyamız
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-fg sm:text-5xl">
              Azərbaycan üçün ən yaxşı təhsili qur və{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                hamıya çatdır
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Imparo — məktəblilərin öyrənməyi sevməsi üçün qurulmuş oyunlaşdırılmış təhsil
              platformasıdır. İnanırıq ki, keyfiyyətli təhsil imtiyaz yox, hüquqdur.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/20 to-accent/15 sm:w-72"
                aria-hidden
              />
              <Mascot size={220} mood="wave" />
            </div>
          </div>
        </div>
      </section>

      {/* Nə təklif edirik */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">Nə təklif edirik</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-3xl border border-line bg-panel p-6 transition hover:border-brand hover:bg-panel-2"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <p.Icon size={26} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-fg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand">
                Ətraflı <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Yanaşmamız */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">Yanaşmamız</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl border border-line bg-panel p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <v.Icon size={26} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-fg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistika zolağı */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid grid-cols-3 gap-4 rounded-3xl border border-line bg-gradient-to-br from-brand/10 to-accent/5 p-8 text-center">
          <Stat value="3" label="Fənn" />
          <Stat value="60+" label="İnteraktiv dərs" />
          <Stat value="1–8" label="Sinif" />
        </div>
      </section>

      {/* Əlaqə */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-line bg-panel p-8 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <Mail size={28} />
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-fg">Bizimlə əlaqə</h2>
          <p className="mt-2 text-muted">Sual, əməkdaşlıq və ya təklif üçün yaz:</p>
          <a href="mailto:salam@imparo.az" className="mt-2 inline-block text-lg font-extrabold text-brand hover:underline">
            salam@imparo.az
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-center text-white">
          <GraduationCap size={40} />
          <h2 className="text-3xl font-extrabold">Öyrənməyə bu gün başla</h2>
          <p className="max-w-md text-white/85">Pulsuz, sadə və əyləncəli. Zefi səni gözləyir!</p>
          <Link
            href="/signup"
            className="rounded-2xl bg-white px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-brand btn-pop"
          >
            Pulsuz başla
          </Link>
        </div>
      </section>

      {/* Footer */}
      <AboutFooter />
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-brand sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

function AboutFooter() {
  const cols: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Imparo",
      links: [
        { label: "Haqqımızda", href: "/haqqimizda" },
        { label: "Missiya", href: "/haqqimizda" },
        { label: "Bloq", href: "/blog" },
        { label: "Karyera", href: "/karyera" },
      ],
    },
    {
      title: "Məhsullar",
      links: [
        { label: "Imparo", href: "/" },
        { label: "Imparo Plus", href: "/plus" },
        { label: "Imparo Məktəb", href: "/mekteb" },
        { label: "Mağaza", href: "/magaza" },
      ],
    },
    {
      title: "Dəstək",
      links: [
        { label: "Yardım mərkəzi", href: "/yardim" },
        { label: "Əlaqə", href: "/haqqimizda" },
        { label: "İnvestorlar", href: "/investorlar" },
      ],
    },
    {
      title: "Hüquqi",
      links: [
        { label: "Şərtlər", href: "/sertler" },
        { label: "Məxfilik", href: "/mexfilik" },
      ],
    },
  ];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-4">
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs font-extrabold uppercase tracking-wider text-fg">{c.title}</div>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l.label + l.href}>
                  <Link href={l.href} className="text-sm text-muted transition hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-10">
        <div className="flex items-center gap-2.5 border-t border-line pt-6">
          <Logo size={26} />
          <span className="text-sm font-bold text-muted">
            © {new Date().getFullYear()} Imparo. Bütün hüquqlar qorunur.
          </span>
        </div>
      </div>
    </footer>
  );
}
