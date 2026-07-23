"use client";

import { useEffect } from "react";

// Service worker-i qeydiyyatdan keçirir (PWA offline + quraşdırma).
// Görünən heç nə render etmir; yalnız brauzerdə bir dəfə işə düşür.
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return; // dev-də SW yükləmir
    const register = () =>
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .catch(() => {
          /* qeydiyyat alınmasa səssiz keç — sayt onsuz da işləyir */
        });
    // Səhifə yüklənməsini ləngitməmək üçün load-dan sonra.
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
