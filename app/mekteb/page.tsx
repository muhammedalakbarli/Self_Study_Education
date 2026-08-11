"use client";

// Imparo Məktəblər üçün — müəllimlər üçün pulsuz sinif aləti (Duolingo for Schools üslubu).
// Backend hələ yoxdur; səhifə məlumat + erkən-giriş (waitlist) marağını qeyd edir.

import { useState } from "react";
import { School, KeyRound, ClipboardList, BarChart3, Gift, Check } from "lucide-react";
import { track } from "@/lib/analytics";
import Mascot from "@/components/Mascot";

const FEATURES = [
  { Icon: School, title: "Sinif yarat", desc: "Bir neçə saniyəyə öz virtual sinfini qur." },
  { Icon: KeyRound, title: "Kodla dəvət et", desc: "Şagirdlər sinif kodu ilə asanlıqla qoşulur." },
  { Icon: ClipboardList, title: "Tapşırıq təyin et", desc: "Mövzu və dərsləri sinfə tapşırıq ver." },
  { Icon: BarChart3, title: "İrəliləyişi izlə", desc: "Kim harada, kim nəyi bilir — hamısı bir yerdə." },
  { Icon: Gift, title: "Tamamilə pulsuz", desc: "Müəllimlər və məktəblər üçün pulsuz." },
];

export default function SchoolsPage() {
  const [role, setRole] = useState("");
  const [done, setDone] = useState(false);

  function join() {
    track("schools_interest", { role: role || "unknown" });
    setDone(true);
  }

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-8">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-8 text-center text-white shadow-lg">
          <div className="flex justify-center">
            <Mascot size={100} mood="happy" />
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1 text-sm font-extrabold uppercase tracking-wider">
            <School size={16} /> Məktəblər üçün
          </div>
          <h1 className="mt-3 text-3xl font-extrabold">Imparo — sinifdə</h1>
          <p className="mx-auto mt-2 max-w-sm text-white/90">
            Müəllimlər üçün pulsuz alət: sinif yarat, şagirdləri dəvət et, irəliləyişi izlə.
          </p>
        </div>

        {/* Xüsusiyyətlər */}
        <div className="mt-6 space-y-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <f.Icon size={22} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-extrabold text-fg">{f.title}</div>
                <div className="text-sm text-muted">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist */}
        <div className="mt-6 rounded-2xl border border-line bg-panel p-5">
          {done ? (
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Check size={22} strokeWidth={3} />
              </span>
              <div className="text-sm">
                <div className="font-extrabold text-fg">Təşəkkürlər! 🎉</div>
                <div className="text-muted">Sinif aləti hazır olanda ilk səni xəbərdar edəcəyik.</div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm font-extrabold text-fg">Erkən çıxışa yazıl</div>
              <p className="mt-1 text-xs text-muted">Sən kimsən?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { id: "teacher", label: "Müəllim" },
                  { id: "school", label: "Məktəb" },
                  { id: "tutor", label: "Repetitor" },
                  { id: "parent", label: "Valideyn" },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    className={`rounded-2xl border-2 px-4 py-2 text-sm font-bold transition ${
                      role === r.id ? "border-brand bg-brand/10 text-brand" : "border-line text-fg hover:border-brand/50"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={join}
                className="mt-4 w-full rounded-2xl bg-brand py-3.5 text-lg font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
              >
                Maraqlanıram
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
