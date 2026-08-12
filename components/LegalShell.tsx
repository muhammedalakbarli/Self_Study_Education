// Hüquqi səhifələr üçün sadə çərçivə (Şərtlər, Məxfilik) — təmiz, oxunaqlı.
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-ink">
      <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={30} />
            <span className="text-lg font-extrabold text-brand">Imparo</span>
          </Link>
          <Link href="/haqqimizda" className="flex items-center gap-1.5 text-sm font-bold text-muted hover:text-fg">
            <ArrowLeft size={15} /> Haqqımızda
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Son yenilənmə: {updated}</p>
        <div className="legal mt-8 space-y-6">{children}</div>

        <div className="mt-12 border-t border-line pt-6 text-sm text-muted">
          Sualın var? Bizə yaz:{" "}
          <a href="mailto:m.alakbarli2007@gmail.com" className="font-bold text-brand hover:underline">
            m.alakbarli2007@gmail.com
          </a>
        </div>
      </article>
    </main>
  );
}

// Bölmə başlığı + mətn üçün kiçik köməkçilər.
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold text-fg">{title}</h2>
      <div className="mt-2 space-y-2 leading-relaxed text-muted">{children}</div>
    </section>
  );
}
