// Azərbaycan dili — 2-ci sinif proqramı (Azərbaycan kurikuluma uyğun).
// Bölmələr: 1) Əlifba sırası  2) Qalın və incə saitlər  3) Əşyanın adı (isim)
// 4) Əlamət bildirən sözlər (sifət)  5) Hərəkət bildirən sözlər (feil)  6) Sözün mənası və orfoqrafiya.
// 2-ci sinif üçün sadə. id prefiksi az2-*.

import type { Subject } from "../types";

export const azerbaijani2: Subject = {
  slug: "azerbaycan-dili-2",
  name: "Azərbaycan dili",
  grade: 2,
  icon: "A",
  color: "rose",
  units: [
    // ═══════════════ 1. Əlifba sırası ═══════════════
    {
      id: "az2-elifba",
      title: "Əlifba sırası",
      description: "Hərfləri əlifba sırası ilə düzmək və lüğətdə söz axtarmaq.",
      lessons: [
        {
          id: "az2-elifba-l1",
          title: "Əlifba sırası",
          intro: "Hərflərin əlifbadakı sırasını öyrənək.",
          sections: [
            { heading: "Əlifba", body: "Azərbaycan əlifbasında 32 hərf müəyyən sıra ilə düzülür: a, b, c, ç, d, e, ə, f, g, ğ, h, x, ı, i, j, k, q, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z." },
            { heading: "Faydası", body: "Lüğətdə sözlər əlifba sırası ilə düzülür. Bu, sözü tez tapmağa kömək edir." },
          ],
          tasks: [
            { id: "az2-elifba-l1-t1", type: "multiple_choice", prompt: "Əlifbada 'a'-dan sonra hansı hərf gəlir?", options: ["b", "c", "d", "e"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t2", type: "multiple_choice", prompt: "Əlifbada ilk hərf hansıdır?", options: ["a", "b", "z", "e"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t3", type: "multiple_choice", prompt: "Əlifbada son hərf hansıdır?", options: ["z", "y", "a", "v"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t4", type: "multiple_choice", prompt: "'b' və 'c' hərflərindən hansı əvvəl gəlir?", options: ["b", "c", "bərabər", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t5", type: "multiple_choice", prompt: "'m' və 'n' hərflərindən hansı əvvəl gəlir?", options: ["m", "n", "bərabər", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t6", type: "multiple_choice", prompt: "'d'-dən sonra hansı hərf gəlir?", options: ["e", "c", "b", "f"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t7", type: "multiple_choice", prompt: "Lüğətdə sözlər necə düzülür?", options: ["əlifba sırası ilə", "uzunluğuna görə", "təsadüfi", "rəngə görə"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t8", type: "multiple_choice", prompt: "'alma' və 'baba' sözlərindən hansı lüğətdə əvvəl gəlir?", options: ["alma", "baba", "bərabər", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t9", type: "multiple_choice", prompt: "'kitab' və 'su' sözlərindən hansı lüğətdə əvvəl gəlir?", options: ["kitab", "su", "bərabər", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t10", type: "multiple_choice", prompt: "'r' və 's' hərflərindən hansı əvvəl gəlir?", options: ["r", "s", "bərabər", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t11", type: "numeric", prompt: "Əlifbada neçə hərf var?", answer: 32, xp: 10 },
            { id: "az2-elifba-l1-t12", type: "multiple_choice", prompt: "'e'-dən sonra hansı hərf gəlir?", options: ["ə", "d", "f", "c"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t13", type: "multiple_choice", prompt: "'ana', 'baba', 'dağ' sözlərindən hansı əlifbada birinci gəlir?", options: ["ana", "baba", "dağ", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t14", type: "multiple_choice", prompt: "'z'-dən əvvəl hansı hərf gəlir?", options: ["y", "v", "a", "s"], correctIndex: 0, xp: 10 },
            { id: "az2-elifba-l1-t15", type: "multiple_choice", prompt: "'top' və 'ağac' sözlərindən hansı lüğətdə əvvəl gəlir?", options: ["ağac", "top", "bərabər", "heç biri"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az2-elifba-l1-b1", type: "multiple_choice", prompt: "'gül', 'çiçək', 'ağac' — əlifbada birinci gələn hansıdır?", options: ["ağac", "çiçək", "gül", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-elifba-l1-b2", type: "multiple_choice", prompt: "'k' və 'q' hərflərindən hansı əvvəl gəlir?", options: ["k", "q", "bərabər", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-elifba-l1-b3", type: "multiple_choice", prompt: "'ata' və 'ana' sözlərindən hansı lüğətdə əvvəl gəlir? (2-ci hərfə bax)", options: ["ana", "ata", "bərabər", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-elifba-l1-b4", type: "multiple_choice", prompt: "'ö'-dən sonra hansı hərf gəlir?", options: ["p", "o", "r", "n"], correctIndex: 0, xp: 15 },
            { id: "az2-elifba-l1-b5", type: "multiple_choice", prompt: "'su', 'sən', 'saç' — əlifbada birinci gələn hansıdır? (2-ci hərf)", options: ["saç", "sən", "su", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 2. Qalın və incə saitlər ═══════════════
    {
      id: "az2-sait",
      title: "Qalın və incə saitlər",
      description: "Saitləri qalın (a, ı, o, u) və incə (e, ə, i, ö, ü) saitlərə ayırmaq.",
      lessons: [
        {
          id: "az2-sait-l1",
          title: "Qalın və incə saitlər",
          intro: "9 sait iki qrupa bölünür: qalın və incə.",
          sections: [
            { heading: "Qalın saitlər", body: "a, ı, o, u — bunlar qalın saitlərdir (4 dənə)." },
            { heading: "İncə saitlər", body: "e, ə, i, ö, ü — bunlar incə saitlərdir (5 dənə)." },
          ],
          tasks: [
            { id: "az2-sait-l1-t1", type: "multiple_choice", prompt: "Aşağıdakılardan hansı qalın saitdir?", options: ["a", "e", "i", "ə"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı incə saitdir?", options: ["e", "a", "o", "u"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t3", type: "multiple_choice", prompt: "'o' saiti hansı qrupdandır?", options: ["qalın", "incə", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t4", type: "multiple_choice", prompt: "'ə' saiti hansı qrupdandır?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t5", type: "multiple_choice", prompt: "Aşağıdakılardan hansı qalın saitdir?", options: ["u", "i", "ö", "ü"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t6", type: "multiple_choice", prompt: "Aşağıdakılardan hansı incə saitdir?", options: ["ü", "a", "ı", "o"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t7", type: "numeric", prompt: "Neçə qalın sait var? (a, ı, o, u)", answer: 4, xp: 10 },
            { id: "az2-sait-l1-t8", type: "numeric", prompt: "Neçə incə sait var? (e, ə, i, ö, ü)", answer: 5, xp: 10 },
            { id: "az2-sait-l1-t9", type: "multiple_choice", prompt: "'ı' saiti hansı qrupdandır?", options: ["qalın", "incə", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t10", type: "multiple_choice", prompt: "'i' saiti hansı qrupdandır?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t11", type: "multiple_choice", prompt: "'alma' sözündəki saitlər (a, a) hansı qrupdandır?", options: ["qalın", "incə", "qarışıq", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t12", type: "multiple_choice", prompt: "'ev' sözündəki sait (e) hansı qrupdandır?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t13", type: "multiple_choice", prompt: "Hansı sırada yalnız qalın saitlər var?", options: ["a, o, u", "e, i, ə", "a, e, i", "o, ö, ü"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t14", type: "multiple_choice", prompt: "Hansı sırada yalnız incə saitlər var?", options: ["e, ə, i", "a, ı, o", "a, e, o", "u, ü, ı"], correctIndex: 0, xp: 10 },
            { id: "az2-sait-l1-t15", type: "multiple_choice", prompt: "'ö' saiti hansı qrupdandır?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az2-sait-l1-b1", type: "multiple_choice", prompt: "'gül' sözündəki sait (ü) hansı qrupdandır?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-sait-l1-b2", type: "multiple_choice", prompt: "'qutu' sözündəki saitlər (u, u) hansı qrupdandır?", options: ["qalın", "incə", "qarışıq", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-sait-l1-b3", type: "numeric", prompt: "4 qalın + 5 incə = neçə sait?", answer: 9, xp: 15 },
            { id: "az2-sait-l1-b4", type: "multiple_choice", prompt: "'kitab' sözündə qalın saitlər (i incədir, a qalın) — 'a' hansı qrupdandır?", options: ["qalın", "incə", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-sait-l1-b5", type: "multiple_choice", prompt: "'ördək' sözündəki 'ö' saiti hansı qrupdandır?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 3. Əşyanın adı (isim) ═══════════════
    {
      id: "az2-isim",
      title: "Əşyanın adı (isim)",
      description: "Əşyanın adını bildirən, 'kim?', 'nə?' suallarına cavab verən sözlər.",
      lessons: [
        {
          id: "az2-isim-l1",
          title: "Əşyanın adını bildirən sözlər",
          intro: "'Kim?' və 'nə?' suallarına cavab verən sözlər.",
          sections: [
            { heading: "Əşyanın adı", body: "İnsanları, əşyaları, heyvanları, yerləri adlandıran sözlər əşyanın adıdır (isim). 'Kim?' (insan/heyvan) və ya 'nə?' (əşya) suallarına cavab verir: ana, kitab, pişik, məktəb." },
          ],
          tasks: [
            { id: "az2-isim-l1-t1", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adıdır?", options: ["kitab", "oxumaq", "gözəl", "tez"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adıdır?", options: ["pişik", "qaçmaq", "böyük", "yavaş"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t3", type: "multiple_choice", prompt: "'ana' sözü hansı suala cavab verir?", options: ["kim?", "necə?", "nə edir?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t4", type: "multiple_choice", prompt: "'kitab' sözü hansı suala cavab verir?", options: ["nə?", "kim?", "necə?", "nə edir?"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t5", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adı DEYİL?", options: ["oxumaq", "kitab", "məktəb", "uşaq"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t6", type: "multiple_choice", prompt: "'müəllim' sözü hansı suala cavab verir?", options: ["kim?", "nə?", "necə?", "harada?"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adıdır?", options: ["ev", "gəlmək", "isti", "çox"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t8", type: "multiple_choice", prompt: "Heyvan adları hansı suala cavab verir?", options: ["kim?", "necə?", "nə edir?", "haçan?"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t9", type: "multiple_choice", prompt: "'Uşaq kitab oxuyur.' cümləsində əşya adları hansılardır?", options: ["uşaq, kitab", "oxuyur", "uşaq oxuyur", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t10", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adıdır?", options: ["dağ", "böyük", "getmək", "gözəl"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t11", type: "multiple_choice", prompt: "'çanta' sözü hansı suala cavab verir?", options: ["nə?", "kim?", "necə?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t12", type: "multiple_choice", prompt: "İnsan adları (Ayşə, Elçin) necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t13", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adıdır?", options: ["su", "içmək", "soyuq", "tez"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t14", type: "multiple_choice", prompt: "'Bakı' sözü nəyin adıdır?", options: ["şəhərin (yer)", "əşyanın", "heyvanın", "rəngin"], correctIndex: 0, xp: 10 },
            { id: "az2-isim-l1-t15", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adıdır?", options: ["quş", "uçmaq", "yaşıl", "yüksək"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az2-isim-l1-b1", type: "multiple_choice", prompt: "'Gözəl gül bağçada açdı.' — əşya adları hansılardır?", options: ["gül, bağça", "gözəl", "açdı", "gözəl açdı"], correctIndex: 0, xp: 15 },
            { id: "az2-isim-l1-b2", type: "multiple_choice", prompt: "Aşağıdakı sıradan əşya adını seç.", options: ["dəftər", "yazmaq", "səliqəli", "dünən"], correctIndex: 0, xp: 15 },
            { id: "az2-isim-l1-b3", type: "multiple_choice", prompt: "'kim?' sualına cavab verən söz kimi/nəyi bildirir?", options: ["insan və ya heyvanı", "əşyanı", "rəngi", "hərəkəti"], correctIndex: 0, xp: 15 },
            { id: "az2-isim-l1-b4", type: "multiple_choice", prompt: "'nə?' sualına cavab verən söz nəyi bildirir?", options: ["cansız əşyanı", "insanı", "hərəkəti", "əlaməti"], correctIndex: 0, xp: 15 },
            { id: "az2-isim-l1-b5", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əşyanın adı DEYİL?", options: ["qırmızı", "alma", "top", "ev"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 4. Əlamət bildirən sözlər (sifət) ═══════════════
    {
      id: "az2-sifet",
      title: "Əlamət bildirən sözlər",
      description: "Əşyanın əlamətini bildirən, 'necə?', 'nə cür?' suallarına cavab verən sözlər.",
      lessons: [
        {
          id: "az2-sifet-l1",
          title: "Əlamət bildirən sözlər",
          intro: "Əşyanın rəngini, ölçüsünü, keyfiyyətini bildirən sözlər.",
          sections: [
            { heading: "Əlamət", body: "Əşyanın əlamətini (rəng, ölçü, keyfiyyət) bildirən, 'necə?', 'nə cür?' suallarına cavab verən sözlər: qırmızı, böyük, gözəl, isti, təmiz." },
          ],
          tasks: [
            { id: "az2-sifet-l1-t1", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əlamət bildirir?", options: ["gözəl", "kitab", "oxumaq", "uşaq"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əlamət bildirir?", options: ["böyük", "ev", "getmək", "ana"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t3", type: "multiple_choice", prompt: "Əlamət bildirən sözlər hansı suala cavab verir?", options: ["necə? nə cür?", "kim? nə?", "nə edir?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t4", type: "multiple_choice", prompt: "'qırmızı' sözü nəyi bildirir?", options: ["rəngi (əlamət)", "əşyanı", "hərəkəti", "sayı"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t5", type: "multiple_choice", prompt: "'Gözəl gül' — 'gözəl' sözü nəyi bildirir?", options: ["əlaməti", "əşyanı", "hərəkəti", "sayı"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t6", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əlamət bildirir?", options: ["isti", "su", "içmək", "yay"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t7", type: "multiple_choice", prompt: "'böyük ev' — hansı söz əlamət bildirir?", options: ["böyük", "ev", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t8", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əlamət bildirir?", options: ["təmiz", "otaq", "yumaq", "sabah"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t9", type: "multiple_choice", prompt: "'soyuq su' — hansı söz əlamət bildirir?", options: ["soyuq", "su", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t10", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əlamət bildirir?", options: ["yaşıl", "yarpaq", "düşmək", "payız"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t11", type: "multiple_choice", prompt: "'ağ qar' — hansı söz əlamət bildirir?", options: ["ağ", "qar", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t12", type: "multiple_choice", prompt: "'yüksək dağ' — hansı söz əlamət bildirir?", options: ["yüksək", "dağ", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t13", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əlamət DEYİL?", options: ["kitab", "maraqlı", "qalın", "yeni"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t14", type: "multiple_choice", prompt: "'şirin alma' — hansı söz əlamət bildirir?", options: ["şirin", "alma", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-sifet-l1-t15", type: "multiple_choice", prompt: "'kiçik' sözünün əksi (antonim) hansıdır?", options: ["böyük", "gözəl", "ağ", "isti"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az2-sifet-l1-b1", type: "multiple_choice", prompt: "'Uzun, qara saç' — neçə əlamət bildirən söz var?", options: ["2 (uzun, qara)", "1", "3", "0"], correctIndex: 0, xp: 15 },
            { id: "az2-sifet-l1-b2", type: "multiple_choice", prompt: "'isti' sözünün əksi hansıdır?", options: ["soyuq", "böyük", "təmiz", "yeni"], correctIndex: 0, xp: 15 },
            { id: "az2-sifet-l1-b3", type: "multiple_choice", prompt: "'təmiz' sözünün əksi hansıdır?", options: ["çirkli", "böyük", "isti", "gözəl"], correctIndex: 0, xp: 15 },
            { id: "az2-sifet-l1-b4", type: "multiple_choice", prompt: "Əlamət bildirən söz hansı sözü izah edir?", options: ["əşya adını", "hərəkəti", "sayı", "yeri"], correctIndex: 0, xp: 15 },
            { id: "az2-sifet-l1-b5", type: "multiple_choice", prompt: "'yeni' sözünün əksi hansıdır?", options: ["köhnə", "böyük", "isti", "ağ"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 5. Hərəkət bildirən sözlər (feil) ═══════════════
    {
      id: "az2-feil",
      title: "Hərəkət bildirən sözlər",
      description: "Hərəkəti bildirən, 'nə edir?', 'nə etdi?' suallarına cavab verən sözlər.",
      lessons: [
        {
          id: "az2-feil-l1",
          title: "Hərəkət bildirən sözlər",
          intro: "İşi, hərəkəti bildirən sözlər.",
          sections: [
            { heading: "Hərəkət", body: "İşi, hərəkəti bildirən, 'nə edir?', 'nə etdi?', 'nə edəcək?' suallarına cavab verən sözlər (feil): oxuyur, gəldi, qaçır, yazacaq." },
          ],
          tasks: [
            { id: "az2-feil-l1-t1", type: "multiple_choice", prompt: "Aşağıdakılardan hansı hərəkət bildirir?", options: ["oxuyur", "kitab", "gözəl", "uşaq"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı hərəkət bildirir?", options: ["qaçır", "ev", "böyük", "ana"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t3", type: "multiple_choice", prompt: "Hərəkət bildirən sözlər hansı suala cavab verir?", options: ["nə edir?", "kim? nə?", "necə?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t4", type: "multiple_choice", prompt: "'gəldi' sözü hansı suala cavab verir?", options: ["nə etdi?", "kim?", "necə?", "nə?"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t5", type: "multiple_choice", prompt: "'Uşaq oynayır.' — hansı söz hərəkət bildirir?", options: ["oynayır", "uşaq", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t6", type: "multiple_choice", prompt: "Aşağıdakılardan hansı hərəkət bildirir?", options: ["yazır", "dəftər", "təmiz", "sabah"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı hərəkət DEYİL?", options: ["kitab", "gəlir", "oxudu", "yazacaq"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t8", type: "multiple_choice", prompt: "'Quş uçur.' — hansı söz hərəkət bildirir?", options: ["uçur", "quş", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t9", type: "multiple_choice", prompt: "Aşağıdakılardan hansı hərəkət bildirir?", options: ["gülür", "gül", "gözəl", "bağ"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t10", type: "multiple_choice", prompt: "'içdi' sözü hansı zamana aiddir?", options: ["keçmiş", "indiki", "gələcək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t11", type: "multiple_choice", prompt: "'gedəcək' sözü hansı zamana aiddir?", options: ["gələcək", "keçmiş", "indiki", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t12", type: "multiple_choice", prompt: "'oxuyur' sözü hansı zamana aiddir?", options: ["indiki", "keçmiş", "gələcək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t13", type: "multiple_choice", prompt: "'Ana çörək bişirir.' — hansı söz hərəkət bildirir?", options: ["bişirir", "ana", "çörək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t14", type: "multiple_choice", prompt: "Aşağıdakılardan hansı hərəkət bildirir?", options: ["danışır", "söz", "hündür", "dünən"], correctIndex: 0, xp: 10 },
            { id: "az2-feil-l1-t15", type: "multiple_choice", prompt: "'yatdı' sözü hansı suala cavab verir?", options: ["nə etdi?", "kim?", "necə?", "nə?"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az2-feil-l1-b1", type: "multiple_choice", prompt: "'Balaca uşaq şən oynayır.' — hərəkət bildirən söz hansıdır?", options: ["oynayır", "balaca", "uşaq", "şən"], correctIndex: 0, xp: 15 },
            { id: "az2-feil-l1-b2", type: "multiple_choice", prompt: "Bir cümlədə əşya adı, əlamət və hərəkət ola bilər. 'Ağ pişik yatır.' — hərəkət hansıdır?", options: ["yatır", "ağ", "pişik", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az2-feil-l1-b3", type: "multiple_choice", prompt: "Aşağıdakı sıradan hərəkət bildirən sözü seç.", options: ["gülümsəyir", "gülüş", "gülməli", "gül"], correctIndex: 0, xp: 15 },
            { id: "az2-feil-l1-b4", type: "multiple_choice", prompt: "'gəldi', 'gəlir', 'gələcək' — bunlar nəyi bildirir?", options: ["hərəkəti (feil)", "əşyanı", "əlaməti", "sayı"], correctIndex: 0, xp: 15 },
            { id: "az2-feil-l1-b5", type: "multiple_choice", prompt: "'Mən məktəbə gedirəm.' — hərəkət bildirən söz hansıdır?", options: ["gedirəm", "mən", "məktəbə", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 6. Sözün mənası və orfoqrafiya ═══════════════
    {
      id: "az2-mena",
      title: "Sözün mənası və orfoqrafiya",
      description: "Sinonim, antonim və düzgün yazılış qaydaları.",
      lessons: [
        {
          id: "az2-mena-l1",
          title: "Yaxın və əks mənalı sözlər",
          intro: "Sinonim (yaxın məna) və antonim (əks məna) sözləri.",
          sections: [
            { heading: "Yaxın mənalı (sinonim)", body: "Mənası yaxın olan sözlər: gözəl — qəşəng, böyük — iri, şən — sevincli." },
            { heading: "Əks mənalı (antonim)", body: "Mənası əks olan sözlər: böyük — kiçik, isti — soyuq, gecə — gündüz, yaxşı — pis." },
          ],
          tasks: [
            { id: "az2-mena-l1-t1", type: "multiple_choice", prompt: "'böyük' sözünün əksi hansıdır?", options: ["kiçik", "iri", "gözəl", "uzun"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t2", type: "multiple_choice", prompt: "'isti' sözünün əksi hansıdır?", options: ["soyuq", "təmiz", "yeni", "böyük"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t3", type: "multiple_choice", prompt: "'gecə' sözünün əksi hansıdır?", options: ["gündüz", "səhər", "axşam", "gün"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t4", type: "multiple_choice", prompt: "'yaxşı' sözünün əksi hansıdır?", options: ["pis", "gözəl", "böyük", "təmiz"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t5", type: "multiple_choice", prompt: "'gözəl' sözünün yaxın mənalısı hansıdır?", options: ["qəşəng", "kiçik", "soyuq", "pis"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t6", type: "multiple_choice", prompt: "'böyük' sözünün yaxın mənalısı hansıdır?", options: ["iri", "kiçik", "gözəl", "soyuq"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t7", type: "multiple_choice", prompt: "'uzun' sözünün əksi hansıdır?", options: ["qısa", "geniş", "böyük", "hündür"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t8", type: "multiple_choice", prompt: "'açıq' sözünün əksi hansıdır?", options: ["bağlı", "böyük", "təmiz", "isti"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t9", type: "multiple_choice", prompt: "'sevincli' sözünün yaxın mənalısı hansıdır?", options: ["şən", "kədərli", "böyük", "soyuq"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t10", type: "multiple_choice", prompt: "'aşağı' sözünün əksi hansıdır?", options: ["yuxarı", "sağ", "sol", "irəli"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t11", type: "multiple_choice", prompt: "'tez' sözünün əksi hansıdır?", options: ["gec", "yavaş", "böyük", "uzaq"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t12", type: "multiple_choice", prompt: "Mənası yaxın olan sözlərə nə deyilir?", options: ["sinonim (yaxın mənalı)", "antonim (əks mənalı)", "isim", "feil"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t13", type: "multiple_choice", prompt: "Mənası əks olan sözlərə nə deyilir?", options: ["antonim (əks mənalı)", "sinonim (yaxın mənalı)", "isim", "sifət"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t14", type: "multiple_choice", prompt: "'ağ' sözünün əksi hansıdır?", options: ["qara", "qırmızı", "mavi", "yaşıl"], correctIndex: 0, xp: 10 },
            { id: "az2-mena-l1-t15", type: "multiple_choice", prompt: "'uzaq' sözünün əksi hansıdır?", options: ["yaxın", "böyük", "hündür", "geniş"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az2-mena-l1-b1", type: "multiple_choice", prompt: "Cümlə həmişə hansı hərflə başlayır?", options: ["böyük hərflə", "kiçik hərflə", "saitlə", "samitlə"], correctIndex: 0, xp: 15 },
            { id: "az2-mena-l1-b2", type: "multiple_choice", prompt: "İnsan adları, şəhər adları necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 15 },
            { id: "az2-mena-l1-b3", type: "multiple_choice", prompt: "'dost' sözünün əksi hansıdır?", options: ["düşmən", "yoldaş", "qonşu", "qardaş"], correctIndex: 0, xp: 15 },
            { id: "az2-mena-l1-b4", type: "multiple_choice", prompt: "'çətin' sözünün əksi hansıdır?", options: ["asan", "böyük", "uzun", "isti"], correctIndex: 0, xp: 15 },
            { id: "az2-mena-l1-b5", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Nərmin məktəbə getdi.", "nərmin məktəbə getdi.", "Nərmin Məktəbə getdi.", "nərmin Məktəbə Getdi."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
  ],
};
