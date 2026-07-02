// Layihələrin başlama və son tarixləri (deadline).
// Hər layihə 1 həftə sürür və ardıcıl gəlir. Baza — bu həftənin bazar ertəsi.

const MONTHS_AZ = [
  "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
  "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",
];

function mondayOfThisWeek(): Date {
  const now = new Date();
  const day = now.getDay(); // 0=bazar, 1=bazar ertəsi ...
  const diff = (day + 6) % 7; // bazar ertəsinə qədər geri
  const monday = new Date(now);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(now.getDate() - diff);
  return monday;
}

function addDays(d: Date, days: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r;
}

export function formatAz(d: Date): string {
  return `${d.getDate()} ${MONTHS_AZ[d.getMonth()]}`;
}

// index — layihənin fənn daxilindəki sırası (0-dan).
export function projectDates(index: number): {
  start: Date;
  deadline: Date;
  startLabel: string;
  deadlineLabel: string;
  status: "gələcək" | "aktiv" | "keçmiş";
} {
  const base = mondayOfThisWeek();
  const start = addDays(base, index * 7);
  const deadline = addDays(start, 6);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let status: "gələcək" | "aktiv" | "keçmiş" = "aktiv";
  if (today < start) status = "gələcək";
  else if (today > deadline) status = "keçmiş";

  return {
    start,
    deadline,
    startLabel: formatAz(start),
    deadlineLabel: formatAz(deadline),
    status,
  };
}
