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
    let active = true;
    getCurrentUser().then((u) => {
      if (!active) return;
      if (!u) {
        router.replace("/");
        return;
      }
      // Profil sətrini təmin et (progress FK üçün) — fon işi.
      ensureProfile(u.id, displayName(u)).catch(() => {});
      setUser(u);
      setReady(true);
    });
    return () => {
      active = false;
    };
  }, [router]);

  return { user, ready };
}
