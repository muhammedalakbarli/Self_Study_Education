// "Bilik Yolu" öyrənmə xəritəsi — Duolingo-üslubu tək sütunlu, sinus-zigzaq yol.
// Yuxarıdan-aşağı: 1-ci dərs yuxarıda, aşağı endikcə yeni mövzular açılır.
// Hər düyün 3D basılan dairə düymədir: tamamlanmış (yaşıl ✓), açıq (brand ⭐ +
// "BAŞLA" balonu), kiliddə (boz 🔒). Bölmə başında rəngli banner, kənarda Ulduz.

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Check, Lock } from "lucide-react";
import Mascot from "@/components/Mascot";
import { useT } from "@/lib/i18n";

export type NodeState = "done" | "current" | "locked";

export interface PathNode {
  id: string;
  title: string;
  state: NodeState;
  href?: string;
  unitTitle?: string; // dolu isə bu düyündən əvvəl bölmə banneri göstərilir
}

// Sola-sağa yumşaq sürüşmə (px) — sinus dalğası ilə.
const AMPLITUDE = 90;
const offsetAt = (i: number) => Math.round(Math.sin(i * 0.8) * AMPLITUDE);

function NodeButton({ node }: { node: PathNode }) {
  const t = useT();
  const isDone = node.state === "done";
  const isCurrent = node.state === "current";
  const Icon = isDone ? Check : isCurrent ? Star : Lock;

  const cls = isDone
    ? "bg-emerald-500 text-white btn-pop btn-pop-green"
    : isCurrent
      ? "bg-brand text-white btn-pop"
      : "bg-panel-2 text-muted/60 ring-1 ring-line";

  const inner = (
    <motion.div
      whileTap={node.state !== "locked" ? { scale: 0.9, y: 2 } : undefined}
      whileHover={node.state !== "locked" ? { y: -3 } : undefined}
      animate={
        isCurrent
          ? { boxShadow: ["0 0 0 0 rgba(91,75,245,0.5)", "0 0 0 12px rgba(91,75,245,0)"] }
          : undefined
      }
      transition={isCurrent ? { duration: 1.6, repeat: Infinity } : { type: "spring", stiffness: 500, damping: 18 }}
      className={`flex h-[74px] w-[74px] items-center justify-center rounded-full ${cls}`}
    >
      <Icon
        size={32}
        strokeWidth={3}
        {...(isCurrent ? { fill: "currentColor" } : {})}
      />
    </motion.div>
  );

  const button =
    node.href && node.state !== "locked" ? (
      <Link href={node.href}>{inner}</Link>
    ) : (
      inner
    );

  return (
    <div className="relative flex flex-col items-center">
      {/* Cari dərsin üstündə tullanan "BAŞLA" balonu */}
      {isCurrent && (
        <div className="path-bounce absolute -top-12 z-10 flex flex-col items-center">
          <span className="rounded-xl border-2 border-line bg-panel px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-brand shadow-sm">
            {t("dash.start")}
          </span>
          <span className="-mt-[3px] h-3 w-3 rotate-45 border-b-2 border-r-2 border-line bg-panel" />
        </div>
      )}
      {button}
      <span
        className={`mt-2 max-w-[120px] text-center text-xs leading-tight ${
          node.state === "locked" ? "text-muted" : "font-semibold text-fg"
        }`}
      >
        {node.title}
      </span>
    </div>
  );
}

// Bölmə başlığı banneri (rəngli lent).
function UnitBanner({ title, index }: { title: string; index: number }) {
  return (
    <div className="my-4 w-full max-w-md">
      <div className="flex items-center gap-3 rounded-2xl bg-brand px-5 py-3 text-white shadow-sm">
        <span className="text-xs font-extrabold uppercase tracking-widest text-white/70">
          {index}
        </span>
        <span className="h-5 w-px bg-white/30" />
        <span className="text-sm font-extrabold">{title}</span>
      </div>
    </div>
  );
}

export default function LearningPath({ nodes }: { nodes: PathNode[] }) {
  let unitCount = 0;

  return (
    <div className="flex flex-col items-center py-2">
      {nodes.map((node, i) => {
        const offset = offsetAt(i);
        // Bölmə banneri düyünlərdən müstəqil, tam mərkəzdə göstərilir.
        const banner = node.unitTitle ? (
          <UnitBanner
            key={`u-${node.id}`}
            title={node.unitTitle}
            index={++unitCount}
          />
        ) : null;

        // Ulduz-u aralıqlarda, düyünün əks tərəfində göstər.
        const showMascot = i > 0 && i % 6 === 3 && node.state !== "current";
        const mascotSide = offset >= 0 ? -1 : 1; // düyün sağdadırsa Ulduz solda
        // Cari düyünün üstündə "BAŞLA" balonu üçün əlavə yer aç (banner ilə kəsişməsin).
        const extraTop = node.state === "current" ? "pt-10" : "";

        return (
          <div key={node.id} className="flex w-full flex-col items-center">
            {banner}
            <div
              className={`relative flex items-center justify-center py-3 ${extraTop}`}
              style={{ transform: `translateX(${offset}px)` }}
            >
              {showMascot && (
                <div
                  className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2"
                  style={{
                    [mascotSide < 0 ? "right" : "left"]: "104px",
                  }}
                >
                  <Mascot size={66} />
                </div>
              )}
              <NodeButton node={node} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
