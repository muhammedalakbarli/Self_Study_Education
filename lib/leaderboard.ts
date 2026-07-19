// Həftəlik liqa (leaderboard) — Supabase `leaderboard` cədvəli (bax 0003 migration).
// XP atomik RPC ilə artırılır (race yox); oxuma bütün istifadəçilərin cari həftə sətrini gətirir.

import { createClient } from "./supabase/client";

// ISO həftə açarı: "YYYY-Www".
export function weekKey(d: Date = new Date()): string {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = date.getUTCDay() || 7; // bazar=7
  date.setUTCDate(date.getUTCDate() + 4 - day); // cari həftənin cümə axşamı
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

export interface LeaderRow {
  userId: string;
  name: string;
  xp: number;
}

export interface CohortRow {
  userId: string;
  name: string;
  weeklyXp: number;
  tier: number;
  isMe: boolean;
}

// Liqa pilləsi (0..4) → i18n açarı.
export const TIER_KEYS = [
  "league.tier.bronze",
  "league.tier.silver",
  "league.tier.gold",
  "league.tier.platinum",
  "league.tier.diamond",
];
export const MAX_TIER = 4;
export const PROMOTE = 5; // top 5 yüksəlir
export const DEMOTE = 5; // alt 5 düşür (kohort böyük olanda)

// Cari həftə üçün istifadəçinin XP-sini artır (liqa kohortu üçün).
export async function addWeeklyXp(amount: number): Promise<void> {
  if (amount <= 0) return;
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const name = (user.user_metadata?.name as string | undefined)?.trim() || "İstifadəçi";
    await supabase.rpc("add_weekly_xp", {
      p_name: name,
      p_amount: Math.round(amount),
      p_week: weekKey(),
    });
  } catch {
    // sükutla ötür
  }
}

// Öz liqa pilləm (0-4). Sətir yoxdursa 0 (Bürünc).
export async function loadMyLeagueTier(): Promise<number> {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return 0;
    const { data } = await supabase
      .from("league")
      .select("tier")
      .eq("user_id", user.id)
      .maybeSingle();
    return data?.tier ?? 0;
  } catch {
    return 0;
  }
}

// Çağıranın liqa kohortu (eyni pillə, həftəlik XP üzrə, max 15).
export async function loadCohort(): Promise<CohortRow[]> {
  try {
    const supabase = createClient();
    const { data } = await supabase.rpc("get_cohort", { p_week: weekKey(), p_size: 15 });
    return (
      (data ?? []) as {
        user_id: string;
        name: string;
        weekly_xp: number;
        tier: number;
        is_me: boolean;
      }[]
    ).map((r) => ({
      userId: r.user_id,
      name: r.name,
      weeklyXp: r.weekly_xp,
      tier: r.tier,
      isMe: r.is_me,
    }));
  } catch {
    return [];
  }
}

// Cari həftə üçün istifadəçinin XP-sini artır (dərs/quest mükafatı verildikdə).
export async function addLeaderboardXp(amount: number): Promise<void> {
  if (amount <= 0) return;
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const name = (user.user_metadata?.name as string | undefined)?.trim() || "İstifadəçi";
    await supabase.rpc("add_leaderboard_xp", {
      p_week: weekKey(),
      p_name: name,
      p_amount: Math.round(amount),
    });
  } catch {
    // sükutla ötür — liqa kritik deyil
  }
}

// Ümumi sıralama — platformadakı bütün real istifadəçilər (ümumi XP üzrə).
// get_leaderboard funksiyası profiles + user_stats-dan təhlükəsiz oxuyur (bax 0004 migration).
export async function loadLeaderboard(limit = 50): Promise<LeaderRow[]> {
  try {
    const supabase = createClient();
    const { data } = await supabase.rpc("get_leaderboard", { p_limit: limit });
    return (data ?? []).map((r: { user_id: string; name: string; xp: number }) => ({
      userId: r.user_id,
      name: r.name,
      xp: r.xp,
    }));
  } catch {
    return [];
  }
}
