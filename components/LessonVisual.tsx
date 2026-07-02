// Dərs izahlarını uşaqlar üçün canlandıran illüstrasiyalar.
// Hər dərsin `visual` açarına görə uyğun şəkil göstərilir.

import type { ReactNode } from "react";

// Kəsr zolağı: `parts` bərabər hissə, ilk `filled` qırmızı rənglənir.
function FractionBar({ parts, filled }: { parts: number; filled: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: parts }).map((_, i) => (
        <div
          key={i}
          className={`h-11 flex-1 rounded-md border-2 ${
            i < filled ? "border-brand bg-brand" : "border-line bg-panel-2"
          }`}
        />
      ))}
    </div>
  );
}

function Fraction({ top, bottom }: { top: number | string; bottom: number | string }) {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="px-2 font-bold text-white">{top}</span>
      <span className="my-0.5 h-0.5 w-full bg-white" />
      <span className="px-2 font-bold text-white">{bottom}</span>
    </span>
  );
}

// Emoji söz kartı
function WordCard({ emoji, word, tag }: { emoji: string; word: string; tag?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-line bg-panel-2 px-4 py-3">
      <span className="text-3xl">{emoji}</span>
      <span className="font-semibold text-white">{word}</span>
      {tag && <span className="text-xs text-brand-soft">{tag}</span>}
    </div>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-line bg-ink/60 p-4">
      {children}
    </div>
  );
}

