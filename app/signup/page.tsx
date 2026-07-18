"use client";

// Qeydiyyat səhifəsi — login ilə eyni peşəkar split-ekran (solda brend, sağda forma).
// Validasiya + şifrə gücü + təsdiq + real Supabase qeydiyyatı.

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle, XCircle, Check } from "lucide-react";
import Logo from "@/components/Logo";
import GoogleButton from "@/components/GoogleButton";
import { signUpWithEmail } from "@/lib/auth";

const PERKS = [
  "Pulsuz — kart və ödəniş yoxdur",
  "3 fənn: Riyaziyyat, Azərbaycan dili, İngilis dili",
  "İrəliləyişin hər cihazda yadda qalır",
];

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Şifrə gücü yoxlaması
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/[0-9]/)) strength++;
    if (pass.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const doPasswordsMatch = password === confirmPassword && password.length > 0;

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password) {
      setError("Bütün sahələri doldurun.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Şifrələr uyğun gəlmir.");
      return;
    }
    if (password.length < 6) {
      setError("Şifrə ən az 6 simvol olmalıdır.");
      return;
    }

    setLoading(true);
    setError("");

    // Real Supabase qeydiyyatı (ad + email + parol)
    const res = await signUpWithEmail(fullName.trim(), email.trim(), password);
    setLoading(false);

    if (!res.ok) {
      setError(res.error || "Qeydiyyat alınmadı. Yenidən cəhd et.");
      return;
    }
    if (res.needsEmailConfirm) {
      router.push("/login?confirm=1");
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
            Öyrənməyə bu gün başla
          </h2>
          <p className="mt-3 max-w-sm text-white/80">
            Hesab yarat, ilk dərsini bitir və XP qazan.
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

          <h1 className="text-2xl font-extrabold text-slate-900">Yeni hesab yarat</h1>
          <p className="mt-1 text-sm text-slate-500">Bir neçə saniyə çəkir</p>

          <div className="mt-8">
            <GoogleButton label="Google ilə qeydiyyat" />
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium text-slate-400">və ya</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Ad və Soyad */}
            <div>
              <label className="block text-sm font-bold text-slate-800">Ad və Soyad</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Adınız və soyadınız"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-slate-800">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="example@email.com"
                disabled={loading}
              />
            </div>

            {/* Şifrə */}
            <div>
              <label className="block text-sm font-bold text-slate-800">Şifrə</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 pr-10 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Ən az 6 simvol"
                  disabled={loading}
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

              {/* Şifrə gücü indikatoru */}
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition ${
                          level <= passwordStrength
                            ? passwordStrength <= 1
                              ? "bg-red-500"
                              : passwordStrength <= 2
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {passwordStrength <= 1 && "Zəif"}
                    {passwordStrength === 2 && "Orta"}
                    {passwordStrength === 3 && "Yaxşı"}
                    {passwordStrength === 4 && "Güclü"}
                  </p>
                </div>
              )}
            </div>

            {/* Şifrə təkrar */}
            <div>
              <label className="block text-sm font-bold text-slate-800">
                Şifrəni təkrar daxil et
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 pr-10 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Şifrəni təkrar yazın"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Parolu gizlət" : "Parolu göstər"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Şifrə uyğunluğu mesajı */}
              {confirmPassword.length > 0 && (
                <p
                  className={`mt-1 flex items-center gap-1 text-xs ${
                    doPasswordsMatch ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {doPasswordsMatch ? (
                    <>
                      <CheckCircle size={14} /> Şifrələr uyğundur
                    </>
                  ) : (
                    <>
                      <XCircle size={14} /> Şifrələr uyğun gəlmir
                    </>
                  )}
                </p>
              )}
            </div>

            {/* Xəta mesajı */}
            {error && (
              <div className="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Qeydiyyat düyməsi */}
            <button
              type="submit"
              disabled={
                !fullName.trim() ||
                !email.trim() ||
                !password ||
                !confirmPassword ||
                loading ||
                !doPasswordsMatch
              }
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
                  Qeydiyyat aparılır...
                </span>
              ) : (
                "Qeydiyyatdan keç"
              )}
            </button>
          </form>

          {/* Login linki */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Artıq hesabın var?{" "}
            <Link href="/login" className="font-bold text-brand hover:underline">
              Daxil ol
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
