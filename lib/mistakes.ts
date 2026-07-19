// Səhv edilən tapşırıqların id-ləri — Supabase user_metadata-da (hər cihazda qalır).
// Praktika "Səhvlər üzərində iş" bölməsi üçün.

import { createClient } from "./supabase/client";

async function readMistakes(): Promise<string[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const list = user?.user_metadata?.mistakes;
  return Array.isArray(list) ? (list as string[]) : [];
}

export async function loadMistakes(): Promise<string[]> {
  try {
    return await readMistakes();
  } catch {
    return [];
  }
}

export async function addMistake(taskId: string): Promise<void> {
  try {
    const cur = await readMistakes();
    if (cur.includes(taskId)) return;
    const supabase = createClient();
    await supabase.auth.updateUser({ data: { mistakes: [...cur, taskId] } });
  } catch {
    // sükutla ötür — səhv qeydi kritik deyil
  }
}

export async function removeMistake(taskId: string): Promise<void> {
  try {
    const cur = await readMistakes();
    if (!cur.includes(taskId)) return;
    const supabase = createClient();
    await supabase.auth.updateUser({
      data: { mistakes: cur.filter((id) => id !== taskId) },
    });
  } catch {
    // sükutla ötür
  }
}
