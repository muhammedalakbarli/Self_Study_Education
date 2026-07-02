"use client";

// Tapşırıq tipini alıb uyğun giriş sahəsini göstərir (dark Holberton stili).

import type { Task } from "@/lib/types";
import type { UserAnswer } from "@/lib/grading";

interface Props {
  task: Task;
  value: UserAnswer | null;
  onChange: (value: UserAnswer) => void;
  disabled: boolean;
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
              className={`rounded-xl border px-4 py-3 text-left text-lg transition
                ${
                  selected
                    ? "border-brand bg-brand/10 font-medium text-white"
                    : "border-line bg-panel-2 text-slate-200 hover:border-slate-500"
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

  return (
    <input
      type="text"
      inputMode={task.type === "numeric" ? "decimal" : "text"}
      value={value === null ? "" : String(value)}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Cavabını yaz..."
      className="w-full rounded-xl border border-line bg-panel-2 px-4 py-3 text-lg text-white
        placeholder:text-muted focus:border-brand focus:outline-none disabled:opacity-80"
    />
  );
}
