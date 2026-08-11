// "Imparo" loqosu — yuvarlaq gradient tile + ağ "i" hərfi, nöqtəsi amber qığılcım
// (öyrənmə/ideya işartısı). Brend: indigo tile + amber spark. Kiçik ölçüdə də oxunur.

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
        <linearGradient id="imparo-logo" x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6b5bff" />
          <stop offset="1" stopColor="#4636cf" />
        </linearGradient>
      </defs>

      {/* Yuvarlaq tile fon */}
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#imparo-logo)" />
      {/* Üst işıq (glossy) */}
      <rect x="11" y="10" width="42" height="16" rx="9" fill="#ffffff" opacity="0.16" />

      {/* "i" gövdəsi */}
      <rect x="28" y="29" width="8" height="21" rx="4" fill="#ffffff" />

      {/* "i" nöqtəsi — amber 4-guşəli qığılcım */}
      <path
        d="M32 10 L34.2 15.8 L40 18 L34.2 20.2 L32 26 L29.8 20.2 L24 18 L29.8 15.8 Z"
        fill="#ff9500"
      />
    </svg>
  );
}
