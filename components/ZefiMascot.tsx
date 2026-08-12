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

const SRC: Record<ZefiEmotion, string> = {
  welcome: "/assets/images/zefi/zefi_welcome.png",
  happy: "/assets/images/zefi/zefi_happy.png",
  learning: "/assets/images/zefi/zefi_learning.png",
  celebrating: "/assets/images/zefi/zefi_celebrating.png",
  worried: "/assets/images/zefi/zefi_worried.png",
  thinking: "/assets/images/zefi/zefi_thinking.png",
};

export default function ZefiMascot({
  emotion = "happy",
  size = 120,
  badge,
}: {
  emotion?: ZefiEmotion;
  size?: number;
  badge?: string;
}) {
  return (
    <span style={{ position: "relative", display: "inline-block", lineHeight: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC[emotion]}
        alt="Zefi"
        width={size}
        height={size}
        className="zefi-mascot-img"
        style={{ width: size, height: size, objectFit: "contain" }}
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
