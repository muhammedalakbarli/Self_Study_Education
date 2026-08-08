// Bütün fənlərin məzmununu birləşdirən mərkəzi fayl.
// "@/lib/content" importları bu index-i istifadə edir (əvvəlki content.ts əvəzi).

import type { Subject, Task } from "../types";
import { math1 } from "./math1";
import { math } from "./math";
import { azerbaijani } from "./azerbaijani";
import { english } from "./english";
import { math6 } from "./math6";
import { azerbaijani6 } from "./azerbaijani6";
import { english6 } from "./english6";
import { math7 } from "./math7";
import { azerbaijani7 } from "./azerbaijani7";
import { english7 } from "./english7";
import { math8 } from "./math8";
import { azerbaijani8 } from "./azerbaijani8";
import { english8 } from "./english8";

// 5-ci sinif fənləri + 6-cı sinif fənləri. App dashboard-da istifadəçinin
// sinfinə (user_metadata.grade) görə süzür (bax lib/grade.ts).
export const subjects: Subject[] = [
  math1,
  math, azerbaijani, english,
  math6, azerbaijani6, english6,
  math7, azerbaijani7, english7,
  math8, azerbaijani8, english8,
];

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getLesson(lessonId: string) {
  for (const subject of subjects) {
    for (const unit of subject.units) {
      const lesson = unit.lessons.find((l) => l.id === lessonId);
      if (lesson) return { subject, unit, lesson };
    }
  }
  return undefined;
}

// Fənn üzrə bütün layihələrin sırası (unlock məntiqi üçün)
export function orderedLessonIds(slug: string): string[] {
  const subject = getSubject(slug);
  if (!subject) return [];
  return subject.units.flatMap((u) => u.lessons.map((l) => l.id));
}

// Praktika üçün: bütün tapşırıqlar (əsas + bonus).
export function getAllTasks(): Task[] {
  return subjects.flatMap((s) =>
    s.units.flatMap((u) =>
      u.lessons.flatMap((l) => [...l.tasks, ...(l.bonusTasks ?? [])]),
    ),
  );
}

// Tapşırığı id ilə tap (səhvlər praktikası üçün).
export function getTaskById(id: string): Task | undefined {
  return getAllTasks().find((t) => t.id === id);
}

// Reading-comprehension tapşırıqları dərsin oxu mətninə (passage) bağlıdır. Təsadüfi
// praktikada (qarışıq/sürət/gündəlik/səhvlər) mətn göstərilmədiyi üçün cavablana bilmir —
// ona görə bu tapşırıqlar praktika hovuzlarından çıxarılır (dərs içində normal işləyir).
// Dinləmə tapşırıqları isə öz `audioText`-ini daşıyır (öz-özünə tam) → praktikada qalır.
export function isPassageTask(task: { id: string }): boolean {
  return /-read-/.test(task.id);
}
