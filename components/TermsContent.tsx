"use client";

import LegalShell, { Section } from "@/components/LegalShell";
import { useT } from "@/lib/i18n";

export default function TermsContent() {
  const t = useT();
  return (
    <LegalShell title={t("terms.title")} updated={t("legal.updated")}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <Section key={n} title={t(`terms.s${n}.t`)} body={t(`terms.s${n}.b`)} />
      ))}
    </LegalShell>
  );
}
