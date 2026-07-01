// Tapşırıq cavablarını yoxlayan tək mərkəzi funksiya.
// Hər yeni tapşırıq tipi bura bir case kimi əlavə olunur.

import type { Task } from "./types";

// İstifadəçinin cavabı: multiple_choice üçün seçilmiş indeks (number),
// fill_blank üçün mətn (string), numeric üçün mətn/rəqəm (string).
export type UserAnswer = number | string;

export interface GradeResult {
  correct: boolean;
  earnedXp: number;
}

function normalizeText(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function gradeTask(task: Task, answer: UserAnswer): GradeResult {
  let correct = false;

  switch (task.type) {
    case "multiple_choice":
      correct = Number(answer) === task.correctIndex;
      break;

    case "fill_blank":
      correct = task.accepted.some(
        (a) => normalizeText(a) === normalizeText(String(answer))
      );
      break;

    case "numeric": {
      const num = parseFloat(String(answer).replace(",", "."));
      if (!Number.isNaN(num)) {
        const tolerance = task.tolerance ?? 0;
        correct = Math.abs(num - task.answer) <= tolerance;
      }
      break;
    }
  }

  return { correct, earnedXp: correct ? task.xp : 0 };
}
