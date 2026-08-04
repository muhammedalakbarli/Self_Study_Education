"use client";

// "Bilik Yolu" öyrənmə xəritəsi — Duolingo-üslubu tək sütunlu, sinus-zigzaq yol.
// Yuxarıdan-aşağı: 1-ci dərs yuxarıda, aşağı endikcə yeni mövzular açılır.
// Düyünlər arası əyri "trail" (keçilmiş hissə rəngli, qarşıdakı boz-kəsik), cari
// düyün nəfəs alır + halo + "BAŞLA", kiliddə düyün toxunanda titrəyir, bölmə
// keçidində mətnsiz kubok (milestone). Hər şey reduced-motion/.no-anim-ə tabedir.

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Check, Lock, Trophy } from "lucide-react";
import Mascot from "@/components/Mascot";
import { useT } from "@/lib/i18n";
import { playSelect } from "@/lib/sound";
import { vibrateWrong } from "@/lib/haptics";

export type NodeState = "done" | "current" | "locked";

export interface PathNode {
  id: string;
  title: string;
  state: NodeState;
  href?: string;
  unitTitle?: string; // dolu isə bu düyün yeni bölmənin başıdır (milestone tetikləyir)
}

// Sabit en — connector həndəsəsi deterministik olsun deyə (mərkəz x = 150).
const LANE = 300;
const CENTER = LANE / 2;
const AMPLITUDE = 90;
const offsetAt = (i: number) => Math.round(Math.sin(i * 0.8) * AMPLITUDE);

// İki düyün arasında əyri yol seqmenti.
function Connector({
  topX,
  bottomX,
  reached,
  brand,
}: {
  topX: number;
  bottomX: number;
  reached: boolean;
  brand: boolean;
}) {
  const H = 46;
  const x1 = CENTER + topX;
  const x2 = CENTER + bottomX;
  const d = `M ${x1} 0 C ${x1} ${H * 0.5}, ${x2} ${H * 0.5}, ${x2} ${H}`;
  const stroke = reached
    ? brand
      ? "var(--color-brand)"
      : "var(--color-success)"
    : "var(--color-line)";
  return (
    <svg
      width={LANE}
      height={H}
      viewBox={`0 0 ${LANE} ${H}`}
      className="pointer-events-none -my-1 block"
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={reached ? undefined : "1 13"}
        className={reached ? undefined : "trail-dash"}
      />
    </svg>
  );
}

function NodeButton({ node }: { node: PathNode }) {
  const t = useT();
  const [shake, setShake] = useState(false);
  const isDone = node.state === "done";
  const isCurrent = node.state === "current";
  const isLocked = node.state === "locked";
  const Icon = isDone ? Check : isCurrent ? Star : Lock;

  const cls = isDone
    ? "bg-emerald-500 text-white btn-pop btn-pop-green"
    : isCurrent
      ? "bg-brand text-white btn-pop"
      : "bg-panel-2 text-muted/60 ring-1 ring-line";

  const inner = (
    <motion.div
      whileTap={!isLocked ? { scale: 0.9, y: 2 } : undefined}
      whileHover={!isLocked ? { y: -3 } : undefined}
      animate={
        isCurrent
          ? { boxShadow: ["0 0 0 0 rgba(91,75,245,0.5)", "0 0 0 12px rgba(91,75,245,0)"] }
          : shake
            ? { x: [0, -6, 6, -5, 5, 0] }
            : undefined
      }
      transition={
        isCurrent
          ? { duration: 1.6, repeat: Infinity }
          : shake
            ? { duration: 0.4 }
            : { type: "spring", stiffness: 500, damping: 18 }
      }
      className={`relative z-10 flex h-[74px] w-[74px] items-center justify-center rounded-full ${cls} ${
        isCurrent ? "node-bob" : ""
      }`}
    >
      <Icon size={32} strokeWidth={3} {...(isCurrent ? { fill: "currentColor" } : {})} />
      {/* Tamamlanmış düyünlərdə incə parıltı */}
      {isDone && (
        <span
          className="twinkle pointer-events-none absolute -right-1 -top-1 text-amber-300"
          style={{ animationDelay: `${(node.id.charCodeAt(0) % 5) * 0.4}s` }}
          aria-hidden
        >
          <Star size={14} fill="currentColor" strokeWidth={0} />
        </span>
      )}
    </motion.div>
  );

  // Cari/tamamlanmış: keçid + yüngül səs. Kilidli: keçid yox, titrəmə + tooltip.
  if (node.href && !isLocked) {
    return (
      <NodeShell isCurrent={isCurrent}>
        <Link href={node.href} onClick={() => playSelect()}>
          {inner}
        </Link>
        <NodeLabel node={node} />
      </NodeShell>
    );
  }

  return (
    <NodeShell isCurrent={isCurrent}>
      <button
        type="button"
        onClick={() => {
          setShake(true);
          vibrateWrong();
          window.setTimeout(() => setShake(false), 500);
        }}
        className="cursor-default"
        aria-label={`${node.title} — kilidli`}
      >
        {inner}
      </button>
      {shake && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-8 z-10 flex items-center gap-1 rounded-lg border border-line bg-panel px-2 py-1 text-[11px] font-semibold text-muted shadow-sm"
        >
          <Lock size={11} /> {t("path.locked")}
        </motion.span>
      )}
      <NodeLabel node={node} />
    </NodeShell>
  );
}

