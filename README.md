<div align="center">

# Imparo

**Azərbaycan məktəbliləri üçün oyunlaşdırılmış öyrənmə platforması**

1–8-ci siniflər üçün interaktiv dərslər, tapşırıqlar, XP, seriyalar və həftəlik liqalar.
Holberton + Duolingo hibrid modeli əsasında qurulub.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-087EA4?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Postgres-3ECF8E?logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)

</div>

---

## Xülasə

Imparo — Azərbaycan orta məktəb şagirdləri üçün **B2C** öyrənmə platformasıdır: şagird özü
qeydiyyatdan keçir, sinfini seçir və öz sürəti ilə öyrənir. Məzmun rəsmi kurikuluma uyğun qurulub və
**1–8-ci sinifləri** əhatə edir.

**Fənlər:** Riyaziyyat · Azərbaycan dili · İngilis dili

## Əsas imkanlar

- **Dərs axını və skill tree** — bölmə → dərs → tapşırıq; dərs bitəndə növbəti açılır (unlock).
- **5 tapşırıq tipi** — çoxseçimli, boşluq doldur, rəqəm, söz sırası, dinləmə.
- **Oyunlaşdırma** — XP, səviyyələr, gündəlik seriya (streak), nişanlar (achievements).
- **Həftəlik liqalar** — Bürüncdən Almaza qədər 5 pillə; həftəlik kohort yarışı, avtomatik yüksəliş/enmə.
- **Praktika mərkəzi** — səhvlər üzərində iş, qarışıq praktika, sürət raundu, bölmə üzrə, gündəlik çağırış.
- **Sosial** — dost dəvəti, izləmə, ictimai profil, ümumi reytinq.
- **Admin panel** — məzmun idarəetməsi (CRUD), analitika paneli, istifadəçi rəyləri.
- **PWA + web push** — quraşdırıla bilən tətbiq və re-engagement bildirişləri.
- **Çoxdillilik** — interfeys AZ / EN / RU.

## Texnologiya

| Sahə | Texnologiya |
|------|-------------|
| Frontend | Next.js 16 (App Router), React 19, TypeScript |
| Üslub | Tailwind CSS v4, Framer Motion |
| Backend | Supabase (Postgres, Auth, Row-Level Security) |
| Analitika | PostHog |
| Deploy | Vercel |

## Sürətli başlanğıc

```bash
git clone https://github.com/muhammedalakbarli/Self_Study_Education.git
cd Self_Study_Education
npm install
cp .env.example .env.local   # dəyərləri doldur (aşağıya bax)
npm run dev
```

Brauzerdə [http://localhost:3000](http://localhost:3000) aç.

## Mühit dəyişənləri

Bütün dəyişənlər və izahları [`.env.example`](.env.example) faylındadır: Supabase, PostHog (istəyə
bağlı), web push (VAPID) və Vercel Cron. `.env.local` git-ə əlavə olunmur (gizli qalır).

## Verilənlər bazası (Supabase)

1. [supabase.com](https://supabase.com)-da layihə yarat; **Settings → API**-dən URL və `anon` açarı
   `.env.local`-a yaz.
2. **SQL Editor**-da `supabase/migrations/` fayllarını **sıra ilə** (0001 → …) işə sal.
3. Məzmunu seed et:
   ```bash
   npx tsx supabase/seed.ts
   ```
   Seed idempotentdir (upsert) — təkrar işlətmək təhlükəsizdir, mövcud progresə toxunmur.

Ətraflı: [`supabase/README.md`](supabase/README.md).

## Layihə strukturu

```
app/                 # Next.js App Router marşrutları
  dashboard/         #   Ana səhifə: XP, streak, fənn kartları
  subjects/[slug]/   #   Fənn → bölmələr və dərslər (skill tree)
  lessons/[id]/      #   Dərs: izah + tapşırıq axını
  praktika/          #   Praktika mərkəzi
  liqa/              #   Həftəlik liqa
  profil/  u/  dost/ #   Profil, ictimai profil, dost dəvəti
  admin/             #   Admin: məzmun, analitika, rəylər
  api/               #   Server marşrutları (cron və s.)
components/          # UI komponentləri (lesson/, tasks/, ...)
lib/
  content/           #   Sinif üzrə məzmun (subjects → units → lessons → tasks)
  grading.ts         #   Cavab yoxlama (mərkəzi məntiq)
  grade.ts           #   Sinif filtri (subjectsForGrade)
  leaderboard.ts     #   Liqa (kohort, rollover, həftə açarı)
  progress.ts        #   XP, streak, tamamlanmış dərslər
  i18n.ts            #   AZ / EN / RU tərcümələr
  supabase/          #   Supabase client
  types.ts           #   Məlumat tipləri
supabase/
  migrations/        #   DB sxeması (sıra ilə işə sal)
  seed.ts            #   Məzmun seed skripti
tests/               # Vitest testləri
```

## Skriptlər

| Əmr | İş |
|-----|-----|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run test` | Vitest testləri |
| `npm run typecheck` | TypeScript tip yoxlaması |

## Deploy

Vercel-ə deploy olunur. Mühit dəyişənləri Vercel layihə parametrlərində təyin edilir; `main`-ə
hər merge avtomatik production deploy tetikləyir.

## İş axını və töhfə

Branch → Pull Request axını üçün [`CONTRIBUTING.md`](CONTRIBUTING.md)-a bax. Memarlıq icmalı:
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Lisenziya

Bu proqram təminatı proprietardır. Bütün hüquqlar qorunur — bax [`LICENSE`](LICENSE).
