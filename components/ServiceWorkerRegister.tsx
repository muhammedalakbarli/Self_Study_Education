"use client";

import { useEffect, useState } from "react";

// Service worker-i qeydiyyatdan keçirir (PWA offline + quraşdırma) VƏ yeni versiya
// hazır olanda incə "Yenilə" banneri göstərir — hər deploy-dan sonra istifadəçi
// bir toxunuşla ən son versiyaya keçir (köhnə keşdə ilişib qalmır).
export default function ServiceWorkerRegister() {
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return; // dev-də SW yükləmir

    let reg: ServiceWorkerRegistration | undefined;

    // Yeni SW nəzarəti ələ alanda (Yenilə basıldıqdan sonra) səhifəni bir dəfə təzələ.
    let reloading = false;
    const onControllerChange = () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    // Gözləyən (installed) SW-i banner üçün qeyd et — yalnız artıq nəzarətçi varsa
    // (yəni bu ilk quraşdırma yox, əsl YENİLƏMƏDİR).
    const trackWaiting = (r: ServiceWorkerRegistration) => {
      if (r.waiting && navigator.serviceWorker.controller) setWaiting(r.waiting);
      r.addEventListener("updatefound", () => {
        const sw = r.installing;
        if (!sw) return;
        sw.addEventListener("statechange", () => {
          if (sw.state === "installed" && navigator.serviceWorker.controller) {
            setWaiting(sw);
          }
        });
      });
    };

    const register = () =>
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((r) => {
          reg = r;
          trackWaiting(r);
          // Açıq qalan tətbiqdə də vaxtaşırı yenilik yoxla.
          setInterval(() => r.update().catch(() => {}), 60 * 60 * 1000);
        })
        .catch(() => {
          /* qeydiyyat alınmasa səssiz keç — sayt onsuz da işləyir */
        });

    // Səhifə yüklənməsini ləngitməmək üçün load-dan sonra.
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      void reg;
    };
  }, []);

  if (!waiting) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
      <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3 shadow-lg">
        <span className="text-xl">✨</span>
        <span className="flex-1 text-sm font-medium text-fg">
          Yeni versiya hazırdır.
        </span>
        <button
          type="button"
          onClick={() => {
            waiting.postMessage({ type: "SKIP_WAITING" });
            setWaiting(null);
          }}
          className="rounded-xl bg-brand px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
        >
          Yenilə
        </button>
      </div>
    </div>
  );
}
