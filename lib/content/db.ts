// Məzmunu Supabase DB-dən oxuyub `Subject[]` ağacına bərpa edir (seed.ts-in əksi).
// DB boşdursa/xəta olsa null qaytarır → ContentProvider TS seed-ə fallback edir.

import { createClient } from "../supabase/client";
import { subjects as seedSubjects } from "./index";
import type {
  Subject,
  Unit,
  Lesson,
  Task,
  TaskFigure,
  RuleSection,
} from "../types";

// TS seed-dən dərs id → {sections, visual, intro} xəritəsi.
// DB-də bu sahələr boş qalırsa (seed onları yazmayıbsa) buradan doldururuq —
// beləcə qaydalar/şəkillər həmişə görünür (məzmun DB-də olsa da).
const seedLessonById = new Map<string, Lesson>();
for (const s of seedSubjects)
  for (const u of s.units) for (const l of u.lessons) seedLessonById.set(l.id, l);

interface SubjectRow {
  id: string;
  name: string;
  grade: number;
  icon: string | null;
  color: string | null;
  sort_order: number;
}
interface UnitRow {
  id: string;
  subject_id: string;
  title: string;
  description: string | null;
  sort_order: number;
}
interface LessonRow {
  id: string;
  unit_id: string;
  title: string;
  intro: string | null;
  visual: string | null;
  sections: RuleSection[] | null;
  sort_order: number;
}
interface TaskRow {
  id: string;
  lesson_id: string;
  type: Task["type"];
  prompt: string;
  data: Record<string, unknown> | null;
  xp: number;
  sort_order: number;
}

// jsonb `data`-nı Task-a çevir + bonus bayrağını qaytar.
function parseTask(row: TaskRow): { task: Task; bonus: boolean } {
  const d = row.data ?? {};
  const figure = d.figure as TaskFigure | undefined;
  const bonus = d.bonus === true;
  let task: Task;
  if (row.type === "multiple_choice") {
    task = {
      id: row.id,
      type: "multiple_choice",
      prompt: row.prompt,
      xp: row.xp,
      figure,
      options: (d.options as string[]) ?? [],
      correctIndex: (d.correctIndex as number) ?? 0,
    };
  } else if (row.type === "fill_blank") {
    task = {
      id: row.id,
      type: "fill_blank",
      prompt: row.prompt,
      xp: row.xp,
      figure,
      accepted: (d.accepted as string[]) ?? [],
    };
  } else {
    task = {
      id: row.id,
      type: "numeric",
      prompt: row.prompt,
      xp: row.xp,
      figure,
      answer: (d.answer as number) ?? 0,
      tolerance: d.tolerance as number | undefined,
    };
  }
  return { task, bonus };
}

// Bütün məzmunu bir dəfə çəkib ağac qur. Boş/xəta → null (fallback siqnalı).
export async function fetchContentTree(): Promise<Subject[] | null> {
  try {
    const supabase = createClient();
    const [subsRes, unitsRes, lessonsRes, tasksRes] = await Promise.all([
      supabase.from("subjects").select("*").order("sort_order"),
      supabase.from("units").select("*").order("sort_order"),
      supabase.from("lessons").select("*").order("sort_order"),
      supabase.from("tasks").select("*").order("sort_order"),
    ]);

    const subs = subsRes.data as SubjectRow[] | null;
    if (subsRes.error || !subs || subs.length === 0) return null;
    const unitRows = (unitsRes.data ?? []) as UnitRow[];
    const lessonRows = (lessonsRes.data ?? []) as LessonRow[];
    const taskRows = (tasksRes.data ?? []) as TaskRow[];

    // Tapşırıqları dərsə görə qrupla (əsas + bonus).
    const tasksByLesson = new Map<string, { main: Task[]; bonus: Task[] }>();
    for (const row of taskRows) {
      const { task, bonus } = parseTask(row);
      let entry = tasksByLesson.get(row.lesson_id);
      if (!entry) {
        entry = { main: [], bonus: [] };
        tasksByLesson.set(row.lesson_id, entry);
      }
      (bonus ? entry.bonus : entry.main).push(task);
    }

    // Dərsləri bölməyə görə qrupla.
    const lessonsByUnit = new Map<string, Lesson[]>();
    for (const row of lessonRows) {
      const t = tasksByLesson.get(row.id) ?? { main: [], bonus: [] };
      const seed = seedLessonById.get(row.id); // DB-də boş sahələr üçün ehtiyat
      const lesson: Lesson = {
        id: row.id,
        title: row.title,
        intro: row.intro ?? seed?.intro ?? "",
        visual: row.visual ?? seed?.visual,
        sections:
          row.sections && row.sections.length ? row.sections : seed?.sections,
        tasks: t.main,
        bonusTasks: t.bonus.length ? t.bonus : undefined,
      };
      const arr = lessonsByUnit.get(row.unit_id) ?? [];
      arr.push(lesson);
      lessonsByUnit.set(row.unit_id, arr);
    }

    // Bölmələri fənnə görə qrupla.
    const unitsBySubject = new Map<string, Unit[]>();
    for (const row of unitRows) {
      const unit: Unit = {
        id: row.id,
        title: row.title,
        description: row.description ?? "",
        lessons: lessonsByUnit.get(row.id) ?? [],
      };
      const arr = unitsBySubject.get(row.subject_id) ?? [];
      arr.push(unit);
      unitsBySubject.set(row.subject_id, arr);
    }

    return subs.map((s) => ({
      slug: s.id,
      name: s.name,
      grade: s.grade,
      icon: s.icon ?? "",
      color: s.color ?? "",
      units: unitsBySubject.get(s.id) ?? [],
    }));
  } catch {
    return null;
  }
}
