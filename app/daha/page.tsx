"use client";

// Daha çoxu: fənlərə keçidlər, hesab, məlumat.

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, User, Dumbbell, LogOut, ChevronRight, Settings, HelpCircle } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { signOut } from "@/lib/auth";
import { subjects } from "@/lib/content";
import { PageSkeleton } from "@/components/Skeleton";
import Logo from "@/components/Logo";

export default function MorePage() {
  const { user, ready } = useAuthUser();
  const router = useRouter();

  if (!ready || !user) return <PageSkeleton />;

  async function logout() {
    await signOut();
    router.replace("/");
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Daha çoxu</h1>

        {/* Fənlər */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          Fənlər
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          {subjects.map((s) => (
            <Link
              key={s.slug}
              href={`/subjects/${s.slug}`}
              className="flex items-center gap-3 border-b border-line px-4 py-3.5 last:border-b-0 transition hover:bg-panel-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
                {s.icon}
              </span>
              <span className="flex-1 font-bold text-fg">{s.name}</span>
              <ChevronRight size={18} className="text-muted" />
            </Link>
          ))}
        </div>

        {/* Hesab */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          Hesab
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          <Row href="/profil" Icon={User} label="Profil" />
          <Row href="/praktika" Icon={Dumbbell} label="Praktika et" />
          <Row href="/dashboard" Icon={BookOpen} label="Öyrən" />
        </div>

        {/* Tənzimləmə */}
        <h2 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">
          Tənzimləmə
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-line bg-panel">
          <Row href="/ayarlar" Icon={Settings} label="Ayarlar" />
          <Row href="/yardim" Icon={HelpCircle} label="Yardım mərkəzi" />
        </div>

        <button
          type="button"
          onClick={logout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-line bg-panel px-5 py-3 font-bold text-fg btn-pop btn-pop-ghost hover:border-brand"
        >
          <LogOut size={18} /> Hesabdan çıx
        </button>

        {/* Alt */}
        <div className="mt-10 flex flex-col items-center gap-1.5 text-center text-xs text-muted">
          <Logo size={24} />
          <span className="font-bold text-fg">Bilik Yolu</span>
          <span>Azərbaycan məktəbliləri üçün interaktiv öyrənmə platforması</span>
        </div>
      </main>
    </div>
  );
}

function Row({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 border-b border-line px-4 py-3.5 last:border-b-0 transition hover:bg-panel-2"
    >
      <Icon size={20} className="text-muted" />
      <span className="flex-1 font-bold text-fg">{label}</span>
      <ChevronRight size={18} className="text-muted" />
    </Link>
  );
}
