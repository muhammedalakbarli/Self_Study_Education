"use client";

import LegalShell, { Section } from "@/components/LegalShell";
import { useT } from "@/lib/i18n";

const SECTIONS = Array.from({ length: 18 }, (_, i) => i + 1);

export default function TermsContent() {
  const t = useT();
  return (
    <LegalShell title={t("terms.title")} updated={t("legal.updated")}>
      <p className="whitespace-pre-line leading-relaxed text-muted">{t("terms.intro")}</p>
      {SECTIONS.map((n) => (
        <Section key={n} title={t(`terms.s${n}.t`)} body={t(`terms.s${n}.b`)} />
      ))}
    </LegalShell>
  );
}
