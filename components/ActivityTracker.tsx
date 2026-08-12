"use client";

// İstifadəçi girişli olduqda platformada aktiv keçirilən vaxtı izləyir (foreground heartbeat).
// layout-da mount olunur; anonim ziyarətçilər üçün heç nə göndərmir.

import { useEffect } from "react";
import { useAuthUser } from "@/lib/useAuthUser";
import { startActivityTracking } from "@/lib/activity";

export default function ActivityTracker() {
  const { user } = useAuthUser();

  useEffect(() => {
    if (!user) return;
    const stop = startActivityTracking();
    return stop;
  }, [user]);

  return null;
}
