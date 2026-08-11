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
        {/* Loqo işarəsi — Imparo raketi */}
        <svg width="150" height="150" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 33 L16 44 L26 40 Z" fill="#ffd166" />
          <path d="M40 33 L48 44 L38 40 Z" fill="#ffd166" />
          <path d="M27 41 L32 56 L37 41 Z" fill="#ff6b5e" />
          <path d="M32 8 C38 13 41 21 41 29 C41 35 39 39 36 43 L28 43 C25 39 23 35 23 29 C23 21 26 13 32 8 Z" fill="#ffffff" />
          <circle cx="32" cy="25" r="5.5" fill="#3b2723" />
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
