"use client";

// Məzmun konteksti: app-a `subjects` + köməkçi funksiyaları verir (əvvəlki statik
// `@/lib/content` API-nin eynisi). Məzmun DB-dən yüklənir; DB boş/əlçatmaz olsa TS seed-ə
// fallback edilir.
//
// VACİB: TS seed (`@/lib/content`) STATİK import EDİLMİR. O, 25 fənn faylını (~9500
// tapşırıq) daşıyır və qiymətləndirilməsi ~500 ms CPU + 23 MB heap tutur — bu, həm
// brauzerdə ilk açılışı ləngidir, həm də Cloudflare Worker-də soyuq başlanğıcda
// "Error 1102 — Worker exceeded resource limits" verirdi. İndi seed yalnız DB
// cavab vermədikdə lazy `import()` ilə yüklənir (offline/fallback halı).

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Subject, Task } from "@/lib/types";
import { fetchContentTree } from "@/lib/content/db";

interface ContentAPI {
  subjects: Subject[];
  loading: boolean; // DB hələ yüklənir (subjects seed-dir)
  getSubject: (slug: string) => Subject | undefined;
  getLesson: (
    lessonId: string,
  ) => { subject: Subject; unit: import("@/lib/types").Unit; lesson: import("@/lib/types").Lesson } | undefined;
  orderedLessonIds: (slug: string) => string[];
  getAllTasks: () => Task[];
  getTaskById: (id: string) => Task | undefined;
}

const Ctx = createContext<ContentAPI | null>(null);

function buildApi(subjects: Subject[], loading: boolean): ContentAPI {
  return {
    subjects,
    loading,
    getSubject: (slug) => subjects.find((s) => s.slug === slug),
    getLesson: (lessonId) => {
      for (const subject of subjects) {
        for (const unit of subject.units) {
          const lesson = unit.lessons.find((l) => l.id === lessonId);
          if (lesson) return { subject, unit, lesson };
        }
      }
      return undefined;
    },
    orderedLessonIds: (slug) => {
      const subject = subjects.find((s) => s.slug === slug);
      if (!subject) return [];
      return subject.units.flatMap((u) => u.lessons.map((l) => l.id));
    },
    getAllTasks: () =>
      subjects.flatMap((s) =>
        s.units.flatMap((u) =>
          u.lessons.flatMap((l) => [...l.tasks, ...(l.bonusTasks ?? [])]),
        ),
      ),
    getTaskById: (id) => {
      for (const s of subjects)
        for (const u of s.units)
          for (const l of u.lessons) {
            const t = [...l.tasks, ...(l.bonusTasks ?? [])].find((x) => x.id === id);
            if (t) return t;
          }
      return undefined;
    },
  };
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetchContentTree()
      .then(async (tree) => {
        if (!alive) return;
        if (tree && tree.length) {
          setSubjects(tree);
          return;
        }
        // DB boş/əlçatmazdır → yalnız İNDİ ağır TS seed-i yüklə (offline ehtiyatı).
        const { subjects: seedSubjects } = await import("@/lib/content");
        if (alive) setSubjects(seedSubjects);
      })
      .catch(() => {
        /* seed də yüklənməsə boş qalır — səhifələr `loading` bitəndən sonra göstərir */
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  const value = useMemo(() => buildApi(subjects, loading), [subjects, loading]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useContent(): ContentAPI {
  const c = useContext(Ctx);
  if (!c) throw new Error("useContent must be used within ContentProvider");
  return c;
}
