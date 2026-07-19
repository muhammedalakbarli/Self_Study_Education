// Səs effektləri — WebAudio ilə fayl-siz qısa tonlar. `prefs.sound` söndürülübsə susur.
// İstifadə: playCorrect() / playWrong() / playComplete() / playLevelUp().

import { loadPrefs } from "./prefs";

let ctx: AudioContext | null = null;

function audioCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    return ctx;
  } catch {
    return null;
  }
}

// Tək not: tezlik, başlanğıc (san), müddət (san), forma, səs həcmi.
function tone(
  ac: AudioContext,
  freq: number,
  start: number,
  dur: number,
  type: OscillatorType = "sine",
  gain = 0.14,
) {
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const t0 = ac.currentTime + start;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

function enabled(): boolean {
  try {
    return loadPrefs().sound;
  } catch {
    return false;
  }
}

function play(notes: () => void) {
  if (!enabled()) return;
  const ac = audioCtx();
  if (ac) notes();
}

export function playCorrect() {
  const ac = audioCtx();
  play(() => {
    if (!ac) return;
    tone(ac, 660, 0, 0.12, "sine"); // E5
    tone(ac, 990, 0.09, 0.16, "sine"); // B5 — yüksələn "ding"
  });
}

export function playWrong() {
  const ac = audioCtx();
  play(() => {
    if (!ac) return;
    tone(ac, 200, 0, 0.18, "sawtooth", 0.1); // alçaq "buzz"
    tone(ac, 150, 0.1, 0.2, "sawtooth", 0.1);
  });
}

export function playComplete() {
  const ac = audioCtx();
  play(() => {
    if (!ac) return;
    // qısa fanfar (C-E-G-C)
    [523, 659, 784, 1047].forEach((f, i) => tone(ac, f, i * 0.12, 0.18, "triangle"));
  });
}

export function playLevelUp() {
  const ac = audioCtx();
  play(() => {
    if (!ac) return;
    [523, 659, 784, 1047, 1319].forEach((f, i) =>
      tone(ac, f, i * 0.1, 0.22, "square", 0.1),
    );
  });
}
