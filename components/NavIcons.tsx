// Naviqasiya üçün xüsusi qrafik ikonlar — uşaqlar üçün rəngli "sticker/app-tile"
// üslubu (gradient fon + ağ simvol + yumşaq üst işıq). Emoji deyil, əsl SVG illüstrasiya.
// Hər ikon öz-rəngli olduğu üçün ölçüdən başqa prop almır.

type IconProps = { size?: number };

// Ortaq tile qabığı: gradient fon + üstdə incə ağ parıltı.
function Tile({
  id,
  from,
  to,
  size = 28,
  children,
}: {
  id: string;
  from: string;
  to: string;
  size?: number;
  children: React.ReactNode;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" role="img" aria-hidden>
      <defs>
        <linearGradient id={id} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="13" fill={`url(#${id})`} />
      {/* üst işıq */}
      <rect x="8" y="7" width="32" height="13" rx="7" fill="#fff" opacity="0.16" />
      {children}
    </svg>
  );
}

// Öyrən — açıq kitab
export function IconLearn({ size }: IconProps) {
  return (
    <Tile id="ni-learn" from="#818cf8" to="#4f46e5" size={size}>
      <g fill="#fff">
        <path d="M23 18.5c-2.2-1.6-5.2-2.3-8.5-2.2-.9 0-1.5.7-1.5 1.6v11.7c0 .9.8 1.6 1.7 1.5 2.9-.1 5.6.5 7.6 1.9.4.3 1 .3 1.4 0 2-1.4 4.7-2 7.6-1.9.9 0 1.7-.6 1.7-1.5V17.9c0-.9-.6-1.6-1.5-1.6-3.3-.1-6.3.6-8.5 2.2z" />
      </g>
      <path
        d="M24 19v14"
        stroke="#4f46e5"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </Tile>
  );
}

// Praktika — qantel
export function IconPractice({ size }: IconProps) {
  return (
    <Tile id="ni-practice" from="#34d399" to="#059669" size={size}>
      <g fill="#fff">
        <rect x="15" y="22" width="18" height="4.5" rx="2.25" />
        <rect x="10.5" y="17" width="5.5" height="14" rx="2.5" />
        <rect x="32" y="17" width="5.5" height="14" rx="2.5" />
        <rect x="8" y="20" width="3.5" height="8" rx="1.75" />
        <rect x="36.5" y="20" width="3.5" height="8" rx="1.75" />
      </g>
    </Tile>
  );
}

// Liqa — kubok
export function IconLeague({ size }: IconProps) {
  return (
    <Tile id="ni-league" from="#fbbf24" to="#d97706" size={size}>
      <g fill="#fff">
        <path d="M18 14h12v6a6 6 0 0 1-12 0z" />
        <path
          d="M18 16h-2.5a1.5 1.5 0 0 0-1.5 1.5c0 2.2 1.8 4 4 4"
          stroke="#fff"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 16h2.5a1.5 1.5 0 0 1 1.5 1.5c0 2.2-1.8 4-4 4"
          stroke="#fff"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="22" y="25.5" width="4" height="5" />
        <rect x="16.5" y="30" width="15" height="4" rx="1.6" />
      </g>
    </Tile>
  );
}

// Profil — insan
export function IconProfile({ size }: IconProps) {
  return (
    <Tile id="ni-profile" from="#f472b6" to="#db2777" size={size}>
      <g fill="#fff">
        <circle cx="24" cy="19.5" r="5.5" />
        <path d="M14 33.5a10 10 0 0 1 20 0 1.5 1.5 0 0 1-1.5 1.5h-17a1.5 1.5 0 0 1-1.5-1.5z" />
      </g>
    </Tile>
  );
}

// Daha çoxu — rəngli xanalar
export function IconMore({ size }: IconProps) {
  return (
    <Tile id="ni-more" from="#38bdf8" to="#0284c7" size={size}>
      <g fill="#fff">
        <rect x="14.5" y="14.5" width="8" height="8" rx="2.4" />
        <rect x="25.5" y="14.5" width="8" height="8" rx="2.4" />
        <rect x="14.5" y="25.5" width="8" height="8" rx="2.4" />
        <rect x="25.5" y="25.5" width="8" height="8" rx="2.4" />
      </g>
    </Tile>
  );
}
