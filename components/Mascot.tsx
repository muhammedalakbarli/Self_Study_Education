"use client";

// "Zefi" — Imparo-nun tülkü mascotu (rəsmi brend vərəqinə uyğun). Tam bədən: böyük baş,
// tülkü üz "blaze"i (krem burun-alın), qaş işarələri, iri gözlər, tünd qəhvəyi pəncələr/
// ayaqlar, krem sinə, tüklü krem-uclu quyruq, qızıl çanta qayışları.
// mood: happy · celebrate · sad · thinking · wave · love
// idle: üzmə + göz qırpma. speaking=true → audio lipsync.

import { useSpeaking } from "@/lib/tts";

export type MascotMood = "happy" | "celebrate" | "sad" | "thinking" | "wave" | "love";

const FOX = "#F47B3A";
const CREAM = "#FFF4DF";
const CORAL = "#FF8F70";
const COCOA = "#3B2723";
const OUTLINE = "#C85A28";
const PAW = "#5C3320";
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
  const joyful = mood === "celebrate" || mood === "love";
  const lookUp = mood === "thinking";
  const blinkClass = animate && !joyful ? "ulduz-blink" : "";
  const waving = mood === "wave";

  return (
    <span className={animate ? "ulduz-float" : "inline-block"} style={{ lineHeight: 0 }}>
      <svg width={size} height={(size * 130) / 120} viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Zefi" role="img" style={{ overflow: "visible" }}>
        {/* yer kölgəsi */}
        <ellipse cx="60" cy="124" rx="33" ry="5" fill={COCOA} opacity="0.12" />

        {/* quyruq */}
        <path d="M84 96 C112 96 118 64 103 49 C96 42 86 47 90 58 C95 74 82 86 78 92 Z" fill={FOX} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
        <path d="M103 49 C96 42 86 47 90 58 C92 64 91 71 87 75 C100 73 107 61 103 49 Z" fill={CREAM} />

        {/* ayaqlar + tünd pəncələr */}
        <path d="M48 104 L48 114" stroke={FOX} strokeWidth="13" strokeLinecap="round" />
        <path d="M72 104 L72 114" stroke={FOX} strokeWidth="13" strokeLinecap="round" />
        <ellipse cx="47" cy="117" rx="9" ry="6.5" fill={PAW} />
        <ellipse cx="73" cy="117" rx="9" ry="6.5" fill={PAW} />

        {/* sol qol + pəncə */}
        <path d="M35 80 C28 86 26 94 29 100" stroke={FOX} strokeWidth="12" strokeLinecap="round" fill="none" />
        <ellipse cx="29" cy="101" rx="7.5" ry="7" fill={PAW} />

        {/* sağ qol (salamlayanda yuxarı) + pəncə */}
        {waving ? (
          <g className={animate ? "ulduz-wave" : ""} style={{ transformBox: "fill-box", transformOrigin: "20% 90%" }}>
            <path d="M85 80 C93 72 96 62 94 54" stroke={FOX} strokeWidth="12" strokeLinecap="round" fill="none" />
            <ellipse cx="94" cy="52" rx="7.5" ry="7" fill={PAW} />
          </g>
        ) : (
          <>
            <path d="M85 80 C92 86 94 94 91 100" stroke={FOX} strokeWidth="12" strokeLinecap="round" fill="none" />
            <ellipse cx="91" cy="101" rx="7.5" ry="7" fill={PAW} />
          </>
        )}

        {/* gövdə + krem sinə */}
        <path d="M60 58 C77 58 86 72 86 90 C86 106 75 112 60 112 C45 112 34 106 34 90 C34 72 43 58 60 58 Z" fill={FOX} stroke={OUTLINE} strokeWidth="2" />
        <ellipse cx="60" cy="92" rx="16" ry="18" fill={CREAM} />
        <path d="M48 68 L53 98" stroke={HONEY} strokeWidth="5" strokeLinecap="round" />
        <path d="M72 68 L67 98" stroke={HONEY} strokeWidth="5" strokeLinecap="round" />

        {/* qulaqlar */}
        <path d="M33 42 L28 4 L55 24 Z" fill={FOX} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
        <path d="M87 42 L92 4 L65 24 Z" fill={FOX} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
        <path d="M37 34 L34 14 L49 25 Z" fill={CREAM} />
        <path d="M83 34 L86 14 L71 25 Z" fill={CREAM} />

        {/* baş + tülkü blaze */}
        <circle cx="60" cy="42" r="31" fill={FOX} stroke={OUTLINE} strokeWidth="2" />
        <path d="M60 30 C63 30 65 34 65 39 C72 41 78 47 79 55 C80 63 75 70 66 72 C63 73 57 73 54 72 C45 70 40 63 41 55 C42 47 48 41 55 39 C55 34 57 30 60 30 Z" fill={CREAM} />

        {/* qaş işarələri */}
        {lookUp ? (
          <>
            <path d="M44 34 C48 31 55 31 58 35" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M76 34 C72 31 65 31 62 35" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : mood === "sad" ? (
          <>
            <path d="M45 39 C49 36 54 36 57 38" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M75 39 C71 36 66 36 63 38" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M45 37 C49 34 55 34 58 38" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M75 37 C71 34 65 34 62 38" stroke={OUTLINE} strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        )}

        {/* yanaqlar */}
        {!lookUp && (
          <>
            <ellipse cx="47" cy="52" rx="4" ry="2.6" fill={CORAL} opacity="0.5" />
            <ellipse cx="73" cy="52" rx="4" ry="2.6" fill={CORAL} opacity="0.5" />
          </>
        )}

        {/* gözlər */}
        {joyful ? (
          <>
            <path d="M44 47 q6 -7 12 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M64 47 q6 -7 12 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <g className={blinkClass} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <ellipse cx="50" cy="46" rx="6" ry="7" fill={COCOA} />
            <ellipse cx="70" cy="46" rx="6" ry="7" fill={COCOA} />
            <circle cx="48" cy={lookUp ? 42 : 43.5} r="2.2" fill="#fff" />
            <circle cx="68" cy={lookUp ? 42 : 43.5} r="2.2" fill="#fff" />
          </g>
        )}

        {/* burun */}
        <path d="M56 56 h8 l-4 4 z" fill={COCOA} />

        {/* ağız */}
        {isSpeaking ? (
          <ellipse className="ulduz-talk" cx="60" cy="63" rx="5" ry="4.5" fill={COCOA} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
        ) : joyful ? (
          <path d="M52 60 q8 10 16 0 q-8 5 -16 0 z" fill={COCOA} />
        ) : mood === "sad" ? (
          <path d="M55 63 q5 -2 10 0" stroke={COCOA} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        ) : (
          <>
            <path d="M60 60 C60 64 56 66 53 64" stroke={COCOA} strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M60 60 C60 64 64 66 67 64" stroke={COCOA} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </>
        )}
      </svg>
    </span>
  );
}
