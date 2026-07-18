"use client";

// Onboarding — hesab açandan sonra Duolingo üslubunda addım-addım suallar.
// Cavablar user_metadata-ya yazılır; onboarded:true olduqda dashboard-a keçir.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, displayName } from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";
import Logo from "@/components/Logo";

type Option = { value: string | number; label: string; note?: string };
type Step = { key: string; q: string; options: Option[] };

const STEPS: Step[] = [
  {
    key: "grade",
    q: "Neçənci sinifdə oxuyursan?",
    options: [
      { value: 5, label: "5-ci sinif", note: "Hazırda mövcuddur" },
      { value: 6, label: "6-cı sinif", note: "Tezliklə" },
      { value: 7, label: "7-ci sinif", note: "Tezliklə" },
      { value: 8, label: "8-ci sinif", note: "Tezliklə" },
    ],
  },
  {
    key: "focus",
    q: "Nədən başlamaq istəyirsən?",
    options: [
      { value: "riyaziyyat", label: "Riyaziyyat" },
      { value: "azerbaycan-dili", label: "Azərbaycan dili" },
      { value: "ingilis-dili", label: "İngilis dili" },
      { value: "hamisi", label: "Hamısını öyrənmək istəyirəm" },
    ],
  },
  {
    key: "goal",
    q: "Gündəlik məqsədin nədir?",
    options: [
      { value: 5, label: "Rahat", note: "5 dəqiqə / gün" },
      { value: 10, label: "Normal", note: "10 dəqiqə / gün" },
      { value: 15, label: "Ciddi", note: "15 dəqiqə / gün" },
      { value: 20, label: "İntensiv", note: "20 dəqiqə / gün" },
    ],
  },
  {
    key: "reason",
    q: "Səni bura nə gətirdi?",
    options: [
      { value: "mekteb", label: "Məktəbdə daha yaxşı olmaq" },
      { value: "imtahan", label: "İmtahana hazırlaşmaq" },
      { value: "oyrenmek", label: "Yeni şeylər öyrənmək" },
      { value: "valideyn", label: "Valideynim istədi" },
    ],
  },
  {
    key: "source",
    q: "Bizi haradan eşitdin?",
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "dost", label: "Dostumdan" },
      { value: "muellim", label: "Müəllimimdən" },
      { value: "diger", label: "Digər" },
    ],
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getCurrentUser().then((u) => {
      if (!u) {
        router.replace("/login");
        return;
      }
      if (u.user_metadata?.onboarded) {
        router.replace("/dashboard");
        return;
      }
      setName(displayName(u));
      setReady(true);
    });
  }, [router]);

  if (!ready) return null;

  const current = STEPS[step];
  const selected = answers[current.key];
  const isLast = step === STEPS.length - 1;
  const progress = Math.round(((step + (selected != null ? 1 : 0)) / STEPS.length) * 100);

  function choose(value: string | number) {
    setAnswers((a) => ({ ...a, [current.key]: value }));
  }

  async function next() {
    if (selected == null) return;
    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }
    // Son addım — cavabları yadda saxla
    setSaving(true);
    const supabase = createClient();
    await supabase.auth.updateUser({
      data: { ...answers, onboarded: true },
    });
    router.replace("/dashboard");
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      {/* Üst: geri + progress + loqo */}
      <header className="mx-auto flex w-full max-w-xl items-center gap-4 px-5 py-5">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          aria-label="Geri"
          className="text-2xl font-bold text-muted transition hover:text-fg disabled:opacity-0"
        >
          ←
        </button>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-panel-2">
          <div
            className="h-full rounded-full bg-brand transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Logo size={28} />
      </header>

      {/* Sual */}
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-5 pb-8">
        {step === 0 && (
          <p className="mt-4 text-center text-muted">
            Xoş gəldin, <span className="font-bold text-fg">{name}</span>! Səni
            daha yaxşı tanımaq üçün bir neçə sual.
          </p>
        )}

        <h1 className="mt-6 text-center text-2xl font-extrabold text-fg sm:text-3xl">
          {current.q}
        </h1>

        <div className="mt-8 flex flex-col gap-3">
          {current.options.map((o) => {
            const on = selected === o.value;
            return (
              <button
                key={String(o.value)}
                type="button"
                onClick={() => choose(o.value)}
                className={`btn-pop flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left transition ${
                  on
                    ? "border-brand bg-brand/10 [--pop:var(--color-brand)]"
                    : "border-line bg-panel btn-pop-ghost hover:border-brand"
                }`}
              >
                <span className="text-lg font-bold text-fg">{o.label}</span>
                {o.note && (
                  <span
                    className={`text-sm font-semibold ${on ? "text-brand" : "text-muted"}`}
                  >
                    {o.note}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={next}
            disabled={selected == null || saving}
            className="w-full rounded-2xl bg-brand px-5 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            {saving ? "Hazırlanır..." : isLast ? "Başla" : "Davam et"}
          </button>
        </div>
      </main>
    </div>
  );
}
