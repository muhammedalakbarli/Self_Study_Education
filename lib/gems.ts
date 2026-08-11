// Zümrüd (gems) — oyun daxili valyuta. Dərs tamamlananda qazanılır.
// RPC yoxdursa/xəta olsa 0 qaytarır (graceful).

import { createClient } from "./supabase/client";

// Zümrüd əlavə et; yeni cəmi qaytarır.
export async function addGems(amount: number): Promise<number> {
  if (!amount) return 0;
  try {
    const { data } = await createClient().rpc("add_gems", { p_amount: amount });
    return typeof data === "number" ? data : 0;
  } catch {
    return 0;
  }
}

// Hər dərsə görə qazanılan zümrüd.
export const GEMS_PER_LESSON = 5;
