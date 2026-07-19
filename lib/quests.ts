// Gündəlik questlər — hər gün 3 kiçik hədəf, proqres user_metadata-da (gündəlik sıfırlanır).
// Proqres dərs/praktika axınlarından bumpQuest ilə artırılır; mükafat XP claim olunanda
// user_stats-a əlavə olunur (bax addXp). Deterministik seçim → hamıda eyni gündəlik questlər.

import { createClient } from "./supabase/client";
import { addXp } from "./progress";
import { todayKey } from "./daily";

export type QuestKind = "xp" | "lessons" | "correct";

export interface Quest {
  id: string;
  kind: QuestKind;
  goal: number;
  rewardXp: number;
  labelKey: string; // i18n açarı; {n} → goal ilə əvəzlənir
}

export interface QuestState {
  date: string;
  xp: number;
  lessons: number;
  correct: number;
  claimed: string[];
}

// Quest hovuzu — gündən-günə fırlanır.
const POOL: Quest[] = [
  { id: "xp20", kind: "xp", goal: 20, rewardXp: 10, labelKey: "quest.xp" },
  { id: "correct10", kind: "correct", goal: 10, rewardXp: 10, labelKey: "quest.correct" },
  { id: "lessons1", kind: "lessons", goal: 1, rewardXp: 10, labelKey: "quest.lessons" },
  { id: "xp40", kind: "xp", goal: 40, rewardXp: 15, labelKey: "quest.xp" },
  { id: "correct20", kind: "correct", goal: 20, rewardXp: 15, labelKey: "quest.correct" },
  { id: "lessons2", kind: "lessons", goal: 2, rewardXp: 20, labelKey: "quest.lessons" },
];

// Bugünkü 3 quest (tarixə görə deterministik).
export function todaysQuests(dateKey: string = todayKey()): Quest[] {
  const seed = dateKey.split("-").reduce((a, p) => a + parseInt(p, 10), 0);
  const off = seed % POOL.length;
  return [0, 2, 4].map((step) => POOL[(off + step) % POOL.length]);
}

const EMPTY = (date: string): QuestState => ({
  date,
  xp: 0,
  lessons: 0,
  correct: 0,
  claimed: [],
});

function normalize(raw: unknown): QuestState {
  const today = todayKey();
  const s = (raw ?? {}) as Partial<QuestState>;
  if (!s || s.date !== today) return EMPTY(today);
  return {
    date: today,
    xp: s.xp ?? 0,
    lessons: s.lessons ?? 0,
    correct: s.correct ?? 0,
    claimed: Array.isArray(s.claimed) ? s.claimed : [],
  };
}

export function questValue(state: QuestState, kind: QuestKind): number {
  return kind === "xp" ? state.xp : kind === "lessons" ? state.lessons : state.correct;
}

export function isQuestDone(state: QuestState, q: Quest): boolean {
  return questValue(state, q.kind) >= q.goal;
}

async function readState(): Promise<QuestState> {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return normalize(user?.user_metadata?.questState);
  } catch {
    return EMPTY(todayKey());
  }
}

async function writeState(state: QuestState): Promise<void> {
  try {
    const supabase = createClient();
    await supabase.auth.updateUser({ data: { questState: state } });
  } catch {
    // sükutla ötür
  }
}

// Yazıları seriallaşdır — eyni anda gələn bump-lar read-modify-write race yaratmasın.
let chain: Promise<void> = Promise.resolve();
function enqueue(fn: () => Promise<void>): Promise<void> {
  chain = chain.then(fn, fn);
  return chain;
}

// Proqresi artır (dərs/praktika hadisələrindən çağırılır).
export async function bumpQuest(kind: QuestKind, amount: number): Promise<void> {
  if (amount <= 0) return;
  return bumpQuests({ [kind]: amount });
}

// Bir neçə növü tək yazıda artır (məs. dərs sonunda xp + lessons).
export async function bumpQuests(
  deltas: Partial<Record<QuestKind, number>>,
): Promise<void> {
  return enqueue(async () => {
    const s = await readState();
    (Object.keys(deltas) as QuestKind[]).forEach((k) => {
      s[k] += deltas[k] ?? 0;
    });
    await writeState(s);
  });
}

// Tamamlanmış, hələ claim olunmamış questlərin XP mükafatını user_stats-a köçürür.
// Dashboard/praktika yüklənəndə çağırılır; yenilənmiş state qaytarır.
export async function syncQuestRewards(userId: string): Promise<QuestState> {
  let result: QuestState = EMPTY(todayKey());
  await enqueue(async () => {
    const s = await readState();
    const quests = todaysQuests(s.date);
    let changed = false;
    let reward = 0;
    for (const q of quests) {
      if (isQuestDone(s, q) && !s.claimed.includes(q.id)) {
        s.claimed.push(q.id);
        reward += q.rewardXp;
        changed = true;
      }
    }
    if (changed) {
      if (reward > 0) await addXp(userId, reward).catch(() => {});
      await writeState(s);
    }
    result = s;
  });
  return result;
}

// Yalnız oxu (mükafat vermədən) — UI üçün.
export async function loadQuestState(): Promise<QuestState> {
  return readState();
}
