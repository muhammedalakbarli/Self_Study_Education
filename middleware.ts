// Host kanonikləşdirməsi: www.imparo.app → imparo.app (301, path+query saxlanılır).
//
// Niyə middleware-də, Cloudflare qaydasında yox: bu, hostinqdən asılı olmayan,
// kодla versiyalanan, testə açıq həlldir. www.imparo.app da wrangler.jsonc-də
// custom domain kimi Worker-ə bağlanıb — bağlanmasaydı bu middleware heç
// işə düşməzdi (domain resolve olunmazdı).
//
// 301 (daimi): axtarış motorlarına və brauzer keşinə "kanonik ünvan budur"
// siqnalını verir — sonrakı ziyarətlərdə brauzer birbaşa apex-ə gedir.

import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  if (host === "www.imparo.app") {
    const url = req.nextUrl.clone();
    url.host = "imparo.app";
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  // Statik fayllara toxunmuruq (performans) — www-a girən şagird ilk HTML
  // yükləməsində artıq apex-ə keçir, sonrakı sorğular onsuz da apex-dən gedir.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
