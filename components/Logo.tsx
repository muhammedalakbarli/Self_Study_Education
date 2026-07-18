// "Bilik Yolu" loqosu — yüksələn pillələr/yol motivi: öyrənmədə irəliləyiş.
// İndigo pillələr + isti amber yüksəliş oxu.

export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bilik Yolu"
    >
      {/* yüksələn pillələr */}
      <rect x="10" y="40" width="12" height="14" rx="3" fill="#5b4bf5" />
      <rect x="26" y="28" width="12" height="26" rx="3" fill="#5b4bf5" />
      <rect x="42" y="14" width="12" height="40" rx="3" fill="#5b4bf5" />
      {/* yüksəliş oxu */}
      <path
        d="M12 34 L30 22 L46 10"
        stroke="#ff9500"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="10" r="4" fill="#ff9500" />
    </svg>
  );
}
