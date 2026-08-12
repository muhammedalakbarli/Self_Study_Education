// Zümrüd (gems) — dərsə görə mükafat. Web ilə eyni RPC (add_gems).
import { supabase } from "./supabase";

export const GEMS_PER_LESSON = 5;

export async function addGems(amount: number): Promise<void> {
  try {
    await supabase.rpc("add_gems", { p_amount: amount });
  } catch {
    /* sükutla keç */
  }
}
