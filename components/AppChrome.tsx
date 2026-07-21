"use client";

// Tətbiq çərçivəsi: giriş səhifəsində (/) sadəcə uşaqları göstərir;
// digər bütün səhifələrdə solda sabit Sidebar + sol boşluqlu əsas sahə.
// MotionConfig: Ayarlar "animations" söndürülübsə framer-motion animasiyaları da dayanır.

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import Sidebar from "./Sidebar";
import { loadPrefs, applyPrefs } from "@/lib/prefs";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animEnabled, setAnimEnabled] = useState(true);

  // İstifadəçi tərcihlərini (animasiya və s.) tətbiq et.
  useEffect(() => {
    const p = loadPrefs();
    applyPrefs(p);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimEnabled(p.animations);
  }, [pathname]);

  // Giriş, qeydiyyat və immersiv dərs ekranında sidebar göstərilmir.
  const bare =
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/onboarding" ||
    pathname.startsWith("/lessons/") ||
    pathname.startsWith("/u/") ||
    pathname.startsWith("/dost/") ||
    pathname.startsWith("/admin");

  const body = bare ? (
    <>{children}</>
  ) : (
    <>
      <Sidebar />
      <div className="pb-20 lg:pb-0 lg:pl-56">{children}</div>
    </>
  );

  // animasiya söndürülübsə "always" (framer-motion son halı dərhal tətbiq edir),
  // əks halda "user" (yalnız prefers-reduced-motion olanlarda azaldır).
  return (
    <MotionConfig reducedMotion={animEnabled ? "user" : "always"}>{body}</MotionConfig>
  );
}