export default function LessonVisual({ visual }: { visual?: string }) {
  if (!visual) return null;

  switch (visual) {
    // ── Riyaziyyat ──────────────────────────────────────────────
    case "fraction-basic":
      return (
        <Frame>
          <div className="flex items-center gap-5">
            <div className="text-5xl">🍫</div>
            <div className="flex-1">
              <FractionBar parts={4} filled={3} />
              <p className="mt-2 text-center text-sm text-muted">
                4 hissəyə bölünüb, 3-ü götürülüb
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl">
                <Fraction top={3} bottom={4} />
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-around text-xs">
            <span className="text-white">↑ surət = götürülən hissə</span>
            <span className="text-white">↓ məxrəc = ümumi hissə</span>
          </div>
        </Frame>
      );

    case "fraction-compare":
      return (
        <Frame>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 text-white">
                <Fraction top={5} bottom={8} />
              </span>
              <div className="flex-1">
                <FractionBar parts={8} filled={5} />
              </div>
              <span className="text-brand-soft">böyük ✓</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 text-white">
                <Fraction top={3} bottom={8} />
              </span>
              <div className="flex-1">
                <FractionBar parts={8} filled={3} />
              </div>
              <span className="text-muted">kiçik</span>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            Çox hissə götürülübsə, kəsr daha böyükdür
          </p>
        </Frame>
      );

    case "fraction-add":
      return (
        <Frame>
          <div className="flex items-center justify-center gap-3 text-2xl text-white">
            <div className="w-24">
              <FractionBar parts={7} filled={2} />
            </div>
            <span>+</span>
            <div className="w-24">
              <FractionBar parts={7} filled={3} />
            </div>
            <span>=</span>
            <div className="w-24">
              <FractionBar parts={7} filled={5} />
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            2/7 + 3/7 = 5/7 — surətləri toplayırıq (2+3=5), məxrəc dəyişmir
          </p>
        </Frame>
      );

    case "fraction-of-number":
      return (
        <Frame>
          <div className="mx-auto grid max-w-[220px] grid-cols-6 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-full ${
                  i < 4 ? "bg-brand" : "bg-panel-2"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            12-nin 1/3 hissəsi: 12 : 3 = 4 (4 dairə rənglənib)
          </p>
        </Frame>
      );

    case "place-value":
      return (
        <Frame>
          <div className="mx-auto max-w-sm">
            <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-line text-center">
              {["Minlik", "Yüzlük", "Onluq", "Təklik"].map((h) => (
                <div key={h} className="border-b border-line bg-panel-2 py-1.5 text-xs text-muted">
                  {h}
                </div>
              ))}
              {["3", "2", "5", "4"].map((d, i) => (
                <div key={i} className="py-3 text-2xl font-bold text-white">
                  {d}
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-muted">
              3 254 = <b className="text-white">3</b> minlik, <b className="text-white">2</b> yüzlük,{" "}
              <b className="text-white">5</b> onluq, <b className="text-white">4</b> təklik
            </p>
          </div>
        </Frame>
      );

    case "column-add":
      return (
        <Frame>
          <div className="mx-auto w-fit font-mono text-2xl text-white">
            <div className="text-right">3 456</div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-brand">+</span>
              <span>2 130</span>
            </div>
            <div className="my-1 border-t-2 border-line" />
            <div className="text-right text-brand-soft">5 586</div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            Rəqəmləri mərtəbəyə görə alt-alta yazıb sağdan toplayırıq
          </p>
        </Frame>
      );

    case "remainder":
      return (
        <Frame>
          <div className="flex flex-wrap justify-center gap-1.5">
            {Array.from({ length: 17 }).map((_, i) => (
              <span key={i} className="text-2xl">
                {i >= 15 ? "🍎" : "🍏"}
              </span>
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            17 alma, 5 uşaq: hərəyə 3 yaşıl düşür, <b className="text-white">2 qırmızı</b> artıq qalır →
            17 : 5 = 3 (qalıq 2)
          </p>
        </Frame>
      );

    case "order-ops":
      return (
        <Frame>
          <div className="space-y-2 text-center text-lg text-white">
            <div>
              2 + 3 × 4 = <b className="text-brand-soft">14</b>{" "}
              <span className="text-xs text-muted">(əvvəl vurma)</span>
            </div>
            <div>
              (2 + 3) × 4 = <b className="text-brand-soft">20</b>{" "}
              <span className="text-xs text-muted">(əvvəl mötərizə)</span>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            Sıra: mötərizə → vurma/bölmə → toplama/çıxma
          </p>
        </Frame>
      );

    case "proper-improper":
      return (
        <Frame>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl border border-line bg-panel-2 p-3">
              <div className="text-xl">
                <Fraction top={3} bottom={4} />
              </div>
              <div className="mt-1 text-sm font-semibold text-white">Düzgün</div>
              <div className="text-xs text-muted">surət &lt; məxrəc</div>
            </div>
            <div className="rounded-xl border border-line bg-panel-2 p-3">
              <div className="text-xl">
                <Fraction top={7} bottom={4} />
              </div>
              <div className="mt-1 text-sm font-semibold text-white">Düzgün olmayan</div>
              <div className="text-xs text-muted">surət ≥ məxrəc</div>
            </div>
          </div>
        </Frame>
      );

    case "mixed-number":
      return (
        <Frame>
          <div className="flex items-center justify-center gap-3 text-2xl text-white">
            <span className="font-bold">2</span>
            <Fraction top={1} bottom={3} />
            <span className="text-base text-muted">= 2 tam və 1/3</span>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            Qarışıq ədəd: tam hissə + kəsr hissə. Məsələn, 7/3 = 2 tam 1/3
          </p>
        </Frame>
      );

    // ── Azərbaycan dili ─────────────────────────────────────────
    case "noun-cards":
      return (
        <Frame>
          <div className="flex flex-wrap justify-center gap-3">
            <WordCard emoji="👦" word="uşaq" tag="kim?" />
            <WordCard emoji="🐦" word="quş" tag="kim?" />
            <WordCard emoji="🍎" word="alma" tag="nə?" />
            <WordCard emoji="📕" word="kitab" tag="nə?" />
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            İsim = əşyanın adı. Canlılar — <b className="text-white">kim?</b>, cansızlar — <b className="text-white">nə?</b>
          </p>
        </Frame>
      );

    case "adjective-apple":
      return (
        <Frame>
          <div className="flex items-center justify-center gap-6">
            <span className="text-6xl">🍎</span>
            <div className="space-y-2">
              {["qırmızı", "şirin", "yumru"].map((w) => (
                <div
                  key={w}
                  className="rounded-lg border border-brand bg-brand/10 px-4 py-1.5 font-semibold text-white"
                >
                  {w}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            Sifət əşyanın <b className="text-white">necə</b> olduğunu bildirir
          </p>
        </Frame>
      );

    case "verb-timeline":
      return (
        <Frame>
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <WordCard emoji="🏃" word="qaçmaq" />
            <WordCard emoji="✍️" word="yazmaq" />
            <WordCard emoji="😄" word="gülmək" />
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-panel-2 px-4 py-2 text-sm">
            <span className="text-white">yazdı<br /><span className="text-xs text-muted">keçmiş</span></span>
            <span className="text-brand">→</span>
            <span className="text-white">yazır<br /><span className="text-xs text-muted">indiki</span></span>
            <span className="text-brand">→</span>
            <span className="text-white">yazacaq<br /><span className="text-xs text-muted">gələcək</span></span>
          </div>
        </Frame>
      );

    // ── İngilis dili ────────────────────────────────────────────
    case "tobe-table":
      return (
        <Frame>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { p: "I", v: "am", e: "🧒" },
              { p: "he / she / it", v: "is", e: "👩" },
              { p: "you / we / they", v: "are", e: "👨‍👩‍👧" },
            ].map((r) => (
              <div key={r.v} className="rounded-xl border border-line bg-panel-2 p-3">
                <div className="text-2xl">{r.e}</div>
                <div className="mt-1 text-sm text-white">{r.p}</div>
                <div className="mt-1 text-lg font-bold text-brand-soft">{r.v}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            I am · She is · They are
          </p>
        </Frame>
      );

    case "plural-books":
      return (
        <Frame>
          <div className="flex items-center justify-center gap-5 text-center">
            <div>
              <div className="text-4xl">📕</div>
              <div className="mt-1 text-white">book</div>
              <div className="text-xs text-muted">bir</div>
            </div>
            <div className="text-3xl font-bold text-brand">+s →</div>
            <div>
              <div className="text-4xl">📚</div>
              <div className="mt-1 text-white">book<span className="text-brand-soft">s</span></div>
              <div className="text-xs text-muted">çox</div>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">
            Çox olanda sonuna <b className="text-white">-s</b> əlavə edirik
          </p>
        </Frame>
      );

    case "count-uncount":
      return (
        <Frame>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-line bg-panel-2 p-3 text-center">
              <div className="text-2xl">🍎🍎🍎</div>
              <div className="mt-1 text-sm font-semibold text-white">Countable</div>
              <div className="text-xs text-muted">sayıla bilən (two apples)</div>
            </div>
            <div className="rounded-xl border border-line bg-panel-2 p-3 text-center">
              <div className="text-2xl">💧🥛🍚</div>
              <div className="mt-1 text-sm font-semibold text-white">Uncountable</div>
              <div className="text-xs text-muted">sayıla bilməyən (water, milk)</div>
            </div>
          </div>
        </Frame>
      );

    default:
      return null;
  }
}
