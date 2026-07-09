"use client";

// Auth guard hook: cari Supabase istifadəçisini qaytarır.
// Giriş yoxdursa avtomatik `/`-ə yönləndirir. Qorunan səhifələrdə istifadə olunur.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, displayName } from "./auth";
import { ensureProfile } from "./progress";
import type { User } from "@supabase/supabase-js";

export function useAuthUser(): { user: User | null; ready: boolean } {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

useEffect(() => {
  const supabase = createClient();
  // İlk yükləmə üçün mövcud sessiyanı oxu
  supabase.auth.getSession().then(({ data: { session } }) => {
    const u = session?.user ?? null;
    if (!u) { router.replace("/"); return; }
    ensureProfile(u.id, displayName(u)).catch(() => {});
    setUser(u);
    setReady(true);
  });
  // Sonrakı dəyişiklikləri real-time izlə
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    const u = session?.user ?? null;
    if (event === "SIGNED_OUT" || !u) {
      setUser(null); setReady(false); router.replace("/"); return;
    }
    if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      ensureProfile(u.id, displayName(u)).catch(() => {});
      setUser(u); setReady(true);
    }
  });
  return () => subscription.unsubscribe();
}, [router]);
