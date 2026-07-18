"use client";

// Kömək mərkəzi — tez-tez verilən suallar.

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { PageSkeleton } from "@/components/Skeleton";

const FAQ = [
  {
    q: "Necə başlayım?",
    a: "Öyrən bölməsindən bir fənn seç, sonra yoldakı ilk dərsə kliklə və tapşırıqları həll et. Hər dərs bitəndə növbəti açılır.",
  },
  {
    q: "XP nədir?",
    a: "XP hər düzgün cavabda qazandığın xaldır. XP topladıqca irəliləyişini görürsən; bonus tapşırıqlar əlavə XP verir.",
  },
  {
    q: "Gün seriyası (streak) nədir?",
    a: "Hər gün ən azı bir dərs bitirsən, seriyan artır. Bir gün buraxsan sıfırlanır — ona görə hər gün az da olsa məşq et.",
  },
  {
    q: "İrəliləyişim harada saxlanılır?",
    a: "Hesabına daxil olduğun üçün irəliləyişin buludda (Supabase) saxlanılır və istənilən cihazda eyni qalır.",
  },
  {
    q: "Ayarları necə dəyişim?",
    a: "Daha çoxu → Ayarlar bölməsindən səs, animasiya və digər tərcihləri aça/bağlaya bilərsən.",
  },
  {
    q: "Şifrəmi unutdum, nə edim?",
    a: "Hazırda şifrə bərpası əlavə olunur. Bu vaxt Google ilə giriş edə və ya yeni hesab yarada bilərsən.",
  },
];

export default function HelpPage() {
  const { user, ready } = useAuthUser();
  const [open, setOpen] = useState<number | null>(0);

  if (!ready || !user) return <PageSkeleton />;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Kömək mərkəzi</h1>
        <p className="mt-1 text-sm text-muted">Ən çox verilən suallar</p>

        <div className="mt-6 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-line bg-panel"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <span className="font-bold text-fg">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-4 pb-4 leading-relaxed text-muted">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Sualın həll olmadı?{" "}
          <a
            href="mailto:destek@bilikyolu.az"
            className="font-bold text-brand hover:underline"
          >
            Bizə yaz
          </a>
        </p>
      </main>
    </div>
  );
}
