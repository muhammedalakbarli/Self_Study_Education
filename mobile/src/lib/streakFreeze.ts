// Seriya qoruyucusu (streak freeze) — buraxılmış günü örtür. grant_streak_freeze RPC (cap ilə).
import { supabase } from "./supabase";

export const MAX_FREEZES = 2;

export async function grantStreakFreeze(cap = MAX_FREEZES): Promise<number> {
  try {
    const { data } = await supabase.rpc("grant_streak_freeze", { p_cap: cap });
    return typeof data === "number" ? data : 0;
  } catch { return 0; }
}
