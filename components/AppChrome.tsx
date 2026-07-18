"use client";

// Tətbiq çərçivəsi: giriş səhifəsində (/) sadəcə uşaqları göstərir;
// digər bütün səhifələrdə solda sabit Sidebar + sol boşluqlu əsas sahə.

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { loadPrefs, applyPrefs } from "@/lib/prefs";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // İstifadəçi tərcihlərini (animasiya və s.) tətbiq et.
  useEffect(() => {
    applyPrefs(loadPrefs());
  }, []);

  // Giriş və qeydiyyat səhifələrində sidebar göstərilmir.
  const bare =
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/onboarding";

  if (bare) return <>{children}</>;

  return (
    <>
      <Sidebar />
      <div className="pb-20 lg:pb-0 lg:pl-56">{children}</div>
    </>
  );
}
