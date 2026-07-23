// GET /api/lessons/{id} — bir dərs: giriş, qaydalar (sections) + bütün tapşırıqlar.

import type { NextRequest } from "next/server";
import { ok, fail } from "@/lib/api/http";
import { getTree, findLesson } from "@/lib/api/content";

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  const tree = await getTree();
  const lesson = findLesson(tree, id);
  if (!lesson) return fail("Dərs tapılmadı", 404);

  return ok({
    id: lesson.id,
    title: lesson.title,
    intro: lesson.intro,
    visual: lesson.visual ?? null,
    sections: lesson.sections ?? [],
    tasks: lesson.tasks,
    bonusTasks: lesson.bonusTasks ?? [],
  });
}
