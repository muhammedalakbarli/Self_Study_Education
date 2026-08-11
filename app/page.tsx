"use client";

// Landing (marketinq) səhifəsi — Duolingo-səviyyəli: animasiyalı hero (üzən blob-lar,
// stagger giriş), scroll-reveal bölmələr, count-up statistika, rəngli fənn kartları,
// oyunlaşdırma vurğuları, "necə işləyir" addımları. Öz indigo brendimiz + Ulduz mascotu.
// Bütün hərəkət prefers-reduced-motion / .no-anim ilə söndürülür.

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Check,
  Calculator,
  BookText,
  Languages,
  Star,
  Flame,
  Trophy,
  Award,
  Sparkles,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { useContent } from "@/components/ContentProvider";
import { useT } from "@/lib/i18n";
import { useCountUp } from "@/lib/useCountUp";
import Logo from "@/components/Logo";
import Mascot from "@/components/Mascot";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

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
          m + u.lessons.reduce((k, l) => k + l.tasks.length + (l.bonusTasks?.length ?? 0), 0),
        0,
      ),
    0,
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink">
      <Blobs />

      {/* Naviqasiya (sticky, blur) */}
      <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="gradient-pan bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-400 bg-clip-text text-lg font-extrabold text-transparent">
              Imparo
            </span>
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
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5">
        {/* ── Hero ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-2"
        >
          {/* Ulduz */}
          <motion.div variants={fadeUp} className="order-1 flex justify-center lg:order-2">
            <div className="float-slow relative flex aspect-square w-64 items-center justify-center rounded-full bg-gradient-to-br from-brand/20 via-accent/15 to-pink-500/15 sm:w-80">
              {/* radial işıq */}
              <span className="pointer-events-none absolute inset-6 rounded-full bg-brand/10 blur-2xl" aria-hidden />
              <Mascot size={210} mood="wave" />
              {/* orbitləyən qığılcımlar */}
              <span className="twinkle pointer-events-none absolute left-6 top-10 text-amber-300" aria-hidden>
                <Sparkles size={22} fill="currentColor" strokeWidth={0} />
              </span>
              <span
                className="twinkle pointer-events-none absolute bottom-12 right-8 text-pink-400"
                style={{ animationDelay: "1s" }}
                aria-hidden
              >
                <Sparkles size={16} fill="currentColor" strokeWidth={0} />
              </span>
              <span className="xp-pop absolute left-2 top-6 rounded-2xl bg-accent px-3 py-1.5 text-sm font-extrabold text-white shadow-lg sm:left-0">
                +10 XP
              </span>
              <span className="absolute bottom-8 right-1 rounded-2xl bg-brand px-3 py-1.5 text-sm font-extrabold text-white shadow-lg sm:right-0">
                {t("home.aferin")}
              </span>
            </div>
          </motion.div>

          {/* Mətn + CTA */}
          <motion.div variants={fadeUp} className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand ring-1 ring-brand/20">
              {t("home.badge")}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-fg sm:text-5xl lg:text-6xl">
              {t("home.hero1")}
              <span className="gradient-pan bg-gradient-to-r from-brand via-pink-500 to-accent bg-clip-text text-transparent">
                {t("home.hero2")}
              </span>
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
          </motion.div>
        </motion.section>

        {/* ── Statistika (count-up) ── */}
        <Reveal className="grid grid-cols-3 gap-4 pb-6">
          <StatCard value={subjects.length} label={t("home.stat.subjects")} />
          <StatCard value={totalLessons} label={t("home.stat.lessons")} />
          <StatCard value={totalTasks} suffix="+" label={t("home.stat.tasks")} />
        </Reveal>

        {/* ── Fənn vitrini ── */}
        <Reveal className="py-14 sm:py-20">
          <SectionHead title={t("home.subjects.title")} body={t("home.subjects.body")} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <SubjectCard
              Icon={Calculator}
              grad="from-indigo-500 to-violet-600"
              title={t("home.subjects.math")}
              desc={t("home.subjects.mathDesc")}
            />
            <SubjectCard
              Icon={BookText}
              grad="from-emerald-500 to-teal-600"
              title={t("home.subjects.az")}
              desc={t("home.subjects.azDesc")}
            />
            <SubjectCard
              Icon={Languages}
              grad="from-amber-500 to-orange-600"
              title={t("home.subjects.en")}
              desc={t("home.subjects.enDesc")}
            />
          </div>
        </Reveal>

        {/* ── Niyə Imparo — növbələşən bölmələr ── */}
        <section className="space-y-16 py-6 sm:space-y-24">
          <Row reverse={false} tag={t("home.r1.tag")} title={t("home.r1.title")} body={t("home.r1.body")} media={<GameMedia />} />
          <Row reverse={true} tag={t("home.r2.tag")} title={t("home.r2.title")} body={t("home.r2.body")} media={<PathMedia />} />
          <Row reverse={false} tag={t("home.r3.tag")} title={t("home.r3.title")} body={t("home.r3.body")} media={<SubjectsMedia />} />
        </section>

        {/* ── Oyunlaşdırma vurğuları ── */}
        <Reveal className="py-14 sm:py-20">
          <SectionHead title={t("home.feat.title")} />
          <motion.div variants={stagger} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <FeatureChip Icon={Star} tint="text-amber-500" label={t("home.feat.xp")} />
            <FeatureChip Icon={Flame} tint="text-orange-500" label={t("home.feat.streak")} />
            <FeatureChip Icon={Trophy} tint="text-yellow-500" label={t("home.feat.league")} />
            <FeatureChip Icon={Award} tint="text-pink-500" label={t("home.feat.badge")} />
          </motion.div>
        </Reveal>

        {/* ── Necə işləyir ── */}
        <Reveal className="pb-14 sm:pb-20">
          <SectionHead title={t("home.how.title")} />
          <motion.div variants={stagger} className="mt-8 grid gap-4 sm:grid-cols-3">
            <StepCard n={1} tint="from-indigo-500 to-violet-600" title={t("home.how.s1.t")} desc={t("home.how.s1.d")} />
            <StepCard n={2} tint="from-emerald-500 to-teal-600" title={t("home.how.s2.t")} desc={t("home.how.s2.d")} />
            <StepCard n={3} tint="from-amber-500 to-orange-600" title={t("home.how.s3.t")} desc={t("home.how.s3.d")} />
          </motion.div>
        </Reveal>

        {/* ── Son CTA ── */}
        <Reveal className="my-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-16 text-center">
            <span className="twinkle pointer-events-none absolute left-10 top-8 text-white/60" aria-hidden>
              <Sparkles size={22} fill="currentColor" strokeWidth={0} />
            </span>
            <span
              className="twinkle pointer-events-none absolute right-12 top-16 text-white/50"
              style={{ animationDelay: "0.9s" }}
              aria-hidden
            >
              <Sparkles size={16} fill="currentColor" strokeWidth={0} />
            </span>
            <div className="flex justify-center">
              <Mascot size={100} mood="celebrate" />
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white">{t("home.finalTitle")}</h2>
            <p className="mx-auto mt-3 max-w-md text-white/85">{t("home.finalBody")}</p>
            <Link
              href="/signup"
              className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-brand btn-pop [--pop:#c9c2f5] hover:bg-white/90"
            >
              {t("home.ctaStart")}
            </Link>
          </div>
        </Reveal>
      </main>

      {/* Alt */}
      <footer className="relative z-10 mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted">
        <div className="flex items-center justify-center gap-2">
          <Logo size={22} />
          <span className="font-bold text-fg">Imparo</span>
        </div>
        <p className="mt-2">{t("auth.tagline")}</p>
      </footer>
    </div>
  );
}

