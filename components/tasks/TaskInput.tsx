"use client";

// Tapşırıq tipini alıb uyğun giriş sahəsini göstərir.
// Çoxseçimli: böyük 3D "tile"-lar; reveal=true olduqda düz/səhv rəngi ilə canlanır.

import { motion } from "framer-motion";
import type { Task } from "@/lib/types";
import type { UserAnswer } from "@/lib/grading";
import { playSelect } from "@/lib/sound";

interface Props {
  task: Task;
  value: UserAnswer | null;
  onChange: (value: UserAnswer) => void;
  disabled: boolean;
  reveal?: boolean; // yoxlanıldıqdan sonra düz/səhv göstər
}

export default function TaskInput({ task, value, onChange, disabled, reveal }: Props) {
  if (task.type === "multiple_choice") {
    const correctIndex = task.correctIndex;
    return (
      <div className="grid gap-3">
        {task.options.map((option, i) => {
          const selected = value === i;
          const isCorrect = reveal && i === correctIndex;
          const isWrongPick = reveal && selected && i !== correctIndex;

          let state = "";
          if (isCorrect) state = "tile-correct";
          else if (isWrongPick) state = "tile-wrong";
          else if (reveal) state = "opacity-60";
          else if (selected) state = "tile-selected";

          return (
            <motion.button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => {
                playSelect();
                onChange(i);
              }}
              whileTap={disabled ? undefined : { scale: 0.98 }}
              animate={
                isCorrect
                  ? { scale: [1, 1.03, 1] }
                  : isWrongPick
                    ? { x: [0, -9, 9, -6, 6, 0] }
                    : { scale: 1, x: 0 }
              }
              transition={{ duration: isWrongPick ? 0.42 : 0.32 }}
              className={`tile flex items-center gap-3 px-5 py-4 text-left text-lg font-bold text-fg ${state} ${
                disabled ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-extrabold ${
                  isCorrect
                    ? "border-emerald-500 text-emerald-600"
                    : isWrongPick
                      ? "border-red-400 text-red-500"
                      : selected && !reveal
                        ? "border-brand text-brand"
                        : "border-line text-muted"
                }`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
            </motion.button>
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
      className={`w-full rounded-2xl border-2 bg-panel px-5 py-4 text-lg font-bold text-fg
        shadow-[0_4px_0_0_var(--color-line)] placeholder:font-medium placeholder:text-muted
        focus:outline-none disabled:opacity-90 ${
          reveal ? "border-line" : "border-line focus:border-brand"
        }`}
    />
  );
}
