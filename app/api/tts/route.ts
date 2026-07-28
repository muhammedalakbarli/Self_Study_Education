// GET /api/tts?text=... — İngilis tələffüzü (audio/mpeg).
// Serverdən Google Translate TTS audiosunu gətirir və eyni-mənşəli qaytarır.
// Beləcə brauzerdəki CORS/referer/reklam-bloklayıcı problemləri aradan qalxır.

export const runtime = "nodejs";

function ttsUrl(text: string): string {
  const q = encodeURIComponent(text.slice(0, 200));
  return `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${q}`;
}

export async function GET(req: Request) {
  const text = new URL(req.url).searchParams.get("text")?.trim();
  if (!text) return new Response("text lazımdır", { status: 400 });

  try {
    const upstream = await fetch(ttsUrl(text), {
      headers: {
        // Google bəzən brauzer User-Agent tələb edir.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
        Referer: "https://translate.google.com/",
      },
    });

    if (!upstream.ok || !upstream.body) {
      return new Response("tts alınmadı", { status: 502 });
    }

    const buf = await upstream.arrayBuffer();
    return new Response(buf, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        // Eyni mətn təkrar səsləndiriləndə keşdən oxunsun.
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  } catch {
    return new Response("tts xətası", { status: 502 });
  }
}
