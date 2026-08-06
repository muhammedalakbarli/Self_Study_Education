// Riyaziyyat — 7-ci sinif proqramı (Azərbaycan kurikuluma uyğun: Cəbr + Həndəsə).
// Bölmələr: 1) Rasional ədədlər üzərində əməllər  2) Cəbri ifadələr
// 3) Birdəyişənli tənliklər  4) Tək və çoxhədlilər  5) Müxtəsər vurma düsturları
// 6) Qüvvət  7) Funksiya və koordinat  8) Həndəsə.
// Hər dərs: 15 əsas + 5 bonus tapşırıq. Mərhələli doldurulur.
// id prefiksi ry7-* → aşağı siniflərin progress-i ilə toqquşmur.

import type { Subject } from "../types";

export const math7: Subject = {
  slug: "riyaziyyat-7",
  name: "Riyaziyyat",
  grade: 7,
  icon: "R",
  color: "sky",
  units: [
    // ═══════════════ 1. Rasional ədədlər üzərində əməllər ═══════════════
    {
      id: "ry7-rasional",
      title: "Rasional ədədlər üzərində əməllər",
      description:
        "Müsbət və mənfi ədədlərin toplanması, çıxılması, vurulması və bölünməsi; işarə qaydaları, modul və qarışıq əməllər.",
      lessons: [
        {
          id: "ry7-ras-l1",
          title: "Rasional ədədlərin toplanması",
          intro: "Müsbət və mənfi ədədləri işarə qaydalarına görə toplamaq.",
          sections: [
            { heading: "Eyni işarəli ədədlər", body: "İşarələri eyni olan iki ədədi toplayarkən modullarını toplayır, ümumi işarəni saxlayırıq. Məsələn: (−3) + (−5) = −8." },
            { heading: "Müxtəlif işarəli ədədlər", body: "İşarələri fərqli olduqda modulu böyük olandan kiçiyi çıxırıq, nəticəyə böyük modullu ədədin işarəsini veririk. Məsələn: (−7) + 4 = −3, çünki 7 − 4 = 3 və böyük modul mənfidir." },
            { heading: "Əks ədədlər", body: "Bir ədədlə onun əks ədədinin cəmi 0-dır: 6 + (−6) = 0." },
          ],
          tasks: [
            { id: "ry7-ras-l1-t1", type: "numeric", prompt: "(−3) + (−5) = ?", answer: -8, xp: 10 },
            { id: "ry7-ras-l1-t2", type: "numeric", prompt: "(−7) + 4 = ?", answer: -3, xp: 10 },
            { id: "ry7-ras-l1-t3", type: "numeric", prompt: "9 + (−12) = ?", answer: -3, xp: 10 },
            { id: "ry7-ras-l1-t4", type: "numeric", prompt: "(−6) + 6 = ?", answer: 0, xp: 10 },
            { id: "ry7-ras-l1-t5", type: "numeric", prompt: "(−8) + (−2) = ?", answer: -10, xp: 10 },
            { id: "ry7-ras-l1-t6", type: "numeric", prompt: "15 + (−7) = ?", answer: 8, xp: 10 },
            { id: "ry7-ras-l1-t7", type: "numeric", prompt: "(−10) + 3 = ?", answer: -7, xp: 10 },
            { id: "ry7-ras-l1-t8", type: "numeric", prompt: "(−4) + (−4) = ?", answer: -8, xp: 10 },
            { id: "ry7-ras-l1-t9", type: "numeric", prompt: "20 + (−25) = ?", answer: -5, xp: 10 },
            { id: "ry7-ras-l1-t10", type: "numeric", prompt: "(−13) + 13 = ?", answer: 0, xp: 10 },
            { id: "ry7-ras-l1-t11", type: "multiple_choice", prompt: "(−9) + (−1) neçədir?", options: ["−10", "−8", "8", "10"], correctIndex: 0, xp: 10 },
            { id: "ry7-ras-l1-t12", type: "multiple_choice", prompt: "Müxtəlif işarəli ədədləri toplayarkən nəticə hansı işarəni alır?", options: ["modulu böyük olanın işarəsini", "həmişə müsbət", "həmişə mənfi", "modulu kiçik olanın işarəsini"], correctIndex: 0, xp: 10 },
            { id: "ry7-ras-l1-t13", type: "numeric", prompt: "(−2) + (−3) + (−5) = ?", answer: -10, xp: 10 },
            { id: "ry7-ras-l1-t14", type: "numeric", prompt: "(−7) + 10 + (−1) = ?", answer: 2, xp: 10 },
            { id: "ry7-ras-l1-t15", type: "numeric", prompt: "0 + (−14) = ?", answer: -14, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry7-ras-l1-b1", type: "numeric", prompt: "(−1.5) + (−2.5) = ?", answer: -4, xp: 15 },
            { id: "ry7-ras-l1-b2", type: "numeric", prompt: "(−100) + 60 = ?", answer: -40, xp: 15 },
            { id: "ry7-ras-l1-b3", type: "numeric", prompt: "(−8) + (−7) + 15 = ?", answer: 0, xp: 15 },
            { id: "ry7-ras-l1-b4", type: "multiple_choice", prompt: "6 ədədinin əks ədədi hansıdır?", options: ["−6", "6", "0", "1/6"], correctIndex: 0, xp: 15 },
            { id: "ry7-ras-l1-b5", type: "numeric", prompt: "(−3.2) + 3.2 = ?", answer: 0, xp: 15 },
          ],
        },
        {
          id: "ry7-ras-l2",
          title: "Rasional ədədlərin çıxılması",
          intro: "Çıxmanı əks ədədin toplanmasına çevirmək: a − b = a + (−b).",
          sections: [
            { heading: "Çıxma qaydası", body: "Bir ədəddən digərini çıxmaq üçün çıxılanın əks ədədini gələnə toplayırıq: a − b = a + (−b). Məsələn: 5 − 8 = 5 + (−8) = −3." },
            { heading: "Mənfi ədədin çıxılması", body: "Mənfi ədədi çıxmaq onu toplamaq deməkdir: 4 − (−3) = 4 + 3 = 7. İki mənfi yan-yana gələndə (− −) plus olur." },
          ],
          tasks: [
            { id: "ry7-ras-l2-t1", type: "numeric", prompt: "5 − 8 = ?", answer: -3, xp: 10 },
            { id: "ry7-ras-l2-t2", type: "numeric", prompt: "4 − (−3) = ?", answer: 7, xp: 10 },
            { id: "ry7-ras-l2-t3", type: "numeric", prompt: "(−6) − 2 = ?", answer: -8, xp: 10 },
            { id: "ry7-ras-l2-t4", type: "numeric", prompt: "(−5) − (−9) = ?", answer: 4, xp: 10 },
            { id: "ry7-ras-l2-t5", type: "numeric", prompt: "10 − 15 = ?", answer: -5, xp: 10 },
            { id: "ry7-ras-l2-t6", type: "numeric", prompt: "0 − 7 = ?", answer: -7, xp: 10 },
            { id: "ry7-ras-l2-t7", type: "numeric", prompt: "(−3) − (−3) = ?", answer: 0, xp: 10 },
            { id: "ry7-ras-l2-t8", type: "numeric", prompt: "12 − (−8) = ?", answer: 20, xp: 10 },
            { id: "ry7-ras-l2-t9", type: "numeric", prompt: "(−10) − 5 = ?", answer: -15, xp: 10 },
            { id: "ry7-ras-l2-t10", type: "numeric", prompt: "7 − 7 = ?", answer: 0, xp: 10 },
            { id: "ry7-ras-l2-t11", type: "multiple_choice", prompt: "a − b ifadəsi hansına bərabərdir?", options: ["a + (−b)", "a + b", "(−a) + b", "b − a"], correctIndex: 0, xp: 10 },
            { id: "ry7-ras-l2-t12", type: "numeric", prompt: "(−2) − (−10) = ?", answer: 8, xp: 10 },
            { id: "ry7-ras-l2-t13", type: "numeric", prompt: "(−15) − (−5) = ?", answer: -10, xp: 10 },
            { id: "ry7-ras-l2-t14", type: "numeric", prompt: "3 − 9 − 2 = ?", answer: -8, xp: 10 },
            { id: "ry7-ras-l2-t15", type: "numeric", prompt: "(−4) − 6 + 2 = ?", answer: -8, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry7-ras-l2-b1", type: "numeric", prompt: "(−2.5) − 1.5 = ?", answer: -4, xp: 15 },
            { id: "ry7-ras-l2-b2", type: "numeric", prompt: "100 − (−50) = ?", answer: 150, xp: 15 },
            { id: "ry7-ras-l2-b3", type: "numeric", prompt: "(−7) − (−7) − 7 = ?", answer: -7, xp: 15 },
            { id: "ry7-ras-l2-b4", type: "numeric", prompt: "0 − (−9) = ?", answer: 9, xp: 15 },
            { id: "ry7-ras-l2-b5", type: "numeric", prompt: "(−1) − (−2) − (−3) = ?", answer: 4, xp: 15 },
          ],
        },
        {
          id: "ry7-ras-l3",
          title: "Rasional ədədlərin vurulması və bölünməsi",
          intro: "İşarə qaydası: eyni işarə → müsbət, müxtəlif işarə → mənfi.",
          sections: [
            { heading: "Vurma işarə qaydası", body: "(+)·(+) = +, (−)·(−) = +, (+)·(−) = −, (−)·(+) = −. Yəni eyni işarəli iki ədədin hasili müsbət, müxtəlif işarəli iki ədədin hasili mənfidir." },
            { heading: "Bölmə", body: "Bölmədə də eyni işarə qaydası işləyir: (−12) : (−4) = 3, (−12) : 4 = −3." },
            { heading: "Sıfırla vurma", body: "İstənilən ədədi 0-a vurduqda nəticə 0 olur." },
          ],
          tasks: [
            { id: "ry7-ras-l3-t1", type: "numeric", prompt: "(−3) · (−4) = ?", answer: 12, xp: 10 },
            { id: "ry7-ras-l3-t2", type: "numeric", prompt: "(−5) · 6 = ?", answer: -30, xp: 10 },
            { id: "ry7-ras-l3-t3", type: "numeric", prompt: "7 · (−2) = ?", answer: -14, xp: 10 },
            { id: "ry7-ras-l3-t4", type: "numeric", prompt: "(−8) · (−2) = ?", answer: 16, xp: 10 },
            { id: "ry7-ras-l3-t5", type: "numeric", prompt: "(−12) : (−4) = ?", answer: 3, xp: 10 },
            { id: "ry7-ras-l3-t6", type: "numeric", prompt: "(−20) : 5 = ?", answer: -4, xp: 10 },
            { id: "ry7-ras-l3-t7", type: "numeric", prompt: "18 : (−6) = ?", answer: -3, xp: 10 },
            { id: "ry7-ras-l3-t8", type: "numeric", prompt: "(−9) · 0 = ?", answer: 0, xp: 10 },
            { id: "ry7-ras-l3-t9", type: "multiple_choice", prompt: "(−)·(−) hasilinin işarəsi necədir?", options: ["müsbət", "mənfi", "sıfır", "dəyişmir"], correctIndex: 0, xp: 10 },
            { id: "ry7-ras-l3-t10", type: "multiple_choice", prompt: "Müxtəlif işarəli iki ədədin hasili hansı işarəlidir?", options: ["mənfi", "müsbət", "sıfır", "həmişə 1"], correctIndex: 0, xp: 10 },
            { id: "ry7-ras-l3-t11", type: "numeric", prompt: "(−2) · (−3) · (−1) = ?", answer: -6, xp: 10 },
            { id: "ry7-ras-l3-t12", type: "numeric", prompt: "(−4) · 5 · (−1) = ?", answer: 20, xp: 10 },
            { id: "ry7-ras-l3-t13", type: "numeric", prompt: "(−36) : (−9) = ?", answer: 4, xp: 10 },
            { id: "ry7-ras-l3-t14", type: "numeric", prompt: "(−100) : 25 = ?", answer: -4, xp: 10 },
            { id: "ry7-ras-l3-t15", type: "numeric", prompt: "(−6) · (−6) = ?", answer: 36, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry7-ras-l3-b1", type: "numeric", prompt: "(−0.5) · 8 = ?", answer: -4, xp: 15 },
            { id: "ry7-ras-l3-b2", type: "numeric", prompt: "(−2) · (−2) · (−2) = ?", answer: -8, xp: 15 },
            { id: "ry7-ras-l3-b3", type: "multiple_choice", prompt: "Mənfi ədədlərin sayı tək olduqda hasilin işarəsi necə olur?", options: ["mənfi", "müsbət", "sıfır", "dəyişmir"], correctIndex: 0, xp: 15 },
            { id: "ry7-ras-l3-b4", type: "numeric", prompt: "(−1) · (−1) · (−1) · (−1) = ?", answer: 1, xp: 15 },
            { id: "ry7-ras-l3-b5", type: "numeric", prompt: "(−48) : (−6) : (−2) = ?", answer: -4, xp: 15 },
          ],
        },
        {
          id: "ry7-ras-l4",
          title: "Modul və qarışıq əməllər",
          intro: "Ədədin modulu (mütləq qiyməti) və əməllərin sırası.",
          sections: [
            { heading: "Modul (mütləq qiymət)", body: "Ədədin modulu onun sıfırdan olan məsafəsidir və heç vaxt mənfi olmur: |−5| = 5, |7| = 7, |0| = 0." },
            { heading: "Əməllərin sırası", body: "Əvvəlcə mötərizə, sonra vurma/bölmə, sonra toplama/çıxma. İşarələrə diqqət et." },
          ],
          tasks: [
            { id: "ry7-ras-l4-t1", type: "numeric", prompt: "|−5| = ?", answer: 5, xp: 10 },
            { id: "ry7-ras-l4-t2", type: "numeric", prompt: "|7| = ?", answer: 7, xp: 10 },
            { id: "ry7-ras-l4-t3", type: "numeric", prompt: "|0| = ?", answer: 0, xp: 10 },
            { id: "ry7-ras-l4-t4", type: "numeric", prompt: "|−12| + |−3| = ?", answer: 15, xp: 10 },
            { id: "ry7-ras-l4-t5", type: "numeric", prompt: "|−10| − |6| = ?", answer: 4, xp: 10 },
            { id: "ry7-ras-l4-t6", type: "numeric", prompt: "2 + 3 · (−4) = ?", answer: -10, xp: 10 },
            { id: "ry7-ras-l4-t7", type: "numeric", prompt: "(2 + 3) · (−4) = ?", answer: -20, xp: 10 },
            { id: "ry7-ras-l4-t8", type: "numeric", prompt: "(−6) + 12 : (−3) = ?", answer: -10, xp: 10 },
            { id: "ry7-ras-l4-t9", type: "numeric", prompt: "10 − 2 · (−3) = ?", answer: 16, xp: 10 },
            { id: "ry7-ras-l4-t10", type: "multiple_choice", prompt: "|−8| ifadəsinin qiyməti hansıdır?", options: ["8", "−8", "0", "1/8"], correctIndex: 0, xp: 10 },
            { id: "ry7-ras-l4-t11", type: "numeric", prompt: "(−3) · (−2) + (−4) = ?", answer: 2, xp: 10 },
            { id: "ry7-ras-l4-t12", type: "numeric", prompt: "|−4| · |−3| = ?", answer: 12, xp: 10 },
            { id: "ry7-ras-l4-t13", type: "numeric", prompt: "(−20) : 4 + 3 = ?", answer: -2, xp: 10 },
            { id: "ry7-ras-l4-t14", type: "numeric", prompt: "5 · (−2) − (−4) = ?", answer: -6, xp: 10 },
            { id: "ry7-ras-l4-t15", type: "numeric", prompt: "(−1) · (3 − 8) = ?", answer: 5, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry7-ras-l4-b1", type: "numeric", prompt: "|−15| − |−15| = ?", answer: 0, xp: 15 },
            { id: "ry7-ras-l4-b2", type: "numeric", prompt: "(−2) · (−3) · (−1) + 6 = ?", answer: 0, xp: 15 },
            { id: "ry7-ras-l4-b3", type: "numeric", prompt: "|(−7) + 3| = ?", answer: 4, xp: 15 },
            { id: "ry7-ras-l4-b4", type: "numeric", prompt: "(−4)² = ?", answer: 16, xp: 15 },
            { id: "ry7-ras-l4-b5", type: "multiple_choice", prompt: "İstənilən ədədin modulu haqqında hansı doğrudur?", options: ["heç vaxt mənfi olmur", "həmişə müsbətdir", "həmişə tam ədəddir", "ədədin özünə bərabərdir"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
  ],
};
