"use client";

// Giriş səhifəsi: sadə ad daxiletmə (MVP-də "qeydiyyat" əvəzi).
// Ad daxil edildikdə dashboard-a keçir. Sonra Supabase auth ilə əvəz olunacaq.

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadProgress, setName } from "@/lib/progress";

export default function HomePage() {
  const router = useRouter();
  const [name, setNameInput] = useState("");

  // Əgər artıq ad varsa birbaşa dashboard-a keçir
  useEffect(() => {
    if (loadProgress().name) router.replace("/dashboard");
  }, [router]);

  function start() {
    const trimmed = name.trim();
    if (!trimmed) return;
    setName(trimmed);
    router.push("/dashboard");
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="text-center">
          <div className="text-5xl">📚</div>
          <h1 className="mt-3 text-2xl font-bold">Bilik Yolu</h1>
          <p className="mt-1 text-slate-500">
            5-ci sinif: Riyaziyyat, Azərbaycan dili, İngilis dili
          </p>
        </div>

        <div className="mt-8">
          <label className="text-sm font-medium text-slate-600">Adın nədir?</label>
          <input
            value={name}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && start()}
            placeholder="Məsələn: Ayla"
            className="mt-2 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-lg
              focus:border-sky-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={start}
            disabled={!name.trim()}
            className="mt-4 w-full rounded-xl bg-sky-500 px-5 py-3 text-lg font-semibold text-white
              hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Öyrənməyə başla
          </button>
        </div>
      </div>
    </main>
  );
}
