// GET /api/subjects — bütün fənlərin xülasəsi (bölmə/dərs sayı ilə).

import { ok } from "@/lib/api/http";
import { getTree } from "@/lib/api/content";

export async function GET() {
  const tree = await getTree();
  const subjects = tree.map((s) => ({
    id: s.slug,
    name: s.name,
    grade: s.grade,
    icon: s.icon,
    color: s.color,
    unitCount: s.units.length,
    lessonCount: s.units.reduce((n, u) => n + u.lessons.length, 0),
  }));
  return ok({ subjects });
}
