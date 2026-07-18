import { ImageResponse } from "next/og";

// Link paylaşılanda görünən sosial önizləmə şəkli (1200×630).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bilik Yolu — 5-ci sinif üçün interaktiv öyrənmə";

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
        {/* Loqo işarəsi (yüksələn pillələr) */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <div style={{ width: 26, height: 36, background: "white", borderRadius: 8 }} />
          <div style={{ width: 26, height: 64, background: "white", borderRadius: 8 }} />
          <div style={{ width: 26, height: 92, background: "#ff9500", borderRadius: 8 }} />
        </div>
        <div style={{ marginTop: 40, fontSize: 84, fontWeight: 800 }}>Bilik Yolu</div>
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
