// "Imparo" loqosu — raket (öyrənmə səyahəti / yüksəliş). Gradient tile + ağ raket
// gövdəsi + indigo pəncərə + amber qanadlar + gradient alov + qığılcımlar.
// Brend: indigo + amber. Kiçik ölçüdə də oxunur (favicon ilə eyni marka).

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
        <linearGradient id="imparo-tile" x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff9f43" />
          <stop offset="1" stopColor="#f47b3a" />
        </linearGradient>
        <linearGradient id="imparo-flame" x1="32" y1="41" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffd166" />
          <stop offset="1" stopColor="#ff6b5e" />
        </linearGradient>
      </defs>

      {/* Tile + üst işıq */}
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#imparo-tile)" />
      <rect x="11" y="10" width="42" height="15" rx="9" fill="#ffffff" opacity="0.14" />

      {/* Qanadlar */}
      <path d="M24 33 L16 44 L26 40 Z" fill="#ffd166" />
      <path d="M40 33 L48 44 L38 40 Z" fill="#ffd166" />
      {/* Alov */}
      <path d="M27 41 L32 56 L37 41 Z" fill="url(#imparo-flame)" />
      <path d="M30 41 L32 50 L34 41 Z" fill="#ffffff" opacity="0.65" />

      {/* Gövdə */}
      <path
        d="M32 8 C38 13 41 21 41 29 C41 35 39 39 36 43 L28 43 C25 39 23 35 23 29 C23 21 26 13 32 8 Z"
        fill="#ffffff"
      />
      {/* Pəncərə */}
      <circle cx="32" cy="25" r="5.5" fill="#3b2723" />
      <circle cx="30.3" cy="23.3" r="1.7" fill="#ffffff" opacity="0.85" />

      {/* Qığılcımlar */}
      <path d="M14 16 l1.3 3 3 1.3 -3 1.3 -1.3 3 -1.3 -3 -3 -1.3 3 -1.3 z" fill="#ffd166" />
      <path d="M50 31 l1 2.3 2.3 1 -2.3 1 -1 2.3 -1 -2.3 -2.3 -1 2.3 -1 z" fill="#ffd166" opacity="0.9" />
    </svg>
  );
}
