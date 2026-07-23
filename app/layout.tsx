import type { Metadata, Viewport } from "next";
import { Nunito, Baloo_2, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/AppChrome";
import { ContentProvider } from "@/components/ContentProvider";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://self-study-education.vercel.app"),
  title: {
    default: "Bilik Yolu — 5-ci sinif üçün interaktiv öyrənmə",
    template: "%s · Bilik Yolu",
  },
  description:
    "Riyaziyyat, Azərbaycan dili və İngilis dilini oyun kimi öyrən. Azərbaycan məktəbliləri üçün pulsuz, interaktiv platforma.",
  keywords: [
    "təhsil",
    "5-ci sinif",
    "riyaziyyat",
    "Azərbaycan dili",
    "İngilis dili",
    "onlayn öyrənmə",
    "Bilik Yolu",
  ],
  applicationName: "Bilik Yolu",
  // PWA: iOS ana ekranda tam ekran açılış + toxunma ikonu.
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bilik Yolu",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bilik Yolu — öyrənməyi əyləncəyə çevir",
    description:
      "5-ci sinif üçün Riyaziyyat, Azərbaycan dili və İngilis dili — oyun kimi, pulsuz.",
    url: "/",
    siteName: "Bilik Yolu",
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilik Yolu — öyrənməyi əyləncəyə çevir",
    description:
      "5-ci sinif üçün interaktiv öyrənmə platforması. Pulsuz və maraqlı.",
  },
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
        <ContentProvider>
          <AppChrome>{children}</AppChrome>
        </ContentProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
