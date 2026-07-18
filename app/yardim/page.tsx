"use client";

// Yardım mərkəzi — kateqoriyalı tez-tez verilən suallar (Bilik Yoluna uyğunlaşdırılmış).

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAuthUser } from "@/lib/useAuthUser";
import { PageSkeleton } from "@/components/Skeleton";

const CATEGORIES: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Bilik Yolu-dan istifadə",
    items: [
      {
        q: "Necə başlayım?",
        a: "Öyrən bölməsindən bir fənn seç, yoldakı ilk dərsə kliklə və tapşırıqları həll et. Hər dərs bitəndə növbəti açılır.",
      },
      {
        q: "XP nədir?",
        a: "XP hər düzgün cavabda qazandığın xaldır. Bonus tapşırıqlar əlavə XP verir və irəliləyişini göstərir.",
      },
      {
        q: "Gün seriyası (streak) nədir?",
        a: "Hər gün ən azı bir dərs bitirsən, seriyan artır. Bir gün buraxsan sıfırlanır — ona görə hər gün az da olsa məşq et.",
      },
      {
        q: "Dərslər niyə kilidlidir?",
        a: "Dərslər ardıcıldır: əvvəlkini bitirməsən növbəti açılmır. Bu, mövzuları addım-addım, boşluq qoymadan öyrənmək üçündür.",
      },
      {
        q: "Praktika bölməsi nə üçündür?",
        a: "Praktika et bölməsində tamamladığın dərsləri təkrar həll edərək biliyini möhkəmləndirə bilərsən.",
      },
    ],
  },
  {
    title: "Hesab idarəetməsi",
    items: [
      {
        q: "İrəliləyişim harada saxlanılır?",
        a: "Hesabına daxil olduğun üçün irəliləyişin buludda saxlanılır və istənilən cihazda eyni qalır.",
      },
      {
        q: "Adımı və ya emailimi necə dəyişim?",
        a: "Profil redaktəsi tezliklə əlavə olunacaq. Bu vaxt dəyişiklik üçün dəstək ünvanına yaz.",
      },
      {
        q: "Bir fənni necə sıfırlayım?",
        a: "Fənnin irəliləyişini sıfırlama funksiyası hazırlanır. Lazımdırsa dəstəklə əlaqə saxla.",
      },
      {
        q: "Hesabıma daxil ola bilmirəm.",
        a: "Email və parolun düzgünlüyünü yoxla. Alınmırsa, Google ilə giriş et və ya yeni hesab yarat.",
      },
      {
        q: "Şifrəmi unutdum, nə edim?",
        a: "Şifrə bərpası əlavə olunur. Bu vaxt Google ilə giriş edə bilərsən.",
      },
      {
        q: "Hesabımı necə silim?",
        a: "Hesabını və məlumatlarını silmək üçün destek@bilikyolu.az ünvanına yaz — tələbini emal edəcəyik.",
      },
    ],
  },
  {
    title: "Qiymət",
    items: [
      {
        q: "Bilik Yolu pulsuzdur?",
        a: "Bəli, tamamilə pulsuzdur. Kart məlumatı və ya ödəniş tələb olunmur.",
      },
      {
        q: "Saytda reklam varmı?",
        a: "Xeyr. Uşaqlar üçün təmiz və diqqəti dağıtmayan təcrübə saxlayırıq.",
      },
      {
        q: "Gələcəkdə ödənişli olacaq?",
        a: "Əsas dərslər həmişə pulsuz qalacaq. Əlavə imkanlar olsa, ayrıca bildiriləcək.",
      },
    ],
  },
];

export default function HelpPage() {
  const { user, ready } = useAuthUser();
  const [open, setOpen] = useState<string | null>("0-0");

  if (!ready || !user) return <PageSkeleton />;

  return (
    <div className="min-h-screen bg-ink">
      <main className="mx-auto max-w-2xl px-4 py-6">
        <h1 className="text-2xl font-bold text-fg">Yardım mərkəzi</h1>
        <p className="mt-1 text-sm text-muted">Tez-tez verilən suallar</p>

        {CATEGORIES.map((cat, ci) => (
          <section key={ci} className="mt-8">
            <h2 className="text-xs font-bold uppercase tracking-wide text-muted">
              {cat.title}
            </h2>
            <div className="mt-2 space-y-3">
              {cat.items.map((item, ii) => {
                const key = `${ci}-${ii}`;
                const isOpen = open === key;
                return (
                  <div
                    key={key}
                    className="overflow-hidden rounded-2xl border border-line bg-panel"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : key)}
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
          </section>
        ))}

        {/* Hələ də sualın var? */}
        <div className="mt-10 rounded-2xl border border-line bg-panel p-6 text-center">
          <h2 className="text-lg font-extrabold text-fg">Hələ də sualın var?</h2>
          <p className="mt-1 text-sm text-muted">
            Cavabı tapmadınsa, birbaşa bizə yaz.
          </p>
          <a
            href="mailto:destek@bilikyolu.az"
            className="mt-4 inline-block rounded-2xl bg-brand px-6 py-3 font-extrabold uppercase tracking-wide text-white btn-pop hover:bg-brand-dark"
          >
            Bizə yaz
          </a>
        </div>
      </main>
    </div>
  );
}
