"use client";

// Giriş səhifəsi — peşəkar split-ekran: solda brend paneli, sağda forma.
// Real Supabase girişi; artıq daxil olmuş istifadəçi dashboard-a keçir.

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Check } from "lucide-react";
import { signInWithEmail, getCurrentUser } from "@/lib/auth";
import Logo from "@/components/Logo";

const PERKS = [
  "3 fənn üzrə 60+ interaktiv dərs",
  "Öz sürətinlə, oyun kimi öyrənmə",
  "İrəliləyişin avtomatik yadda saxlanılır",
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser().then((u) => {
      if (u) router.replace("/dashboard");
    });
  }, [router]);

  async function login() {
    if (!email.trim() || !password || loading) return;
    setLoading(true);
    setError("");
    const res = await signInWithEmail(email.trim(), password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error || "Email və ya parol yanlışdır.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-1">
      {/* Sol brend paneli (yalnız böyük ekranda) */}
      <aside className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-brand to-brand-dark p-12 text-white lg:flex">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Ana səhifə">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
            <Logo size={26} />
          </span>
          <span className="text-xl font-extrabold">Bilik Yolu</span>
        </Link>

        <div>
          <h2 className="max-w-sm text-4xl font-extrabold leading-tight">
            Öyrənməyə davam et
          </h2>
          <p className="mt-3 max-w-sm text-white/80">
            Hesabına daxil ol və qaldığın yerdən davam et.
          </p>
          <ul className="mt-8 space-y-3">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-white/60">
          Azərbaycan məktəbliləri üçün interaktiv öyrənmə platforması
        </p>
      </aside>

      {/* Sağ forma */}
      <main className="flex w-full items-center justify-center bg-[#f7f8fa] px-5 py-10 lg:w-1/2">
        <div className="w-full max-w-sm">
          {/* Mobil loqo */}
          <Link
            href="/"
            className="mb-8 flex items-center justify-center gap-2 lg:hidden"
            aria-label="Ana səhifə"
          >
            <Logo size={40} />
            <span className="text-xl font-extrabold text-fg">Bilik Yolu</span>
          </Link>

          <h1 className="text-2xl font-extrabold text-slate-900">Xoş gəldin</h1>
          <p className="mt-1 text-sm text-slate-500">
            Davam etmək üçün hesabına daxil ol
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-800">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="example@email.com"
                disabled={loading}
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800">Parol</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && login()}
                  placeholder="Parolun"
                  disabled={loading}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 pr-10 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Parolu gizlət" : "Parolu göstər"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={login}
              disabled={!email.trim() || !password || loading}
              className="w-full rounded-2xl bg-brand px-4 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Yoxlanılır...
                </span>
              ) : (
                "Daxil ol"
              )}
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Hesabın yoxdur?{" "}
            <Link href="/signup" className="font-bold text-brand hover:underline">
              Qeydiyyatdan keç
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
