// "Ulduz" — Bilik Yolu-nun mascotu. Amber ulduz + dostyana üz + əl sallayan animasiya.
// mood: "happy" (default) | "celebrate" (sevinc) | "sad" (ruhlandıran).
// animate: idle "üzmə" + happy-də əl sallama (default true).

export default function Mascot({
  size = 120,
  mood = "happy",
  animate = true,
}: {
  size?: number;
  mood?: "happy" | "celebrate" | "sad";
  animate?: boolean;
}) {
  // 5-guşəli ulduz nöqtələri (mərkəz 60,60) — kənarlar stroke ilə yumrulanır.
  const star = "60,18 71,44 100,46 77,65 86,96 60,79 34,96 43,65 20,46 49,44";
  const showArm = mood !== "sad";
  const waveClass = animate && mood === "happy" ? "ulduz-wave" : "";

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

        {/* qaldırılmış əl (sağ yuxarı, aydın sallanır) */}
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

        {/* yanaqlar */}
        <circle cx="44" cy="64" r="5" fill="#ff6b6b" opacity="0.55" />
        <circle cx="76" cy="64" r="5" fill="#ff6b6b" opacity="0.55" />

        {mood === "celebrate" ? (
          <>
            {/* sevincli qapalı gözlər (^ ^) */}
            <path d="M44 54 q5 -6 10 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M66 54 q5 -6 10 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* geniş açıq təbəssüm */}
            <path d="M49 66 q11 12 22 0 q-11 6 -22 0 z" fill="#2a2340" />
          </>
        ) : mood === "sad" ? (
          <>
            <ellipse cx="49" cy="55" rx="6.5" ry="7.5" fill="#fff" />
            <ellipse cx="71" cy="55" rx="6.5" ry="7.5" fill="#fff" />
            <circle cx="50" cy="57" r="3.4" fill="#2a2340" />
            <circle cx="72" cy="57" r="3.4" fill="#2a2340" />
            <circle cx="48.5" cy="55" r="1.1" fill="#fff" />
            <circle cx="70.5" cy="55" r="1.1" fill="#fff" />
            {/* kiçik təəssüf ağzı */}
            <path d="M51 71 q9 -6 18 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            {/* böyük dostyana gözlər */}
            <ellipse cx="49" cy="55" rx="6.5" ry="7.5" fill="#fff" />
            <ellipse cx="71" cy="55" rx="6.5" ry="7.5" fill="#fff" />
            <circle cx="50.5" cy="56" r="3.4" fill="#2a2340" />
            <circle cx="72.5" cy="56" r="3.4" fill="#2a2340" />
            <circle cx="49" cy="54" r="1.1" fill="#fff" />
            <circle cx="71" cy="54" r="1.1" fill="#fff" />
            {/* təbəssüm */}
            <path d="M51 67 q9 8 18 0" stroke="#2a2340" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </>
        )}
      </svg>
    </span>
  );
}
