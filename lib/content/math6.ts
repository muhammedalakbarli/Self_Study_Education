// Riyaziyyat — 6-cı sinif proqramı (Azərbaycan kurikuluma uyğun).
// Bölmələr: 1) Bölünmə (əlamətlər, sadə/mürəkkəb, ƏBOB, ƏKOB)  2) Adi kəsrlər
// 3) Onluq kəsrlər  4) Nisbət və tənasüb  5) Faiz  6) Tam ədədlər
// 7) Rasional ədədlər və koordinat  8) Həndəsə.
// Hər dərs: 15 əsas + 5 bonus tapşırıq. Mərhələli doldurulur (İngilis 5-ci sinif kimi).
// id prefiksi ry6-* → 5-ci sinif progress-i ilə toqquşmur.

import type { Subject } from "../types";

export const math6: Subject = {
  slug: "riyaziyyat-6",
  name: "Riyaziyyat",
  grade: 6,
  icon: "R",
  color: "sky",
  units: [
    // ═══════════════ 1. Bölünmə ═══════════════
    {
      id: "ry6-bolunme",
      title: "Bölünmə. ƏBOB və ƏKOB",
      description:
        "Bölünmə əlamətləri (2, 3, 5, 9, 10), sadə və mürəkkəb ədədlər, sadə vuruqlara ayırma, ən böyük ortaq bölən (ƏBOB) və ən kiçik ortaq bölünən (ƏKOB).",
      lessons: [
        {
          id: "ry6-bol-l1",
          title: "2-yə, 5-ə və 10-a bölünmə əlamətləri",
          intro: "Bir ədədin bölünüb-bölünmədiyini bölmə etmədən son rəqəmə baxaraq bilmək.",
          sections: [
            { heading: "2-yə bölünmə", body: "Son rəqəmi cüt (0, 2, 4, 6, 8) olan ədəd 2-yə bölünür. Belə ədədlərə cüt ədədlər deyilir. Məsələn: 54, 130, 728." },
            { heading: "5-ə bölünmə", body: "Son rəqəmi 0 və ya 5 olan ədəd 5-ə bölünür. Məsələn: 85, 340, 205." },
            { heading: "10-a bölünmə", body: "Son rəqəmi 0 olan ədəd 10-a bölünür. Belə ədəd həm də 2-yə və 5-ə bölünür. Məsələn: 90, 350, 1 000." },
          ],
          tasks: [
            { id: "ry6-bol-l1-t1", type: "multiple_choice", prompt: "Ədəd 2-yə bölünürsə, son rəqəmi necə olmalıdır?", options: ["cüt (0, 2, 4, 6, 8)", "tək", "yalnız 5", "yalnız 0"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı 2-yə bölünür?", options: ["37", "54", "81", "19"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l1-t3", type: "multiple_choice", prompt: "5-ə bölünmə əlaməti: son rəqəm ...?", options: ["0 və ya 5", "cüt", "3", "1"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l1-t4", type: "multiple_choice", prompt: "Hansı ədəd 5-ə bölünür?", options: ["42", "73", "85", "24"], correctIndex: 2, xp: 10 },
            { id: "ry6-bol-l1-t5", type: "multiple_choice", prompt: "10-a bölünmə əlaməti: son rəqəm ...?", options: ["0", "5", "cüt", "1"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l1-t6", type: "multiple_choice", prompt: "Hansı ədəd 10-a bölünür?", options: ["205", "350", "128", "64"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l1-t7", type: "numeric", prompt: "630 ədədi 2, 5 və 10-dan neçəsinə bölünür?", answer: 3, xp: 10 },
            { id: "ry6-bol-l1-t8", type: "multiple_choice", prompt: "748 ədədi hansına bölünür?", options: ["yalnız 2", "yalnız 5", "2 və 5", "10"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l1-t9", type: "multiple_choice", prompt: "265 ədədi hansına bölünür?", options: ["2", "5", "10", "2 və 10"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l1-t10", type: "fill_blank", prompt: "Son rəqəmi 0 olan ədəd 2-yə, 5-ə və ___-a bölünür.", accepted: ["10"], xp: 10 },
            { id: "ry6-bol-l1-t11", type: "multiple_choice", prompt: "Hansı ədəd HƏM 2-yə, HƏM də 5-ə bölünür?", options: ["25", "40", "14", "35"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l1-t12", type: "numeric", prompt: "50, 55, 60 ədədlərindən neçəsi 5-ə bölünür?", answer: 3, xp: 10 },
            { id: "ry6-bol-l1-t13", type: "multiple_choice", prompt: "999 ədədi 2-yə bölünürmü?", options: ["Bəli", "Xeyr"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l1-t14", type: "multiple_choice", prompt: "1 000 ədədi hansına bölünür?", options: ["yalnız 10", "2, 5 və 10", "yalnız 2", "heç birinə"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l1-t15", type: "multiple_choice", prompt: "Hansı ədəd nə 2-yə, nə də 5-ə bölünür?", options: ["30", "17", "20", "45"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry6-bol-l1-b1", type: "multiple_choice", prompt: "3 620 ədədi hansına bölünür?", options: ["yalnız 2", "2, 5 və 10", "yalnız 5", "heç birinə"], correctIndex: 1, xp: 15 },
            { id: "ry6-bol-l1-b2", type: "multiple_choice", prompt: "Son rəqəmi 5 olan ədəd 2-yə bölünürmü?", options: ["Bəli", "Xeyr"], correctIndex: 1, xp: 15 },
            { id: "ry6-bol-l1-b3", type: "numeric", prompt: "1-dən 100-ə qədər (100 daxil) 10-a bölünən neçə ədəd var?", answer: 10, xp: 15 },
            { id: "ry6-bol-l1-b4", type: "multiple_choice", prompt: "Hansı cüt ədəddir?", options: ["27", "39", "46", "51"], correctIndex: 2, xp: 15 },
            { id: "ry6-bol-l1-b5", type: "fill_blank", prompt: "10-a bölünən ədədin son rəqəmi həmişə ___-dır.", accepted: ["0"], xp: 15 },
          ],
        },
        {
          id: "ry6-bol-l2",
          title: "3-ə və 9-a bölünmə. Sadə və mürəkkəb ədədlər",
          intro: "Rəqəmlərin cəminə görə 3-ə və 9-a bölünmə; sadə və mürəkkəb ədədləri tanımaq.",
          sections: [
            { heading: "3-ə bölünmə", body: "Ədədin rəqəmləri cəmi 3-ə bölünürsə, ədədin özü də 3-ə bölünür. Məsələn: 51 → 5+1=6, 6 üç-ə bölünür, deməli 51 də 3-ə bölünür." },
            { heading: "9-a bölünmə", body: "Ədədin rəqəmləri cəmi 9-a bölünürsə, ədəd 9-a bölünür. Məsələn: 234 → 2+3+4=9 → 9-a bölünür." },
            { heading: "Sadə və mürəkkəb", body: "Yalnız iki böləni (1 və özü) olan ədədə sadə ədəd deyilir: 2, 3, 5, 7, 11... İkidən çox böləni olan ədəd mürəkkəbdir: 4, 6, 8, 9... 1 nə sadə, nə mürəkkəbdir." },
          ],
          tasks: [
            { id: "ry6-bol-l2-t1", type: "multiple_choice", prompt: "3-ə bölünmə əlaməti nədir?", options: ["rəqəmləri cəmi 3-ə bölünür", "son rəqəm 3-dür", "son rəqəm cütdür", "son rəqəm 0-dır"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l2-t2", type: "numeric", prompt: "51 ədədinin rəqəmləri cəmi neçədir?", answer: 6, xp: 10 },
            { id: "ry6-bol-l2-t3", type: "multiple_choice", prompt: "51 ədədi 3-ə bölünürmü? (5+1=6)", options: ["Bəli", "Xeyr"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l2-t4", type: "multiple_choice", prompt: "9-a bölünmə əlaməti nədir?", options: ["rəqəmləri cəmi 9-a bölünür", "son rəqəm 9-dur", "son rəqəm 0-dır", "cütdür"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l2-t5", type: "multiple_choice", prompt: "234 ədədi 9-a bölünürmü? (2+3+4=9)", options: ["Bəli", "Xeyr"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l2-t6", type: "multiple_choice", prompt: "Hansı ədəd 3-ə bölünür?", options: ["25", "42", "17", "28"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l2-t7", type: "numeric", prompt: "126 ədədinin rəqəmləri cəmi neçədir?", answer: 9, xp: 10 },
            { id: "ry6-bol-l2-t8", type: "multiple_choice", prompt: "126 ədədi hansına bölünür?", options: ["yalnız 3", "3 və 9", "yalnız 9", "heç birinə"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l2-t9", type: "multiple_choice", prompt: "Sadə ədəd nədir?", options: ["yalnız 1 və özünə bölünən", "hər cüt ədəd", "3-ə bölünən ədəd", "sıfır"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l2-t10", type: "multiple_choice", prompt: "Hansı sadə ədəddir?", options: ["9", "15", "7", "21"], correctIndex: 2, xp: 10 },
            { id: "ry6-bol-l2-t11", type: "multiple_choice", prompt: "Hansı mürəkkəb ədəddir?", options: ["2", "3", "11", "15"], correctIndex: 3, xp: 10 },
            { id: "ry6-bol-l2-t12", type: "multiple_choice", prompt: "1 ədədi sadədir, yoxsa mürəkkəb?", options: ["sadə", "mürəkkəb", "nə sadə, nə mürəkkəb", "hər ikisi"], correctIndex: 2, xp: 10 },
            { id: "ry6-bol-l2-t13", type: "numeric", prompt: "10-dan kiçik neçə sadə ədəd var? (2, 3, 5, 7)", answer: 4, xp: 10 },
            { id: "ry6-bol-l2-t14", type: "numeric", prompt: "Ən kiçik sadə ədəd neçədir?", answer: 2, xp: 10 },
            { id: "ry6-bol-l2-t15", type: "multiple_choice", prompt: "13 sadə ədəddirmi?", options: ["Bəli", "Xeyr"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry6-bol-l2-b1", type: "multiple_choice", prompt: "Hansı ədəd həm 3-ə, həm də 9-a bölünür?", options: ["12", "18", "15", "21"], correctIndex: 1, xp: 15 },
            { id: "ry6-bol-l2-b2", type: "numeric", prompt: "20-dən kiçik neçə sadə ədəd var? (2,3,5,7,11,13,17,19)", answer: 8, xp: 15 },
            { id: "ry6-bol-l2-b3", type: "multiple_choice", prompt: "2-dən başqa bütün sadə ədədlər necədir?", options: ["tək", "cüt", "sıfır", "10-a bölünən"], correctIndex: 0, xp: 15 },
            { id: "ry6-bol-l2-b4", type: "fill_blank", prompt: "Yalnız iki böləni (1 və özü) olan ədədə ___ ədəd deyilir.", accepted: ["sadə"], xp: 15 },
            { id: "ry6-bol-l2-b5", type: "multiple_choice", prompt: "Hansı mürəkkəb ədəddir?", options: ["17", "19", "25", "23"], correctIndex: 2, xp: 15 },
          ],
        },
        {
          id: "ry6-bol-l3",
          title: "Sadə vuruqlara ayırma. ƏBOB",
          intro: "Ədədi sadə vuruqların hasili kimi yazmaq və iki ədədin ən böyük ortaq bölənini tapmaq.",
          sections: [
            { heading: "Sadə vuruqlara ayırma", body: "Hər mürəkkəb ədəd sadə ədədlərin hasili kimi yazıla bilər: 12 = 2·2·3, 18 = 2·3·3, 24 = 2·2·2·3." },
            { heading: "ƏBOB nədir?", body: "İki (və ya bir neçə) ədədin hər ikisinə bölünən ən böyük ədədə onların Ən Böyük Ortaq Böləni (ƏBOB) deyilir. Məsələn ƏBOB(8, 12) = 4." },
            { heading: "Qarşılıqlı sadə", body: "Ortaq böləni yalnız 1 olan ədədlərə qarşılıqlı sadə deyilir: ƏBOB(9, 16) = 1." },
          ],
          tasks: [
            { id: "ry6-bol-l3-t1", type: "multiple_choice", prompt: "12 ədədinin sadə vuruqlara ayrılışı hansıdır?", options: ["2·6", "2·2·3", "3·4", "2·3"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l3-t2", type: "multiple_choice", prompt: "18 = ?", options: ["2·9", "2·3·3", "3·6", "2·2·3"], correctIndex: 1, xp: 10 },
            { id: "ry6-bol-l3-t3", type: "numeric", prompt: "8 ədədinin neçə böləni var? (1, 2, 4, 8)", answer: 4, xp: 10 },
            { id: "ry6-bol-l3-t4", type: "multiple_choice", prompt: "ƏBOB nə deməkdir?", options: ["ən böyük ortaq bölən", "ən böyük ortaq bölünən", "ən kiçik bölən", "cəm"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l3-t5", type: "numeric", prompt: "ƏBOB(8, 12) = ?", answer: 4, xp: 10 },
            { id: "ry6-bol-l3-t6", type: "numeric", prompt: "ƏBOB(6, 9) = ?", answer: 3, xp: 10 },
            { id: "ry6-bol-l3-t7", type: "numeric", prompt: "ƏBOB(10, 15) = ?", answer: 5, xp: 10 },
            { id: "ry6-bol-l3-t8", type: "multiple_choice", prompt: "Ortaq böləni yalnız 1 olan ədədlərə ... deyilir.", options: ["qarşılıqlı sadə", "mürəkkəb", "cüt", "bərabər"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l3-t9", type: "numeric", prompt: "ƏBOB(20, 30) = ?", answer: 10, xp: 10 },
            { id: "ry6-bol-l3-t10", type: "multiple_choice", prompt: "24 = 2·2·2·3 yazılışı nədir?", options: ["sadə vuruqlara ayrılış", "cəm", "fərq", "ƏKOB"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l3-t11", type: "numeric", prompt: "ƏBOB(16, 24) = ?", answer: 8, xp: 10 },
            { id: "ry6-bol-l3-t12", type: "numeric", prompt: "ƏBOB(7, 14) = ?", answer: 7, xp: 10 },
            { id: "ry6-bol-l3-t13", type: "numeric", prompt: "ƏBOB(9, 16) = ? (qarşılıqlı sadə)", answer: 1, xp: 10 },
            { id: "ry6-bol-l3-t14", type: "multiple_choice", prompt: "36 ədədinin sadə vuruqları hansılardır?", options: ["2 və 3", "2 və 5", "3 və 5", "yalnız 2"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l3-t15", type: "numeric", prompt: "ƏBOB(12, 18) = ?", answer: 6, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry6-bol-l3-b1", type: "numeric", prompt: "ƏBOB(15, 25) = ?", answer: 5, xp: 15 },
            { id: "ry6-bol-l3-b2", type: "numeric", prompt: "ƏBOB(48, 36) = ?", answer: 12, xp: 15 },
            { id: "ry6-bol-l3-b3", type: "multiple_choice", prompt: "8 və 9 qarşılıqlı sadədirmi?", options: ["Bəli (ƏBOB=1)", "Xeyr"], correctIndex: 0, xp: 15 },
            { id: "ry6-bol-l3-b4", type: "numeric", prompt: "ƏBOB(14, 21) = ?", answer: 7, xp: 15 },
            { id: "ry6-bol-l3-b5", type: "fill_blank", prompt: "Hər iki ədədə bölünən ən böyük ədədin qısaltması ___-dur.", accepted: ["ƏBOB", "əbob", "ebob"], xp: 15 },
          ],
        },
        {
          id: "ry6-bol-l4",
          title: "Ən kiçik ortaq bölünən (ƏKOB)",
          intro: "İki (və ya bir neçə) ədədin hər ikisinə bölünən ən kiçik ədədi tapmaq.",
          sections: [
            { heading: "ƏKOB nədir?", body: "Hər iki ədədə də bölünən ən kiçik (sıfırdan böyük) ədədə onların Ən Kiçik Ortaq Bölünəni (ƏKOB) deyilir. Məsələn ƏKOB(4, 6) = 12." },
            { heading: "Misli (qatı)", body: "Ədədin misli onu 1, 2, 3, ... ədədlərinə vurmaqla alınır: 4-ün mislləri 4, 8, 12, 16... ƏKOB ortaq misllərin ən kiçiyidir." },
            { heading: "Faydalı qayda", body: "İki ədəddən biri o birinə bölünürsə, ƏKOB böyük ədədin özüdür: ƏKOB(2, 8) = 8. Həmçinin ƏBOB·ƏKOB = a·b." },
          ],
          tasks: [
            { id: "ry6-bol-l4-t1", type: "multiple_choice", prompt: "ƏKOB nə deməkdir?", options: ["ən kiçik ortaq bölünən", "ən böyük ortaq bölən", "ən kiçik bölən", "cəm"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l4-t2", type: "numeric", prompt: "ƏKOB(4, 6) = ?", answer: 12, xp: 10 },
            { id: "ry6-bol-l4-t3", type: "numeric", prompt: "ƏKOB(3, 5) = ?", answer: 15, xp: 10 },
            { id: "ry6-bol-l4-t4", type: "numeric", prompt: "ƏKOB(2, 8) = ?", answer: 8, xp: 10 },
            { id: "ry6-bol-l4-t5", type: "numeric", prompt: "ƏKOB(6, 9) = ?", answer: 18, xp: 10 },
            { id: "ry6-bol-l4-t6", type: "multiple_choice", prompt: "4-ün ilk üç misli hansılardır?", options: ["4, 8, 12", "1, 2, 4", "4, 6, 8", "2, 4, 6"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l4-t7", type: "numeric", prompt: "ƏKOB(5, 10) = ?", answer: 10, xp: 10 },
            { id: "ry6-bol-l4-t8", type: "numeric", prompt: "ƏKOB(3, 4) = ?", answer: 12, xp: 10 },
            { id: "ry6-bol-l4-t9", type: "numeric", prompt: "ƏKOB(6, 8) = ?", answer: 24, xp: 10 },
            { id: "ry6-bol-l4-t10", type: "numeric", prompt: "ƏKOB(2, 3, 4) = ?", answer: 12, xp: 10 },
            { id: "ry6-bol-l4-t11", type: "multiple_choice", prompt: "Bir ədəd o birinə bölünürsə, ƏKOB nədir?", options: ["böyük ədəd", "kiçik ədəd", "1", "cəm"], correctIndex: 0, xp: 10 },
            { id: "ry6-bol-l4-t12", type: "numeric", prompt: "ƏKOB(7, 3) = ?", answer: 21, xp: 10 },
            { id: "ry6-bol-l4-t13", type: "numeric", prompt: "ƏKOB(10, 15) = ?", answer: 30, xp: 10 },
            { id: "ry6-bol-l4-t14", type: "numeric", prompt: "ƏKOB(8, 12) = ?", answer: 24, xp: 10 },
            { id: "ry6-bol-l4-t15", type: "numeric", prompt: "ƏKOB(9, 12) = ?", answer: 36, xp: 15 },
          ],
          bonusTasks: [
            { id: "ry6-bol-l4-b1", type: "numeric", prompt: "ƏKOB(4, 5) = ?", answer: 20, xp: 15 },
            { id: "ry6-bol-l4-b2", type: "numeric", prompt: "ƏKOB(6, 10) = ?", answer: 30, xp: 15 },
            { id: "ry6-bol-l4-b3", type: "multiple_choice", prompt: "ƏBOB(a, b) · ƏKOB(a, b) nəyə bərabərdir?", options: ["a · b", "a + b", "a − b", "a ÷ b"], correctIndex: 0, xp: 15 },
            { id: "ry6-bol-l4-b4", type: "numeric", prompt: "ƏKOB(12, 16) = ?", answer: 48, xp: 15 },
            { id: "ry6-bol-l4-b5", type: "numeric", prompt: "ƏKOB(5, 6) = ?", answer: 30, xp: 15 },
          ],
        },
      ],
    },
  ],
};
