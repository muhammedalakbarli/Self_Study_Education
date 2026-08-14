import type { MetadataRoute } from "next";

// robots.txt — axtarış motorlarına indeksləşdirmə qaydaları + sitemap ünvanı.
const SITE_URL = "https://imparo.m-alakbarli2007.workers.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Şəxsi/istifadəçiyə-özəl səhifələri indeksləmə.
        disallow: ["/admin", "/api/", "/profil/redakte", "/auth/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
