"use client";

// Giriş səhifəsi — açıq fonda mərkəzi kart, loqo,
// email/parol ilə real Supabase girişi, qeydiyyat səhifəsinə keçid.

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmail, getCurrentUser } from "@/lib/auth";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser().then((u) => {
      if (u) router.replace("/dashboard");
    });
  }, [router]);

  async function login() {
    if (!email.trim() || !password) return;
    setLoading(true);
    setError("");
    const res = await signInWithEmail(email.trim(), password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error || "Giriş alınmadı.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-[#f7f8fa] px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
        <Link href="/" className="flex justify-center" aria-label="Ana səhifə">
          <Logo size={64} />
        </Link>
        <h1 className="mt-6 text-center text-xl font-bold text-slate-900">
          Hesabına daxil ol
        </h1>

        <label className="mt-8 block text-sm font-bold text-slate-800">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />

        <label className="mt-4 block text-sm font-bold text-slate-800">Parol</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />

        {error && (
          <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={login}
          disabled={!email.trim() || !password || loading}
          className="mt-6 w-full rounded-2xl bg-brand px-4 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Yoxlanılır..." : "Daxil ol"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Hesabın yoxdur?{" "}
          <Link href="/signup" className="font-semibold text-brand hover:underline">
            Qeydiyyatdan keç
          </Link>
        </p>
      </div>
    </main>
  );
}
