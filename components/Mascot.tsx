// "Ulduz" — Bilik Yolu-nun mascotu. Amber ulduz + dostyana üz (brend personajı).
// mood: "happy" (default) | "celebrate" (sevinc) | "sad" (ruhlandıran).

export default function Mascot({
  size = 120,
  mood = "happy",
}: {
  size?: number;
  mood?: "happy" | "celebrate" | "sad";
}) {
  // 5-guşəli ulduz nöqtələri (mərkəz 60,60) — kənarlar stroke ilə yumrulanır.
  const star =
    "60,18 71,44 100,46 77,65 86,96 60,79 34,96 43,65 20,46 49,44";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ulduz"
      role="img"
    >
      {/* kiçik parıltı (brend detalı) */}
      <path
        d="M104 26 l2.4 5.6 5.6 2.4 -5.6 2.4 -2.4 5.6 -2.4 -5.6 -5.6 -2.4 5.6 -2.4 z"
        fill="#5b4bf5"
      />
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
          {/* böyük gözlər (yumşaq, ruhlandıran) */}
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
  );
}
