"use client";

import LegalShell, { Section } from "@/components/LegalShell";
import { useT } from "@/lib/i18n";

const SECTIONS = Array.from({ length: 15 }, (_, i) => i); // 0..14

export default function PrivacyContent() {
  const t = useT();
  return (
    <LegalShell title={t("privacy.title")} updated={t("legal.updated")}>
      {SECTIONS.map((n) => (
        <Section key={n} title={t(`privacy.s${n}.t`)} body={t(`privacy.s${n}.b`)} />
      ))}
    </LegalShell>
  );
}
