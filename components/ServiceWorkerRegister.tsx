"use client";

import { useEffect } from "react";

// Service worker-i qeydiyyatdan keçirir (PWA offline + quraşdırma). Yeni versiya
// hazır olanda SƏSSİZ tətbiq olunur — banner/düymə göstərmir, məcburi reload etmir.
// Yeni SW arxa planda aktivləşir və istifadəçi tətbiqi növbəti dəfə açanda ən son
// versiya avtomatik yüklənir (köhnə keşdə ilişib qalmır).
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return; // dev-də SW yükləmir

    let reg: ServiceWorkerRegistration | undefined;

    // Gözləyən (installed) yeni SW-i səssizcə aktivləşdir — bannersiz.
    const activate = (r: ServiceWorkerRegistration) => {
      if (r.waiting) r.waiting.postMessage({ type: "SKIP_WAITING" });
      r.addEventListener("updatefound", () => {
        const sw = r.installing;
        if (!sw) return;
        sw.addEventListener("statechange", () => {
          if (sw.state === "installed" && r.waiting) {
            r.waiting.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    };

    const register = () =>
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((r) => {
          reg = r;
          activate(r);
          // Açıq qalan tətbiqdə də vaxtaşırı yenilik yoxla (səssiz).
          setInterval(() => r.update().catch(() => {}), 60 * 60 * 1000);
        })
        .catch(() => {
          /* qeydiyyat alınmasa səssiz keç — sayt onsuz da işləyir */
        });

    // Səhifə yüklənməsini ləngitməmək üçün load-dan sonra.
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    return () => {
      void reg;
    };
  }, []);

  return null;
}
