"use client";

// Mağaza (Shop) — zümrüdləri xərclə: canları doldur, seriya qoruyucu al.

import { useEffect, useState } from "react";
import { Gem, Heart, Shield } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { loadGems, spendGems, SHOP_PRICES } from "@/lib/gems";
import { refillHearts, loadHearts, MAX_HEARTS } from "@/lib/hearts";
import { grantStreakFreeze } from "@/lib/progress";
import { track } from "@/lib/analytics";
import { useT } from "@/lib/i18n";
import { PageSkeleton } from "@/components/Skeleton";

type Flash = { id: string; kind: "ok" | "no" | "full" } | null;

export default function ShopPage() {
  const { user, ready } = useAuthUser();
  const [gems, setGems] = useState<number | null>(null);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [busy, setBusy] = useState(false);
  const [flash, setFlash] = useState<Flash>(null);
  const t = useT();

  useEffect(() => {
    if (!user) return;
    loadGems().then(setGems).catch(() => setGems(0));
    loadHearts().then(setHearts).catch(() => {});
  }, [user]);

  if (!ready || !user || gems === null) return <PageSkeleton />;

  async function buy(id: "refillHearts" | "streakFreeze", price: number) {
    if (busy) return;
    // Canlar artıq doludursa boş yerə xərcləmə.
    if (id === "refillHearts" && hearts >= MAX_HEARTS) {
      setFlash({ id, kind: "full" });
      return;
    }
    if ((gems ?? 0) < price) {
      setFlash({ id, kind: "no" });
      return;
    }
    setBusy(true);
    try {
      const left = await spendGems(price);
      if (left < 0) {
        setFlash({ id, kind: "no" });
        return;
      }
      setGems(left);
      if (id === "refillHearts") setHearts(await refillHearts());
      else await grantStreakFreeze();
      track("shop_purchase", { item: id, price });
      setFlash({ id, kind: "ok" });
    } finally {
      setBusy(false);
    }
  }

  const items = [
    {
      id: "refillHearts" as const,
      Icon: Heart,
      tint: "from-red-400 to-red-600",
      title: t("shop.refillHearts"),
      desc: t("shop.refillHeartsDesc"),
      price: SHOP_PRICES.refillHearts,
    },
    {
      id: "streakFreeze" as const,
      Icon: Shield,
      tint: "from-sky-400 to-sky-600",
      title: t("shop.buyFreeze"),
      desc: t("shop.buyFreezeDesc"),
      price: SHOP_PRICES.streakFreeze,
    },
  ];

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        {/* Başlıq + balans */}
        <div className="flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-600 p-5 text-white shadow-lg">
          <div>
            <h1 className="text-xl font-extrabold">{t("shop.title")}</h1>
            <p className="text-sm text-white/85">{t("shop.subtitle")}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-2xl bg-white/20 px-3 py-2 text-lg font-extrabold">
            <Gem size={20} fill="currentColor" strokeWidth={0} />
            {gems}
          </span>
        </div>

        {/* Məhsullar */}
        <div className="mt-5 space-y-3">
          {items.map((it) => {
            const f = flash?.id === it.id ? flash.kind : null;
            const affordable = (gems ?? 0) >= it.price;
            return (
              <div
                key={it.id}
                className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-4"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${it.tint} text-white shadow-sm`}
                >
                  <it.Icon size={24} fill="currentColor" strokeWidth={0} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-extrabold text-fg">{it.title}</div>
                  <div className="text-sm text-muted">
                    {f === "ok"
                      ? t("shop.owned")
                      : f === "no"
                        ? t("shop.notEnough")
                        : f === "full"
                          ? t("shop.full")
                          : it.desc}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => buy(it.id, it.price)}
                  disabled={busy}
                  className={`flex shrink-0 items-center gap-1.5 rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white btn-pop disabled:opacity-50 ${
                    affordable ? "bg-brand hover:bg-brand-dark" : "bg-muted/60"
                  }`}
                >
                  <Gem size={15} fill="currentColor" strokeWidth={0} />
                  {it.price}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
