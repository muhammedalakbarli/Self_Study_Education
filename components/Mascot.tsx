"use client";

// "Zefi" — Imparo-nun tülkü mascotu. Böyük baş, iri qulaqlar (mərcan içli), iri cocoa
// gözlər (ağ işıq əksi ilə), krem üz/sinə, tüklü quyruq, sarı bel çantası kirişi.
// İsti palitra: Fox Orange + Cream + Coral + Cocoa.
//
// mood:
//   happy      — dostyana gülümsəmə (default)
//   celebrate  — sevincli (level/uğur): qıyılmış gözlər + açıq təbəssüm
//   sad        — "bir də yoxlayaq" (səhv): narahat qaşlar + yumşaq ağız
//   thinking   — düşünür (çətin sual): yuxarı baxan gözlər + qalxmış qaş
//   wave       — salamlayır: pəncə yelləyir
//   love       — "böyük nailiyyət" 😎: günəş eynəyi + smirk
//
// idle: yumşaq üzmə + dövri göz qırpma. speaking=true → audio ilə lipsync.
// prefers-reduced-motion / .no-anim → hərəkət söndürülür.

import { useSpeaking } from "@/lib/tts";

export type MascotMood = "happy" | "celebrate" | "sad" | "thinking" | "wave" | "love";

const FOX = "#F47B3A";
const CREAM = "#FFF4DF";
const CORAL = "#FF8F70";
const COCOA = "#3B2723";
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
        {/* Quyruq (arxada, sol) — tüklü, krem uclu */}
        <path
          d="M36 98 C8 94 2 62 20 46 C28 39 38 44 34 56 C30 70 42 84 48 90 Z"
          fill={FOX}
          stroke={COCOA}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M20 46 C28 39 38 44 34 56 C32 62 33 68 37 73 C26 71 18 58 20 46 Z" fill={CREAM} />

        {/* Bədən + krem qarın */}
        <ellipse cx="60" cy="92" rx="27" ry="23" fill={FOX} stroke={COCOA} strokeWidth="3" />
        <ellipse cx="60" cy="97" rx="16" ry="15" fill={CREAM} />
        {/* Sarı bel çantası kirişi */}
        <path d="M45 82 Q60 90 75 82" stroke={HONEY} strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Salamlama pəncəsi (yalnız wave) */}
        {mood === "wave" && (
          <g
            className={animate ? "ulduz-wave" : ""}
            style={{ transformBox: "fill-box", transformOrigin: "50% 90%" }}
          >
            <ellipse cx="94" cy="60" rx="8" ry="9" fill={FOX} stroke={COCOA} strokeWidth="3" />
          </g>
        )}

        {/* Qulaqlar */}
        <path d="M33 42 L30 8 L55 27 Z" fill={FOX} stroke={COCOA} strokeWidth="3" strokeLinejoin="round" />
        <path d="M87 42 L90 8 L65 27 Z" fill={FOX} stroke={COCOA} strokeWidth="3" strokeLinejoin="round" />
        <path d="M37 35 L35 17 L49 28 Z" fill={CORAL} />
        <path d="M83 35 L85 17 L71 28 Z" fill={CORAL} />

        {/* Baş + krem üz */}
        <circle cx="60" cy="50" r="33" fill={FOX} stroke={COCOA} strokeWidth="3" />
        <path
          d="M60 40 C75 40 81 53 78 63 C75 73 68 79 60 79 C52 79 45 73 42 63 C39 53 45 40 60 40 Z"
          fill={CREAM}
        />

        {/* Yanaqlar */}
        {cheeks && (
          <>
            <ellipse cx="47" cy="55" rx="4" ry="2.6" fill={CORAL} opacity="0.6" />
            <ellipse cx="73" cy="55" rx="4" ry="2.6" fill={CORAL} opacity="0.6" />
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
            <circle cx="47" cy={lookUp ? 46 : 47.5} r="2.1" fill="#fff" />
            <circle cx="69" cy={lookUp ? 46 : 47.5} r="2.1" fill="#fff" />
          </g>
        )}

        {/* Burun */}
        <ellipse cx="60" cy="60" rx="4.6" ry="3.6" fill={COCOA} />

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
