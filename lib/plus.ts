// Imparo Plus — premium bayrağı (user_metadata.plus + plusUntil).
// Qeyd: hələ ödəniş inteqrasiyası yoxdur — abunə client-də aktivləşir (demo).
// Real ödəniş qoşulanda bayraq server tərəfdə təsdiqlənməlidir.

import type { User } from "@supabase/supabase-js";
import { createClient } from "./supabase/client";

export function isPlus(user: User | null): boolean {
  const m = user?.user_metadata as { plus?: boolean; plusUntil?: string } | undefined;
  if (!m?.plus) return false;
  if (m.plusUntil && new Date(m.plusUntil).getTime() < Date.now()) return false;
  return true;
}

// Cari istifadəçinin Plus statusunu oxu.
export async function loadPlus(): Promise<boolean> {
  try {
    const {
      data: { user },
    } = await createClient().auth.getUser();
    return isPlus(user);
  } catch {
    return false;
  }
}

// Plus-u aktivləşdir (months ay). Real ödənişdən sonra bu server tərəfdən edilməlidir.
export async function activatePlus(months: number): Promise<void> {
  const until = new Date();
  until.setMonth(until.getMonth() + months);
  await createClient().auth.updateUser({
    data: { plus: true, plusUntil: until.toISOString() },
  });
}
