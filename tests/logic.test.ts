import { describe, it, expect } from "vitest";
import { gradeTask } from "@/lib/grading";
import { levelFromXp } from "@/lib/levels";
import { weekKey } from "@/lib/leaderboard";
import { monthlyBadgeTier, monthKey } from "@/lib/monthly";
import { todaysQuests, questValue, isQuestDone } from "@/lib/quests";
import type {
  MultipleChoiceTask,
  FillBlankTask,
  NumericTask,
} from "@/lib/types";

// ── grading ──
describe("gradeTask", () => {
  const mc: MultipleChoiceTask = {
    id: "t", type: "multiple_choice", prompt: "?", xp: 10,
    options: ["a", "b", "c"], correctIndex: 1,
  };
  it("çoxseçimli: düz indeks", () => {
    expect(gradeTask(mc, 1)).toEqual({ correct: true, earnedXp: 10 });
    expect(gradeTask(mc, 0)).toEqual({ correct: false, earnedXp: 0 });
  });

  const fb: FillBlankTask = {
    id: "t", type: "fill_blank", prompt: "?", xp: 10, accepted: ["Saymaq", "say"],
  };
  it("boşluq: böyük/kiçik hərf və boşluqdan asılı deyil", () => {
    expect(gradeTask(fb, "saymaq").correct).toBe(true);
    expect(gradeTask(fb, "  SAYMAQ  ").correct).toBe(true);
    expect(gradeTask(fb, "yox").correct).toBe(false);
  });

  const num: NumericTask = { id: "t", type: "numeric", prompt: "?", xp: 10, answer: 1000 };
  it("rəqəm: vergül/nöqtə və dəqiq cavab", () => {
    expect(gradeTask(num, "1000").correct).toBe(true);
    expect(gradeTask(num, "1000,0").correct).toBe(true);
    expect(gradeTask(num, "999").correct).toBe(false);
  });
  it("rəqəm: tolerans", () => {
    const t: NumericTask = { ...num, answer: 3.14, tolerance: 0.01 };
    expect(gradeTask(t, "3.15").correct).toBe(true);
    expect(gradeTask(t, "3.2").correct).toBe(false);
  });
});

// ── levels ──
describe("levelFromXp", () => {
  it("kumulyativ sərhədlər: L1=0, L2=100, L3=300, L5=1000", () => {
    expect(levelFromXp(0).level).toBe(1);
    expect(levelFromXp(99).level).toBe(1);
    expect(levelFromXp(100).level).toBe(2);
    expect(levelFromXp(299).level).toBe(2);
    expect(levelFromXp(300).level).toBe(3);
    expect(levelFromXp(1000).level).toBe(5);
  });
  it("mənfi/pozuq XP təhlükəsiz", () => {
    expect(levelFromXp(-50).level).toBe(1);
    expect(levelFromXp(NaN).level).toBe(1);
  });
  it("progress 0..1 arasında", () => {
    const info = levelFromXp(150); // L2, xpInLevel=50, xpForNext=200
    expect(info.level).toBe(2);
    expect(info.xpForNext).toBe(200);
    expect(info.progress).toBeCloseTo(0.25, 5);
  });
});

// ── weekKey ──
describe("weekKey", () => {
  it("ISO həftə formatı YYYY-Www", () => {
    expect(weekKey(new Date("2026-07-20"))).toMatch(/^\d{4}-W\d{2}$/);
  });
  it("eyni həftədəki günlər eyni açar", () => {
    const a = weekKey(new Date("2026-07-20")); // bazar ertəsi
    const b = weekKey(new Date("2026-07-24")); // cümə
    expect(a).toBe(b);
  });
});

// ── monthly ──
describe("monthlyBadgeTier", () => {
  it("pillələr 0/1/2/3", () => {
    expect(monthlyBadgeTier(0)).toBe(0);
    expect(monthlyBadgeTier(49)).toBe(0);
    expect(monthlyBadgeTier(50)).toBe(1);
    expect(monthlyBadgeTier(200)).toBe(2);
    expect(monthlyBadgeTier(500)).toBe(3);
    expect(monthlyBadgeTier(9999)).toBe(3);
  });
  it("monthKey formatı YYYY-MM", () => {
    expect(monthKey(new Date("2026-07-20"))).toMatch(/^\d{4}-\d{2}$/);
  });
});

// ── quests ──
describe("todaysQuests", () => {
  it("hər gün 3 quest, deterministik", () => {
    const q1 = todaysQuests("2026-07-20");
    const q2 = todaysQuests("2026-07-20");
    expect(q1).toHaveLength(3);
    expect(q1.map((q) => q.id)).toEqual(q2.map((q) => q.id));
  });
  it("questValue və isQuestDone", () => {
    const state = { date: "2026-07-20", xp: 25, lessons: 1, correct: 3, claimed: [] };
    expect(questValue(state, "xp")).toBe(25);
    const q = { id: "xp20", kind: "xp" as const, goal: 20, rewardXp: 10, labelKey: "quest.xp" };
    expect(isQuestDone(state, q)).toBe(true);
    expect(isQuestDone({ ...state, xp: 10 }, q)).toBe(false);
  });
});
