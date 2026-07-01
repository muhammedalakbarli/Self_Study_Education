# Bilik Yolu 📚

Azərbaycan orta məktəb şagirdləri (5-ci sinif) üçün interaktiv öyrənmə platforması.
Holberton + Duolingo hibrid modeli: addım-addım dərslər, tapşırıqlar, XP, streak və
bacarıq ağacı (skill tree).

**Fənlər:** Riyaziyyat · Azərbaycan dili · İngilis dili
**Model:** B2C — şagird özü qeydiyyatdan keçir, öz sürəti ilə öyrənir.

---

## İşə salmaq

```bash
npm install
npm run dev
```

Sonra brauzerdə [http://localhost:3000](http://localhost:3000) aç.

1. Adını yaz → **Öyrənməyə başla**
2. Dashboard-da fənn seç (məs. Riyaziyyat)
3. Dərsə gir → izahı oxu → tapşırıqları həll et
4. XP qazan, dərs bitəndə növbəti dərs açılır (unlock), streak artır

Bütün proqres hələlik brauzerin **localStorage**-ında saxlanılır (server/DB lazım deyil).

---

## Layihə strukturu

```
app/
  page.tsx              # Giriş (ad daxiletmə)
  dashboard/            # Ana səhifə: XP, streak, fənn kartları
  subjects/[slug]/      # Fənn → bölmələr və dərslər (skill tree)
  lessons/[id]/         # Dərs: izah + tapşırıq axını
components/
  tasks/TaskInput.tsx   # Tapşırıq tipinə görə giriş sahəsi
  lesson/LessonRunner.tsx # Dərsin uçdan-uca axını
lib/
  types.ts              # Məlumat tipləri
  content.ts            # 5-ci sinif seed məzmunu (dərslər/tapşırıqlar)
  grading.ts            # Cavab yoxlama məntiqi (mərkəzi funksiya)
  progress.ts           # XP, streak, tamamlanmış dərslər (localStorage)
  ui.ts                 # Fənn rəngləri
supabase/
  migrations/0001_init.sql  # Gələcək DB sxemi (persistensiya üçün)
```

## Yeni məzmun necə əlavə olunur

`lib/content.ts` faylında `subjects` massivinə yeni `unit`/`lesson`/`task` əlavə et.
Tapşırıq tipləri: `multiple_choice`, `fill_blank`, `numeric`. Tiplər `lib/types.ts`-də.

---

## Yol xəritəsi (növbəti addımlar)

- [x] **Faza 1-5:** İşləyən MVP prototip (auth-lite, dərs axını, XP/streak, unlock)
- [ ] **Supabase-ə keçid:** `supabase/migrations/0001_init.sql` sxemini işə sal,
      `lib/progress.ts` funksiyalarını DB ilə əvəz et, real qeydiyyat/giriş (auth) qoş
- [ ] Məzmunu genişləndir: AZ dili + İngilis dili üçün tam bölmələr
- [ ] Yeni tapşırıq tipləri: `matching`, `short_text`
- [ ] 6, 7, 8-ci siniflər
- [ ] Vercel-ə deploy

### Supabase qoşmaq (qısa)

1. [supabase.com](https://supabase.com)-da pulsuz layihə yarat
2. SQL Editor-da `supabase/migrations/0001_init.sql`-i işə sal
3. `.env.local` faylına `NEXT_PUBLIC_SUPABASE_URL` və `NEXT_PUBLIC_SUPABASE_ANON_KEY` əlavə et
4. `@supabase/ssr` ilə client yarat və `lib/progress.ts`-i DB sorğuları ilə əvəz et
   (paketlər artıq quraşdırılıb)

---

> Qeyd: "Bilik Yolu" işlək addır — dəyişdirilə bilər.
