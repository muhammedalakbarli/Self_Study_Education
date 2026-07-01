"use client";

// Tapşırıq tipini alıb uyğun giriş sahəsini göstərir (idarə olunan komponent).
// Cavab dəyəri yuxarıdakı LessonRunner-də saxlanılır.

import type { Task } from "@/lib/types";
import type { UserAnswer } from "@/lib/grading";

interface Props {
  task: Task;
  value: UserAnswer | null;
  onChange: (value: UserAnswer) => void;
  disabled: boolean; // yoxlandıqdan sonra giriş kilidlənir
  correctIndex?: number | null; // yoxlandıqdan sonra düzgün variantı göstərmək üçün
}

export default function TaskInput({ task, value, onChange, disabled }: Props) {
  if (task.type === "multiple_choice") {
    return (
      <div className="grid gap-3">
        {task.options.map((option, i) => {
          const selected = value === i;
          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => onChange(i)}
              className={`rounded-xl border-2 px-4 py-3 text-left text-lg transition
                ${
                  selected
                    ? "border-sky-500 bg-sky-50 font-medium"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }
                ${disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  // fill_blank və numeric üçün mətn girişi
  return (
    <input
      type={task.type === "numeric" ? "text" : "text"}
      inputMode={task.type === "numeric" ? "decimal" : "text"}
      value={value === null ? "" : String(value)}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Cavabını yaz..."
      className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-lg
        focus:border-sky-500 focus:outline-none disabled:opacity-80"
    />
  );
}
