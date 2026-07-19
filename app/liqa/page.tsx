"use client";

// Liqa — Duolingo üslubu kohort yarışı: eyni pillədə 15 nəfər həftəlik XP ilə yarışır;
// top 5 növbəti liqaya keçir (yüksəliş zonası), kohort böyükdürsə alt 5 düşür (enmə zonası).

import { useEffect, useState } from "react";
import { Trophy, ChevronUp, ChevronDown } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import {
  loadCohort,
  TIER_KEYS,
  PROMOTE,
  DEMOTE,
  type CohortRow,
} from "@/lib/leaderboard";
import { useT } from "@/lib/i18n";
import { PageSkeleton } from "@/components/Skeleton";
import Mascot from "@/components/Mascot";
import RankBadge from "@/components/RankBadge";

export default function LeaguePage() {
  const { user, ready } = useAuthUser();
  const [rows, setRows] = useState<CohortRow[] | null>(null);
  const t = useT();

  useEffect(() => {
    loadCohort().then(setRows);
  }, []);

  if (!ready || !user || !rows) return <PageSkeleton />;

  const myTier = rows.find((r) => r.isMe)?.tier ?? 0;
  const size = rows.length;
  const demoActive = size >= 12;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        {/* Başlıq + pillə */}
        <div className="flex items-center gap-4 rounded-3xl bg-brand p-5 text-white">
          <Mascot size={60} mood="celebrate" />
          <div className="flex-1">
            <div className="text-lg font-extrabold">{t(tierKey(myTier))}</div>
            <div className="text-sm text-white/85">{t("league.compete")}</div>
          </div>
          <Trophy size={30} className="text-accent-soft" />
        </div>

        {size === 0 ? (
          <div className="mt-4 rounded-2xl border border-line bg-panel p-8 text-center text-muted">
            {t("league.empty")}
          </div>
        ) : (
          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-panel">
            {rows.map((r, i) => {
              const inPromo = i < PROMOTE;
              const inDemo = demoActive && i >= size - DEMOTE;
              return (
                <div key={r.userId}>
                  <Row
                    row={r}
                    rank={i + 1}
                    tint={inPromo ? "promo" : inDemo ? "demo" : "none"}
                    t={t}
                  />
                  {/* Yüksəliş xətti (promo zonasından sonra) */}
                  {i === PROMOTE - 1 && size > PROMOTE && (
                    <ZoneLine
                      label={t("league.promoZone")}
                      color="emerald"
                      Icon={ChevronUp}
                    />
                  )}
                  {/* Enmə xətti (enmə zonasından əvvəl) */}
                  {demoActive && i === size - DEMOTE - 1 && (
                    <ZoneLine
                      label={t("league.demoZone")}
                      color="red"
                      Icon={ChevronDown}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

function tierKey(tier: number): string {
  return TIER_KEYS[Math.max(0, Math.min(TIER_KEYS.length - 1, tier))];
}

function ZoneLine({
  label,
  color,
  Icon,
}: {
  label: string;
  color: "emerald" | "red";
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  const c =
    color === "emerald"
      ? "text-emerald-600 border-emerald-500/40"
      : "text-red-500 border-red-400/40";
  return (
    <div className={`flex items-center gap-2 border-y-2 border-dashed px-4 py-1.5 ${c}`}>
      <Icon size={16} />
      <span className="text-[11px] font-extrabold uppercase tracking-wide">{label}</span>
    </div>
  );
}

function Row({
  row,
  rank,
  tint,
  t,
}: {
  row: CohortRow;
  rank: number;
  tint: "promo" | "demo" | "none";
  t: (k: string) => string;
}) {
  // Zona rəngi: yüksəliş = yaşıl, qalan = ağ, enmə = qırmızı.
  const zoneBg =
    tint === "promo"
      ? "bg-emerald-500/15"
      : tint === "demo"
        ? "bg-red-500/15"
        : "bg-panel";
  const meRing = row.isMe ? "ring-2 ring-inset ring-brand/60" : "";
  return (
    <div
      className={`flex items-center gap-3 border-b border-line px-4 py-3.5 last:border-b-0 ${zoneBg} ${meRing}`}
    >
      <span className="flex w-8 shrink-0 justify-center">
        {rank <= 3 ? (
          <RankBadge rank={rank as 1 | 2 | 3} size={34} />
        ) : (
          <span className="text-sm font-bold text-muted">{rank}</span>
        )}
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panel-2 text-sm font-extrabold text-brand">
        {(row.name || "?").charAt(0).toUpperCase()}
      </span>
      <span className="flex-1 truncate font-bold text-fg">
        {row.name}
        {row.isMe && (
          <span className="ml-2 rounded-full bg-brand/15 px-2 py-0.5 text-[11px] font-bold text-brand">
            {t("league.you")}
          </span>
        )}
      </span>
      <span className="shrink-0 font-extrabold text-accent">{row.weeklyXp} XP</span>
    </div>
  );
}
