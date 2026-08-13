import type { MetadataRoute } from "next";

// sitemap.xml — açıq (public) səhifələr. Şəxsi/auth arxası səhifələr daxil edilmir.
const SITE_URL = "https://imparo.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/login", "/signup", "/yardim"];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
