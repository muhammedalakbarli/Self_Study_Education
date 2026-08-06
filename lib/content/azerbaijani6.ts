// Azərbaycan dili — 6-cı sinif proqramı (Azərbaycan kurikuluma uyğun).
// Bölmələr: 1) Fonetika  2) Leksika  3) Sözün tərkibi və söz yaradıcılığı
// 4) Nitq hissələri I (isim, sifət, say, əvəzlik)  5) Nitq hissələri II (feil, zərf)
// 6) Orfoqrafiya, durğu işarələri və mətn.
// Hər dərs: 15 əsas + 5 bonus. Mərhələli doldurulur. id prefiksi az6-*.

import type { Subject } from "../types";

export const azerbaijani6: Subject = {
  slug: "azerbaycan-dili-6",
  name: "Azərbaycan dili",
  grade: 6,
  icon: "A",
  color: "rose",
  units: [
    // ═══════════════ 1. Fonetika ═══════════════
    {
      id: "az6-fonetika",
      title: "Fonetika",
      description:
        "Səs və hərf, saitlər və samitlər, ahəng qanunu, heca, vurğu və fonetik təhlil.",
      lessons: [
        {
          id: "az6-fon-l1",
          title: "Səs və hərf. Saitlər və samitlər",
          intro: "Səs və hərfin fərqi, saitlərin və samitlərin təsnifatı.",
          sections: [
            { heading: "Səs və hərf", body: "Tələffüz etdiyimiz — səs, yazıda onu göstərən işarə — hərfdir. Azərbaycan əlifbasında 32 hərf var." },
            { heading: "Saitlər (9)", body: "a, ı, o, u — qalın saitlər; e, ə, i, ö, ü — incə saitlər. Dodaqlanan: o, u, ö, ü; dodaqlanmayan: a, ı, e, ə, i." },
            { heading: "Samitlər", body: "Kar samitlər: p, f, t, s, ş, ç, k, x, h. Cingiltili samitlər: b, v, d, z, j, c, q, g, ğ və s. Kar-cingiltili cütlər: p-b, t-d, k-q." },
          ],
          tasks: [
            { id: "az6-fon-l1-t1", type: "multiple_choice", prompt: "Azərbaycan əlifbasında neçə hərf var?", options: ["29", "32", "33", "26"], correctIndex: 1, xp: 10 },
            { id: "az6-fon-l1-t2", type: "numeric", prompt: "Azərbaycan dilində neçə sait var?", answer: 9, xp: 10 },
            { id: "az6-fon-l1-t3", type: "multiple_choice", prompt: "Hansı qalın saitdir?", options: ["ə", "e", "o", "i"], correctIndex: 2, xp: 10 },
            { id: "az6-fon-l1-t4", type: "multiple_choice", prompt: "Hansı incə saitdir?", options: ["a", "ı", "ü", "u"], correctIndex: 2, xp: 10 },
            { id: "az6-fon-l1-t5", type: "multiple_choice", prompt: "Hansı dodaqlanan saitdir?", options: ["a", "ö", "e", "ı"], correctIndex: 1, xp: 10 },
            { id: "az6-fon-l1-t6", type: "multiple_choice", prompt: "'p' səsi necə samitdir?", options: ["kar", "cingiltili", "sait", "qoşa"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l1-t7", type: "multiple_choice", prompt: "'b' səsi necə samitdir?", options: ["cingiltili", "kar", "sait", "yarımsait"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l1-t8", type: "multiple_choice", prompt: "'t' samitinin cingiltili cütü hansıdır?", options: ["d", "s", "k", "p"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l1-t9", type: "multiple_choice", prompt: "'k' samitinin cingiltili cütü hansıdır?", options: ["q", "g", "x", "h"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l1-t10", type: "fill_blank", prompt: "Yazıda səsi göstərən işarə necə adlanır?", accepted: ["hərf", "herf"], xp: 10 },
            { id: "az6-fon-l1-t11", type: "multiple_choice", prompt: "Hansı dodaqlanmayan saitdir?", options: ["o", "u", "a", "ö"], correctIndex: 2, xp: 10 },
            { id: "az6-fon-l1-t12", type: "multiple_choice", prompt: "'s' səsi necə samitdir?", options: ["kar", "cingiltili", "sait", "qoşa"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l1-t13", type: "numeric", prompt: "'a, ı, o, u' — neçə qalın saitdir?", answer: 4, xp: 10 },
            { id: "az6-fon-l1-t14", type: "numeric", prompt: "'e, ə, i, ö, ü' — neçə incə saitdir?", answer: 5, xp: 10 },
            { id: "az6-fon-l1-t15", type: "multiple_choice", prompt: "'q' səsi necə samitdir?", options: ["cingiltili", "kar", "sait", "yarımsait"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az6-fon-l1-b1", type: "multiple_choice", prompt: "Hansı sırada yalnız qalın saitlər var?", options: ["a, ı, o, u", "e, ə, i", "a, e, o", "ü, ö, u"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l1-b2", type: "multiple_choice", prompt: "'ç' samitinin kar/cingiltili qarşılığı 'c'-dir. 'ç' necədir?", options: ["kar", "cingiltili", "sait", "qoşa"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l1-b3", type: "multiple_choice", prompt: "Hansı sırada yalnız incə saitlər var?", options: ["e, ə, i, ö, ü", "a, ı, o, u", "a, e, i", "o, u, ü"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l1-b4", type: "multiple_choice", prompt: "'z' səsi necə samitdir?", options: ["cingiltili", "kar", "sait", "yarımsait"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l1-b5", type: "fill_blank", prompt: "Tələffüz etdiyimiz — ___-dir (hərfin qarşılığı).", accepted: ["səs", "ses"], xp: 15 },
          ],
        },
        {
          id: "az6-fon-l2",
          title: "Ahəng qanunu",
          intro: "Sözdə saitlərin bir-birinə uyğunlaşması qanunu.",
          sections: [
            { heading: "Ahəng qanunu nədir?", body: "Sözdə saitlərin qalınlıq-incəliyə görə bir-birinə uyğunlaşmasına ahəng qanunu deyilir: kitablar (a-a-a — qalın), evlər (e-ə — incə)." },
            { heading: "Damaq ahəngi", body: "Qalın saitdən sonra qalın, incə saitdən sonra incə sait gəlir: yollar (qalın), gəlirlər (incə)." },
            { heading: "Pozulma", body: "Bəzi sözlərdə (alınma sözlər) ahəng qanunu pozulur: kitab, məktəb, tələbə. Şəkilçilər son saitə uyğunlaşır." },
          ],
          tasks: [
            { id: "az6-fon-l2-t1", type: "multiple_choice", prompt: "Sözdə saitlərin bir-birinə uyğunlaşmasına nə deyilir?", options: ["ahəng qanunu", "vurğu", "heca", "səsartımı"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t2", type: "multiple_choice", prompt: "'yollar' sözündə saitlər necədir?", options: ["qalın", "incə", "qarışıq", "yoxdur"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t3", type: "multiple_choice", prompt: "'evlər' sözündə saitlər necədir?", options: ["incə", "qalın", "qarışıq", "yoxdur"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t4", type: "multiple_choice", prompt: "Qalın saitdən sonra hansı şəkilçi gəlir?", options: ["qalın saitli", "incə saitli", "samitli", "fərqi yoxdur"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t5", type: "multiple_choice", prompt: "Hansı sözdə ahəng qanunu var (qalın)?", options: ["qapılar", "evlər", "gəmilər", "üzüklər"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t6", type: "multiple_choice", prompt: "Hansı sözdə ahəng qanunu pozulub (alınma söz)?", options: ["kitab", "yollar", "daşlar", "qollar"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t7", type: "multiple_choice", prompt: "'kitab' sözünə cəm şəkilçisi hansı formada gələr?", options: ["-lar", "-lər", "hər ikisi", "gəlməz"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t8", type: "multiple_choice", prompt: "'ev' sözünə cəm şəkilçisi hansı formada gələr?", options: ["-lər", "-lar", "hər ikisi", "gəlməz"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t9", type: "multiple_choice", prompt: "Hansı söz incə saitlidir?", options: ["üzüm", "qapı", "yol", "daş"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t10", type: "multiple_choice", prompt: "Hansı söz qalın saitlidir?", options: ["armud", "gəl", "ev", "il"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t11", type: "fill_blank", prompt: "'qız' sözünə cəm şəkilçisi: qız___", accepted: ["lar"], xp: 10 },
            { id: "az6-fon-l2-t12", type: "fill_blank", prompt: "'gül' sözünə cəm şəkilçisi: gül___", accepted: ["lər"], xp: 10 },
            { id: "az6-fon-l2-t13", type: "multiple_choice", prompt: "Ahəng qanununa görə şəkilçi nəyə uyğunlaşır?", options: ["son saitə", "ilk saitə", "samitə", "vurğuya"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t14", type: "multiple_choice", prompt: "Hansı sözdə ahəng qanunu pozulub?", options: ["tələbə", "sular", "quşlar", "yollar"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l2-t15", type: "fill_blank", prompt: "'at' sözünə cəm şəkilçisi: at___", accepted: ["lar"], xp: 15 },
          ],
          bonusTasks: [
            { id: "az6-fon-l2-b1", type: "multiple_choice", prompt: "'məktəb' sözündə ahəng qanunu:", options: ["pozulub (alınma)", "qalın", "incə", "yoxdur"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l2-b2", type: "fill_blank", prompt: "'kitab' sözünə yer şəkilçisi: kitab___ (da/də)", accepted: ["da"], xp: 15 },
            { id: "az6-fon-l2-b3", type: "multiple_choice", prompt: "Hansı söz tam incə saitlidir?", options: ["sevgi", "qapı", "ata", "yol"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l2-b4", type: "fill_blank", prompt: "'ürək' sözünə cəm şəkilçisi: ürək___", accepted: ["lər"], xp: 15 },
            { id: "az6-fon-l2-b5", type: "multiple_choice", prompt: "Ahəng qanunu əsasən nəyə əsaslanır?", options: ["saitlərin qalın-incəliyinə", "samitlərə", "vurğuya", "heca sayına"], correctIndex: 0, xp: 15 },
          ],
        },
        {
          id: "az6-fon-l3",
          title: "Heca, vurğu və böyük hərf",
          intro: "Sözü hecalara bölmək, vurğunu təyin etmək və böyük hərf qaydaları.",
          sections: [
            { heading: "Heca", body: "Söz saitlərin sayı qədər hecaya bölünür: ki-tab (2 heca), mə-ni-si (3 heca). Hecasız söz olmur." },
            { heading: "Vurğu", body: "Sözdə bir hecanın digərlərindən qüvvətli deyilməsi vurğudur. Azərbaycan dilində vurğu adətən son hecaya düşür: kitáb, evlér." },
            { heading: "Böyük hərf", body: "Cümlənin əvvəli, xüsusi isimlər (adlar, şəhərlər, ölkələr) böyük hərflə yazılır: Bakı, Azərbaycan, Nizami." },
          ],
          tasks: [
            { id: "az6-fon-l3-t1", type: "numeric", prompt: "'kitab' sözündə neçə heca var?", answer: 2, xp: 10 },
            { id: "az6-fon-l3-t2", type: "numeric", prompt: "'məktəb' sözündə neçə heca var?", answer: 2, xp: 10 },
            { id: "az6-fon-l3-t3", type: "numeric", prompt: "'Azərbaycan' sözündə neçə heca var?", answer: 4, xp: 10 },
            { id: "az6-fon-l3-t4", type: "multiple_choice", prompt: "Söz neçə hecaya bölünür?", options: ["saitlərin sayı qədər", "samitlərin sayı qədər", "hərflərin sayı qədər", "həmişə 2"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l3-t5", type: "multiple_choice", prompt: "Azərbaycan dilində vurğu adətən hansı hecaya düşür?", options: ["son", "ilk", "orta", "heç birinə"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l3-t6", type: "numeric", prompt: "'alma' sözündə neçə heca var?", answer: 2, xp: 10 },
            { id: "az6-fon-l3-t7", type: "numeric", prompt: "'ev' sözündə neçə heca var?", answer: 1, xp: 10 },
            { id: "az6-fon-l3-t8", type: "multiple_choice", prompt: "Hansı böyük hərflə yazılmalıdır?", options: ["bakı", "kitab", "alma", "su"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l3-t9", type: "multiple_choice", prompt: "Hansı xüsusi isimdir (böyük hərflə)?", options: ["Nizami", "şagird", "müəllim", "dağ"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l3-t10", type: "numeric", prompt: "'müəllim' sözündə neçə heca var?", answer: 3, xp: 10 },
            { id: "az6-fon-l3-t11", type: "multiple_choice", prompt: "Cümlənin əvvəlində söz necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "fərqi yoxdur", "hamısı böyük"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l3-t12", type: "numeric", prompt: "'gül' sözündə neçə heca var?", answer: 1, xp: 10 },
            { id: "az6-fon-l3-t13", type: "multiple_choice", prompt: "Hansı ölkə adıdır (böyük hərflə)?", options: ["Azərbaycan", "şəhər", "ölkə", "dəniz"], correctIndex: 0, xp: 10 },
            { id: "az6-fon-l3-t14", type: "numeric", prompt: "'dəftər' sözündə neçə heca var?", answer: 2, xp: 10 },
            { id: "az6-fon-l3-t15", type: "numeric", prompt: "'qələmdanlıq' sözündə neçə heca var?", answer: 4, xp: 15 },
          ],
          bonusTasks: [
            { id: "az6-fon-l3-b1", type: "numeric", prompt: "'təbiət' sözündə neçə heca var?", answer: 3, xp: 15 },
            { id: "az6-fon-l3-b2", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Bakı şəhəri", "bakı şəhəri", "BAKI şəhəri", "Bakı Şəhəri"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l3-b3", type: "numeric", prompt: "'kompüter' sözündə neçə heca var?", answer: 3, xp: 15 },
            { id: "az6-fon-l3-b4", type: "multiple_choice", prompt: "İnsan adları necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "fərqi yoxdur", "dırnaqda"], correctIndex: 0, xp: 15 },
            { id: "az6-fon-l3-b5", type: "numeric", prompt: "'yaz-mı-şam' — 'yazmışam' sözündə neçə heca var?", answer: 3, xp: 15 },
          ],
        },
      ],
    },
  ],
};
