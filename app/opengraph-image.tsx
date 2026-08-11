import { ImageResponse } from "next/og";

// Link paylaşılanda görünən sosial önizləmə şəkli (1200×630).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Imparo — 1–8-ci siniflər üçün interaktiv öyrənmə";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ff9f43 0%, #de6428 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Loqo işarəsi — Zefi üzü */}
        <svg width="170" height="170" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 30 L11 3 L34 18 Z" fill="#F47B3A" stroke="#B84E1F" stroke-width="2.5" stroke-linejoin="round" />
          <path d="M48 30 L53 3 L30 18 Z" fill="#F47B3A" stroke="#B84E1F" stroke-width="2.5" stroke-linejoin="round" />
          <path d="M18 24 L16 11 L28 19 Z" fill="#FF8F70" />
          <path d="M46 24 L48 11 L36 19 Z" fill="#FF8F70" />
          <circle cx="32" cy="36" r="23" fill="#F47B3A" stroke="#B84E1F" stroke-width="2.5" />
          <path d="M32 27 C43 27 48 37 46 45 C43 53 38 57 32 57 C26 57 21 53 18 45 C16 37 21 27 32 27 Z" fill="#FFF4DF" />
          <ellipse cx="24" cy="36" rx="4.6" ry="6" fill="#3B2723" />
          <ellipse cx="40" cy="36" rx="4.6" ry="6" fill="#3B2723" />
          <circle cx="22.5" cy="34" r="1.8" fill="#ffffff" />
          <circle cx="38.5" cy="34" r="1.8" fill="#ffffff" />
          <ellipse cx="32" cy="45" rx="3.4" ry="2.7" fill="#3B2723" />
          <path d="M25 49 Q32 55 39 49" stroke="#3B2723" stroke-width="2.4" fill="none" stroke-linecap="round" />
        </svg>
        <div style={{ marginTop: 40, fontSize: 84, fontWeight: 800 }}>Imparo</div>
        <div style={{ marginTop: 12, fontSize: 36, opacity: 0.9 }}>
          Öyrənməyi əyləncəyə çevir
        </div>
        <div style={{ marginTop: 36, fontSize: 26, opacity: 0.85 }}>
          Riyaziyyat · Azərbaycan dili · İngilis dili
        </div>
      </div>
    ),
    size,
  );
}
