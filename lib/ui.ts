// Fənn rənglərini Tailwind siniflərinə çevirən köməkçi.
// Tailwind v4 dinamik sinif adlarını (bg-${color}-500) tanımadığı üçün
// bütün siniflər burada açıq yazılır ki, build zamanı saxlanılsın.

export interface ColorClasses {
  bg: string;
  bgSoft: string;
  text: string;
  border: string;
  ring: string;
}

const map: Record<string, ColorClasses> = {
  sky: {
    bg: "bg-sky-500",
    bgSoft: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
    ring: "ring-sky-400",
  },
  rose: {
    bg: "bg-rose-500",
    bgSoft: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    ring: "ring-rose-400",
  },
  violet: {
    bg: "bg-violet-500",
    bgSoft: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    ring: "ring-violet-400",
  },
};

export function colorClasses(color: string): ColorClasses {
  return map[color] ?? map.sky;
}
