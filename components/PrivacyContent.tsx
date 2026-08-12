"use client";

import LegalShell, { Section } from "@/components/LegalShell";
import { useT } from "@/lib/i18n";

export default function PrivacyContent() {
  const t = useT();
  return (
    <LegalShell title={t("privacy.title")} updated={t("legal.updated")}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <Section key={n} title={t(`privacy.s${n}.t`)} body={t(`privacy.s${n}.b`)} />
      ))}
    </LegalShell>
  );
}
