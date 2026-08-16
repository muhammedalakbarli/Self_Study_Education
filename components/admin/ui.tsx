"use client";

// Admin UI kit — bütün admin səhifələrində vahid dizayn (təkrarı azaldır).

import type { ReactNode } from "react";

export function PageHeader({ Icon, title, desc, actions }: {
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  title: string; desc?: string; actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-fg">
          {Icon && <Icon size={22} className="text-brand" />} {title}
        </h1>
        {desc && <p className="mt-1 text-sm text-muted">{desc}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function StatCard({ Icon, label, value, tint = "text-brand", suffix = "" }: {
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  label: string; value: number | string; tint?: string; suffix?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4">
      {Icon && <Icon size={18} className={tint} />}
      <div className={`${Icon ? "mt-2 " : ""}text-2xl font-extrabold text-fg`}>
        {typeof value === "number" ? value.toLocaleString("az") : value}{suffix}
      </div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}

export function Card({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-panel p-4 ${className}`}>
      {title && <div className="mb-3 text-sm font-bold text-fg">{title}</div>}
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-muted">{children}</h2>;
}

export function EmptyState({ icon = "📭", text }: { icon?: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-panel/50 py-12 text-center">
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}

export function Badge({ children, tone = "muted" }: {
  children: ReactNode; tone?: "muted" | "brand" | "amber" | "green" | "red";
}) {
  const cls = {
    muted: "bg-panel-2 text-muted",
    brand: "bg-brand/10 text-brand",
    amber: "bg-amber-500/15 text-amber-600",
    green: "bg-emerald-500/15 text-emerald-600",
    red: "bg-red-500/10 text-red-500",
  }[tone];
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${cls}`}>{children}</span>;
}

export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 border-b border-line/50 px-4 py-3 last:border-b-0">
          <div className="h-3 w-3 shrink-0 animate-pulse rounded bg-line" />
          <div className="h-3 flex-1 animate-pulse rounded bg-line" />
          <div className="h-3 w-16 animate-pulse rounded bg-line" />
          <div className="h-3 w-12 animate-pulse rounded bg-line" />
        </div>
      ))}
    </div>
  );
}
