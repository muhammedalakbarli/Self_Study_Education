// Auth köməkçi funksiyaları (client tərəf) — Supabase email/parol.
// Frontend (login/signup səhifələri) bu funksiyaları çağırır.
// İstifadəçinin adı auth metadata-da (user_metadata.name) saxlanılır.

import { createClient } from "./supabase/client";
import type { User } from "@supabase/supabase-js";

export interface AuthResult {
  ok: boolean;
  error?: string;
  needsEmailConfirm?: boolean;
}

// Qeydiyyat: ad + email + parol.
export async function signUpWithEmail(
  name: string,
  email: string,
  password: string,
): Promise<AuthResult> {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
  if (error) return { ok: false, error: error.message };
  // Email təsdiqi aktivdirsə, session hələ null olur.
  const needsEmailConfirm = !data.session;
  return { ok: true, needsEmailConfirm };
}

// Giriş: email + parol.
export async function signInWithEmail(
  email: string,
  password: string,
): Promise<AuthResult> {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

// Çıxış.
export async function signOut(): Promise<void> {
  const supabase = createClient();
  await supabase.auth.signOut();
}

// Cari istifadəçi (yoxdursa null).
export async function getCurrentUser(): Promise<User | null> {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

// İstifadəçinin görünən adı (metadata-dan, yoxdursa email-in başlanğıcı).
export function displayName(user: User | null): string {
  if (!user) return "";
  const name = (user.user_metadata?.name as string | undefined)?.trim();
  return name || user.email?.split("@")[0] || "İstifadəçi";
}
