import type { Metadata } from "next";
import { Nunito, Baloo_2, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/AppChrome";

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
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
