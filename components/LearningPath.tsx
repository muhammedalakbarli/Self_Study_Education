// Holberton-üslubu "öyrənmə yolu" — ilanvari (serpentine) şəbəkə, AŞAĞIDAN YUXARIYA.
// İlk layihə ən altdadır; irəlilədikcə yol yuxarı doğru ilan kimi qıvrılır.
// Bütün layihələr tək, birləşmiş yolda gedir. Hər düyün nömrəli bir layihədir:
// tamamlanmış (dolu qırmızı), açıq (qırmızı halqa), kiliddə (boz).

import Link from "next/link";

export type NodeState = "done" | "current" | "locked";

export interface PathNode {
  id: string;
  title: string;
  state: NodeState;
  href?: string;
  deadline?: string; // son tarix etiketi
}

const PER_ROW = 4;

// Layihə düyünü: sıra nömrəsi + vəziyyətə görə halqa/dolğu.
function Circle({ node, label }: { node: PathNode; label: number }) {
  const cls =
    node.state === "done"
      ? "bg-brand text-white ring-4 ring-brand/30"
      : node.state === "current"
        ? "bg-panel text-brand ring-2 ring-brand shadow-[0_0_20px_rgba(224,20,63,0.4)]"
        : "bg-panel-2 text-muted ring-1 ring-line";

  const circle = (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold transition ${cls}`}
    >
      {label}
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
        <span className="text-[10px] text-muted">son: {node.deadline}</span>
      )}
    </div>
  );
}

export default function LearningPath({ nodes }: { nodes: PathNode[] }) {
  // Düyünləri sətirlərə böl: rows[0] = ilk layihələr (ən altda göstəriləcək).
  const rows: PathNode[][] = [];
  for (let i = 0; i < nodes.length; i += PER_ROW) {
    rows.push(nodes.slice(i, i + PER_ROW));
  }

  // Yuxarıdan-aşağı render (ən üstdə sonuncu sətir): sətirləri tərsinə gəzirik.
  const rendered = [...rows].reverse();

  return (
    <div className="overflow-x-auto">
      {/* Qutu məzmun eninə sabitlənir ki, birləşdirici xətlər düz düyünlərə düşsün */}
      <div className="mx-auto flex w-fit flex-col">
        {rendered.map((row, ri) => {
        const rowIndex = rows.length - 1 - ri; // orijinal (məntiqi) sıra
        const reverse = rowIndex % 2 === 1; // tək sətirlər sağdan-sola axır
        const baseIndex = rowIndex * PER_ROW;
        const hasConnectorAbove = rowIndex < rows.length - 1;
        // Dönüş tərəfi: cüt sətir sağda bitir (yuxarı sağdan qalxır), tək sətir solda.
        const connectorOnRight = rowIndex % 2 === 0;
        // Növbəti (yuxarıdakı) sətir tam açılıbsa xətt qırmızı olur.
        const nextRowDone =
          rowIndex + 1 < rows.length &&
          rows[rowIndex + 1].every((n) => n.state === "done");

        return (
          <div key={rowIndex}>
            {/* Bu sətirlə yuxarıdakı sətir arasında şaquli birləşdirici */}
            {hasConnectorAbove && (
              <div
                className={`flex ${connectorOnRight ? "justify-end" : "justify-start"}`}
              >
                <div className="w-24">
                  <div
                    className={`mx-auto h-8 w-1 rounded-full ${
                      nextRowDone ? "bg-brand" : "bg-line"
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Düyün sətri */}
            <div
              className={`flex items-start ${reverse ? "flex-row-reverse" : ""}`}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