function NodeShell({
  children,
  isCurrent,
}: {
  children: React.ReactNode;
  isCurrent: boolean;
}) {
  const t = useT();
  return (
    <div className="relative flex flex-col items-center">
      {/* Cari düyünün arxasında yumşaq işıq halosu */}
      {isCurrent && (
        <span
          className="pointer-events-none absolute top-2 z-0 h-[74px] w-[74px] rounded-full bg-brand/30 blur-xl"
          aria-hidden
        />
      )}
      {/* Cari dərsin üstündə tullanan "BAŞLA" balonu */}
      {isCurrent && (
        <div className="path-bounce absolute -top-12 z-10 flex flex-col items-center">
          <span className="rounded-xl border-2 border-line bg-panel px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-brand shadow-sm">
            {t("dash.start")}
          </span>
          <span className="-mt-[3px] h-3 w-3 rotate-45 border-b-2 border-r-2 border-line bg-panel" />
        </div>
      )}
      {children}
    </div>
  );
}

function NodeLabel({ node }: { node: PathNode }) {
  return (
    <span
      className={`mt-2 max-w-[130px] text-center text-xs leading-tight ${
        node.state === "locked" ? "text-muted" : "font-semibold text-fg"
      }`}
    >
      {node.title}
    </span>
  );
}

// Bölmə keçidində mətnsiz kubok — bitibsə qızılı+parıltı, yoxsa boz.
function Milestone({ gold }: { gold: boolean }) {
  return (
    <div className="relative flex justify-center py-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
          gold
            ? "milestone-shine bg-gradient-to-br from-amber-300 to-accent text-white shadow-md"
            : "bg-panel-2 text-muted/50 ring-1 ring-line"
        }`}
        aria-hidden
      >
        <Trophy size={26} strokeWidth={2.5} {...(gold ? { fill: "currentColor" } : {})} />
      </motion.div>
    </div>
  );
}

export default function LearningPath({ nodes }: { nodes: PathNode[] }) {
  const rows: React.ReactNode[] = [];
  let prevOffset: number | null = null;

  nodes.forEach((node, i) => {
    const off = offsetAt(i);
    const isUnitStart = !!node.unitTitle && i > 0;

    // Bölmə keçidi: əvvəlki düyün → kubok → bu düyün.
    if (isUnitStart) {
      const gold = node.state !== "locked";
      if (prevOffset !== null) {
        rows.push(
          <Connector key={`c-m-${node.id}`} topX={prevOffset} bottomX={0} reached={gold} brand={false} />,
        );
      }
      rows.push(<Milestone key={`m-${node.id}`} gold={gold} />);
      prevOffset = 0;
    }

    // Bu düyünə gələn seqment (keçilmişsə rəngli, cari isə brand, yoxsa boz-kəsik).
    if (prevOffset !== null) {
      rows.push(
        <Connector
          key={`c-${node.id}`}
          topX={prevOffset}
          bottomX={off}
          reached={node.state !== "locked"}
          brand={node.state === "current"}
        />,
      );
    }

    // Ulduz-u aralıqlarda, düyünün əks tərəfində göstər.
    const showMascot = i > 0 && i % 6 === 3 && node.state !== "current";
    const mascotSide = off >= 0 ? -1 : 1; // düyün sağdadırsa Ulduz solda
    const extraTop = node.state === "current" ? "pt-10" : "";

    rows.push(
      <motion.div
        key={node.id}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="flex w-full flex-col items-center"
      >
        <div
          className={`relative flex items-center justify-center py-2 ${extraTop}`}
          style={{ transform: `translateX(${off}px)` }}
        >
          {showMascot && (
            <div
              className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2"
              style={{ [mascotSide < 0 ? "right" : "left"]: "104px" }}
            >
              <Mascot size={66} />
            </div>
          )}
          <NodeButton node={node} />
        </div>
      </motion.div>,
    );

    prevOffset = off;
  });

  return (
    <div
      className="relative mx-auto flex flex-col items-center py-2"
      style={{ width: LANE, maxWidth: "100%" }}
    >
      {rows}
    </div>
  );
}
