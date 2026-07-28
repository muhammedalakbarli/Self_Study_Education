// İngilis dili tələffüzü — OS səsindən asılı olmayan etibarlı həll.
// Əsas yol: onlayn İngilis TTS audiosu (<audio> elementi, açar tələb etmir, real səs).
// Ehtiyat yol: brauzerin Web Speech API-si (əgər audio çalınmasa).
// Bütün çağırışlar istifadəçi klikindən gəlir, ona görə autoplay siyasəti bloklamır.

let current: HTMLAudioElement | null = null;

// Eyni-mənşəli TTS proxy (bax app/api/tts/route.ts). Server Google-dan audionu
// gətirir → brauzerdə CORS/referer/reklam-bloklayıcı problemi olmur.
function ttsUrl(text: string): string {
  return `/api/tts?text=${encodeURIComponent(text.slice(0, 200))}`;
}

// Bu cihazda tələffüz mümkündür? (audio elementi hər brauzerdə var)
export function ttsSupported(): boolean {
  return typeof window !== "undefined";
}

// Web Speech API ehtiyat yolu — səslər asinxron yüklənə bilər.
function webSpeechFallback(text: string): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  const speak = () => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    const voice =
      synth.getVoices().find((v) => v.lang === "en-US") ??
      synth.getVoices().find((v) => v.lang.startsWith("en"));
    if (voice) u.voice = voice;
    synth.cancel();
    synth.speak(u);
  };
  // Səslər hələ yüklənməyibsə, hadisəni gözlə.
  if (synth.getVoices().length === 0) {
    synth.addEventListener("voiceschanged", speak, { once: true });
    // Bəzi brauzerlərdə hadisə gəlmir — kiçik gecikmə ilə də cəhd et.
    setTimeout(speak, 250);
  } else {
    speak();
  }
}

// Verilmiş İngilis mətnini səsləndirir. Əvvəlki səsi dayandırır.
export function speakEnglish(text: string): void {
  if (typeof window === "undefined" || !text.trim()) return;

  // Əvvəlki səsi dayandır (üst-üstə düşməsin).
  if (current) {
    current.pause();
    current = null;
  }
  try {
    window.speechSynthesis?.cancel();
  } catch {
    /* yoxdursa keç */
  }

  try {
    const audio = new Audio(ttsUrl(text));
    current = audio;
    // Onlayn audio alınmasa (şəbəkə/bloklama) → Web Speech ehtiyatı.
    audio.play().catch(() => webSpeechFallback(text));
  } catch {
    webSpeechFallback(text);
  }
}
