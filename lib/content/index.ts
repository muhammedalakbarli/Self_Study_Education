// Bütün fənlərin məzmununu birləşdirən mərkəzi fayl.
// "@/lib/content" importları bu index-i istifadə edir (əvvəlki content.ts əvəzi).

import type { Subject, Task } from "../types";
import { math } from "./math";
import { azerbaijani } from "./azerbaijani";
import { english } from "./english";

export const subjects: Subject[] = [math, azerbaijani, english];

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
