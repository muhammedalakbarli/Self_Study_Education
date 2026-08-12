import type { Metadata } from "next";
import LegalShell, { Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Məxfilik siyasəti",
  description: "Imparo məxfilik siyasəti — hansı məlumatları topladığımız, necə istifadə etdiyimiz və hüquqların.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Məxfilik siyasəti" updated="12 avqust 2026">
      <Section title="Qısaca">
        <p>
          Imparo sənin məxfiliyinə hörmət edir. Yalnız Xidməti təqdim etmək üçün lazım olan məlumatları
          toplayırıq, onları satmırıq və qorunması üçün tədbirlər görürük.
        </p>
      </Section>

      <Section title="1. Topladığımız məlumatlar">
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Hesab məlumatı:</b> ad, e-poçt, (Google ilə girişdə) profil məlumatı.</li>
          <li><b>Öyrənmə məlumatı:</b> irəliləyiş, XP, seriya, zümrüd, cavablar, tamamlanan dərslər.</li>
          <li><b>Texniki məlumat:</b> cihaz/brauzer növü, təxmini istifadə statistikası (analitika).</li>
          <li><b>Ödəniş məlumatı:</b> Imparo Plus alınarsa, ödəniş üçüncü tərəf provayder tərəfindən emal olunur — kart məlumatlarını biz saxlamırıq.</li>
        </ul>
      </Section>

      <Section title="2. Məlumatdan necə istifadə edirik">
        <ul className="list-disc space-y-1 pl-5">
          <li>Xidməti təqdim etmək və irəliləyişini yadda saxlamaq;</li>
          <li>Platformanı yaxşılaşdırmaq (hansı dərslər çətindir və s.);</li>
          <li>Təhlükəsizlik və sui-istifadənin qarşısını almaq;</li>
          <li>Səninlə vacib məlumatlar barədə əlaqə saxlamaq.</li>
        </ul>
      </Section>

      <Section title="3. Uşaqların məxfiliyi">
        <p>
          Xidmət məktəblilərə yönəlib. 13 yaşdan kiçik uşaqların hesabları valideyn/qəyyum razılığı və
          nəzarəti ilə istifadə olunmalıdır. Uşaqlardan zəruri olmayan şəxsi məlumat toplamamağa çalışırıq.
        </p>
      </Section>

      <Section title="4. Üçüncü tərəf xidmətləri">
        <p>Xidmət etibarlı provayderlərdən istifadə edir:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><b>Supabase</b> — məlumat bazası və autentifikasiya;</li>
          <li><b>PostHog</b> — anonim/aqreqat istifadə analitikası;</li>
          <li><b>Google</b> — istəyə bağlı “Google ilə giriş”;</li>
          <li><b>Ödəniş provayderi</b> — Imparo Plus ödənişləri.</li>
        </ul>
        <p>Bu provayderlər öz məxfilik siyasətlərinə tabedir.</p>
      </Section>

      <Section title="5. Kukilər və lokal yaddaş">
        <p>
          Girişi saxlamaq, seçimlərini yadda saxlamaq və təcrübəni yaxşılaşdırmaq üçün brauzerin lokal
          yaddaşından (localStorage) və zəruri kukilərdən istifadə edirik.
        </p>
      </Section>

      <Section title="6. Məlumatın saxlanması və təhlükəsizliyi">
        <p>
          Məlumatları yalnız lazım olduğu müddətdə saxlayırıq. Sənaye standartı təhlükəsizlik tədbirləri
          tətbiq edirik, lakin internetdə heç bir sistem 100% təhlükəsiz deyil.
        </p>
      </Section>

      <Section title="7. Hüquqların">
        <p>
          Öz məlumatına baxmaq, düzəltmək və ya silmək hüququn var. Hesabını istənilən vaxt platformadan
          və ya bizə yazaraq sildirə bilərsən — bu, əlaqəli məlumatlarını da silir.
        </p>
      </Section>

      <Section title="8. Dəyişikliklər">
        <p>
          Bu siyasəti yeniləyə bilərik. Əhəmiyyətli dəyişikliklər barədə platformada məlumat veririk.
        </p>
      </Section>

      <Section title="9. Əlaqə">
        <p>
          Məxfiliklə bağlı suallar üçün: m.alakbarli2007@gmail.com və ya ichbinmahammad@gmail.com.
        </p>
      </Section>
    </LegalShell>
  );
}
