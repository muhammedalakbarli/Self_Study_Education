import type { Metadata } from "next";
import LegalShell, { Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "İstifadə şərtləri",
  description: "Imparo istifadə şərtləri — platformadan istifadə qaydaları, hesab, abunəlik və ödənişlər.",
};

export default function TermsPage() {
  return (
    <LegalShell title="İstifadə şərtləri" updated="12 avqust 2026">
      <Section title="1. Şərtlərin qəbulu">
        <p>
          Imparo platformasından (“Xidmət”) istifadə edərək bu İstifadə şərtlərini qəbul etmiş olursan.
          Razı deyilsənsə, Xidmətdən istifadə etmə. Bu şərtlər vaxtaşırı yenilənə bilər; əhəmiyyətli
          dəyişikliklər barədə platformada məlumat veririk.
        </p>
      </Section>

      <Section title="2. Xidmətin təsviri">
        <p>
          Imparo — 1–8-ci siniflər üçün Riyaziyyat, Azərbaycan dili və İngilis dili üzrə oyunlaşdırılmış
          onlayn öyrənmə platformasıdır. Məzmun və funksiyalar zamanla dəyişə, əlavə oluna və ya çıxarıla
          bilər.
        </p>
      </Section>

      <Section title="3. Hesab və yaş">
        <p>
          Hesab yaratmaq üçün doğru məlumat verməlisən. Hesabının təhlükəsizliyinə (parol) özün cavabdehsən.
          Xidmət məktəblilərə yönəlib; 13 yaşdan kiçik istifadəçilər üçün valideyn/qəyyum razılığı və
          nəzarəti tələb olunur.
        </p>
      </Section>

      <Section title="4. Qəbuledilən istifadə">
        <p>Aşağıdakılar qadağandır:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Xidməti qanunsuz məqsədlə və ya başqalarına zərər üçün istifadə etmək;</li>
          <li>Sistemə icazəsiz daxil olmağa, onu pozmağa və ya yükləməyə cəhd etmək;</li>
          <li>Məzmunu icazəsiz kopyalamaq, satmaq və ya yenidən yaymaq;</li>
          <li>Digər istifadəçiləri təhqir etmək və ya aldatmaq.</li>
        </ul>
      </Section>

      <Section title="5. Imparo Plus və ödənişlər">
        <p>
          Əsas öyrənmə pulsuzdur. Imparo Plus əlavə üstünlüklər (limitsiz can, 2× zümrüd və s.) təqdim edən
          ödənişli abunəlikdir. Qiymətlər platformada göstərilir (məs. aylıq 2.99 ₼, illik 24.90 ₼) və dəyişə
          bilər. Ödənişlər üçüncü tərəf ödəniş provayderi vasitəsilə emal olunur; abunəlik ləğv edilməyənə
          qədər avtomatik yenilənə bilər. Ləğvi istənilən vaxt edə bilərsən; qüvvədə olan dövr sonuna qədər
          keçərli qalır.
        </p>
      </Section>

      <Section title="6. Əqli mülkiyyət">
        <p>
          Platformadakı bütün məzmun, dizayn, loqo və Zefi personajı Imparo-ya məxsusdur və müəllif hüquqları
          ilə qorunur. Şəxsi, qeyri-kommersiya öyrənmə məqsədi xaricində istifadə qadağandır.
        </p>
      </Section>

      <Section title="7. Xidmətin dayandırılması">
        <p>
          Bu şərtləri pozan hesabları xəbərdarlıqla və ya xəbərdarlıqsız məhdudlaşdıra/dayandıra bilərik.
          Sən də istənilən vaxt hesabını silə bilərsən.
        </p>
      </Section>

      <Section title="8. Zəmanətlərdən imtina və məsuliyyət">
        <p>
          Xidmət “olduğu kimi” təqdim olunur. Fasiləsiz və qüsursuz işləyəcəyinə zəmanət vermirik.
          Qanunun icazə verdiyi həddə, Xidmətdən istifadədən yaranan dolayı zərərlərə görə məsuliyyət
          daşımırıq.
        </p>
      </Section>

      <Section title="9. Əlaqə">
        <p>
          Şərtlərlə bağlı suallar üçün: m.alakbarli2007@gmail.com və ya ichbinmahammad@gmail.com.
        </p>
      </Section>
    </LegalShell>
  );
}
