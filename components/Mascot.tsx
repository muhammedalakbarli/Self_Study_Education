"use client";

// "Zefi" — Imparo-nun tülkü mascotu (tam bədən: baş, gövdə, qollar, ayaqlar, quyruq).
// Modern flat 2D vektor + yüngül həcm (gradient kölgə, işıq vurğusu, yer kölgəsi).
// Palitra: Fox Orange + Cream + Coral + Cocoa + Honey.
//
// mood: happy · celebrate · sad · thinking · wave · love
// idle: üzmə + göz qırpma. speaking=true → audio lipsync.
// prefers-reduced-motion / .no-anim → hərəkət söndürülür.

import { useId } from "react";
import { useSpeaking } from "@/lib/tts";

export type MascotMood = "happy" | "celebrate" | "sad" | "thinking" | "wave" | "love";

const CORAL = "#FF8F70";
const COCOA = "#3B2723";
const OUTLINE = "#B84E1F";
const HONEY = "#FFD166";

export default function Mascot({
  size = 120,
  mood = "happy",
  animate = true,
  speaking,
}: {
  size?: number;
  mood?: MascotMood;
  animate?: boolean;
  speaking?: boolean;
}) {
  const ttsSpeaking = useSpeaking();
  const isSpeaking = animate && (speaking ?? ttsSpeaking);
  const uid = useId();
  const g = (n: string) => `url(#${uid}-${n})`;

  const squint = mood === "celebrate";
  const shades = mood === "love";
  const lookUp = mood === "thinking";
  const blinkClass = animate && !squint && !shades ? "ulduz-blink" : "";
  const cheeks = mood === "happy" || mood === "celebrate" || mood === "wave" || mood === "love";
  const waving = mood === "wave" && animate;

  return (
    <span className={animate ? "ulduz-float" : "inline-block"} style={{ lineHeight: 0 }}>
      {/* Bir az hündür viewBox — ayaqlar sığsın */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Zefi"
        role="img"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id={`${uid}-fox`} cx="38%" cy="26%" r="85%">
            <stop offset="0" stopColor="#FFC083" />
            <stop offset="54%" stopColor="#F47B3A" />
            <stop offset="100%" stopColor="#D85F26" />
          </radialGradient>
          <linearGradient id={`${uid}-cream`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFCF4" />
            <stop offset="1" stopColor="#F8E6C4" />
          </linearGradient>
          <radialGradient id={`${uid}-ear`} cx="50%" cy="35%" r="80%">
            <stop offset="0" stopColor="#FFB59A" />
            <stop offset="100%" stopColor={CORAL} />
          </radialGradient>
        </defs>

        {/* Yer kölgəsi */}
        <ellipse cx="60" cy="122" rx="34" ry="5" fill={COCOA} opacity="0.13" />

        {/* Quyruq (sağ, tüklü, krem uclu) */}
        <path
          d="M82 96 C108 96 116 68 104 52 C98 44 88 48 91 58 C95 72 82 84 76 90 Z"
          fill={g("fox")}
          stroke={OUTLINE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M104 52 C98 44 88 48 91 58 C93 64 92 70 88 74 C99 73 106 62 104 52 Z" fill={g("cream")} />

        {/* Ayaqlar */}
        <ellipse cx="49" cy="112" rx="9" ry="7" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="71" cy="112" rx="9" ry="7" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="49" cy="112" rx="4.5" ry="3" fill={g("cream")} />
        <ellipse cx="71" cy="112" rx="4.5" ry="3" fill={g("cream")} />

        {/* Sol qol */}
        <path
          d="M34 78 q-9 8 -6 20 q7 3 12 -3 q-3 -9 2 -16 z"
          fill={g("fox")}
          stroke={OUTLINE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Sağ qol (salamlayanda yellənir) */}
        <g
          className={waving ? "ulduz-wave" : ""}
          style={waving ? { transformBox: "fill-box", transformOrigin: "50% 15%" } : undefined}
        >
          <path
            d="M86 78 q9 8 6 20 q-7 3 -12 -3 q3 -9 -2 -16 z"
            fill={g("fox")}
            stroke={OUTLINE}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Gövdə + krem qarın */}
        <path
          d="M60 60 C76 60 84 72 84 88 C84 104 74 110 60 110 C46 110 36 104 36 88 C36 72 44 60 60 60 Z"
          fill={g("fox")}
          stroke={OUTLINE}
          strokeWidth="2.5"
        />
        <ellipse cx="60" cy="92" rx="15" ry="16" fill={g("cream")} />
        <path d="M46 74 Q60 82 74 74" stroke={HONEY} strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Qulaqlar */}
        <path d="M34 40 L31 6 L56 25 Z" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M86 40 L89 6 L64 25 Z" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M38 33 L36 15 L50 26 Z" fill={g("ear")} />
        <path d="M82 33 L84 15 L70 26 Z" fill={g("ear")} />

        {/* Baş + işıq + krem üz */}
        <circle cx="60" cy="44" r="30" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="48" cy="30" rx="12" ry="8" fill="#fff" opacity="0.22" />
        <path
          d="M60 36 C73 36 78 47 76 56 C73 65 67 70 60 70 C53 70 47 65 44 56 C42 47 47 36 60 36 Z"
          fill={g("cream")}
        />

        {/* Yanaqlar */}
        {cheeks && (
          <>
            <ellipse cx="48" cy="50" rx="3.6" ry="2.4" fill={CORAL} opacity="0.55" />
            <ellipse cx="72" cy="50" rx="3.6" ry="2.4" fill={CORAL} opacity="0.55" />
          </>
        )}

        {/* Qaşlar */}
        {lookUp && (
          <>
            <path d="M44 34 q6 -3 11 -1" stroke={COCOA} strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M65 31 q6 -2 11 1" stroke={COCOA} strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </>
        )}
        {mood === "sad" && (
          <>
            <path d="M45 37 L54 34" stroke={COCOA} strokeWidth="2.4" strokeLinecap="round" />
            <path d="M75 37 L66 34" stroke={COCOA} strokeWidth="2.4" strokeLinecap="round" />
          </>
        )}

        {/* ── Gözlər ── */}
        {squint ? (
          <>
            <path d="M44 47 q6 -8 12 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M64 47 q6 -8 12 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : shades ? (
          <>
            <rect x="42" y="40" width="15" height="10" rx="4" fill={COCOA} />
            <rect x="63" y="40" width="15" height="10" rx="4" fill={COCOA} />
            <path d="M57 44 h6" stroke={COCOA} strokeWidth="3" />
          </>
        ) : (
          <g className={blinkClass} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <ellipse cx="50" cy="45" rx="5.5" ry="7" fill={COCOA} />
            <ellipse cx="70" cy="45" rx="5.5" ry="7" fill={COCOA} />
            <circle cx="48" cy={lookUp ? 41.5 : 42.5} r="2.1" fill="#fff" />
            <circle cx="68" cy={lookUp ? 41.5 : 42.5} r="2.1" fill="#fff" />
          </g>
        )}

        {/* Burun */}
        <ellipse cx="60" cy="55" rx="4.2" ry="3.3" fill={COCOA} />
        <ellipse cx="58.8" cy="53.9" rx="1.2" ry="0.8" fill="#fff" opacity="0.5" />

        {/* ── Ağız ── */}
        {isSpeaking ? (
          <ellipse
            className="ulduz-talk"
            cx="60"
            cy="61"
            rx="5.5"
            ry="4.5"
            fill={COCOA}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ) : mood === "celebrate" ? (
          <path d="M51 58 q9 11 18 0 q-9 5 -18 0 z" fill={COCOA} />
        ) : mood === "sad" ? (
          <path d="M54 62 q6 -2 12 0" stroke={COCOA} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        ) : mood === "thinking" ? (
          <path d="M55 61 q5 1 10 -1" stroke={COCOA} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        ) : mood === "love" ? (
          <path d="M54 60 q6 5 12 -1" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M52 59 Q60 65 68 59" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </span>
  );
}
