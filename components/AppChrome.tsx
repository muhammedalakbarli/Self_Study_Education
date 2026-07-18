"use client";

// Tətbiq çərçivəsi: giriş səhifəsində (/) sadəcə uşaqları göstərir;
// digər bütün səhifələrdə solda sabit Sidebar + sol boşluqlu əsas sahə.

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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
      <div className="pl-16">{children}</div>
    </>
  );
}
