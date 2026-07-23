// Bilik Yolu — service worker (PWA offline dəstəyi).
// Strategiya (təhlükəsiz, dinamik məzmunu pozmadan):
//   - Yalnız GET + eyni-mənbə (same-origin) sorğularına toxunur.
//   - API, auth və Supabase sorğuları HEÇ VAXT keşlənmir → həmişə şəbəkə.
//   - Naviqasiya (səhifə): əvvəlcə şəbəkə, offline olsa keşdən/ana səhifədən.
//   - Statik fayllar (_next/static, şəkil, şrift): stale-while-revalidate.

const CACHE = "bilik-yolu-v1";
const OFFLINE_URL = "/";

// Şəbəkə çatmayanda göstəriləcək minimal offline HTML.
const OFFLINE_HTML = `<!doctype html><html lang="az"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bilik Yolu — offline</title>
<style>body{margin:0;height:100vh;display:flex;flex-direction:column;align-items:center;
justify-content:center;font-family:system-ui,sans-serif;background:#f4f3fb;color:#2a2340;text-align:center;padding:24px}
h1{font-size:20px;margin:16px 0 8px}p{color:#6b6880;max-width:280px}</style></head>
<body><div style="font-size:56px">⭐</div><h1>İnternet bağlantısı yoxdur</h1>
<p>Bilik Yolu-nu işlətmək üçün internetə qoşul. Bağlantı bərpa olunanda səhifəni yenilə.</p></body></html>`;

self.addEventListener("install", (event) => {
  // Yeni SW-i dərhal aktiv et.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.put(
        OFFLINE_URL,
        new Response(OFFLINE_HTML, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
      ),
    ),
  );
});

self.addEventListener("activate", (event) => {
  // Köhnə keşləri təmizlə + açıq səhifələri dərhal idarə et.
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icon") ||
    url.pathname === "/apple-touch-icon.png" ||
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico|woff2?|ttf|css|js)$/.test(url.pathname)
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Yalnız eyni mənbə; API/auth-a toxunma.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api") || url.pathname.startsWith("/auth")) return;

  // Səhifə naviqasiyası: əvvəlcə şəbəkə, offline olsa keş/ana səhifə.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHE);
        return (await cache.match(request)) || (await cache.match(OFFLINE_URL));
      }),
    );
    return;
  }

  // Statik fayllar: stale-while-revalidate.
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((resp) => {
            if (resp.ok) cache.put(request, resp.clone());
            return resp;
          })
          .catch(() => cached);
        return cached || network;
      }),
    );
  }
});
