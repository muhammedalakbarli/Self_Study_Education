"use client";

// "Ulduz" — Bilik Yolu-nun mascotu. Amber ulduz + dostyana üz + ifadələr.
//
// mood:
//   happy      — dostyana təbəssüm + əl sallama (default)
//   celebrate  — sevinc (^ ^ gözlər, geniş təbəssüm)
//   sad        — ruhlandıran/təəssüf (səhv cavabda)
//   thinking   — düşünür (yuxarı baxan gözlər, kiçik "hmm" ağız)
//   wave       — canlı salamlama (güclü əl sallama)
//   love       — ürək gözlər (böyük uğur/sevgi anı)
//
// idle animasiyaları: "üzmə" (nəfəs alma) + dövri göz qırpma.
// speaking=true → audio ilə sinxron lipsync (ağız açılıb-bağlanır).
// prefers-reduced-motion / .no-anim → bütün hərəkət söndürülür.

import { useSpeaking } from "@/lib/tts";

export type MascotMood =
  | "happy"
  | "celebrate"
  | "sad"
  | "thinking"
  | "wave"
  | "love";

export default function Mascot({
  size = 120,
  mood = "happy",
  animate = true,
  speaking,
}: {
  size?: number;
  mood?: MascotMood;
  animate?: boolean;
  /** Audio ilə lipsync. Verilməsə, qlobal TTS vəziyyətinə avtomatik qoşulur. */
  speaking?: boolean;
}) {
  // speaking açıq verilməyibsə → qlobal TTS "danışır" vəziyyətini izlə (avto-lipsync).
  const ttsSpeaking = useSpeaking();
  const isSpeaking = animate && (speaking ?? ttsSpeaking);

  // 5-guşəli ulduz nöqtələri (mərkəz 60,60) — kənarlar stroke ilə yumrulanır.
  const star = "60,18 71,44 100,46 77,65 86,96 60,79 34,96 43,65 20,46 49,44";
  const showArm = mood !== "sad";
  const strongWave = mood === "wave";
  const waveClass =
    animate && (mood === "happy" || mood === "wave")
      ? strongWave
        ? "ulduz-wave ulduz-wave-strong"
        : "ulduz-wave"
      : "";
  const blinkClass = animate ? "ulduz-blink" : "";

  const closedEyes = mood === "celebrate";
  const loveEyes = mood === "love";
  const lookUp = mood === "thinking";

  return (
    <span
      className={animate ? "ulduz-float" : "inline-block"}
      style={{ lineHeight: 0 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ulduz"
        role="img"
        style={{ overflow: "visible" }}
      >
        {/* kiçik parıltı (brend detalı) — sol yuxarı */}
        <path
          d="M18 24 l2.2 5.2 5.2 2.2 -5.2 2.2 -2.2 5.2 -2.2 -5.2 -5.2 -2.2 5.2 -2.2 z"
          fill="#5b4bf5"
        />

        {/* qaldırılmış əl (sağ yuxarı, sallanır) */}
        {showArm && (
          <g className={waveClass}>
            <path
              d="M80 51 Q98 47 104 35"
              stroke="#ff9500"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="105" cy="33" r="8" fill="#ff9500" />
          </g>
        )}

        {/* ulduz gövdəsi (yumru künclər üçün eyni rəngli qalın stroke) */}
        <polygon
          points={star}
          fill="#ff9500"
          stroke="#ff9500"
          strokeWidth="11"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* yanaqlar — sevinc/sevgi anında daha qabarıq */}
        <circle
          cx="44"
          cy="64"
          r={mood === "celebrate" || loveEyes ? 6 : 5}
          fill="#ff6b6b"
          opacity={mood === "celebrate" || loveEyes ? 0.7 : 0.55}
        />
        <circle
          cx="76"
          cy="64"
          r={mood === "celebrate" || loveEyes ? 6 : 5}
          fill="#ff6b6b"
          opacity={mood === "celebrate" || loveEyes ? 0.7 : 0.55}
        />

        {/* ── GÖZLƏR ── */}
        {closedEyes ? (
          <>
            {/* sevincli qapalı gözlər (^ ^) */}
            <path d="M44 54 q5 -6 10 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M66 54 q5 -6 10 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        ) : loveEyes ? (
          <>
            {/* ürək gözlər */}
            <path d="M49 51 a3.2 3.2 0 0 1 5.4 3.3 l-5.4 5.2 -5.4 -5.2 a3.2 3.2 0 0 1 5.4 -3.3 z" fill="#ff4d6d" />
            <path d="M71 51 a3.2 3.2 0 0 1 5.4 3.3 l-5.4 5.2 -5.4 -5.2 a3.2 3.2 0 0 1 5.4 -3.3 z" fill="#ff4d6d" />
          </>
        ) : (
          <g className={blinkClass} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            {/* açıq gözlər — sad/thinking-də bəbək yeri dəyişir */}
            <ellipse cx="49" cy="55" rx="6.5" ry="7.5" fill="#fff" />
            <ellipse cx="71" cy="55" rx="6.5" ry="7.5" fill="#fff" />
            <circle cx={lookUp ? 50 : 50.5} cy={lookUp ? 52 : mood === "sad" ? 57 : 56} r="3.4" fill="#2a2340" />
            <circle cx={lookUp ? 72 : 72.5} cy={lookUp ? 52 : mood === "sad" ? 57 : 56} r="3.4" fill="#2a2340" />
            <circle cx="49" cy="54" r="1.1" fill="#fff" />
            <circle cx="71" cy="54" r="1.1" fill="#fff" />
          </g>
        )}

        {/* qaşlar — düşünəndə bir qaş qalxır */}
        {lookUp && (
          <>
            <path d="M43 46 q6 -3 12 -1" stroke="#2a2340" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M65 44 q6 -2 12 1" stroke="#2a2340" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        )}

        {/* ── AĞIZ ── danışarkən lipsync, əks halda əhval-vari */}
        {isSpeaking ? (
          <ellipse
            className="ulduz-talk"
            cx="60"
            cy="69"
            rx="7"
            ry="6"
            fill="#2a2340"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ) : mood === "celebrate" || mood === "love" ? (
          <path d="M49 66 q11 12 22 0 q-11 6 -22 0 z" fill="#2a2340" />
        ) : mood === "sad" ? (
          <path d="M51 71 q9 -6 18 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        ) : lookUp ? (
          <path d="M53 70 q7 -3 14 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        ) : (
          <path d="M51 67 q9 8 18 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        )}
      </svg>
    </span>
  );
}
