import type { MetadataRoute } from "next";

// Veb tətbiq manifesti — brauzer bunu oxuyub saytı "ana ekrana əlavə et" ilə
// tam ekran, ikonlu tətbiq kimi quraşdırmağa imkan verir (PWA).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bilik Yolu — 5-ci sinif üçün interaktiv öyrənmə",
    short_name: "Bilik Yolu",
    description:
      "Riyaziyyat, Azərbaycan dili və İngilis dilini oyun kimi öyrən. 5-ci sinif üçün pulsuz, interaktiv platforma.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f4f3fb",
    theme_color: "#ff9500",
    lang: "az",
    categories: ["education"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
