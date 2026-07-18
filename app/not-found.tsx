import Link from "next/link";
import Mascot from "@/components/Mascot";

export default function NotFound() {
  return (
    <main className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink px-4 text-center">
      <Mascot size={96} mood="sad" />
      <div className="mt-6 text-6xl font-extrabold text-brand">404</div>
      <h1 className="mt-2 text-2xl font-extrabold text-fg">Səhifə tapılmadı</h1>
      <p className="mt-2 max-w-sm text-muted">
        Axtardığın səhifə mövcud deyil və ya köçürülüb.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-2xl bg-brand px-6 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
      >
        Ana səhifəyə qayıt
      </Link>
    </main>
  );
}
