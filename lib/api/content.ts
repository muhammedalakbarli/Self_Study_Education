// Route handler-lər üçün məzmun oxuma. DB-dən çəkir, boş olsa TS seed-ə fallback.

import { createClient } from "../supabase/server";
import { fetchContentTreeWith } from "../content/db";
import type { Subject, Lesson } from "../types";

// Bütün fənn ağacını qaytar (DB → yoxsa seed).
// Seed STATİK import edilmir: Worker soyuq başlanğıcında 25 məzmun faylının
// qiymətləndirilməsi (~500 ms CPU) resurs limitini aşırdı (Error 1102). Yalnız DB
// cavab verməyəndə lazy yüklənir.
export async function getTree(): Promise<Subject[]> {
  const supabase = await createClient();
  const tree = await fetchContentTreeWith(supabase);
  if (tree) return tree;
  const { subjects: seedSubjects } = await import("../content");
  return seedSubjects;
}

export function findSubject(tree: Subject[], id: string): Subject | undefined {
  return tree.find((s) => s.slug === id);
}

export function findLesson(tree: Subject[], id: string): Lesson | undefined {
  for (const s of tree)
    for (const u of s.units) {
      const l = u.lessons.find((x) => x.id === id);
      if (l) return l;
    }
  return undefined;
}