// ── Fon blob-ları (dekorativ, kliklənməz) ──
function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="blob-float absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
      <div
        className="blob-float absolute right-[-60px] top-40 h-80 w-80 rounded-full bg-pink-500/15 blur-3xl"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="blob-float absolute bottom-24 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        style={{ animationDelay: "6s" }}
      />
    </div>
  );
}

// ── Scroll-reveal örtük ──
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionHead({ title, body }: { title: string; body?: string }) {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <h2 className="text-3xl font-extrabold text-fg sm:text-4xl">{title}</h2>
      {body && <p className="mx-auto mt-3 max-w-lg text-muted">{body}</p>}
    </motion.div>
  );
}

function StatCard({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const n = useCountUp(value, 1200);
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-line bg-panel/80 py-5 text-center backdrop-blur-sm"
    >
      <div className="text-3xl font-extrabold text-brand sm:text-4xl">
        {n.toLocaleString("az")}
        {suffix}
      </div>
      <div className="text-sm text-muted">{label}</div>
    </motion.div>
  );
}

function SubjectCard({
  Icon,
  grad,
  title,
  desc,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  grad: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-5"
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-md`}
      >
        <Icon size={26} />
      </span>
      <div>
        <div className="font-extrabold text-fg">{title}</div>
        <div className="mt-0.5 text-sm text-muted">{desc}</div>
      </div>
    </motion.div>
  );
}

function FeatureChip({
  Icon,
  tint,
  label,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  tint: string;
  label: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-panel p-5 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-panel-2">
        <Icon size={26} className={tint} />
      </span>
      <span className="text-sm font-bold text-fg">{label}</span>
    </motion.div>
  );
}

function StepCard({ n, tint, title, desc }: { n: number; tint: string; title: string; desc: string }) {
  return (
    <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-panel p-6 text-center">
      <span
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tint} text-xl font-extrabold text-white shadow-md`}
      >
        {n}
      </span>
      <div className="mt-4 font-extrabold text-fg">{title}</div>
      <div className="mt-1 text-sm text-muted">{desc}</div>
    </motion.div>
  );
}

