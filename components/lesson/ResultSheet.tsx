"use client";

// Duolingo imzalı "nəticə lövhəsi" — cavab yoxlananda aşağıdan qalxır.
// Düzgün → yaşıl "Əla!"; səhv → qırmızı "Düzgün cavab: …". Böyük Ulduz + DAVAM ET.

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Mascot from "@/components/Mascot";
import { useT } from "@/lib/i18n";

interface Props {
  correct: boolean;
  correctText?: string; // səhv olduqda düzgün cavab
  comboBonus?: number;
  ctaLabel: string;
  onContinue: () => void;
}

export default function ResultSheet({
  correct,
  correctText,
  comboBonus = 0,
  ctaLabel,
  onContinue,
}: Props) {
  const t = useT();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
      className={`fixed inset-x-0 bottom-0 z-40 border-t-2 ${
        correct
          ? "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10"
          : "border-red-400/40 bg-red-50 dark:bg-red-500/10"
      }`}
    >
      <div className="mx-auto flex max-w-xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center">
        <motion.div
          initial={{ scale: 0.5, rotate: correct ? -12 : 0 }}
          animate={
            correct ? { scale: 1, rotate: 0, y: [0, -10, 0] } : { scale: 1, x: [0, -6, 6, 0] }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
              correct ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {correct ? <Check size={26} strokeWidth={3.5} /> : <X size={26} strokeWidth={3.5} />}
          </span>
          <div className="hidden sm:block">
            <Mascot size={44} mood={correct ? "celebrate" : "sad"} animate={false} />
          </div>
        </motion.div>

        <div className="flex-1">
          <div
            className={`font-display text-xl font-bold ${
              correct ? "text-emerald-700 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
            }`}
          >
            {correct ? t("cel.great") : t("cel.answerWas")}
          </div>
          {!correct && correctText && (
            <div className="mt-0.5 font-bold text-fg">{correctText}</div>
          )}
          {correct && comboBonus > 0 && (
            <div className="mt-0.5 text-sm font-extrabold text-orange-500">
              🔥 +{comboBonus} XP combo!
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onContinue}
          className={`w-full shrink-0 rounded-2xl px-8 py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop sm:w-auto ${
            correct
              ? "bg-emerald-500 btn-pop-green hover:bg-emerald-600"
              : "bg-red-500 btn-pop-red hover:bg-red-600"
          }`}
        >
          {ctaLabel}
        </button>
      </div>
    </motion.div>
  );
}
