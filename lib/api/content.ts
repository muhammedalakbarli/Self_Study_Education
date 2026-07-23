// Route handler-lər üçün məzmun oxuma. DB-dən çəkir, boş olsa TS seed-ə fallback.

import { createClient } from "../supabase/server";
import { fetchContentTreeWith } from "../content/db";
import { subjects as seedSubjects } from "../content";
import type { Subject, Lesson } from "../types";

// Bütün fənn ağacını qaytar (DB → yoxsa seed).
export async function getTree(): Promise<Subject[]> {
  const supabase = await createClient();
  const tree = await fetchContentTreeWith(supabase);
  return tree ?? seedSubjects;
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
