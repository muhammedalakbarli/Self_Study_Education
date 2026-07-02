// Holberton-üslubu "öyrənmə yolu" — ilanvari (serpentine) layihə şəbəkəsi (holberton4).
// Sətir başına 3 düyün; sətirlər növbəli istiqamətdə axır və xətlərlə birləşir.
// Hər düyün bir layihədir: tamamlanmış (✓), açıq (nömrə), kiliddə (🔒).

import Link from "next/link";

export type NodeState = "done" | "current" | "locked";

export interface PathNode {
  id: string;
  title: string;
  state: NodeState;
  href?: string;
  deadline?: string; // son tarix etiketi
}

const PER_ROW = 3;

function Circle({ node, label }: { node: PathNode; label: number | string }) {
  const cls =
    node.state === "done"
      ? "bg-brand text-white shadow-[0_0_0_4px_rgba(224,20,63,0.2)]"
      : node.state === "current"
        ? "bg-panel text-brand ring-2 ring-brand shadow-[0_0_20px_rgba(224,20,63,0.35)]"
        : "bg-panel-2 text-muted ring-1 ring-line";

  const inner =
    node.state === "done" ? "✓" : node.state === "locked" ? "🔒" : label;

  const circle = (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold transition ${cls}`}
    >
      {inner}
    </div>
  );

  return node.href && node.state !== "locked" ? (
    <Link href={node.href} className="transition hover:scale-105">
      {circle}
    </Link>
  ) : (
    circle
  );
}

function Node({ node, label }: { node: PathNode; label: number }) {
  return (
    <div className="flex w-24 shrink-0 flex-col items-center gap-1.5">
      <Circle node={node} label={label} />
      <span
        className={`text-center text-xs leading-tight ${
          node.state === "locked" ? "text-muted" : "text-white"
        }`}
      >
        {node.title}
      </span>
      {node.deadline && (
        <span className="text-[10px] text-muted">⏳ {node.deadline}</span>
      )}
    </div>
  );
}

export default function LearningPath({ nodes }: { nodes: PathNode[] }) {
  // Sətirlərə böl
  const rows: PathNode[][] = [];
  for (let i = 0; i < nodes.length; i += PER_ROW) {
    rows.push(nodes.slice(i, i + PER_ROW));
  }

  return (
    <div className="space-y-0">
      {rows.map((row, r) => {
        const reverse = r % 2 === 1;
        const baseIndex = r * PER_ROW;
        const rowDone = row.every((n) => n.state === "done");
        return (
          <div key={r}>
            {/* Düyün sətri */}
            <div
              className={`flex items-start ${
                reverse ? "flex-row-reverse" : ""
              }`}
            >
              {row.map((node, i) => (
                <div
                  key={node.id}
                  className={`flex items-start ${reverse ? "flex-row-reverse" : ""}`}
                >
                  <Node node={node} label={baseIndex + i + 1} />
                  {i < row.length - 1 && (
                    <div
                      className={`mt-[30px] h-1 w-8 shrink-0 rounded-full ${
                        node.state === "done" ? "bg-brand" : "bg-line"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Sətirlər arası şaquli birləşdirici (dönüş tərəfində) */}
            {r < rows.length - 1 && (
              <div className={`flex ${reverse ? "justify-start" : "justify-end"}`}>
                <div className="w-24">
                  <div
                    className={`mx-auto h-8 w-1 rounded-full ${
                      rowDone ? "bg-brand" : "bg-line"
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
