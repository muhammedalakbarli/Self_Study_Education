"use client";

// Giriş səhifəsi — Holberton üslubu (holberton1.png):
// açıq fonda mərkəzi kart, loqo, Google düyməsi, Email/Password, qırmızı "Daxil ol".
// MVP-də parol yoxlanılmır; email istifadəçi kimliyi kimi saxlanılır (localStorage).

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadProgress, setName } from "@/lib/progress";
import Logo from "@/components/Logo";

// Emaildən görünən ad çıxarır: "ayla@x.com" -> "Ayla"
function nameFromEmail(value: string): string {
  const prefix = value.split("@")[0].replace(/[._-]+/g, " ").trim();
  return prefix
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    if (loadProgress().name) router.replace("/dashboard");
  }, [router]);

  function login() {
    const value = email.trim();
    if (!value) return;
    setName(nameFromEmail(value) || value);
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-[#f7f8fa] px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
        {/* loqo */}
        <div className="flex justify-center">
          <Logo size={64} />
        </div>

        {/* Google düyməsi (MVP-də dekorativ) */}
        <button
          type="button"
          onClick={login}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <GoogleIcon />
          Google ilə davam et
        </button>

        <div className="my-5 flex items-center gap-3 text-sm text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          və ya
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Email */}
        <label className="block text-sm font-bold text-slate-800">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />

        {/* Password */}
        <label className="mt-4 block text-sm font-bold text-slate-800">Parol</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
        />

        {/* Remember me */}
        <label className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 accent-brand"
          />
          Məni xatırla
        </label>

        {/* Daxil ol */}
        <button
          type="button"
          onClick={login}
          disabled={!email.trim()}
          className="mt-6 w-full rounded-md bg-brand px-4 py-2.5 font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Daxil ol
        </button>

        <div className="mt-6 text-center">
          <span className="cursor-pointer text-sm font-medium text-brand hover:underline">
            Parolunu unutmusan?
          </span>
        </div>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