// ── Növbələşən bölmə sətri (illüstrasiya + mətn), scroll-reveal ──
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
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col items-center gap-8 lg:gap-14 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <motion.div variants={fadeUp} className="w-full lg:w-1/2">
        {media}
      </motion.div>
      <motion.div variants={fadeUp} className="w-full text-center lg:w-1/2 lg:text-left">
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand ring-1 ring-brand/20">
          {tag}
        </span>
        <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">{title}</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted">{body}</p>
      </motion.div>
    </motion.div>
  );
}

// Panel: oyunlaşdırma
function GameMedia() {
  const t = useT();
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-line bg-brand/5">
      <div className="float-slow">
        <Mascot size={150} mood="celebrate" />
      </div>
      <span className="xp-pop absolute left-6 top-6 rounded-2xl bg-accent px-3 py-1.5 text-sm font-extrabold text-white shadow">
        +10 XP
      </span>
      <span className="absolute bottom-6 right-6 rounded-2xl bg-brand px-3 py-1.5 text-sm font-extrabold text-white shadow">
        {t("home.streakBadge")}
      </span>
      <span className="twinkle pointer-events-none absolute right-10 top-10 text-amber-300" aria-hidden>
        <Sparkles size={18} fill="currentColor" strokeWidth={0} />
      </span>
    </div>
  );
}

// Panel: öyrənmə yolu (mini path, 3D düyünlər)
function PathMedia() {
  const nodes = [
    { done: true },
    { done: true },
    { done: false, current: true },
    { done: false },
  ];
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-line bg-accent/10">
      <div className="flex items-center gap-2">
        {nodes.map((n, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold text-white ${
                n.done ? "bg-emerald-500" : n.current ? "node-bob bg-amber-500" : "bg-panel-2 text-muted"
              }`}
              style={{
                boxShadow: n.done
                  ? "0 5px 0 0 #15803d"
                  : n.current
                    ? "0 5px 0 0 #c98703"
                    : "0 5px 0 0 var(--color-line)",
              }}
            >
              {n.done ? <Check size={22} strokeWidth={3} /> : n.current ? <Star size={22} fill="currentColor" /> : i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Panel: fənlər. Giriş etməmiş vitrin — fənləri adına görə təkrarsız göstəririk.
function SubjectsMedia() {
  const { subjects } = useContent();
  const unique = subjects.filter((s, i, arr) => arr.findIndex((x) => x.name === s.name) === i);
  return (
    <div className="flex aspect-[4/3] flex-col justify-center gap-3 rounded-3xl border border-line bg-brand/5 p-8">
      {unique.map((s) => (
        <div
          key={s.name}
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
