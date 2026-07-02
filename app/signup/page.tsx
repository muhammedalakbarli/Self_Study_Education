"use client";

// Qeydiyyat səhifəsi — ad, email, parol ilə real Supabase qeydiyyatı.

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpWithEmail, getCurrentUser } from "@/lib/auth";
import Logo from "@/components/Logo";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser().then((u) => {
      if (u) router.replace("/dashboard");
    });
  }, [router]);

  async function submit() {
    if (!name.trim() || !email.trim() || password.length < 6) {
      setError("Ad, email və ən azı 6 simvolluq parol yazın.");
      return;
    }
    setLoading(true);
    setError("");
    setInfo("");
    const res = await signUpWithEmail(name.trim(), email.trim(), password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error || "Qeydiyyat alınmadı.");
      return;
    }
    if (res.needsEmailConfirm) {
      setInfo("Emailinə təsdiq linki göndərildi. Təsdiqlədikdən sonra daxil ol.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-[#f7f8fa] px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
        <div className="flex justify-center">
          <Logo size={64} />
        </div>
        <h1 className="mt-6 text-center text-xl font-bold text-slate-900">
          Yeni hesab yarat
        </h1>

        <label className="mt-8 block text-sm font-bold text-slate-800">Ad</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />

        <label className="mt-4 block text-sm font-bold text-slate-800">Email</label>
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
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />

        {error && (
          <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}
        {info && (
          <p className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            {info}
          </p>
        )}

        <button
          type="button"
          onClick={submit}
          disabled={loading}
          className="mt-6 w-full rounded-md bg-brand px-4 py-2.5 font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Yaradılır..." : "Qeydiyyatdan keç"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Artıq hesabın var?{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Daxil ol
          </Link>
        </p>
      </div>
    </main>
  );
}
