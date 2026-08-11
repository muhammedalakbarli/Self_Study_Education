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
          background: "linear-gradient(135deg, #5b4bf5 0%, #4636cf 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Loqo işarəsi — Imparo markası */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="104" height="104" rx="30" fill="#5b4bf5" />
          <rect x="52" y="54" width="16" height="40" rx="8" fill="#ffffff" />
          <path d="M60 18 L64.5 29.5 L76 34 L64.5 38.5 L60 50 L55.5 38.5 L44 34 L55.5 29.5 Z" fill="#ff9500" />
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
