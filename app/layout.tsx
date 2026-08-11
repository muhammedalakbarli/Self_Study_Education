import type { Metadata, Viewport } from "next";
import { Nunito, Baloo_2, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/AppChrome";
import { ContentProvider } from "@/components/ContentProvider";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import AnalyticsProvider from "@/components/AnalyticsProvider";

// Gövdə şrifti — yumşaq, oxunaqlı.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800", "900"],
});

// Başlıq şrifti — şişkin, ağır, yuvarlaq (Feather hissi). Azərbaycan hərflərini (ə, ç, ş, ğ, ı) dəstəkləyir.
const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://self-study-education.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imparo — 1–8-ci siniflər üçün interaktiv öyrənmə",
    template: "%s · Imparo",
  },
  description:
    "Riyaziyyat, Azərbaycan dili və İngilis dilini oyun kimi öyrən. Azərbaycan məktəbliləri üçün pulsuz, interaktiv platforma.",
  keywords: [
    "təhsil",
    "ibtidai sinif",
    "orta məktəb",
    "riyaziyyat",
    "Azərbaycan dili",
    "İngilis dili",
    "onlayn öyrənmə",
    "Imparo",
  ],
  applicationName: "Imparo",
  authors: [{ name: "Imparo" }],
  creator: "Imparo",
  publisher: "Imparo",
  category: "education",
  // Telefon nömrəsi kimi mətnləri avtomatik linkə çevirmə.
  formatDetection: { telephone: false, email: false, address: false },
  // Axtarış motorları: indeksləşdir + izlə (böyük önizləmələr).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Kanonik ünvan + dil alternativləri (eyni səhifə, ?lang ilə).
  alternates: {
    canonical: "/",
    languages: {
      az: "/?lang=az",
      en: "/?lang=en",
      ru: "/?lang=ru",
      "x-default": "/",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Imparo",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Imparo — öyrənməyi əyləncəyə çevir",
    description:
      "1–8-ci siniflər üçün Riyaziyyat, Azərbaycan dili və İngilis dili — oyun kimi, pulsuz.",
    url: "/",
    siteName: "Imparo",
    locale: "az_AZ",
    alternateLocale: ["en_US", "ru_RU"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imparo — öyrənməyi əyləncəyə çevir",
    description:
      "1–8-ci siniflər üçün interaktiv öyrənmə platforması. Pulsuz və maraqlı.",
  },
};

// Axtarış motorları üçün strukturlaşdırılmış data (JSON-LD): təşkilat + veb-sayt.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Imparo",
      url: SITE_URL,
      description:
        "Azərbaycan məktəbliləri (1–8-ci siniflər) üçün oyunlaşdırılmış öyrənmə platforması.",
      logo: `${SITE_URL}/apple-touch-icon.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Imparo",
      inLanguage: ["az", "en", "ru"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

// Mobil brauzer üst zolağının rəngi (brend narıncı).
export const viewport: Viewport = {
  themeColor: "#ff9500",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${nunito.variable} ${baloo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Strukturlaşdırılmış data (SEO / zəngin nəticələr) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ContentProvider>
          <AppChrome>{children}</AppChrome>
        </ContentProvider>
        <AnalyticsProvider />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
