// Azərbaycan dili — 4-cü sinif proqramı (Azərbaycan kurikuluma uyğun).
// Bölmələr: 1) İsim və halları  2) Əvəzlik  3) Zərf  4) Cümlə üzvləri
// 5) Söz yaradıcılığı və orfoqrafiya  6) Mətn və nitq.
// 4-cü sinif üçün. id prefiksi az4-*.

import type { Subject } from "../types";

export const azerbaijani4: Subject = {
  slug: "azerbaycan-dili-4",
  name: "Azərbaycan dili",
  grade: 4,
  icon: "A",
  color: "rose",
  units: [
    // ═══════════════ 1. İsim və halları ═══════════════
    {
      id: "az4-isim",
      title: "İsim və halları",
      description: "İsmin təkrarı, tək/cəm, xüsusi/ümumi və halları ilə ilkin tanışlıq.",
      lessons: [
        {
          id: "az4-isim-l1",
          title: "İsim və halları",
          intro: "İsim əşyanın adıdır; suala görə hallanır.",
          sections: [
            { heading: "İsim", body: "Əşyanın adını bildirən söz isimdir: 'kim?' (insan/heyvan), 'nə?' (əşya). Tək/cəm, xüsusi/ümumi olur." },
            { heading: "Hallar", body: "İsim suala görə dəyişir (hallanır): adlıq (kim? nə?), yiyəlik (kimin? nəyin?), yönlük (kimə? nəyə?), təsirlik (kimi? nəyi?), yerlik (kimdə? nədə?), çıxışlıq (kimdən? nədən?)." },
          ],
          tasks: [
            { id: "az4-isim-l1-t1", type: "multiple_choice", prompt: "İsim hansı suallara cavab verir?", options: ["kim? nə?", "necə?", "nə edir?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t2", type: "multiple_choice", prompt: "Adlıq hal hansı suala cavab verir?", options: ["kim? nə?", "kimin?", "kimə?", "kimdən?"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t3", type: "multiple_choice", prompt: "'kimin? nəyin?' hansı haldır?", options: ["yiyəlik", "adlıq", "yönlük", "təsirlik"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t4", type: "multiple_choice", prompt: "'kimə? nəyə?' hansı haldır?", options: ["yönlük", "yiyəlik", "təsirlik", "yerlik"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t5", type: "multiple_choice", prompt: "'kimi? nəyi?' hansı haldır?", options: ["təsirlik", "yönlük", "yerlik", "çıxışlıq"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t6", type: "multiple_choice", prompt: "'kimdə? nədə?' hansı haldır?", options: ["yerlik", "çıxışlıq", "yönlük", "adlıq"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t7", type: "multiple_choice", prompt: "'kimdən? nədən?' hansı haldır?", options: ["çıxışlıq", "yerlik", "yönlük", "təsirlik"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t8", type: "numeric", prompt: "İsmin neçə halı var?", answer: 6, xp: 10 },
            { id: "az4-isim-l1-t9", type: "multiple_choice", prompt: "'kitabı' sözü hansı haldadır?", options: ["təsirlik (nəyi?)", "adlıq", "yiyəlik", "yerlik"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t10", type: "multiple_choice", prompt: "'evdə' sözü hansı haldadır?", options: ["yerlik (nədə?)", "yönlük", "çıxışlıq", "adlıq"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t11", type: "multiple_choice", prompt: "'evə' sözü hansı haldadır?", options: ["yönlük (nəyə?)", "yerlik", "çıxışlıq", "adlıq"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t12", type: "multiple_choice", prompt: "'evdən' sözü hansı haldadır?", options: ["çıxışlıq (nədən?)", "yerlik", "yönlük", "adlıq"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t13", type: "multiple_choice", prompt: "Xüsusi isimlər necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "cəmdə", "rəqəmlə"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t14", type: "multiple_choice", prompt: "'uşaqlar' sözü hansı formadadır?", options: ["cəm", "tək", "xüsusi", "feil"], correctIndex: 0, xp: 10 },
            { id: "az4-isim-l1-t15", type: "multiple_choice", prompt: "'uşağın' sözü hansı haldadır?", options: ["yiyəlik (kimin?)", "adlıq", "təsirlik", "yerlik"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az4-isim-l1-b1", type: "multiple_choice", prompt: "'məktəbə' sözü hansı haldadır?", options: ["yönlük", "yerlik", "çıxışlıq", "adlıq"], correctIndex: 0, xp: 15 },
            { id: "az4-isim-l1-b2", type: "multiple_choice", prompt: "'dostumdan' sözü hansı haldadır?", options: ["çıxışlıq", "yönlük", "yerlik", "təsirlik"], correctIndex: 0, xp: 15 },
            { id: "az4-isim-l1-b3", type: "multiple_choice", prompt: "Adlıq hal ismin hansı formasıdır?", options: ["ilkin/əsas forma", "cəm forma", "kiçildilmiş forma", "feil forma"], correctIndex: 0, xp: 15 },
            { id: "az4-isim-l1-b4", type: "multiple_choice", prompt: "'kitabda' sözü hansı haldadır?", options: ["yerlik", "yönlük", "çıxışlıq", "təsirlik"], correctIndex: 0, xp: 15 },
            { id: "az4-isim-l1-b5", type: "multiple_choice", prompt: "'Bakıya' sözü hansı haldadır?", options: ["yönlük", "yerlik", "çıxışlıq", "adlıq"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 2. Əvəzlik ═══════════════
    {
      id: "az4-evezlik",
      title: "Əvəzlik",
      description: "İsim, sifət və sayın yerində işlənən sözlər: mən, sən, o, bu.",
      lessons: [
        {
          id: "az4-evezlik-l1",
          title: "Əvəzlik",
          intro: "Adların yerində işlənən sözlər.",
          sections: [
            { heading: "Şəxs əvəzlikləri", body: "İnsanları əvəz edir: mən, sən, o, biz, siz, onlar." },
            { heading: "İşarə əvəzlikləri", body: "Əşyaya işarə edir: bu, o, elə, belə." },
          ],
          tasks: [
            { id: "az4-evezlik-l1-t1", type: "multiple_choice", prompt: "Aşağıdakılardan hansı şəxs əvəzliyidir?", options: ["mən", "kitab", "gözəl", "oxumaq"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı şəxs əvəzliyidir?", options: ["sən", "ev", "böyük", "getmək"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t3", type: "multiple_choice", prompt: "Neçə şəxs əvəzliyi var?", options: ["6 (mən, sən, o, biz, siz, onlar)", "3", "4", "5"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t4", type: "multiple_choice", prompt: "'o' hansı əvəzlikdir?", options: ["şəxs (III tək)", "işarə yalnız", "sual", "sifət"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t5", type: "multiple_choice", prompt: "'biz' neçənci şəxsdir?", options: ["I şəxs cəm", "II şəxs tək", "III şəxs cəm", "I şəxs tək"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t6", type: "multiple_choice", prompt: "'onlar' neçənci şəxsdir?", options: ["III şəxs cəm", "I şəxs cəm", "II şəxs cəm", "III şəxs tək"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı işarə əvəzliyidir?", options: ["bu", "mən", "gözəl", "beş"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t8", type: "multiple_choice", prompt: "Əvəzlik nəyin yerində işlənir?", options: ["ismin, sifətin, sayın", "yalnız feilin", "yalnız zərfin", "heç birinin"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t9", type: "multiple_choice", prompt: "'Mən kitab oxuyuram.' — əvəzlik hansıdır?", options: ["mən", "kitab", "oxuyuram", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t10", type: "multiple_choice", prompt: "'siz' neçənci şəxsdir?", options: ["II şəxs cəm", "I şəxs cəm", "III şəxs cəm", "II şəxs tək"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t11", type: "multiple_choice", prompt: "'Ayşə' əvəzinə hansı əvəzlik işlənə bilər?", options: ["o", "mən", "biz", "siz"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t12", type: "multiple_choice", prompt: "'Uşaqlar' əvəzinə hansı əvəzlik işlənə bilər?", options: ["onlar", "o", "mən", "sən"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t13", type: "multiple_choice", prompt: "Aşağıdakılardan hansı əvəzlik DEYİL?", options: ["kitab", "mən", "o", "bu"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t14", type: "multiple_choice", prompt: "'sən' neçənci şəxsdir?", options: ["II şəxs tək", "I şəxs tək", "III şəxs tək", "II şəxs cəm"], correctIndex: 0, xp: 10 },
            { id: "az4-evezlik-l1-t15", type: "multiple_choice", prompt: "'mən' neçənci şəxsdir?", options: ["I şəxs tək", "II şəxs tək", "III şəxs tək", "I şəxs cəm"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az4-evezlik-l1-b1", type: "multiple_choice", prompt: "'Bu mənim kitabımdır.' — əvəzliklər hansılardır?", options: ["bu, mənim", "kitab", "kitabımdır", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az4-evezlik-l1-b2", type: "multiple_choice", prompt: "'kim?', 'nə?' hansı əvəzlik növüdür?", options: ["sual əvəzliyi", "şəxs əvəzliyi", "işarə əvəzliyi", "sifət"], correctIndex: 0, xp: 15 },
            { id: "az4-evezlik-l1-b3", type: "multiple_choice", prompt: "'Elçin və Ayşə' əvəzinə hansı əvəzlik işlənər?", options: ["onlar", "o", "biz", "siz"], correctIndex: 0, xp: 15 },
            { id: "az4-evezlik-l1-b4", type: "multiple_choice", prompt: "Əvəzlik cümlədə hansı üzv ola bilər?", options: ["mübtəda (kim? — o gəldi)", "yalnız xəbər", "heç bir", "yalnız təyin"], correctIndex: 0, xp: 15 },
            { id: "az4-evezlik-l1-b5", type: "multiple_choice", prompt: "'sən və mən' əvəzinə hansı əvəzlik işlənər?", options: ["biz", "siz", "onlar", "o"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 3. Zərf ═══════════════
    {
      id: "az4-zerf",
      title: "Zərf",
      description: "İşin tərzini, zamanını, yerini bildirən sözlər.",
      lessons: [
        {
          id: "az4-zerf-l1",
          title: "Zərf",
          intro: "Hərəkətin necə, nə vaxt, harada olduğunu bildirir.",
          sections: [
            { heading: "Zərf", body: "İşin əlamətini bildirir: tərz (necə? — tez, yavaş), zaman (nə vaxt? — dünən, sabah), yer (harada? — irəli, geri)." },
          ],
          tasks: [
            { id: "az4-zerf-l1-t1", type: "multiple_choice", prompt: "Aşağıdakılardan hansı zərfdir?", options: ["tez", "kitab", "gözəl", "beş"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t2", type: "multiple_choice", prompt: "'dünən' hansı zərf növüdür?", options: ["zaman", "tərz", "yer", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t3", type: "multiple_choice", prompt: "'tez' hansı zərf növüdür?", options: ["tərz", "zaman", "yer", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t4", type: "multiple_choice", prompt: "'irəli' hansı zərf növüdür?", options: ["yer", "zaman", "tərz", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t5", type: "multiple_choice", prompt: "Tərz zərfi hansı suala cavab verir?", options: ["necə?", "nə vaxt?", "harada?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t6", type: "multiple_choice", prompt: "Zaman zərfi hansı suala cavab verir?", options: ["nə vaxt?", "necə?", "harada?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t7", type: "multiple_choice", prompt: "Yer zərfi hansı suala cavab verir?", options: ["harada?", "necə?", "nə vaxt?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t8", type: "multiple_choice", prompt: "'Uşaq gözəl oxuyur.' — zərf hansıdır?", options: ["gözəl", "uşaq", "oxuyur", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t9", type: "multiple_choice", prompt: "'sabah' hansı zərf növüdür?", options: ["zaman", "yer", "tərz", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t10", type: "multiple_choice", prompt: "'yavaş' hansı zərf növüdür?", options: ["tərz", "zaman", "yer", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t11", type: "multiple_choice", prompt: "'Dünən gəldim.' — zərf hansıdır?", options: ["dünən", "gəldim", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t12", type: "multiple_choice", prompt: "Zərf əsasən hansı sözü izah edir?", options: ["feili", "ismi", "sayı", "qoşmanı"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t13", type: "multiple_choice", prompt: "'geri' hansı zərf növüdür?", options: ["yer", "zaman", "tərz", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t14", type: "multiple_choice", prompt: "'həmişə' hansı zərf növüdür?", options: ["zaman", "yer", "tərz", "kəmiyyət"], correctIndex: 0, xp: 10 },
            { id: "az4-zerf-l1-t15", type: "multiple_choice", prompt: "Aşağıdakılardan hansı zərf DEYİL?", options: ["kitab", "tez", "dünən", "yavaş"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az4-zerf-l1-b1", type: "multiple_choice", prompt: "'Səhər tez durdum.' — neçə zərf var? (səhər/tez)", options: ["2", "1", "3", "0"], correctIndex: 0, xp: 15 },
            { id: "az4-zerf-l1-b2", type: "multiple_choice", prompt: "Zərflə sifətin fərqi nədir?", options: ["zərf feili, sifət ismi izah edir", "heç fərq yox", "zərf ismi izah edir", "sifət feili izah edir"], correctIndex: 0, xp: 15 },
            { id: "az4-zerf-l1-b3", type: "multiple_choice", prompt: "'çox' hansı zərf növüdür?", options: ["kəmiyyət", "yer", "zaman", "tərz"], correctIndex: 0, xp: 15 },
            { id: "az4-zerf-l1-b4", type: "multiple_choice", prompt: "'Uşaqlar bağçada oynayır.' — zərf hansıdır?", options: ["bağçada", "uşaqlar", "oynayır", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az4-zerf-l1-b5", type: "multiple_choice", prompt: "'birlikdə' hansı zərf növüdür?", options: ["tərz", "zaman", "yer", "kəmiyyət"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 4. Cümlə üzvləri ═══════════════
    {
      id: "az4-uzvler",
      title: "Cümlə üzvləri",
      description: "Baş üzvlər (mübtəda, xəbər) və ikinci dərəcəli üzvlər.",
      lessons: [
        {
          id: "az4-uzvler-l1",
          title: "Cümlə üzvləri",
          intro: "Cümlədə hər sözün vəzifəsi var.",
          sections: [
            { heading: "Baş üzvlər", body: "Mübtəda — iş görəni bildirir (kim? nə?). Xəbər — işi bildirir (nə edir?). 'Uşaq oxuyur.' — uşaq (mübtəda), oxuyur (xəbər)." },
            { heading: "İkinci dərəcəli üzvlər", body: "Tamamlıq (nəyi? kimə?), təyin (necə? hansı?), zərflik (harada? nə vaxt?) baş üzvləri izah edir." },
          ],
          tasks: [
            { id: "az4-uzvler-l1-t1", type: "multiple_choice", prompt: "İş görəni bildirən üzv necə adlanır?", options: ["mübtəda", "xəbər", "təyin", "tamamlıq"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t2", type: "multiple_choice", prompt: "İşi bildirən üzv necə adlanır?", options: ["xəbər", "mübtəda", "təyin", "zərflik"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t3", type: "multiple_choice", prompt: "'Uşaq oxuyur.' — mübtəda hansıdır?", options: ["uşaq", "oxuyur", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t4", type: "multiple_choice", prompt: "'Uşaq oxuyur.' — xəbər hansıdır?", options: ["oxuyur", "uşaq", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t5", type: "multiple_choice", prompt: "Baş üzvlər hansılardır?", options: ["mübtəda və xəbər", "təyin və tamamlıq", "zərflik", "hamısı"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t6", type: "multiple_choice", prompt: "'Gözəl gül açdı.' — təyin hansıdır?", options: ["gözəl", "gül", "açdı", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t7", type: "multiple_choice", prompt: "'Kitabı oxudum.' — tamamlıq hansıdır?", options: ["kitabı", "oxudum", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t8", type: "multiple_choice", prompt: "'Səhər durdum.' — zərflik hansıdır?", options: ["səhər", "durdum", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t9", type: "multiple_choice", prompt: "'Quşlar uçur.' — mübtəda hansıdır?", options: ["quşlar", "uçur", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t10", type: "multiple_choice", prompt: "Təyin hansı suala cavab verir?", options: ["necə? hansı?", "nə edir?", "kim?", "harada?"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t11", type: "multiple_choice", prompt: "Tamamlıq hansı suala cavab verir?", options: ["nəyi? kimə?", "necə?", "harada?", "nə vaxt?"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t12", type: "multiple_choice", prompt: "'Bahar gəldi.' — xəbər hansıdır?", options: ["gəldi", "bahar", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t13", type: "multiple_choice", prompt: "İkinci dərəcəli üzvlər hansılardır?", options: ["tamamlıq, təyin, zərflik", "mübtəda, xəbər", "isim, feil", "qoşma, bağlayıcı"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t14", type: "multiple_choice", prompt: "'Mən kitab oxuyuram.' — mübtəda hansıdır?", options: ["mən", "kitab", "oxuyuram", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az4-uzvler-l1-t15", type: "multiple_choice", prompt: "'Balaca uşaq şən oynayır.' — xəbər hansıdır?", options: ["oynayır", "balaca", "uşaq", "şən"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az4-uzvler-l1-b1", type: "multiple_choice", prompt: "'Balaca uşaq şən oynayır.' — təyin hansıdır?", options: ["balaca", "uşaq", "şən", "oynayır"], correctIndex: 0, xp: 15 },
            { id: "az4-uzvler-l1-b2", type: "multiple_choice", prompt: "'Balaca uşaq şən oynayır.' — zərflik hansıdır?", options: ["şən", "balaca", "uşaq", "oynayır"], correctIndex: 0, xp: 15 },
            { id: "az4-uzvler-l1-b3", type: "multiple_choice", prompt: "Cümlədə mütləq olan üzv hansıdır?", options: ["xəbər", "təyin", "tamamlıq", "zərflik"], correctIndex: 0, xp: 15 },
            { id: "az4-uzvler-l1-b4", type: "multiple_choice", prompt: "'Dostuma məktub yazdım.' — tamamlıq hansıdır (nəyi?)?", options: ["məktub", "dostuma", "yazdım", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az4-uzvler-l1-b5", type: "multiple_choice", prompt: "Cümləni üzvlərinə görə təhlil etmək necə adlanır?", options: ["sintaktik təhlil", "fonetik təhlil", "leksik təhlil", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 5. Söz yaradıcılığı və orfoqrafiya ═══════════════
    {
      id: "az4-soz",
      title: "Söz yaradıcılığı və orfoqrafiya",
      description: "Düzəltmə sözlər, kök və şəkilçi, düzgün yazılış.",
      lessons: [
        {
          id: "az4-soz-l1",
          title: "Düzəltmə sözlər və orfoqrafiya",
          intro: "Şəkilçilərlə yeni sözlər düzəltmək.",
          sections: [
            { heading: "Düzəltmə söz", body: "Kökə sözdüzəldici şəkilçi əlavə edərək yeni söz düzəldirik: iş → işçi, su → sulu, kitab → kitabça." },
            { heading: "Orfoqrafiya", body: "Cümlə böyük hərflə başlayır, nöqtə ilə bitir. Xüsusi isimlər böyük hərflə yazılır." },
          ],
          tasks: [
            { id: "az4-soz-l1-t1", type: "multiple_choice", prompt: "'iş' sözündən hansı düzəltmə söz yaranır?", options: ["işçi", "kitab", "gözəl", "tez"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t2", type: "multiple_choice", prompt: "'su' sözündən hansı düzəltmə söz yaranır?", options: ["sulu", "kitab", "ev", "dağ"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t3", type: "multiple_choice", prompt: "'işçi' sözünün kökü hansıdır?", options: ["iş", "çi", "işç", "i"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t4", type: "multiple_choice", prompt: "'duzlu' sözünün kökü hansıdır?", options: ["duz", "lu", "duzl", "u"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t5", type: "multiple_choice", prompt: "'-çı/-çi' şəkilçisi nə düzəldir?", options: ["peşə/məşğuliyyət bildirən söz", "cəm", "hal", "feil"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t6", type: "multiple_choice", prompt: "Cümlə hansı hərflə başlayır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t7", type: "multiple_choice", prompt: "Nəqli cümlə hansı işarə ilə bitir?", options: ["nöqtə", "sual işarəsi", "nida işarəsi", "vergül"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t8", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Bakı", "bakı", "BAKı", "baKı"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t9", type: "multiple_choice", prompt: "'kitabça' sözünün kökü hansıdır?", options: ["kitab", "ça", "kitabç", "a"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t10", type: "multiple_choice", prompt: "'meşəçi' sözü hansı sözdən düzəlib?", options: ["meşə", "çi", "meşəç", "iş"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t11", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Nərmin məktəbə getdi.", "nərmin məktəbə getdi.", "Nərmin Məktəbə getdi.", "nərmin Məktəbə Getdi."], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t12", type: "multiple_choice", prompt: "'daşlı' sözünün kökü hansıdır?", options: ["daş", "lı", "daşl", "ı"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t13", type: "multiple_choice", prompt: "Xüsusi isimlər (ad, şəhər) necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t14", type: "multiple_choice", prompt: "'balıqçı' sözü hansı sözdən düzəlib?", options: ["balıq", "çı", "balıqç", "iş"], correctIndex: 0, xp: 10 },
            { id: "az4-soz-l1-t15", type: "multiple_choice", prompt: "Sual cümləsi hansı işarə ilə bitir?", options: ["sual işarəsi (?)", "nöqtə", "nida işarəsi", "vergül"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az4-soz-l1-b1", type: "multiple_choice", prompt: "'-lı/-li/-lu/-lü' şəkilçisi nə bildirir?", options: ["nəyəsə malik olmaq (sulu, daşlı)", "peşə", "cəm", "hal"], correctIndex: 0, xp: 15 },
            { id: "az4-soz-l1-b2", type: "multiple_choice", prompt: "'gözlük' sözü hansı sözdən düzəlib?", options: ["göz", "lük", "gözl", "ük"], correctIndex: 0, xp: 15 },
            { id: "az4-soz-l1-b3", type: "multiple_choice", prompt: "Ay, çay, dağ adları necə yazılır?", options: ["böyük hərflə (xüsusi isim)", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 15 },
            { id: "az4-soz-l1-b4", type: "multiple_choice", prompt: "Nida cümləsi hansı işarə ilə bitir?", options: ["nida işarəsi (!)", "nöqtə", "sual", "vergül"], correctIndex: 0, xp: 15 },
            { id: "az4-soz-l1-b5", type: "multiple_choice", prompt: "'yağışlı' sözünün kökü hansıdır?", options: ["yağış", "lı", "yağışl", "ı"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 6. Mətn və nitq ═══════════════
    {
      id: "az4-metn",
      title: "Mətn və nitq",
      description: "Mətn, başlıq, abzas və nitq mədəniyyəti.",
      lessons: [
        {
          id: "az4-metn-l1",
          title: "Mətn və nitq mədəniyyəti",
          intro: "Mətn cümlələrdən ibarətdir; nəzakətli danışıq.",
          sections: [
            { heading: "Mətn", body: "Bir-biri ilə bağlı cümlələrin toplusu mətndir. Mətnin başlığı və abzasları olur. Başlıq mətnin adıdır." },
            { heading: "Nitq mədəniyyəti", body: "Nəzakətli sözlər: sağ ol, zəhmət olmasa, buyurun, üzr istəyirəm. Böyüklərlə 'Siz' deyə danışmaq nəzakətlidir." },
          ],
          tasks: [
            { id: "az4-metn-l1-t1", type: "multiple_choice", prompt: "Mətn nədən ibarətdir?", options: ["bağlı cümlələrdən", "yalnız sözlərdən", "hərflərdən", "hecalardan"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t2", type: "multiple_choice", prompt: "Mətnin adı necə adlanır?", options: ["başlıq", "abzas", "cümlə", "söz"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t3", type: "multiple_choice", prompt: "Mətnin hissələri (paraqrafları) necə adlanır?", options: ["abzas", "başlıq", "cümlə", "heca"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t4", type: "multiple_choice", prompt: "Kimsə sənə kömək etdi. Nə deyərsən?", options: ["Sağ olun / təşəkkür", "Get", "Yox", "Dur"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t5", type: "multiple_choice", prompt: "Nəsə xahiş edəndə hansı nəzakət sözünü deyirik?", options: ["zəhmət olmasa", "yox", "get", "dur"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t6", type: "multiple_choice", prompt: "Böyüklərlə necə danışmaq nəzakətlidir?", options: ["'Siz' deyə", "'sən' deyə qışqıraraq", "gülərək", "susaraq"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t7", type: "multiple_choice", prompt: "Səhvə görə nə deyirik?", options: ["üzr istəyirəm", "sağ ol", "buyurun", "salam"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t8", type: "multiple_choice", prompt: "Mətndə cümlələr necə olmalıdır?", options: ["bir-biri ilə bağlı", "təsadüfi", "bağsız", "eyni"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t9", type: "multiple_choice", prompt: "Başlıq mətnin nəyini bildirir?", options: ["mövzusunu/adını", "sonunu", "səhvini", "uzunluğunu"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t10", type: "multiple_choice", prompt: "Kiməsə nəyisə verəndə nə deyirik?", options: ["buyurun", "yox", "get", "dur"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t11", type: "multiple_choice", prompt: "Görüşəndə nə deyirik?", options: ["salam", "əlvida", "yox", "get"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t12", type: "multiple_choice", prompt: "Ayrılanda nə deyirik?", options: ["sağ ol / əlvida", "salam", "buyurun", "üzr istəyirəm"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t13", type: "multiple_choice", prompt: "Mətn neçə cümlədən ibarət ola bilər?", options: ["bir neçə (çox)", "yalnız bir", "yalnız iki", "heç"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t14", type: "multiple_choice", prompt: "Nəzakətli danışıq nədir?", options: ["hörmətlə, nəzakət sözləri ilə", "qışqıraraq", "kobud", "susaraq"], correctIndex: 0, xp: 10 },
            { id: "az4-metn-l1-t15", type: "multiple_choice", prompt: "Aşağıdakılardan hansı nəzakət sözüdür?", options: ["təşəkkür edirəm", "get", "sus", "yox"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az4-metn-l1-b1", type: "multiple_choice", prompt: "Mətnin əvvəlində nə olur?", options: ["başlıq", "nöqtə", "abzas boşluğu yalnız", "imza"], correctIndex: 0, xp: 15 },
            { id: "az4-metn-l1-b2", type: "multiple_choice", prompt: "Yeni fikrə keçəndə mətndə nə edirik?", options: ["yeni abzasa başlayırıq", "böyük hərf yazmırıq", "nöqtə qoymuruq", "heç nə"], correctIndex: 0, xp: 15 },
            { id: "az4-metn-l1-b3", type: "multiple_choice", prompt: "Telefonda danışanda əvvəlcə nə deyirik?", options: ["salam / alo", "get", "yox", "dur"], correctIndex: 0, xp: 15 },
            { id: "az4-metn-l1-b4", type: "multiple_choice", prompt: "Mətnin növləri hansılardır (ümumi)?", options: ["nağıl, hekayə, şeir və s.", "yalnız şeir", "yalnız cümlə", "yalnız söz"], correctIndex: 0, xp: 15 },
            { id: "az4-metn-l1-b5", type: "multiple_choice", prompt: "Müəllimə müraciət edəndə necə danışırıq?", options: ["nəzakətlə, 'Siz' deyə", "kobud", "qışqıraraq", "susaraq"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
  ],
};
