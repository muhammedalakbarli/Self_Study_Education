// Profil kimliyi — profiles cədvəli (name, username, avatar) + public profil RPC.

import { createClient } from "./supabase/client";
import type { AvatarConfig } from "@/components/Avatar";

export interface ProfileRow {
  id: string;
  name: string;
  username: string | null;
  avatar: AvatarConfig | null;
  createdAt: string | null;
}

export function validUsername(u: string): boolean {
  return /^[a-z0-9_]{3,20}$/.test(u);
}

const AZ_MONTHS = [
  "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
  "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",
];

// Üzvlük tarixi — "İyul 2026" (AZ ay adı).
export function memberDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "—";
  return `${AZ_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export async function loadProfileRow(): Promise<ProfileRow | null> {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;
    const { data } = await supabase
      .from("profiles")
      .select("id, name, username, avatar, created_at")
      .eq("id", user.id)
      .maybeSingle();
    const meta = (user.user_metadata?.name as string | undefined)?.trim();
    return {
      id: user.id,
      name: data?.name ?? meta ?? "İstifadəçi",
      username: data?.username ?? null,
      avatar: (data?.avatar as AvatarConfig | null) ?? null,
      createdAt: data?.created_at ?? null,
    };
  } catch {
    return null;
  }
}

// Ad/username/avatar yenilə (mövcud sətirlə birləşdirib upsert; metadata.name sinxron).
export async function updateProfile(p: {
  name?: string;
  username?: string;
  avatar?: AvatarConfig;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { ok: false, error: "auth" };
    const cur = await loadProfileRow();
    const merged = {
      id: user.id,
      name: (p.name ?? cur?.name ?? "İstifadəçi").trim(),
      username: (p.username ?? cur?.username) || null,
      avatar: p.avatar ?? cur?.avatar ?? null,
    };
    const { error } = await supabase.from("profiles").upsert(merged, { onConflict: "id" });
    if (error) {
      if (error.code === "23505") return { ok: false, error: "username_taken" };
      return { ok: false, error: error.message };
    }
    if (p.name !== undefined) {
      await supabase.auth.updateUser({ data: { name: merged.name } });
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "error" };
  }
}

export interface PublicProfile {
  name: string;
  username: string;
  avatar: AvatarConfig | null;
  createdAt: string | null;
  totalXp: number;
  streakDays: number;
  tier: number;
}

export async function getPublicProfile(username: string): Promise<PublicProfile | null> {
  try {
    const supabase = createClient();
    const { data } = await supabase.rpc("get_public_profile", { p_username: username });
    const row = (Array.isArray(data) ? data[0] : data) as
      | {
          name: string;
          username: string;
          avatar: AvatarConfig | null;
          created_at: string | null;
          total_xp: number;
          streak_days: number;
          tier: number;
        }
      | undefined;
    if (!row) return null;
    return {
      name: row.name,
      username: row.username,
      avatar: row.avatar,
      createdAt: row.created_at,
      totalXp: row.total_xp,
      streakDays: row.streak_days,
      tier: row.tier,
    };
  } catch {
    return null;
  }
}
