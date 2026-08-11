"use client";

// "Zefi" — Imparo-nun tülkü mascotu (rəsmi brend illüstrasiyası, PNG asset).
// API əvvəlki kimi saxlanılır (mood/animate/speaking) ki, bütün çağırış yerləri işləsin.
// Peşəkar illüstrasiya olduğu üçün əl-SVG əvəzinə hazır şəkil göstərilir.

export type MascotMood = "happy" | "celebrate" | "sad" | "thinking" | "wave" | "love";

const RATIO = 397 / 260; // orijinal şəkil nisbəti

export default function Mascot({
  size = 120,
  animate = true,
}: {
  size?: number;
  mood?: MascotMood;
  animate?: boolean;
  speaking?: boolean;
}) {
  return (
    <span className={animate ? "ulduz-float" : "inline-block"} style={{ lineHeight: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/zefi.png"
        alt="Zefi"
        width={size}
        height={Math.round(size * RATIO)}
        style={{ width: size, height: Math.round(size * RATIO), objectFit: "contain" }}
        draggable={false}
      />
    </span>
  );
}
