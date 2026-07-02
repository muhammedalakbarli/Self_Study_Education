"use client";

// Sol panel (sadə): yuxarıda loqo (ana səhifə), aşağıda profil.
// Fənlər burada göstərilmir — onlar dashboard-dakı fənn tablarındadır.

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getCurrentUser, displayName, signOut } from "@/lib/auth";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    getCurrentUser().then((u) => setName(displayName(u)));
  }, [pathname]);

  const initial = name.trim().charAt(0).toUpperCase() || "?";

  async function logout() {
    await signOut();
    router.replace("/");
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-16 flex-col items-center justify-between border-r border-line bg-ink py-5">
      <Link href="/dashboard" title="Ana səhifə" aria-label="Ana səhifə">
        <Logo size={34} />
      </Link>

      <div className="flex flex-col items-center gap-3">
        <Link
          href="/dashboard"
          title={name || "Profil"}
          aria-label={name || "Profil"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
        >
          {initial}
        </Link>
        <button
          type="button"
          onClick={logout}
          title="Çıxış"
          aria-label="Çıxış"
          className="text-[10px] text-muted hover:text-white"
        >
          Çıxış
        </button>
      </div>
    </aside>
  );
}
