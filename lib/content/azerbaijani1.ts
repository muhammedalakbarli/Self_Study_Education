// Azərbaycan dili — 1-ci sinif proqramı (savad təlimi, Azərbaycan kurikuluma uyğun).
// Bölmələr: 1) Səslər və hərflər  2) Saitlər  3) Samitlər  4) Heca
// 5) Söz və cümlə  6) Oxu və nitq.
// 1-ci sinif üçün suallar ÇOX SADƏ: hərf tanıma, sait/samit, heca sayma. id prefiksi az1-*.

import type { Subject } from "../types";

export const azerbaijani1: Subject = {
  slug: "azerbaycan-dili-1",
  name: "Azərbaycan dili",
  grade: 1,
  icon: "A",
  color: "rose",
  units: [
    // ═══════════════ 1. Səslər və hərflər ═══════════════
    {
      id: "az1-ses",
      title: "Səslər və hərflər",
      description: "Səsləri eşidib hərfləri tanımaq, sözün ilk və son hərfini tapmaq.",
      lessons: [
        {
          id: "az1-ses-l1",
          title: "Hərfləri tanı",
          intro: "Sözlərin hansı hərflə başladığını tapaq.",
          sections: [
            { heading: "Səs və hərf", body: "Danışanda səs çıxarırıq, yazanda hərf yazırıq. Azərbaycan əlifbasında 32 hərf var. Hər söz bir hərflə başlayır: 'ana' — a hərfi ilə." },
          ],
          tasks: [
            { id: "az1-ses-l1-t1", type: "multiple_choice", prompt: "'ana' sözü hansı hərflə başlayır?", options: ["a", "n", "l", "m"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t2", type: "multiple_choice", prompt: "'baba' sözü hansı hərflə başlayır?", options: ["b", "a", "d", "n"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t3", type: "multiple_choice", prompt: "'kitab' sözü hansı hərflə başlayır?", options: ["k", "t", "b", "a"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t4", type: "multiple_choice", prompt: "'su' sözü hansı hərflə başlayır?", options: ["s", "u", "l", "n"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t5", type: "multiple_choice", prompt: "'alma' sözü hansı hərflə başlayır?", options: ["a", "l", "m", "n"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t6", type: "multiple_choice", prompt: "'dovşan' sözü hansı hərflə başlayır?", options: ["d", "o", "v", "ş"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t7", type: "multiple_choice", prompt: "'ev' sözü hansı hərflə başlayır?", options: ["e", "v", "l", "a"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t8", type: "multiple_choice", prompt: "'top' sözü hansı hərflə başlayır?", options: ["t", "o", "p", "s"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t9", type: "multiple_choice", prompt: "'ana' sözü hansı hərflə bitir?", options: ["a", "n", "m", "l"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t10", type: "multiple_choice", prompt: "'kitab' sözü hansı hərflə bitir?", options: ["b", "k", "t", "a"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t11", type: "multiple_choice", prompt: "'top' sözü hansı hərflə bitir?", options: ["p", "t", "o", "s"], correctIndex: 0, xp: 10 },
            { id: "az1-ses-l1-t12", type: "fill_blank", prompt: "'nar' sözünün ilk hərfini yaz.", accepted: ["n", "N"], xp: 10 },
            { id: "az1-ses-l1-t13", type: "fill_blank", prompt: "'gül' sözünün ilk hərfini yaz.", accepted: ["g", "G"], xp: 10 },
            { id: "az1-ses-l1-t14", type: "numeric", prompt: "Azərbaycan əlifbasında neçə hərf var?", answer: 32, xp: 10 },
            { id: "az1-ses-l1-t15", type: "multiple_choice", prompt: "'göl' sözü hansı hərflə başlayır?", options: ["g", "ö", "l", "k"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-ses-l1-b1", type: "fill_blank", prompt: "'armud' sözünün ilk hərfini yaz.", accepted: ["a", "A"], xp: 15 },
            { id: "az1-ses-l1-b2", type: "multiple_choice", prompt: "'quş' sözü hansı hərflə bitir?", options: ["ş", "q", "u", "s"], correctIndex: 0, xp: 15 },
            { id: "az1-ses-l1-b3", type: "fill_blank", prompt: "'balıq' sözünün son hərfini yaz.", accepted: ["q", "Q"], xp: 15 },
            { id: "az1-ses-l1-b4", type: "multiple_choice", prompt: "'çiçək' sözü hansı hərflə başlayır?", options: ["ç", "i", "ç", "k"], correctIndex: 0, xp: 15 },
            { id: "az1-ses-l1-b5", type: "multiple_choice", prompt: "Danışanda nə çıxarırıq?", options: ["səs", "hərf", "söz", "cümlə"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 2. Saitlər ═══════════════
    {
      id: "az1-sait",
      title: "Saitlər",
      description: "Sait səsləri tanımaq: a, e, ə, ı, i, o, ö, u, ü.",
      lessons: [
        {
          id: "az1-sait-l1",
          title: "Saitləri tanı",
          intro: "Saitlər asanlıqla, maneəsiz deyilən səslərdir.",
          sections: [
            { heading: "Saitlər", body: "Azərbaycan dilində 9 sait var: a, e, ə, ı, i, o, ö, u, ü. Saitləri deyəndə ağızda maneə olmur, ağzımızı aça bilirik." },
          ],
          tasks: [
            { id: "az1-sait-l1-t1", type: "numeric", prompt: "Azərbaycan dilində neçə sait var?", answer: 9, xp: 10 },
            { id: "az1-sait-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["a", "b", "k", "m"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t3", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["e", "d", "n", "s"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t4", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["ə", "t", "l", "r"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t5", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["o", "p", "ş", "ç"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t6", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["u", "v", "z", "g"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı sait DEYİL?", options: ["b", "a", "e", "o"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t8", type: "multiple_choice", prompt: "Aşağıdakılardan hansı sait DEYİL?", options: ["k", "i", "u", "ə"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t9", type: "multiple_choice", prompt: "'ana' sözündə neçə sait var? (a, a)", options: ["2", "1", "3", "0"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t10", type: "multiple_choice", prompt: "'top' sözündə hansı saitdir?", options: ["o", "t", "p", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t11", type: "multiple_choice", prompt: "'ev' sözündə hansı saitdir?", options: ["e", "v", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t12", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["ö", "s", "n", "d"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t13", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["ü", "y", "q", "x"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t14", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["ı", "l", "m", "r"], correctIndex: 0, xp: 10 },
            { id: "az1-sait-l1-t15", type: "multiple_choice", prompt: "'su' sözündə hansı saitdir?", options: ["u", "s", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-sait-l1-b1", type: "multiple_choice", prompt: "'alma' sözündə neçə sait var? (a, a)", options: ["2", "1", "3", "4"], correctIndex: 0, xp: 15 },
            { id: "az1-sait-l1-b2", type: "multiple_choice", prompt: "'kitab' sözündə neçə sait var? (i, a)", options: ["2", "1", "3", "4"], correctIndex: 0, xp: 15 },
            { id: "az1-sait-l1-b3", type: "multiple_choice", prompt: "Saitləri deyəndə ağızda nə olur?", options: ["maneə olmur", "maneə olur", "səs çıxmır", "hərf yazılır"], correctIndex: 0, xp: 15 },
            { id: "az1-sait-l1-b4", type: "multiple_choice", prompt: "Hansı sırada yalnız saitlər var?", options: ["a, e, o", "a, b, c", "k, l, m", "s, t, r"], correctIndex: 0, xp: 15 },
            { id: "az1-sait-l1-b5", type: "multiple_choice", prompt: "'göl' sözündə hansı saitdir?", options: ["ö", "g", "l", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 3. Samitlər ═══════════════
    {
      id: "az1-samit",
      title: "Samitlər",
      description: "Samit səsləri tanımaq və saitlərdən ayırmaq.",
      lessons: [
        {
          id: "az1-samit-l1",
          title: "Samitləri tanı",
          intro: "Samitlər deyilərkən ağızda maneə olan səslərdir.",
          sections: [
            { heading: "Samitlər", body: "Azərbaycan dilində 23 samit var: b, c, ç, d, f, g, ğ, h, x, j, k, q, l, m, n, p, r, s, ş, t, v, y, z. Samitləri deyəndə dil, dodaq və ya dişlər maneə yaradır." },
          ],
          tasks: [
            { id: "az1-samit-l1-t1", type: "numeric", prompt: "Azərbaycan dilində neçə samit var?", answer: 23, xp: 10 },
            { id: "az1-samit-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["b", "a", "e", "o"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t3", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["k", "i", "u", "ə"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t4", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["m", "a", "o", "ü"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t5", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["s", "e", "ı", "i"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t6", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samit DEYİL?", options: ["a", "b", "k", "s"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samit DEYİL?", options: ["o", "d", "n", "t"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t8", type: "multiple_choice", prompt: "'top' sözündə hansı samitdir?", options: ["t", "o", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t9", type: "multiple_choice", prompt: "'nar' sözündə neçə samit var? (n, r)", options: ["2", "1", "3", "0"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t10", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["r", "a", "e", "u"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t11", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["l", "i", "o", "ə"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t12", type: "multiple_choice", prompt: "Samitləri deyəndə ağızda nə olur?", options: ["maneə olur", "maneə olmur", "səs çıxmır", "heç nə"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t13", type: "multiple_choice", prompt: "Hansı sırada yalnız samitlər var?", options: ["b, k, s", "a, e, o", "i, u, ü", "a, b, e"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t14", type: "multiple_choice", prompt: "'su' sözündə hansı samitdir?", options: ["s", "u", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az1-samit-l1-t15", type: "multiple_choice", prompt: "'kitab' sözündə neçə samit var? (k, t, b)", options: ["3", "2", "4", "1"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-samit-l1-b1", type: "multiple_choice", prompt: "'alma' sözündə neçə samit var? (l, m)", options: ["2", "1", "3", "4"], correctIndex: 0, xp: 15 },
            { id: "az1-samit-l1-b2", type: "multiple_choice", prompt: "Sait və samit birlikdə nəyi əmələ gətirir?", options: ["hecanı/sözü", "cümləni yalnız", "mətni", "səhifəni"], correctIndex: 0, xp: 15 },
            { id: "az1-samit-l1-b3", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["ş", "a", "o", "u"], correctIndex: 0, xp: 15 },
            { id: "az1-samit-l1-b4", type: "multiple_choice", prompt: "9 sait + 23 samit = neçə hərf?", options: ["32", "30", "31", "33"], correctIndex: 0, xp: 15 },
            { id: "az1-samit-l1-b5", type: "multiple_choice", prompt: "'göl' sözündə neçə samit var? (g, l)", options: ["2", "1", "3", "0"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 4. Heca ═══════════════
    {
      id: "az1-heca",
      title: "Heca",
      description: "Sözləri hecalara bölmək. Sözdə neçə sait varsa, o qədər heca var.",
      lessons: [
        {
          id: "az1-heca-l1",
          title: "Sözü hecalara böl",
          intro: "Söz neçə saitdən ibarətdirsə, o qədər hecası var.",
          sections: [
            { heading: "Heca", body: "Sözü tələffüz edəndə hissə-hissə deyirik: a-na (2 heca), ki-tab (2 heca), al-ma (2 heca). Qayda: sözdə neçə sait varsa, o qədər heca var." },
          ],
          tasks: [
            { id: "az1-heca-l1-t1", type: "numeric", prompt: "'ana' sözündə neçə heca var? (a-na)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t2", type: "numeric", prompt: "'kitab' sözündə neçə heca var? (ki-tab)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t3", type: "numeric", prompt: "'alma' sözündə neçə heca var? (al-ma)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t4", type: "numeric", prompt: "'su' sözündə neçə heca var? (su)", answer: 1, xp: 10 },
            { id: "az1-heca-l1-t5", type: "numeric", prompt: "'top' sözündə neçə heca var? (top)", answer: 1, xp: 10 },
            { id: "az1-heca-l1-t6", type: "numeric", prompt: "'ev' sözündə neçə heca var? (ev)", answer: 1, xp: 10 },
            { id: "az1-heca-l1-t7", type: "numeric", prompt: "'məktəb' sözündə neçə heca var? (mək-təb)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t8", type: "numeric", prompt: "'balaca' sözündə neçə heca var? (ba-la-ca)", answer: 3, xp: 10 },
            { id: "az1-heca-l1-t9", type: "numeric", prompt: "'dovşan' sözündə neçə heca var? (dov-şan)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t10", type: "numeric", prompt: "'armud' sözündə neçə heca var? (ar-mud)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t11", type: "numeric", prompt: "'nar' sözündə neçə heca var? (nar)", answer: 1, xp: 10 },
            { id: "az1-heca-l1-t12", type: "numeric", prompt: "'ata' sözündə neçə heca var? (a-ta)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t13", type: "numeric", prompt: "'qələm' sözündə neçə heca var? (qə-ləm)", answer: 2, xp: 10 },
            { id: "az1-heca-l1-t14", type: "multiple_choice", prompt: "Sözdə heca sayını nə göstərir?", options: ["saitlərin sayı", "samitlərin sayı", "hərflərin sayı", "sözlərin sayı"], correctIndex: 0, xp: 10 },
            { id: "az1-heca-l1-t15", type: "numeric", prompt: "'kitabxana' sözündə neçə heca var? (ki-tab-xa-na)", answer: 4, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-heca-l1-b1", type: "numeric", prompt: "'ayaqqabı' sözündə neçə heca var? (a-yaq-qa-bı)", answer: 4, xp: 15 },
            { id: "az1-heca-l1-b2", type: "numeric", prompt: "'məktəbli' sözündə neçə heca var? (mək-təb-li)", answer: 3, xp: 15 },
            { id: "az1-heca-l1-b3", type: "multiple_choice", prompt: "'gül' sözü neçə hecadan ibarətdir?", options: ["1", "2", "3", "0"], correctIndex: 0, xp: 15 },
            { id: "az1-heca-l1-b4", type: "numeric", prompt: "'baba' sözündə neçə heca var? (ba-ba)", answer: 2, xp: 15 },
            { id: "az1-heca-l1-b5", type: "numeric", prompt: "'təbiət' sözündə neçə heca var? (tə-bi-ət)", answer: 3, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 5. Söz və cümlə ═══════════════
    {
      id: "az1-soz",
      title: "Söz və cümlə",
      description: "Sözlərdən cümlə qurmaq, böyük hərf və nöqtə.",
      lessons: [
        {
          id: "az1-soz-l1",
          title: "Söz və cümlə",
          intro: "Sözlər birləşib cümlə əmələ gətirir.",
          sections: [
            { heading: "Cümlə", body: "Bitmiş fikir bildirən sözlər qrupu cümlədir: 'Ana gəldi.' Cümlə böyük hərflə başlayır və nöqtə ilə bitir." },
          ],
          tasks: [
            { id: "az1-soz-l1-t1", type: "multiple_choice", prompt: "Cümlə hansı hərflə başlayır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "nöqtə ilə"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t2", type: "multiple_choice", prompt: "Nəqli cümlə hansı işarə ilə bitir?", options: ["nöqtə (.)", "vergül (,)", "sual işarəsi (?)", "heç bir"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t3", type: "multiple_choice", prompt: "'Ana gəldi.' neçə sözdən ibarətdir?", options: ["2", "1", "3", "4"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t4", type: "multiple_choice", prompt: "'Uşaq oynayır.' neçə sözdən ibarətdir?", options: ["2", "1", "3", "4"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t5", type: "multiple_choice", prompt: "Bitmiş fikir bildirən sözlər qrupu nədir?", options: ["cümlə", "heca", "hərf", "səs"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t6", type: "multiple_choice", prompt: "'ana' — bu nədir?", options: ["söz", "cümlə", "heca", "mətn"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t7", type: "multiple_choice", prompt: "'Quşlar uçur.' — bu nədir?", options: ["cümlə", "söz", "heca", "hərf"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t8", type: "multiple_choice", prompt: "İnsan adları hansı hərflə başlayır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t9", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Ayşə", "ayşə", "AYŞə", "ayŞə"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t10", type: "multiple_choice", prompt: "'Bahar gəldi.' cümləsi hansı işarə ilə bitir?", options: ["nöqtə", "vergül", "sual", "nida"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t11", type: "multiple_choice", prompt: "'Gül açdı.' neçə sözdən ibarətdir?", options: ["2", "1", "3", "4"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t12", type: "multiple_choice", prompt: "Sözlər birləşəndə nə əmələ gəlir?", options: ["cümlə", "hərf", "səs", "heca"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t13", type: "multiple_choice", prompt: "Sual cümləsi hansı işarə ilə bitir?", options: ["sual işarəsi (?)", "nöqtə (.)", "vergül (,)", "heç bir"], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t14", type: "multiple_choice", prompt: "Hansı düzgün cümlədir?", options: ["Uşaq gülür.", "uşaq gülür", "Uşaq gülür", "uşaq Gülür."], correctIndex: 0, xp: 10 },
            { id: "az1-soz-l1-t15", type: "multiple_choice", prompt: "'Mən məktəbə gedirəm.' neçə sözdən ibarətdir?", options: ["3", "2", "4", "1"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-soz-l1-b1", type: "multiple_choice", prompt: "Şəhər adları necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 15 },
            { id: "az1-soz-l1-b2", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Bakı", "bakı", "BAKı", "baKı"], correctIndex: 0, xp: 15 },
            { id: "az1-soz-l1-b3", type: "multiple_choice", prompt: "'Bu gün hava gözəldir.' neçə sözdən ibarətdir?", options: ["4", "3", "5", "2"], correctIndex: 0, xp: 15 },
            { id: "az1-soz-l1-b4", type: "multiple_choice", prompt: "Nida cümləsi hansı işarə ilə bitir?", options: ["nida işarəsi (!)", "nöqtə", "vergül", "sual"], correctIndex: 0, xp: 15 },
            { id: "az1-soz-l1-b5", type: "multiple_choice", prompt: "'İt hürür.' — bu nədir?", options: ["cümlə", "söz", "heca", "hərf"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 6. Oxu və nitq ═══════════════
    {
      id: "az1-oxu",
      title: "Oxu və nitq",
      description: "Sadə sözləri oxumaq, şəkil-söz uyğunluğu və nəzakət sözləri.",
      lessons: [
        {
          id: "az1-oxu-l1",
          title: "Oxu və tanı",
          intro: "Sözləri oxuyub şəkillə uyğunlaşdıraq.",
          sections: [
            { heading: "Oxu", body: "Hərfləri birləşdirib söz oxuyuruq: k + i + t + a + b = kitab. Şəkli görüb sözünü tapırıq." },
          ],
          tasks: [
            { id: "az1-oxu-l1-t1", type: "multiple_choice", prompt: "🍎 — bu nədir?", options: ["alma", "armud", "üzüm", "nar"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t2", type: "multiple_choice", prompt: "🐱 — bu nədir?", options: ["pişik", "it", "quş", "balıq"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t3", type: "multiple_choice", prompt: "🐶 — bu nədir?", options: ["it", "pişik", "at", "inək"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t4", type: "multiple_choice", prompt: "☀️ — bu nədir?", options: ["günəş", "ay", "ulduz", "bulud"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t5", type: "multiple_choice", prompt: "🌸 — bu nədir?", options: ["çiçək", "ağac", "ot", "yarpaq"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t6", type: "multiple_choice", prompt: "🏠 — bu nədir?", options: ["ev", "məktəb", "mağaza", "körpü"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t7", type: "multiple_choice", prompt: "📖 — bu nədir?", options: ["kitab", "dəftər", "qələm", "çanta"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t8", type: "multiple_choice", prompt: "🐟 — bu nədir?", options: ["balıq", "quş", "pişik", "dovşan"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t9", type: "multiple_choice", prompt: "🚗 — bu nədir?", options: ["maşın", "avtobus", "təyyarə", "qatar"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t10", type: "multiple_choice", prompt: "Kimsə sənə kömək etdi. Nə deyərsən?", options: ["Sağ ol / təşəkkür", "Salam", "Xeyr", "Yox"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t11", type: "multiple_choice", prompt: "Səhər böyüklərə nə deyirik?", options: ["Sabahınız xeyir", "Gecən xeyrə", "Sağ ol", "Yox"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t12", type: "multiple_choice", prompt: "'k + i + t + a + b' hərflərindən hansı söz alınır?", options: ["kitab", "kabit", "tabik", "bakit"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t13", type: "multiple_choice", prompt: "'a + n + a' hərflərindən hansı söz alınır?", options: ["ana", "naa", "aan", "naa"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t14", type: "multiple_choice", prompt: "🐦 — bu nədir?", options: ["quş", "balıq", "pişik", "at"], correctIndex: 0, xp: 10 },
            { id: "az1-oxu-l1-t15", type: "multiple_choice", prompt: "Nəsə xahiş edəndə hansı nəzakət sözünü deyirik?", options: ["zəhmət olmasa", "yox", "get", "dur"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-oxu-l1-b1", type: "multiple_choice", prompt: "'s + u' hərflərindən hansı söz alınır?", options: ["su", "us", "sus", "uu"], correctIndex: 0, xp: 15 },
            { id: "az1-oxu-l1-b2", type: "multiple_choice", prompt: "🌙 — bu nədir?", options: ["ay", "günəş", "ulduz", "bulud"], correctIndex: 0, xp: 15 },
            { id: "az1-oxu-l1-b3", type: "multiple_choice", prompt: "Yaşlı adamla necə danışmalıyıq?", options: ["nəzakətlə (Siz)", "qışqıraraq", "gülərək", "susaraq"], correctIndex: 0, xp: 15 },
            { id: "az1-oxu-l1-b4", type: "multiple_choice", prompt: "🍞 — bu nədir?", options: ["çörək", "alma", "su", "süd"], correctIndex: 0, xp: 15 },
            { id: "az1-oxu-l1-b5", type: "multiple_choice", prompt: "'a + t' hərflərindən hansı söz alınır?", options: ["at", "ta", "aat", "tt"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 7. Qalın və incə saitlər ═══════════════
    {
      id: "az1-qalinince",
      title: "Qalın və incə saitlər",
      description: "Saitlərin qalın (a, ı, o, u) və incə (e, ə, i, ö, ü) qruplara ayrılması.",
      lessons: [
        {
          id: "az1-qalinince-l1",
          title: "Qalın və incə saitlər",
          intro: "Saitlər iki qrupa ayrılır: qalın və incə.",
          sections: [
            { heading: "İki qrup", body: "Qalın saitlər: a, ı, o, u. İncə saitlər: e, ə, i, ö, ü. Sait 9-dur: 4 qalın, 5 incə." },
          ],
          tasks: [
            { id: "az1-qalinince-l1-t1", type: "multiple_choice", prompt: "Hansı sırada yalnız QALIN saitlər var?", options: ["e, ə, i", "a, ı, o", "ö, ü, e", "i, ö, ü"], correctIndex: 1, xp: 10 },
            { id: "az1-qalinince-l1-t2", type: "multiple_choice", prompt: "Hansı sırada yalnız İNCƏ saitlər var?", options: ["a, o, u", "ı, a, o", "e, ə, i", "a, ı, u"], correctIndex: 2, xp: 10 },
            { id: "az1-qalinince-l1-t3", type: "multiple_choice", prompt: "'a' saiti hansı qrupdandır?", options: ["incə", "qalın", "samit", "heç biri"], correctIndex: 1, xp: 10 },
            { id: "az1-qalinince-l1-t4", type: "multiple_choice", prompt: "'ə' saiti hansı qrupdandır?", options: ["qalın", "samit", "incə", "heç biri"], correctIndex: 2, xp: 10 },
            { id: "az1-qalinince-l1-t5", type: "multiple_choice", prompt: "'o' saiti hansı qrupdandır?", options: ["qalın", "incə", "samit", "rəqəm"], correctIndex: 0, xp: 10 },
            { id: "az1-qalinince-l1-t6", type: "multiple_choice", prompt: "'ü' saiti hansı qrupdandır?", options: ["qalın", "incə", "samit", "heç biri"], correctIndex: 1, xp: 10 },
            { id: "az1-qalinince-l1-t7", type: "numeric", prompt: "Neçə qalın sait var?", answer: 4, xp: 10 },
            { id: "az1-qalinince-l1-t8", type: "numeric", prompt: "Neçə incə sait var?", answer: 5, xp: 10 },
            { id: "az1-qalinince-l1-t9", type: "multiple_choice", prompt: "'alma' sözündəki saitlər (a, a) hansı qrupdandır?", options: ["incə", "qalın", "qarışıq", "samit"], correctIndex: 1, xp: 10 },
            { id: "az1-qalinince-l1-t10", type: "multiple_choice", prompt: "'çiçək' sözündəki saitlər (i, ə) hansı qrupdandır?", options: ["qalın", "incə", "samit", "rəqəm"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "az1-qalinince-l1-b1", type: "multiple_choice", prompt: "'oxu' sözündəki saitlər (o, u) hansı qrupdandır?", options: ["qalın", "incə", "qarışıq", "yoxdur"], correctIndex: 0, xp: 15 },
            { id: "az1-qalinince-l1-b2", type: "multiple_choice", prompt: "Hansı söz yalnız incə saitlidir?", options: ["ana", "qapı", "sevgi", "araba"], correctIndex: 2, xp: 15 },
            { id: "az1-qalinince-l1-b3", type: "numeric", prompt: "Cəmi neçə sait var?", answer: 9, xp: 15 },
            { id: "az1-qalinince-l1-b4", type: "multiple_choice", prompt: "'ı' saiti hansı qrupdandır?", options: ["incə", "samit", "qalın", "heç biri"], correctIndex: 2, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 8. Kim? Nə? Nə edir? ═══════════════
    {
      id: "az1-kimne",
      title: "Kim? Nə? Nə edir?",
      description: "Sözün mənası: canlını (kim?), əşyanı (nə?) və hərəkəti (nə edir?) bildirən sözlər.",
      lessons: [
        {
          id: "az1-kimne-l1",
          title: "Kim? Nə? Nə edir?",
          intro: "Sözlər canlını, əşyanı və ya hərəkəti bildirir.",
          sections: [
            { heading: "Suallar", body: "İnsan/heyvan → 'kim?' (ana, pişik). Əşya → 'nə?' (kitab, alma). Hərəkət → 'nə edir?' (qaçır, oxuyur)." },
          ],
          tasks: [
            { id: "az1-kimne-l1-t1", type: "multiple_choice", prompt: "'kitab' sözü hansı suala cavab verir?", options: ["kim?", "nə?", "nə edir?", "necə?"], correctIndex: 1, xp: 10 },
            { id: "az1-kimne-l1-t2", type: "multiple_choice", prompt: "'ana' sözü hansı suala cavab verir?", options: ["kim?", "nə?", "nə edir?", "harada?"], correctIndex: 0, xp: 10 },
            { id: "az1-kimne-l1-t3", type: "multiple_choice", prompt: "'qaçır' sözü hansı suala cavab verir?", options: ["kim?", "nə?", "nə edir?", "neçə?"], correctIndex: 2, xp: 10 },
            { id: "az1-kimne-l1-t4", type: "multiple_choice", prompt: "'alma' sözü hansı suala cavab verir?", options: ["nə edir?", "kim?", "nə?", "harada?"], correctIndex: 2, xp: 10 },
            { id: "az1-kimne-l1-t5", type: "multiple_choice", prompt: "'oxuyur' sözü hansı suala cavab verir?", options: ["nə edir?", "kim?", "nə?", "necə?"], correctIndex: 0, xp: 10 },
            { id: "az1-kimne-l1-t6", type: "multiple_choice", prompt: "'müəllim' sözü hansı suala cavab verir?", options: ["nə?", "nə edir?", "kim?", "harada?"], correctIndex: 2, xp: 10 },
            { id: "az1-kimne-l1-t7", type: "multiple_choice", prompt: "'qələm' sözü hansı suala cavab verir?", options: ["kim?", "nə edir?", "necə?", "nə?"], correctIndex: 3, xp: 10 },
            { id: "az1-kimne-l1-t8", type: "multiple_choice", prompt: "'uçur' sözü hansı suala cavab verir?", options: ["nə edir?", "nə?", "kim?", "harada?"], correctIndex: 0, xp: 10 },
            { id: "az1-kimne-l1-t9", type: "multiple_choice", prompt: "'pişik' sözü hansı suala cavab verir?", options: ["nə?", "kim?", "nə edir?", "neçə?"], correctIndex: 1, xp: 10 },
            { id: "az1-kimne-l1-t10", type: "multiple_choice", prompt: "Hansı söz hərəkət bildirir?", options: ["ev", "gülür", "top", "su"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "az1-kimne-l1-b1", type: "multiple_choice", prompt: "Hansı söz əşya bildirir?", options: ["yazır", "stol", "gedir", "oynayır"], correctIndex: 1, xp: 15 },
            { id: "az1-kimne-l1-b2", type: "multiple_choice", prompt: "Hansı söz canlı (kim?) bildirir?", options: ["daş", "quş", "kitab", "qapı"], correctIndex: 1, xp: 15 },
            { id: "az1-kimne-l1-b3", type: "multiple_choice", prompt: "'Uşaq oynayır.' — 'oynayır' hansı suala cavabdır?", options: ["kim?", "nə?", "nə edir?", "harada?"], correctIndex: 2, xp: 15 },
            { id: "az1-kimne-l1-b4", type: "multiple_choice", prompt: "Hansı söz hərəkət bildirmir?", options: ["qaçır", "gülür", "masa", "yeyir"], correctIndex: 2, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 9. Nəzakət və danışıq ═══════════════
    {
      id: "az1-nezaket",
      title: "Nəzakət və danışıq",
      description: "Salamlaşma, təşəkkür və nəzakət sözləri — gündəlik danışıq.",
      lessons: [
        {
          id: "az1-nezaket-l1",
          title: "Nəzakət sözləri",
          intro: "Nəzakətli olmaq üçün gözəl sözlər deyirik.",
          sections: [
            { heading: "Nəzakət sözləri", body: "Salam, sağ ol / təşəkkür edirəm, buyurun, zəhmət olmasa, bağışlayın, xudahafiz. Böyüklərə 'Siz' deyirik." },
          ],
          tasks: [
            { id: "az1-nezaket-l1-t1", type: "multiple_choice", prompt: "Səhər görüşəndə nə deyirik?", options: ["Sabahınız xeyir", "Gecən xeyrə", "Xudahafiz", "Yox"], correctIndex: 0, xp: 10 },
            { id: "az1-nezaket-l1-t2", type: "multiple_choice", prompt: "Kimsə sənə kömək etdi. Nə deyərsən?", options: ["Get", "Təşəkkür edirəm", "Yox", "Dur"], correctIndex: 1, xp: 10 },
            { id: "az1-nezaket-l1-t3", type: "multiple_choice", prompt: "Nəsə xahiş edəndə nə deyirik?", options: ["Tez ol", "Ver", "Zəhmət olmasa", "Yox"], correctIndex: 2, xp: 10 },
            { id: "az1-nezaket-l1-t4", type: "multiple_choice", prompt: "Ayrılanda nə deyirik?", options: ["Salam", "Sabahınız xeyir", "Buyurun", "Sağ ol, xudahafiz"], correctIndex: 3, xp: 10 },
            { id: "az1-nezaket-l1-t5", type: "multiple_choice", prompt: "Səhvin üçün nə deyirsən?", options: ["Bağışlayın", "Sağ ol", "Salam", "Buyurun"], correctIndex: 0, xp: 10 },
            { id: "az1-nezaket-l1-t6", type: "multiple_choice", prompt: "Böyüklərə necə müraciət edirik?", options: ["'sən' deyə", "'Siz' deyə", "adı ilə", "qışqıraraq"], correctIndex: 1, xp: 10 },
            { id: "az1-nezaket-l1-t7", type: "multiple_choice", prompt: "Qonaq gələndə nə deyirik?", options: ["Get", "Xoş gəlmisiniz", "Yox", "Sonra"], correctIndex: 1, xp: 10 },
            { id: "az1-nezaket-l1-t8", type: "multiple_choice", prompt: "Kimsə 'sağ ol' dedi. Cavabında nə deyərsən?", options: ["Dəyməz / buyurun", "Yox", "Get", "Bilmirəm"], correctIndex: 0, xp: 10 },
            { id: "az1-nezaket-l1-t9", type: "multiple_choice", prompt: "Yeməkdən əvvəl/sonra nə demək gözəldir?", options: ["Nuş olsun / afiyət olsun", "Get", "Yox", "Sonra"], correctIndex: 0, xp: 10 },
            { id: "az1-nezaket-l1-t10", type: "multiple_choice", prompt: "Nəzakətli danışıq necə olur?", options: ["qışqıraraq", "təhqir edərək", "sakit və hörmətlə", "gülərək"], correctIndex: 2, xp: 15 },
          ],
          bonusTasks: [
            { id: "az1-nezaket-l1-b1", type: "multiple_choice", prompt: "Sinifə girəndə müəllimə nə deyirik?", options: ["Salam / Sabahınız xeyir", "Get", "Yox", "Sonra"], correctIndex: 0, xp: 15 },
            { id: "az1-nezaket-l1-b2", type: "multiple_choice", prompt: "Kimisə narahat etdin. Nə deyirsən?", options: ["Sağ ol", "Bağışlayın", "Salam", "Buyurun"], correctIndex: 1, xp: 15 },
            { id: "az1-nezaket-l1-b3", type: "multiple_choice", prompt: "Nəyisə təklif edəndə nə deyirik?", options: ["Buyurun", "Get", "Yox", "Tez ol"], correctIndex: 0, xp: 15 },
            { id: "az1-nezaket-l1-b4", type: "multiple_choice", prompt: "Nəzakət sözü hansıdır?", options: ["ver", "təşəkkür edirəm", "tez ol", "dur"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },
  ],
};
