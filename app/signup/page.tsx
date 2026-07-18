"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { signUpWithEmail } from "@/lib/auth";

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
  const isPasswordValid = password.length >= 6;
  const doPasswordsMatch = password === confirmPassword && password.length > 0;

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    
    // Validasiya
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
      // Email təsdiqi aktivdirsə: girişə yönləndir.
      router.push("/?confirm=1");
      return;
    }

    // Uğurlu qeydiyyat — sessiya hazırdır.
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-[#f7f8fa] px-4 py-8">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
        <div className="flex justify-center">
          <Logo size={64} />
        </div>
        <h1 className="mt-6 text-center text-xl font-bold text-slate-900">
          Yeni hesab yarat
        </h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          Bilik Yolu ilə öyrənməyə başla
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          {/* Ad və Soyad */}
          <div>
            <label className="block text-sm font-bold text-slate-800">
              Ad və Soyad
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
              placeholder="Adınız və soyadınız"
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-slate-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
              placeholder="example@email.com"
              disabled={loading}
            />
          </div>

          {/* Şifrə */}
          <div>
            <label className="block text-sm font-bold text-slate-800">
              Şifrə
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 pr-10 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                placeholder="Ən az 6 simvol"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 pr-10 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                placeholder="Şifrəni təkrar yazın"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Şifrə uyğunluğu mesajı */}
            {confirmPassword.length > 0 && (
              <p className={`mt-1 flex items-center gap-1 text-xs ${
                doPasswordsMatch ? "text-green-600" : "text-red-600"
              }`}>
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
            <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
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
            className="mt-2 w-full rounded-2xl bg-brand px-4 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Qeydiyyat aparılır...
              </span>
            ) : (
              "Qeydiyyatdan keç"
            )}
          </button>
        </form>

        {/* Login linki */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Artıq hesabın var?{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            Daxil ol
          </Link>
        </p>
      </div>
    </main>
  );
}
