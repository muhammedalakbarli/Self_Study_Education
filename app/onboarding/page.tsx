"use client";

// Onboarding — hesab açandan sonra Duolingo üslubunda addım-addım suallar.
// Cavablar user_metadata-ya yazılır; onboarded:true olduqda dashboard-a keçir.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, displayName } from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";
import { track } from "@/lib/analytics";
import Logo from "@/components/Logo";
import Mascot from "@/components/Mascot";
import { GRADES_WITH_CONTENT } from "@/lib/grade";
import { useContent } from "@/components/ContentProvider";
import { completeLesson } from "@/lib/progress";
import { addWrong } from "@/lib/srs";
import Diagnostic, {
  type DiagnosticItem,
  type DiagnosticResult,
} from "@/components/onboarding/Diagnostic";
import type { Subject, Task } from "@/lib/types";

type Option = { value: string | number; label: string; note?: string };
type Step = { key: string; q: string; options: Option[] };

// Diaqnostik üçün nümunə tapşırıqları seç: fokus fənnin (və ya "hamısı" halında hər
// fənnin) ilk dərslərindən dərs başına bir təmsilçi sual (çoxseçimli üstünlük). Cap 6.
function buildDiagnosticItems(
  subjects: Subject[],
  grade: number,
  focus: string,
): DiagnosticItem[] {
  const gradeSubjects = subjects.filter((s) => s.grade === grade);
  const repTask = (tasks: Task[]): Task | undefined =>
    tasks.find((t) => t.type === "multiple_choice") ?? tasks[0];
  const lessonsOf = (s: Subject) => s.units.flatMap((u) => u.lessons);

  const items: DiagnosticItem[] = [];
  const pushFrom = (s: Subject | undefined, n: number) => {
    if (!s) return;
    for (const lesson of lessonsOf(s).slice(0, n)) {
      const task = repTask(lesson.tasks);
      if (task) items.push({ task, lessonId: lesson.id });
    }
  };

  if (focus && focus !== "hamisi") {
    pushFrom(gradeSubjects.find((s) => s.slug.startsWith(focus)), 6);
  } else {
    for (const s of gradeSubjects.slice(0, 3)) pushFrom(s, 2);
  }
  return items.slice(0, 6);
}

// Azərbaycan dilində sıra saylarının şəkilçisi (1-ci, 2-ci, 3-cü, 4-cü ...).
const GRADE_ORDINAL: Record<number, string> = {
  1: "1-ci",
  2: "2-ci",
  3: "3-cü",
  4: "4-cü",
  5: "5-ci",
  6: "6-cı",
  7: "7-ci",
  8: "8-ci",
};
function gradeLabel(g: number): string {
  return `${GRADE_ORDINAL[g] ?? `${g}-ci`} sinif`;
}

const STEPS: Step[] = [
  {
    key: "grade",
    q: "Neçənci sinifdə oxuyursan?",
    // Məzmunu olan bütün siniflər (1–8). GRADES_WITH_CONTENT ilə sinxrondur.
    options: GRADES_WITH_CONTENT.map((g) => ({ value: g, label: gradeLabel(g) })),
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
  const { subjects } = useContent();
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [saving, setSaving] = useState(false);
  // Faza: suallar → diaqnostik təklifi → diaqnostik test.
  const [phase, setPhase] = useState<"questions" | "offer" | "diagnostic">("questions");
  const [diagItems, setDiagItems] = useState<DiagnosticItem[]>([]);
  const [finishing, setFinishing] = useState(false);

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

  // ── Diaqnostik təklifi / test ──
  function startDiagnostic() {
    const grade = Number(answers.grade);
    const items = buildDiagnosticItems(subjects, grade, String(answers.focus ?? ""));
    if (items.length === 0) {
      router.replace("/dashboard"); // məzmun yoxdursa birbaşa keç
      return;
    }
    setDiagItems(items);
    setPhase("diagnostic");
  }

  async function finishDiagnostic(r: DiagnosticResult) {
    setFinishing(true);
    try {
      // Bildiyi dərsləri tamamlanmış işarələ (XP-siz), səhvləri SRS-ə əlavə et.
      for (const lessonId of r.knownLessonIds) {
        await completeLesson(lessonId, false).catch(() => {});
      }
      for (const taskId of r.wrongTaskIds) {
        await addWrong(taskId).catch(() => {});
      }
      track("diagnostic_completed", {
        known: r.knownLessonIds.length,
        total: r.knownLessonIds.length + r.wrongTaskIds.length,
      });
    } finally {
      router.replace("/dashboard");
    }
  }

  if (!ready) return null;

  if (phase === "diagnostic") {
    return <Diagnostic items={diagItems} onFinish={finishDiagnostic} />;
  }

  if (phase === "offer") {
    return (
      <OfferScreen
        name={name}
        busy={finishing}
        onStart={startDiagnostic}
        onSkip={() => router.replace("/dashboard")}
      />
    );
  }

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
    // Son addım — cavabları yadda saxla, sonra diaqnostik təklifini göstər
    setSaving(true);
    const supabase = createClient();
    await supabase.auth.updateUser({
      data: { ...answers, onboarded: true },
    });
    track("onboarding_completed", answers);
    setSaving(false);
    setPhase("offer");
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
          <div className="mt-4 flex flex-col items-center">
            <Mascot size={92} mood="wave" />
            <p className="mt-3 text-center text-muted">
              Salam, mən <span className="font-extrabold text-brand">Zefi</span>! Xoş
              gəldin, <span className="font-bold text-fg">{name}</span> — səni tanımaq
              üçün bir neçə sual.
            </p>
          </div>
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
            {saving ? "Hazırlanır..." : "Davam et"}
          </button>
        </div>
      </main>
    </div>
  );
}

// Diaqnostik təklifi — istifadəçi səviyyəsini yoxlaya və ya birbaşa başlaya bilər.
function OfferScreen({
  name,
  busy,
  onStart,
  onSkip,
}: {
  name: string;
  busy: boolean;
  onStart: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <header className="mx-auto flex w-full max-w-xl items-center justify-center px-5 py-5">
        <Logo size={30} />
      </header>
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-5 pb-8">
        <div className="mt-6 flex flex-col items-center">
          <Mascot size={100} mood="thinking" />
          <h1 className="mt-5 text-center text-2xl font-extrabold text-fg sm:text-3xl">
            Səviyyəni yoxlayaq, {name}?
          </h1>
          <p className="mt-3 max-w-md text-center text-muted">
            Bir neçə sualla nələri bildiyini yoxlayaq — bildiyin dərsləri keçək ki, vaxtını
            boş yerə sərf etməyəsən. İstəməsən, birbaşa başlaya bilərsən.
          </p>
        </div>

        <div className="mt-auto w-full space-y-3 pt-8">
          <button
            type="button"
            onClick={onStart}
            disabled={busy}
            className="w-full rounded-2xl bg-brand px-5 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:opacity-40"
          >
            {busy ? "Hazırlanır..." : "Səviyyəni yoxla"}
          </button>
          <button
            type="button"
            onClick={onSkip}
            disabled={busy}
            className="w-full rounded-2xl border-2 border-line bg-panel px-5 py-3.5 text-lg font-extrabold text-fg btn-pop btn-pop-ghost hover:border-brand disabled:opacity-40"
          >
            Keç, birbaşa başla
          </button>
        </div>
      </main>
    </div>
  );
}
