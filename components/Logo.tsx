// "Imparo" loqosu — Zefi tülkünün üzü yumru-dördbucaqlı tile içində (Duolingo üslubu).
// İsti palitra: Fox Orange tile + cream üz + cocoa gözlər/kontur + mərcan qulaq içi.

export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Imparo"
      role="img"
    >
      <defs>
        <linearGradient id="imparo-tile" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9F43" />
          <stop offset="1" stopColor="#F47B3A" />
        </linearGradient>
        <radialGradient id="imparo-face" cx="40%" cy="30%" r="80%">
          <stop offset="0" stopColor="#FFD3A0" />
          <stop offset="60%" stopColor="#FFF4DF" />
          <stop offset="1" stopColor="#F6E4C2" />
        </radialGradient>
      </defs>

      {/* Tile + üst işıq */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#imparo-tile)" />
      <rect x="7" y="6" width="50" height="16" rx="8" fill="#ffffff" opacity="0.14" />

      {/* Qulaqlar */}
      <path d="M16 30 L11 3 L34 18 Z" fill="#F47B3A" stroke="#B84E1F" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M48 30 L53 3 L30 18 Z" fill="#F47B3A" stroke="#B84E1F" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 24 L16 11 L28 19 Z" fill="#FF8F70" />
      <path d="M46 24 L48 11 L36 19 Z" fill="#FF8F70" />

      {/* Baş + işıq + krem üz */}
      <circle cx="32" cy="36" r="23" fill="#F47B3A" stroke="#B84E1F" strokeWidth="2.5" />
      <ellipse cx="23" cy="24" rx="9" ry="6" fill="#ffffff" opacity="0.18" />
      <path
        d="M32 27 C43 27 48 37 46 45 C43 53 38 57 32 57 C26 57 21 53 18 45 C16 37 21 27 32 27 Z"
        fill="url(#imparo-face)"
      />

      {/* Yanaqlar */}
      <ellipse cx="21" cy="41" rx="3.2" ry="2.1" fill="#FF8F70" opacity="0.55" />
      <ellipse cx="43" cy="41" rx="3.2" ry="2.1" fill="#FF8F70" opacity="0.55" />

      {/* Gözlər */}
      <ellipse cx="24" cy="36" rx="4.6" ry="6" fill="#3B2723" />
      <ellipse cx="40" cy="36" rx="4.6" ry="6" fill="#3B2723" />
      <circle cx="22.5" cy="34" r="1.8" fill="#ffffff" />
      <circle cx="38.5" cy="34" r="1.8" fill="#ffffff" />

      {/* Burun + təbəssüm */}
      <ellipse cx="32" cy="45" rx="3.4" ry="2.7" fill="#3B2723" />
      <path d="M25 49 Q32 55 39 49" stroke="#3B2723" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
