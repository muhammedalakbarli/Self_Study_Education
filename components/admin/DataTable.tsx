"use client";

// Təkrar-istifadəli admin cədvəli — global filtr, sıralama, səhifələmə, sütun görünürlüyü,
// sətir seçimi (checkbox), CSV export, skeleton + empty state. TanStack-siz, yüngül.

import { useMemo, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, Search, Download, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { TableSkeleton, EmptyState } from "@/components/admin/ui";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  value?: (row: T) => string | number; // sort/filtr/CSV üçün mətn dəyəri
  sortable?: boolean;
  align?: "left" | "right" | "center";
  hideable?: boolean;
  className?: string;
}

export function DataTable<T>({
  columns, data, getRowId, searchable = true, searchPlaceholder = "Axtar…",
  selectable = false, selected, onSelectedChange, onRowClick,
  csvName, loading = false, emptyText = "Məlumat yoxdur.", toolbar, minWidth = 720,
}: {
  columns: Column<T>[]; data: T[]; getRowId: (row: T) => string;
  searchable?: boolean; searchPlaceholder?: string;
  selectable?: boolean; selected?: Set<string>; onSelectedChange?: (s: Set<string>) => void;
  onRowClick?: (row: T) => void; csvName?: string; loading?: boolean; emptyText?: string;
  toolbar?: ReactNode; minWidth?: number;
}) {
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<-1 | 1>(1);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [colMenu, setColMenu] = useState(false);

  const val = (row: T, c: Column<T>) => (c.value ? c.value(row) : "");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    let out = s
      ? data.filter((r) => columns.some((c) => String(val(r, c)).toLowerCase().includes(s)))
      : [...data];
    if (sortKey) {
      const col = columns.find((c) => c.key === sortKey);
      if (col?.value) out.sort((a, b) => {
        const av = col.value!(a), bv = col.value!(b);
        if (av < bv) return -sortDir; if (av > bv) return sortDir; return 0;
      });
    }
    return out;
  }, [data, q, sortKey, sortDir, columns]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = filtered.slice(page * pageSize, page * pageSize + pageSize);
  const visibleCols = columns.filter((c) => !hidden.has(c.key));

  function toggleSort(c: Column<T>) {
    if (!c.sortable) return;
    if (sortKey === c.key) setSortDir((d) => (d === 1 ? -1 : 1));
    else { setSortKey(c.key); setSortDir(1); }
  }
  function exportCsv() {
    const cols = columns.filter((c) => c.value);
    const head = cols.map((c) => c.header);
    const lines = filtered.map((r) => cols.map((c) => `"${String(c.value!(r)).replace(/"/g, '""')}"`).join(","));
    const csv = [head.join(","), ...lines].join("\n");
    const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url;
    a.download = `${csvName ?? "export"}-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url);
  }

  // Seçim
  const allPageSelected = selectable && pageRows.length > 0 && pageRows.every((r) => selected?.has(getRowId(r)));
  const toggleRow = (id: string) => {
    if (!onSelectedChange) return;
    const n = new Set(selected); n.has(id) ? n.delete(id) : n.add(id); onSelectedChange(n);
  };
  const togglePage = () => {
    if (!onSelectedChange) return;
    const n = new Set(selected);
    if (allPageSelected) pageRows.forEach((r) => n.delete(getRowId(r)));
    else pageRows.forEach((r) => n.add(getRowId(r)));
    onSelectedChange(n);
  };

  return (
    <div>
      {/* Alət paneli */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {searchable && (
          <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-xl border-2 border-line bg-panel px-3 py-2">
            <Search size={16} className="text-muted" />
            <input value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }}
              placeholder={searchPlaceholder} className="flex-1 bg-transparent text-sm font-semibold text-fg outline-none" />
            <span className="text-xs text-muted">{filtered.length}</span>
          </div>
        )}
        {toolbar}
        <div className="relative">
          <button onClick={() => setColMenu((v) => !v)}
            className="flex items-center gap-1.5 rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-bold text-fg hover:border-brand">
            <SlidersHorizontal size={15} /> Sütunlar
          </button>
          {colMenu && (
            <div className="absolute right-0 z-20 mt-1 w-48 rounded-xl border border-line bg-panel p-2 shadow-lg">
              {columns.filter((c) => c.hideable).map((c) => (
                <label key={c.key} className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-fg hover:bg-panel-2">
                  <input type="checkbox" checked={!hidden.has(c.key)} onChange={() => setHidden((prev) => {
                    const n = new Set(prev); n.has(c.key) ? n.delete(c.key) : n.add(c.key); return n;
                  })} />
                  {c.header}
                </label>
              ))}
            </div>
          )}
        </div>
        {csvName && (
          <button onClick={exportCsv}
            className="flex items-center gap-1.5 rounded-xl border-2 border-line bg-panel px-3 py-2 text-sm font-bold text-fg hover:border-brand">
            <Download size={15} /> CSV
          </button>
        )}
      </div>

      {loading ? <TableSkeleton /> : filtered.length === 0 ? <EmptyState text={emptyText} /> : (
        <div className="overflow-x-auto rounded-2xl border border-line bg-panel">
          <table className="w-full text-sm" style={{ minWidth }}>
            <thead>
              <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
                {selectable && (
                  <th className="px-3 py-3"><input type="checkbox" checked={allPageSelected} onChange={togglePage} aria-label="Səhifəni seç" /></th>
                )}
                {visibleCols.map((c) => (
                  <th key={c.key} className={`px-3 py-3 font-bold ${c.align === "right" ? "text-right" : c.align === "center" ? "text-center" : ""}`}>
                    {c.sortable ? (
                      <button onClick={() => toggleSort(c)} className={`inline-flex items-center gap-1 hover:text-fg ${sortKey === c.key ? "text-fg" : ""}`}>
                        {c.header}{sortKey === c.key && (sortDir === 1 ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                      </button>
                    ) : c.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageRows.map((r) => {
                const id = getRowId(r);
                return (
                  <tr key={id} onClick={() => onRowClick?.(r)}
                    className={`border-b border-line/60 last:border-b-0 ${onRowClick ? "cursor-pointer hover:bg-panel-2" : ""} ${selected?.has(id) ? "bg-brand/5" : ""}`}>
                    {selectable && (
                      <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" checked={selected?.has(id) ?? false} onChange={() => toggleRow(id)} aria-label="Seç" />
                      </td>
                    )}
                    {visibleCols.map((c) => (
                      <td key={c.key} className={`px-3 py-2.5 ${c.align === "right" ? "text-right" : c.align === "center" ? "text-center" : ""} ${c.className ?? "text-fg"}`}>
                        {c.render ? c.render(r) : String(val(r, c))}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Səhifələmə */}
      {!loading && filtered.length > pageSize && (
        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted">
            <span>Səhifə {page + 1}/{pageCount}</span>
            <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(0); }}
              className="rounded-lg border border-line bg-panel px-2 py-1 text-fg">
              {[10, 25, 50, 100].map((n) => <option key={n} value={n}>{n}/səhifə</option>)}
            </select>
          </div>
          <div className="flex gap-1">
            <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}
              className="rounded-lg border border-line px-2 py-1 text-fg disabled:opacity-40"><ChevronLeft size={16} /></button>
            <button disabled={page >= pageCount - 1} onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-line px-2 py-1 text-fg disabled:opacity-40"><ChevronRight size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
}
