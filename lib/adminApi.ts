// Admin CRUD — content cədvəllərinə yazır (RLS `is_admin()` qoruyur).
// Oxuma üçün lib/content/db.ts fetchContentTree istifadə olunur.

import { createClient } from "./supabase/client";
import type { Task, TaskType, RuleSection } from "./types";

// Cari istifadəçi admindirmi?
export async function checkIsAdmin(): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data } = await supabase.rpc("is_admin");
    return data === true;
  } catch {
    return false;
  }
}

// Unikal id yarat (parent prefiksi + qısa təsadüfi).
export function genId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 7)}`;
}

type Res = { ok: boolean; error?: string };
async function write(
  fn: () => PromiseLike<{ error: { message: string } | null }>,
): Promise<Res> {
  try {
    const { error } = await fn();
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "error" };
  }
}

// ── Fənlər ──
export interface SubjectInput {
  id: string;
  name: string;
  grade: number;
  icon: string;
  color: string;
  sort_order: number;
}
export function upsertSubject(row: SubjectInput): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("subjects").upsert(row, { onConflict: "id" }));
}
export function deleteSubject(id: string): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("subjects").delete().eq("id", id));
}

// ── Bölmələr ──
export interface UnitInput {
  id: string;
  subject_id: string;
  title: string;
  description: string;
  sort_order: number;
}
export function upsertUnit(row: UnitInput): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("units").upsert(row, { onConflict: "id" }));
}
export function deleteUnit(id: string): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("units").delete().eq("id", id));
}

// ── Dərslər ──
export interface LessonInput {
  id: string;
  unit_id: string;
  title: string;
  intro: string;
  visual: string | null;
  sections: RuleSection[] | null;
  sort_order: number;
}
export function upsertLesson(row: LessonInput): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("lessons").upsert(row, { onConflict: "id" }));
}
export function deleteLesson(id: string): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("lessons").delete().eq("id", id));
}

// ── Tapşırıqlar ──
// Form dəyərləri (tip-spesifik) → jsonb data (seed.ts taskData ilə uyğun).
export interface TaskForm {
  id: string;
  lesson_id: string;
  type: TaskType;
  prompt: string;
  xp: number;
  bonus: boolean;
  sort_order: number;
  // tip-spesifik
  options?: string[];
  correctIndex?: number;
  accepted?: string[];
  answer?: number;
  tolerance?: number;
  figure?: Task["figure"];
}

export function buildTaskData(f: TaskForm): Record<string, unknown> {
  const d: Record<string, unknown> = {};
  if (f.figure) d.figure = f.figure;
  if (f.bonus) d.bonus = true;
  if (f.type === "multiple_choice") {
    d.options = f.options ?? [];
    d.correctIndex = f.correctIndex ?? 0;
  } else if (f.type === "fill_blank") {
    d.accepted = f.accepted ?? [];
  } else {
    d.answer = f.answer ?? 0;
    if (f.tolerance !== undefined) d.tolerance = f.tolerance;
  }
  return d;
}

export function upsertTask(f: TaskForm): Promise<Res> {
  const sb = createClient();
  return write(() =>
    sb.from("tasks").upsert(
      {
        id: f.id,
        lesson_id: f.lesson_id,
        type: f.type,
        prompt: f.prompt,
        data: buildTaskData(f),
        xp: f.xp,
        sort_order: f.sort_order,
      },
      { onConflict: "id" },
    ),
  );
}
export function deleteTask(id: string): Promise<Res> {
  const sb = createClient();
  return write(() => sb.from("tasks").delete().eq("id", id));
}

// ── Sıralama ──
// Verilmiş sıra üzrə hər sətrin sort_order-ini yenilə (0..n-1).
export async function reorderLevel(
  table: "subjects" | "units" | "lessons" | "tasks",
  ids: string[],
): Promise<Res> {
  try {
    const sb = createClient();
    for (let i = 0; i < ids.length; i++) {
      const { error } = await sb.from(table).update({ sort_order: i }).eq("id", ids[i]);
      if (error) return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "error" };
  }
}
