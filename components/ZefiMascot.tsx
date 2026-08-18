"use client";

// "Zefi" — Imparo-nun rəsmi tülkü mascotu. Peşəkar 3D illüstrasiya dəsti (şəffaf PNG).
// Hər emotion ayrı pozadır. Animasiya YOX (statik). Şəkillər: public/assets/images/zefi/.

export type ZefiEmotion =
  | "welcome"
  | "happy"
  | "learning"
  | "celebrating"
  | "worried"
  | "thinking";

// ?v=3 — keş-bust: təmizlənmiş asetlər üçün brauzer/SW köhnə keşlənmiş (tozlu/kəsik) PNG-ni
// atıb təzəsini çəksin. Asetlər dəyişəndə bu rəqəmi artır.
const V = "3";
const SRC: Record<ZefiEmotion, string> = {
  welcome: `/assets/images/zefi/zefi_welcome.png?v=${V}`,
  happy: `/assets/images/zefi/zefi_happy.png?v=${V}`,
  learning: `/assets/images/zefi/zefi_learning.png?v=${V}`,
  celebrating: `/assets/images/zefi/zefi_celebrating.png?v=${V}`,
  worried: `/assets/images/zefi/zefi_worried.png?v=${V}`,
  thinking: `/assets/images/zefi/zefi_thinking.png?v=${V}`,
};

export default function ZefiMascot({
  emotion = "happy",
  size = 120,
  badge,
  disk = true,
}: {
  emotion?: ZefiEmotion;
  size?: number;
  badge?: string;
  /** Arxa ağ disk — TÜND rejimdə görünür (narıncı tülkü tünd fonda əriməsin).
   *  İşıqlı və `.force-light` səhifələrdə avtomatik gizlidir (bax globals.css `.zefi-disk`).
   *  Zefi onsuz da ağ dairə içindədirsə (məs. narıncı kartlar) `disk={false}` ver. */
  disk?: boolean;
}) {
  return (
    <span style={{ position: "relative", display: "inline-block", lineHeight: 0 }}>
      {disk ? (
        <span
          className="zefi-disk"
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: "42%",
            width: "82%",
            height: "82%",
            transform: "translate(-50%, -50%)",
            borderRadius: 9999,
          }}
        />
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC[emotion]}
        alt="Zefi"
        width={size}
        height={size}
        className="zefi-mascot-img"
        style={{ width: size, height: size, objectFit: "contain", position: "relative" }}
        draggable={false}
      />
      {badge ? (
        <span
          style={{
            position: "absolute",
            bottom: "6%",
            right: "-6%",
            background: "#F47B3A",
            color: "#fff",
            fontWeight: 800,
            fontSize: Math.max(11, size * 0.11),
            padding: `${size * 0.02}px ${size * 0.08}px`,
            borderRadius: 999,
            whiteSpace: "nowrap",
            boxShadow: "0 3px 8px rgba(0,0,0,0.18)",
          }}
        >
          {badge}
        </span>
      ) : null}
    </span>
  );
}
