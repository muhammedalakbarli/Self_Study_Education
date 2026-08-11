"use client";

// "Zefi" — Imparo-nun tülkü mascotu (3D üslub). Həcmli kölgələmə (radial gradientlər,
// işıq vurğusu, yumşaq yer kölgəsi), böyük baş, mərcan-içli qulaqlar, iri cocoa gözlər
// (parıltılı), krem üz/qarın, tüklü quyruq, sarı bel çantası kirişi.
// Palitra: Fox Orange + Cream + Coral + Cocoa.
//
// mood: happy · celebrate · sad · thinking · wave · love
// idle: üzmə + göz qırpma. speaking=true → audio lipsync.
// prefers-reduced-motion / .no-anim → hərəkət söndürülür.

import { useId } from "react";
import { useSpeaking } from "@/lib/tts";

export type MascotMood = "happy" | "celebrate" | "sad" | "thinking" | "wave" | "love";

const CORAL = "#FF8F70";
const COCOA = "#3B2723";
const OUTLINE = "#B84E1F"; // yumşaq tülkü konturu (3D hiss)
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

  return (
    <span className={animate ? "ulduz-float" : "inline-block"} style={{ lineHeight: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Zefi"
        role="img"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id={`${uid}-fox`} cx="38%" cy="28%" r="85%">
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
        <ellipse cx="58" cy="116" rx="33" ry="5" fill={COCOA} opacity="0.13" />

        {/* Quyruq (tüklü, krem uclu) */}
        <path
          d="M36 98 C8 94 2 62 20 46 C28 39 38 44 34 56 C30 70 42 84 48 90 Z"
          fill={g("fox")}
          stroke={OUTLINE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M20 46 C28 39 38 44 34 56 C32 62 33 68 37 73 C26 71 18 58 20 46 Z" fill={g("cream")} />

        {/* Bədən + krem qarın */}
        <ellipse cx="60" cy="92" rx="27" ry="23" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="60" cy="97" rx="16" ry="15" fill={g("cream")} />
        <path d="M45 82 Q60 90 75 82" stroke={HONEY} strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Salamlama pəncəsi (wave) */}
        {mood === "wave" && (
          <g
            className={animate ? "ulduz-wave" : ""}
            style={{ transformBox: "fill-box", transformOrigin: "50% 90%" }}
          >
            <ellipse cx="94" cy="60" rx="8" ry="9" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" />
          </g>
        )}

        {/* Qulaqlar */}
        <path d="M33 42 L30 8 L55 27 Z" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M87 42 L90 8 L65 27 Z" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M37 35 L35 17 L49 28 Z" fill={g("ear")} />
        <path d="M83 35 L85 17 L71 28 Z" fill={g("ear")} />

        {/* Baş + işıq vurğusu + krem üz */}
        <circle cx="60" cy="50" r="33" fill={g("fox")} stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="47" cy="34" rx="14" ry="9" fill="#fff" opacity="0.22" />
        <path
          d="M60 40 C75 40 81 53 78 63 C75 73 68 79 60 79 C52 79 45 73 42 63 C39 53 45 40 60 40 Z"
          fill={g("cream")}
        />

        {/* Yanaqlar */}
        {cheeks && (
          <>
            <ellipse cx="47" cy="55" rx="4" ry="2.6" fill={CORAL} opacity="0.55" />
            <ellipse cx="73" cy="55" rx="4" ry="2.6" fill={CORAL} opacity="0.55" />
          </>
        )}

        {/* Qaşlar */}
        {lookUp && (
          <>
            <path d="M43 39 q6 -3 12 -1" stroke={COCOA} strokeWidth="2.6" strokeLinecap="round" fill="none" />
            <path d="M65 36 q6 -2 12 1" stroke={COCOA} strokeWidth="2.6" strokeLinecap="round" fill="none" />
          </>
        )}
        {mood === "sad" && (
          <>
            <path d="M44 42 L54 39" stroke={COCOA} strokeWidth="2.6" strokeLinecap="round" />
            <path d="M76 42 L66 39" stroke={COCOA} strokeWidth="2.6" strokeLinecap="round" />
          </>
        )}

        {/* ── Gözlər ── */}
        {squint ? (
          <>
            <path d="M43 52 q6 -8 12 0" stroke={COCOA} strokeWidth="3.2" fill="none" strokeLinecap="round" />
            <path d="M65 52 q6 -8 12 0" stroke={COCOA} strokeWidth="3.2" fill="none" strokeLinecap="round" />
          </>
        ) : shades ? (
          <>
            <rect x="41" y="45" width="16" height="11" rx="4" fill={COCOA} />
            <rect x="63" y="45" width="16" height="11" rx="4" fill={COCOA} />
            <path d="M57 49 h6" stroke={COCOA} strokeWidth="3" />
          </>
        ) : (
          <g className={blinkClass} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <ellipse cx="49" cy="50" rx="6" ry="7.5" fill={COCOA} />
            <ellipse cx="71" cy="50" rx="6" ry="7.5" fill={COCOA} />
            <circle cx="46.6" cy={lookUp ? 46 : 47} r="2.3" fill="#fff" />
            <circle cx="68.6" cy={lookUp ? 46 : 47} r="2.3" fill="#fff" />
            <circle cx="51" cy="52.5" r="1" fill="#fff" opacity="0.5" />
            <circle cx="73" cy="52.5" r="1" fill="#fff" opacity="0.5" />
          </g>
        )}

        {/* Burun (parıltılı) */}
        <ellipse cx="60" cy="60" rx="4.6" ry="3.6" fill={COCOA} />
        <ellipse cx="58.6" cy="58.8" rx="1.3" ry="0.9" fill="#fff" opacity="0.5" />

        {/* ── Ağız ── */}
        {isSpeaking ? (
          <ellipse
            className="ulduz-talk"
            cx="60"
            cy="67"
            rx="6"
            ry="5"
            fill={COCOA}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ) : mood === "celebrate" ? (
          <path d="M50 63 q10 12 20 0 q-10 6 -20 0 z" fill={COCOA} />
        ) : mood === "sad" ? (
          <path d="M53 67 q7 -2 14 0" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
        ) : mood === "thinking" ? (
          <path d="M54 66 q6 1 11 -1" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
        ) : mood === "love" ? (
          <path d="M53 65 q7 5 14 -1" stroke={COCOA} strokeWidth="2.8" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M52 64 Q60 70 68 64" stroke={COCOA} strokeWidth="2.8" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </span>
  );
}
