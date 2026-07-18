"use client";

// Tapşırıq tipini alıb uyğun giriş sahəsini göstərir.

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
              className={`btn-pop rounded-2xl border-2 px-4 py-3.5 text-left text-lg font-semibold
                ${
                  selected
                    ? "border-brand bg-brand/10 text-brand [--pop:var(--color-brand)]"
                    : "border-line bg-panel text-fg btn-pop-ghost hover:border-brand"
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
      className="w-full rounded-2xl border-2 border-line bg-panel px-4 py-3.5 text-lg font-semibold text-fg
        placeholder:font-normal placeholder:text-muted focus:border-brand focus:outline-none disabled:opacity-80"
    />
  );
}
