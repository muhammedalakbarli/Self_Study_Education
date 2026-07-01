// 5-ci sinif seed məzmunu. MVP mərhələsində məzmun burada saxlanılır;
// sonra Supabase DB-yə köçürüləcək (bax supabase/migrations).
// Riyaziyyat tam (3 dərs), AZ dili və İngilis dili nümunə (1 dərs) ilə.

import type { Subject } from "./types";

export const subjects: Subject[] = [
  {
    slug: "riyaziyyat",
    name: "Riyaziyyat",
    grade: 5,
    icon: "🔢",
    color: "sky",
    units: [
      {
        id: "ry-u1",
        title: "Kəsrlər",
        description: "Adi kəsrlər: mənası, müqayisəsi və toplanması.",
        lessons: [
          {
            id: "ry-u1-l1",
            title: "Kəsr nədir?",
            intro:
              "Kəsr bütövün bərabər hissələrə bölünməsini göstərir. Məsələn, 3/4 kəsrində 4 — məxrəc (bütöv neçə hissəyə bölünüb), 3 — surətdir (neçə hissə götürülüb).",
            tasks: [
              {
                id: "ry-u1-l1-t1",
                type: "multiple_choice",
                prompt: "3/4 kəsrində məxrəc hansı ədəddir?",
                options: ["3", "4", "7", "1"],
                correctIndex: 1,
                xp: 10,
              },
              {
                id: "ry-u1-l1-t2",
                type: "multiple_choice",
                prompt:
                  "Bir pizza 8 bərabər hissəyə bölünüb, sən 3 hissə yedin. Yediyin hissə hansı kəsrlə göstərilir?",
                options: ["8/3", "3/8", "1/8", "5/8"],
                correctIndex: 1,
                xp: 10,
              },
              {
                id: "ry-u1-l1-t3",
                type: "numeric",
                prompt:
                  "5/6 kəsrinin surəti neçədir? (Cavabı rəqəmlə yaz)",
                answer: 5,
                xp: 10,
              },
            ],
          },
          {
            id: "ry-u1-l2",
            title: "Kəsrlərin müqayisəsi",
            intro:
              "Məxrəcləri eyni olan kəsrlərdə surəti böyük olan kəsr daha böyükdür. Məsələn, 3/7 < 5/7, çünki 3 < 5.",
            tasks: [
              {
                id: "ry-u1-l2-t1",
                type: "multiple_choice",
                prompt: "Hansı kəsr daha böyükdür: 2/9 yoxsa 5/9?",
                options: ["2/9", "5/9", "Bərabərdir", "Müqayisə olunmur"],
                correctIndex: 1,
                xp: 10,
              },
              {
                id: "ry-u1-l2-t2",
                type: "fill_blank",
                prompt:
                  "Boşluğu '<', '>' və ya '=' işarəsi ilə doldur: 4/10 ___ 7/10",
                accepted: ["<"],
                xp: 10,
              },
              {
                id: "ry-u1-l2-t3",
                type: "multiple_choice",
                prompt: "1/2 kəsri 1/4 kəsrindən neçə dəfə böyükdür?",
                options: ["2 dəfə", "3 dəfə", "4 dəfə", "Bərabərdir"],
                correctIndex: 0,
                xp: 15,
              },
            ],
          },
          {
            id: "ry-u1-l3",
            title: "Kəsrlərin toplanması",
            intro:
              "Məxrəcləri eyni olan kəsrləri toplayarkən surətləri toplayırıq, məxrəc dəyişmir. Məsələn, 2/7 + 3/7 = 5/7.",
            tasks: [
              {
                id: "ry-u1-l3-t1",
                type: "numeric",
                prompt: "Hesabla: 2/8 + 3/8 kəsrinin surəti neçə olar?",
                answer: 5,
                xp: 10,
              },
              {
                id: "ry-u1-l3-t2",
                type: "multiple_choice",
                prompt: "1/5 + 3/5 neçəyə bərabərdir?",
                options: ["4/10", "4/5", "3/25", "4/25"],
                correctIndex: 1,
                xp: 10,
              },
              {
                id: "ry-u1-l3-t3",
                type: "numeric",
                prompt:
                  "Ayla tortun 2/9-nu, qardaşı 4/9-nu yedi. Birlikdə tortun neçə doqquzdabirini yediler? (Surəti yaz)",
                answer: 6,
                xp: 15,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "azerbaycan-dili",
    name: "Azərbaycan dili",
    grade: 5,
    icon: "📖",
    color: "rose",
    units: [
      {
        id: "az-u1",
        title: "Nitq hissələri",
        description: "İsim, sifət və feil ilə tanışlıq.",
        lessons: [
          {
            id: "az-u1-l1",
            title: "İsim",
            intro:
              "İsim əşyanın adını bildirən nitq hissəsidir və 'kim?', 'nə?' suallarına cavab verir. Məsələn: kitab, məktəb, Ayla.",
            tasks: [
              {
                id: "az-u1-l1-t1",
                type: "multiple_choice",
                prompt: "Aşağıdakılardan hansı isimdir?",
                options: ["qırmızı", "qaçmaq", "pəncərə", "sürətli"],
                correctIndex: 2,
                xp: 10,
              },
              {
                id: "az-u1-l1-t2",
                type: "fill_blank",
                prompt:
                  "'Məktəb' sözü hansı suala cavab verir? (kim / nə)",
                accepted: ["nə", "ne"],
                xp: 10,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ingilis-dili",
    name: "İngilis dili",
    grade: 5,
    icon: "🇬🇧",
    color: "violet",
    units: [
      {
        id: "en-u1",
        title: "Present Simple",
        description: "İndiki sadə zaman və gündəlik işlər.",
        lessons: [
          {
            id: "en-u1-l1",
            title: "To be (am / is / are)",
            intro:
              "'To be' feili şəxsə görə dəyişir: I am, you are, he/she/it is, we/they are.",
            tasks: [
              {
                id: "en-u1-l1-t1",
                type: "multiple_choice",
                prompt: "Choose the correct word: She ___ a student.",
                options: ["am", "is", "are", "be"],
                correctIndex: 1,
                xp: 10,
              },
              {
                id: "en-u1-l1-t2",
                type: "fill_blank",
                prompt: "Fill in the blank: I ___ from Azerbaijan.",
                accepted: ["am"],
                xp: 10,
              },
            ],
          },
        ],
      },
    ],
  },
];

// Köməkçi axtarış funksiyaları
export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getLesson(lessonId: string) {
  for (const subject of subjects) {
    for (const unit of subject.units) {
      const lesson = unit.lessons.find((l) => l.id === lessonId);
      if (lesson) return { subject, unit, lesson };
    }
  }
  return undefined;
}

// Fənn üzrə bütün dərslərin sırası (unlock məntiqi üçün)
export function orderedLessonIds(slug: string): string[] {
  const subject = getSubject(slug);
  if (!subject) return [];
  return subject.units.flatMap((u) => u.lessons.map((l) => l.id));
}
