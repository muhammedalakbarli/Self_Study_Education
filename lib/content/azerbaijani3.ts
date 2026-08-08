// Azərbaycan dili — 3-cü sinif proqramı (Azərbaycan kurikuluma uyğun).
// Bölmələr: 1) Nitq səsləri və heca  2) Sözün quruluşu (kök və şəkilçi)  3) İsim
// 4) Sifət və say  5) Feil  6) Cümlə və mətn.
// 3-cü sinif üçün sadə. id prefiksi az3-*.

import type { Subject } from "../types";

export const azerbaijani3: Subject = {
  slug: "azerbaycan-dili-3",
  name: "Azərbaycan dili",
  grade: 3,
  icon: "A",
  color: "rose",
  units: [
    // ═══════════════ 1. Nitq səsləri və heca ═══════════════
    {
      id: "az3-fonetika",
      title: "Nitq səsləri və heca",
      description: "Sait və samitlərin təkrarı, heca və vurğu.",
      lessons: [
        {
          id: "az3-fonetika-l1",
          title: "Səslər, heca və vurğu",
          intro: "Saitlər, samitlər, heca bölgüsü və vurğu.",
          sections: [
            { heading: "Səslər", body: "9 sait (a, e, ə, ı, i, o, ö, u, ü) və 23 samit var. Cəmi 32 hərf." },
            { heading: "Heca və vurğu", body: "Sözdə neçə sait varsa, o qədər heca var. Vurğu sözün bir hecasının daha güclü deyilməsidir. Azərbaycan dilində vurğu adətən son hecaya düşür: kitáb, aná." },
          ],
          tasks: [
            { id: "az3-fonetika-l1-t1", type: "numeric", prompt: "Azərbaycan dilində neçə sait var?", answer: 9, xp: 10 },
            { id: "az3-fonetika-l1-t2", type: "numeric", prompt: "Azərbaycan dilində neçə samit var?", answer: 23, xp: 10 },
            { id: "az3-fonetika-l1-t3", type: "numeric", prompt: "'kitab' sözündə neçə heca var? (ki-tab)", answer: 2, xp: 10 },
            { id: "az3-fonetika-l1-t4", type: "numeric", prompt: "'məktəb' sözündə neçə heca var? (mək-təb)", answer: 2, xp: 10 },
            { id: "az3-fonetika-l1-t5", type: "numeric", prompt: "'kitabxana' sözündə neçə heca var? (ki-tab-xa-na)", answer: 4, xp: 10 },
            { id: "az3-fonetika-l1-t6", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saitdir?", options: ["ə", "k", "s", "t"], correctIndex: 0, xp: 10 },
            { id: "az3-fonetika-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı samitdir?", options: ["m", "a", "o", "ü"], correctIndex: 0, xp: 10 },
            { id: "az3-fonetika-l1-t8", type: "multiple_choice", prompt: "Sözdə heca sayını nə göstərir?", options: ["saitlərin sayı", "samitlərin sayı", "hərflərin sayı", "vurğu"], correctIndex: 0, xp: 10 },
            { id: "az3-fonetika-l1-t9", type: "multiple_choice", prompt: "Azərbaycan dilində vurğu adətən hansı hecaya düşür?", options: ["son hecaya", "birinci hecaya", "orta hecaya", "vurğu yoxdur"], correctIndex: 0, xp: 10 },
            { id: "az3-fonetika-l1-t10", type: "numeric", prompt: "'alma' sözündə neçə heca var?", answer: 2, xp: 10 },
            { id: "az3-fonetika-l1-t11", type: "multiple_choice", prompt: "'a' saiti qalın, yoxsa incədir?", options: ["qalın", "incə", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-fonetika-l1-t12", type: "multiple_choice", prompt: "'e' saiti qalın, yoxsa incədir?", options: ["incə", "qalın", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-fonetika-l1-t13", type: "numeric", prompt: "'su' sözündə neçə heca var?", answer: 1, xp: 10 },
            { id: "az3-fonetika-l1-t14", type: "numeric", prompt: "'balaca' sözündə neçə heca var? (ba-la-ca)", answer: 3, xp: 10 },
            { id: "az3-fonetika-l1-t15", type: "numeric", prompt: "Cəmi neçə hərf var? (9 + 23)", answer: 32, xp: 15 },
          ],
          bonusTasks: [
            { id: "az3-fonetika-l1-b1", type: "numeric", prompt: "'ayaqqabı' sözündə neçə heca var? (a-yaq-qa-bı)", answer: 4, xp: 15 },
            { id: "az3-fonetika-l1-b2", type: "multiple_choice", prompt: "Hansı sırada yalnız qalın saitlər var?", options: ["a, ı, o, u", "e, ə, i, ö", "a, e, i, o", "u, ü, ö, ı"], correctIndex: 0, xp: 15 },
            { id: "az3-fonetika-l1-b3", type: "numeric", prompt: "'təbiət' sözündə neçə heca var? (tə-bi-ət)", answer: 3, xp: 15 },
            { id: "az3-fonetika-l1-b4", type: "multiple_choice", prompt: "Hansı sırada yalnız incə saitlər var?", options: ["e, ə, i, ö, ü", "a, ı, o, u", "a, e, o, u", "i, o, u, a"], correctIndex: 0, xp: 15 },
            { id: "az3-fonetika-l1-b5", type: "numeric", prompt: "'gül' sözündə neçə heca var?", answer: 1, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 2. Sözün quruluşu ═══════════════
    {
      id: "az3-qurulus",
      title: "Sözün quruluşu",
      description: "Sözün kökü və şəkilçisi.",
      lessons: [
        {
          id: "az3-qurulus-l1",
          title: "Kök və şəkilçi",
          intro: "Sözün əsas hissəsi kök, ona qoşulan hissə şəkilçidir.",
          sections: [
            { heading: "Kök", body: "Sözün məna daşıyan əsas hissəsi köküdür: 'kitab' sözündə kök 'kitab'-dır." },
            { heading: "Şəkilçi", body: "Kökə qoşulan hissə şəkilçidir: 'kitablar' — kök 'kitab', şəkilçi '-lar' (cəm). 'evdə' — kök 'ev', şəkilçi '-də'." },
          ],
          tasks: [
            { id: "az3-qurulus-l1-t1", type: "multiple_choice", prompt: "'kitablar' sözünün kökü hansıdır?", options: ["kitab", "lar", "kitabl", "ar"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t2", type: "multiple_choice", prompt: "'evlər' sözünün kökü hansıdır?", options: ["ev", "lər", "evl", "ər"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t3", type: "multiple_choice", prompt: "'kitablar' sözündə şəkilçi hansıdır?", options: ["-lar", "kitab", "-ar", "kit"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t4", type: "multiple_choice", prompt: "Sözün əsas, məna daşıyan hissəsi necə adlanır?", options: ["kök", "şəkilçi", "heca", "səs"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t5", type: "multiple_choice", prompt: "Kökə qoşulan hissə necə adlanır?", options: ["şəkilçi", "kök", "heca", "vurğu"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t6", type: "multiple_choice", prompt: "'güllər' sözünün kökü hansıdır?", options: ["gül", "lər", "gül­l", "ər"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t7", type: "multiple_choice", prompt: "'evdə' sözünün kökü hansıdır?", options: ["ev", "də", "evd", "ə"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t8", type: "multiple_choice", prompt: "'-lar/-lər' şəkilçisi nə bildirir?", options: ["cəm (çoxluq)", "yer", "sahiblik", "hərəkət"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t9", type: "multiple_choice", prompt: "'uşaqlar' sözünün kökü hansıdır?", options: ["uşaq", "lar", "uşaql", "ar"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t10", type: "multiple_choice", prompt: "'dağlar' sözünün kökü hansıdır?", options: ["dağ", "lar", "dağl", "ar"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t11", type: "multiple_choice", prompt: "'kitabım' sözündə şəkilçi hansıdır?", options: ["-ım", "kitab", "-m", "kit"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t12", type: "multiple_choice", prompt: "'meşədə' sözünün kökü hansıdır?", options: ["meşə", "də", "meş", "ə"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t13", type: "multiple_choice", prompt: "Hər sözdə mütləq olan hissə hansıdır?", options: ["kök", "şəkilçi", "cəm şəkilçisi", "vurğu"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t14", type: "multiple_choice", prompt: "'quşlar' sözünün kökü hansıdır?", options: ["quş", "lar", "quşl", "ar"], correctIndex: 0, xp: 10 },
            { id: "az3-qurulus-l1-t15", type: "multiple_choice", prompt: "'baxçalar' sözündə şəkilçi hansıdır?", options: ["-lar", "baxça", "-ar", "bax"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az3-qurulus-l1-b1", type: "multiple_choice", prompt: "'kitabxanada' sözünün kökü hansıdır?", options: ["kitabxana", "da", "kitab", "xana"], correctIndex: 0, xp: 15 },
            { id: "az3-qurulus-l1-b2", type: "multiple_choice", prompt: "'evimiz' sözündə şəkilçi hansıdır?", options: ["-imiz", "ev", "-miz", "evi"], correctIndex: 0, xp: 15 },
            { id: "az3-qurulus-l1-b3", type: "multiple_choice", prompt: "Kök tək başına söz ola bilərmi?", options: ["bəli", "xeyr", "yalnız cəmdə", "yalnız feildə"], correctIndex: 0, xp: 15 },
            { id: "az3-qurulus-l1-b4", type: "multiple_choice", prompt: "'ağaclar' sözünün kökü hansıdır?", options: ["ağac", "lar", "ağacl", "ar"], correctIndex: 0, xp: 15 },
            { id: "az3-qurulus-l1-b5", type: "multiple_choice", prompt: "Şəkilçi sözə nə əlavə edir?", options: ["yeni məna/qrammatik məna", "heca", "vurğu", "səs"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 3. İsim ═══════════════
    {
      id: "az3-isim",
      title: "İsim",
      description: "Əşyanın adını bildirən söz; tək və cəm, xüsusi və ümumi isimlər.",
      lessons: [
        {
          id: "az3-isim-l1",
          title: "İsim: tək və cəm",
          intro: "İsim əşyanın adıdır; təkdə və cəmdə olur.",
          sections: [
            { heading: "İsim", body: "Əşyanın adını bildirən, 'kim?', 'nə?' suallarına cavab verən sözə isim deyilir: kitab, uşaq, dağ." },
            { heading: "Tək və cəm", body: "Tək: bir əşya (kitab). Cəm: çox əşya (kitablar). Cəm '-lar/-lər' şəkilçisi ilə düzəlir." },
            { heading: "Xüsusi və ümumi", body: "Xüsusi isimlər (adlar, şəhərlər) böyük hərflə yazılır: Ayşə, Bakı. Ümumi isimlər kiçik hərflə: qız, şəhər." },
          ],
          tasks: [
            { id: "az3-isim-l1-t1", type: "multiple_choice", prompt: "İsim hansı suallara cavab verir?", options: ["kim? nə?", "necə?", "nə edir?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı isimdir?", options: ["kitab", "oxumaq", "gözəl", "tez"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t3", type: "multiple_choice", prompt: "'kitab' sözünün cəmi hansıdır?", options: ["kitablar", "kitabı", "kitabda", "kitabın"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t4", type: "multiple_choice", prompt: "'uşaq' sözünün cəmi hansıdır?", options: ["uşaqlar", "uşağı", "uşaqda", "uşağın"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t5", type: "multiple_choice", prompt: "Cəm şəkilçisi hansıdır?", options: ["-lar/-lər", "-da/-də", "-ın/-in", "-ı/-i"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t6", type: "multiple_choice", prompt: "Xüsusi isimlər necə yazılır?", options: ["böyük hərflə", "kiçik hərflə", "cəmdə", "rəqəmlə"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı xüsusi isimdir?", options: ["Bakı", "şəhər", "dağ", "çay"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t8", type: "multiple_choice", prompt: "Aşağıdakılardan hansı ümumi isimdir?", options: ["qız", "Ayşə", "Gəncə", "Kür"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t9", type: "multiple_choice", prompt: "'gül' sözünün cəmi hansıdır?", options: ["güllər", "gülü", "güldə", "gülün"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t10", type: "multiple_choice", prompt: "'dağlar' sözü təkdə, yoxsa cəmdədir?", options: ["cəmdə", "təkdə", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t11", type: "multiple_choice", prompt: "Aşağıdakılardan hansı isim DEYİL?", options: ["qaçmaq", "kitab", "dağ", "quş"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t12", type: "multiple_choice", prompt: "İnsan adları hansı isim növüdür?", options: ["xüsusi", "ümumi", "cəm", "tək deyil"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t13", type: "multiple_choice", prompt: "'Elçin məktəbə getdi.' — isim hansıdır?", options: ["Elçin, məktəb", "getdi", "Elçin getdi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t14", type: "multiple_choice", prompt: "'quş' sözünün cəmi hansıdır?", options: ["quşlar", "quşu", "quşda", "quşun"], correctIndex: 0, xp: 10 },
            { id: "az3-isim-l1-t15", type: "multiple_choice", prompt: "Aşağıdakılardan hansı xüsusi isimdir?", options: ["Nərmin", "uşaq", "kitab", "ev"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az3-isim-l1-b1", type: "multiple_choice", prompt: "'ağac' sözünün cəmi hansıdır?", options: ["ağaclar", "ağacı", "ağacda", "ağacın"], correctIndex: 0, xp: 15 },
            { id: "az3-isim-l1-b2", type: "multiple_choice", prompt: "Şəhər, çay, dağ adları hansı isim növüdür?", options: ["xüsusi", "ümumi", "cəm", "tək"], correctIndex: 0, xp: 15 },
            { id: "az3-isim-l1-b3", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["Bakı", "bakı", "BAKı", "baKı"], correctIndex: 0, xp: 15 },
            { id: "az3-isim-l1-b4", type: "multiple_choice", prompt: "'pəncərələr' sözü hansı formadadır?", options: ["cəm", "tək", "xüsusi", "feil"], correctIndex: 0, xp: 15 },
            { id: "az3-isim-l1-b5", type: "multiple_choice", prompt: "'Kür' sözü nəyin adıdır?", options: ["çayın (xüsusi isim)", "dağın", "şəhərin", "əşyanın"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 4. Sifət və say ═══════════════
    {
      id: "az3-sifetsay",
      title: "Sifət və say",
      description: "Əlamət bildirən sifət və miqdar bildirən say.",
      lessons: [
        {
          id: "az3-sifetsay-l1",
          title: "Sifət və say",
          intro: "Sifət əlaməti, say miqdarı bildirir.",
          sections: [
            { heading: "Sifət", body: "Əşyanın əlamətini bildirən, 'necə?', 'nə cür?' suallarına cavab verən sözə sifət deyilir: gözəl, böyük, qırmızı." },
            { heading: "Say", body: "Əşyanın miqdarını, sayını bildirən, 'neçə?', 'nə qədər?' suallarına cavab verən sözə say deyilir: bir, iki, beş, on." },
          ],
          tasks: [
            { id: "az3-sifetsay-l1-t1", type: "multiple_choice", prompt: "Sifət hansı suala cavab verir?", options: ["necə?", "kim?", "nə edir?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t2", type: "multiple_choice", prompt: "Say hansı suala cavab verir?", options: ["neçə? nə qədər?", "necə?", "kim?", "nə edir?"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t3", type: "multiple_choice", prompt: "Aşağıdakılardan hansı sifətdir?", options: ["gözəl", "kitab", "beş", "oxumaq"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t4", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saydır?", options: ["üç", "gözəl", "kitab", "qaçmaq"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t5", type: "multiple_choice", prompt: "'qırmızı gül' — hansı söz sifətdir?", options: ["qırmızı", "gül", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t6", type: "multiple_choice", prompt: "'beş kitab' — hansı söz saydır?", options: ["beş", "kitab", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t7", type: "multiple_choice", prompt: "Aşağıdakılardan hansı sifətdir?", options: ["böyük", "iki", "ev", "getmək"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t8", type: "multiple_choice", prompt: "Aşağıdakılardan hansı saydır?", options: ["on", "isti", "su", "içmək"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t9", type: "multiple_choice", prompt: "'üç alma' — hansı söz saydır?", options: ["üç", "alma", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t10", type: "multiple_choice", prompt: "'isti çay' — hansı söz sifətdir?", options: ["isti", "çay", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t11", type: "multiple_choice", prompt: "'yaşıl yarpaq' — sifət hansıdır?", options: ["yaşıl", "yarpaq", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t12", type: "multiple_choice", prompt: "Sifət əşyanın nəyini bildirir?", options: ["əlamətini", "sayını", "hərəkətini", "adını"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t13", type: "multiple_choice", prompt: "Say əşyanın nəyini bildirir?", options: ["miqdarını/sayını", "əlamətini", "hərəkətini", "adını"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t14", type: "multiple_choice", prompt: "'iki gözəl gül' — say hansıdır?", options: ["iki", "gözəl", "gül", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-sifetsay-l1-t15", type: "multiple_choice", prompt: "'böyük' sözünün əksi (antonim) hansıdır?", options: ["kiçik", "gözəl", "isti", "yeni"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az3-sifetsay-l1-b1", type: "multiple_choice", prompt: "'On beş dəftər' — say hansıdır?", options: ["on beş", "dəftər", "on", "beş"], correctIndex: 0, xp: 15 },
            { id: "az3-sifetsay-l1-b2", type: "multiple_choice", prompt: "'təmiz, işıqlı otaq' — neçə sifət var?", options: ["2 (təmiz, işıqlı)", "1", "3", "0"], correctIndex: 0, xp: 15 },
            { id: "az3-sifetsay-l1-b3", type: "multiple_choice", prompt: "'birinci' sözü hansı nitq hissəsidir?", options: ["say (sıra)", "sifət", "isim", "feil"], correctIndex: 0, xp: 15 },
            { id: "az3-sifetsay-l1-b4", type: "multiple_choice", prompt: "'soyuq' sözünün əksi hansıdır?", options: ["isti", "böyük", "təmiz", "yeni"], correctIndex: 0, xp: 15 },
            { id: "az3-sifetsay-l1-b5", type: "multiple_choice", prompt: "'üç böyük ağac' — bu ifadədə isim hansıdır?", options: ["ağac", "üç", "böyük", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 5. Feil ═══════════════
    {
      id: "az3-feil",
      title: "Feil",
      description: "Hərəkət bildirən söz və onun zamanları.",
      lessons: [
        {
          id: "az3-feil-l1",
          title: "Feil və zamanları",
          intro: "Feil hərəkət bildirir; keçmiş, indiki, gələcək zamanda olur.",
          sections: [
            { heading: "Feil", body: "İşi, hərəkəti bildirən söz feildir: gəlir, oxudu, yazacaq. 'Nə edir?', 'nə etdi?', 'nə edəcək?' suallarına cavab verir." },
            { heading: "Zamanlar", body: "Keçmiş: gəldi (oldu). İndiki: gəlir (indi olur). Gələcək: gələcək (sonra olacaq)." },
          ],
          tasks: [
            { id: "az3-feil-l1-t1", type: "multiple_choice", prompt: "Feil hansı suala cavab verir?", options: ["nə edir?", "kim?", "necə?", "neçə?"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t2", type: "multiple_choice", prompt: "Aşağıdakılardan hansı feildir?", options: ["oxuyur", "kitab", "gözəl", "beş"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t3", type: "multiple_choice", prompt: "'gəldi' feili hansı zamandadır?", options: ["keçmiş", "indiki", "gələcək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t4", type: "multiple_choice", prompt: "'gəlir' feili hansı zamandadır?", options: ["indiki", "keçmiş", "gələcək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t5", type: "multiple_choice", prompt: "'gələcək' feili hansı zamandadır?", options: ["gələcək", "keçmiş", "indiki", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t6", type: "multiple_choice", prompt: "'Uşaq oynayır.' — feil hansıdır?", options: ["oynayır", "uşaq", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t7", type: "multiple_choice", prompt: "'yazdı' feili hansı zamandadır?", options: ["keçmiş", "indiki", "gələcək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t8", type: "multiple_choice", prompt: "'oxuyacaq' feili hansı zamandadır?", options: ["gələcək", "keçmiş", "indiki", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t9", type: "fill_blank", prompt: "'gəl' feilini keçmiş zamana çevir (3-cü şəxs tək).", accepted: ["gəldi"], xp: 10 },
            { id: "az3-feil-l1-t10", type: "fill_blank", prompt: "'yaz' feilini indiki zamana çevir (3-cü şəxs tək).", accepted: ["yazır"], xp: 10 },
            { id: "az3-feil-l1-t11", type: "multiple_choice", prompt: "Aşağıdakılardan hansı feil DEYİL?", options: ["kitab", "gəlir", "oxudu", "yazacaq"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t12", type: "multiple_choice", prompt: "'Quş uçur.' — feil hansı zamandadır?", options: ["indiki", "keçmiş", "gələcək", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t13", type: "multiple_choice", prompt: "Feil neçə zamanda olur?", options: ["üç (keçmiş, indiki, gələcək)", "iki", "dörd", "bir"], correctIndex: 0, xp: 10 },
            { id: "az3-feil-l1-t14", type: "fill_blank", prompt: "'oxu' feilini gələcək zamana çevir (3-cü şəxs tək).", accepted: ["oxuyacaq"], xp: 10 },
            { id: "az3-feil-l1-t15", type: "multiple_choice", prompt: "'Sabah gedəcəyəm.' — feil hansı zamandadır?", options: ["gələcək", "keçmiş", "indiki", "heç biri"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az3-feil-l1-b1", type: "multiple_choice", prompt: "'Dünən oxudum.' — feil hansı zamandadır?", options: ["keçmiş", "indiki", "gələcək", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az3-feil-l1-b2", type: "fill_blank", prompt: "'get' feilini keçmiş zamana çevir (3-cü şəxs tək).", accepted: ["getdi"], xp: 15 },
            { id: "az3-feil-l1-b3", type: "multiple_choice", prompt: "'Ağ pişik yatır.' — feil hansıdır?", options: ["yatır", "ağ", "pişik", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az3-feil-l1-b4", type: "multiple_choice", prompt: "İnkar: 'gəl' feilinin inkarı hansıdır?", options: ["gəlmə", "gəldi", "gəlir", "gələcək"], correctIndex: 0, xp: 15 },
            { id: "az3-feil-l1-b5", type: "fill_blank", prompt: "'yaz' feilinin inkar formasını yaz.", accepted: ["yazma"], xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════ 6. Cümlə və mətn ═══════════════
    {
      id: "az3-cumle",
      title: "Cümlə və mətn",
      description: "Cümlə növləri, mübtəda-xəbər və mətn.",
      lessons: [
        {
          id: "az3-cumle-l1",
          title: "Cümlə",
          intro: "Cümlə növləri və əsas üzvləri.",
          sections: [
            { heading: "Cümlə növləri", body: "Nəqli cümlə məlumat verir (nöqtə). Sual cümləsi sual verir (?). Nida cümləsi hiss bildirir (!)." },
            { heading: "Kim/nə iş görür?", body: "Cümlədə iş görəni bildirən söz mübtəda, işi bildirən söz xəbərdir: 'Uşaq oxuyur.' — uşaq (mübtəda), oxuyur (xəbər)." },
          ],
          tasks: [
            { id: "az3-cumle-l1-t1", type: "multiple_choice", prompt: "Məlumat verən cümlə necə adlanır?", options: ["nəqli", "sual", "nida", "əmr"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t2", type: "multiple_choice", prompt: "Sual cümləsi hansı işarə ilə bitir?", options: ["sual işarəsi (?)", "nöqtə (.)", "nida işarəsi (!)", "vergül"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t3", type: "multiple_choice", prompt: "Nida cümləsi hansı işarə ilə bitir?", options: ["nida işarəsi (!)", "nöqtə", "sual işarəsi", "vergül"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t4", type: "multiple_choice", prompt: "'Yağış yağır.' hansı cümlə növüdür?", options: ["nəqli", "sual", "nida", "əmr"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t5", type: "multiple_choice", prompt: "'Sən hara gedirsən?' hansı cümlə növüdür?", options: ["sual", "nəqli", "nida", "əmr"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t6", type: "multiple_choice", prompt: "'Nə gözəldir!' hansı cümlə növüdür?", options: ["nida", "nəqli", "sual", "əmr"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t7", type: "multiple_choice", prompt: "'Uşaq oxuyur.' — mübtəda hansıdır?", options: ["uşaq", "oxuyur", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t8", type: "multiple_choice", prompt: "'Uşaq oxuyur.' — xəbər hansıdır?", options: ["oxuyur", "uşaq", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t9", type: "multiple_choice", prompt: "Cümlə hansı hərflə başlayır?", options: ["böyük hərflə", "kiçik hərflə", "rəqəmlə", "fərq etməz"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t10", type: "multiple_choice", prompt: "'Quşlar cənuba uçur.' — mübtəda hansıdır?", options: ["quşlar", "cənuba", "uçur", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t11", type: "multiple_choice", prompt: "Nəqli cümlə hansı işarə ilə bitir?", options: ["nöqtə (.)", "sual işarəsi", "nida işarəsi", "vergül"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t12", type: "multiple_choice", prompt: "'Bahar gəldi.' — xəbər hansıdır?", options: ["gəldi", "bahar", "hər ikisi", "heç biri"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t13", type: "multiple_choice", prompt: "İş görəni bildirən üzv necə adlanır?", options: ["mübtəda", "xəbər", "təyin", "tamamlıq"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t14", type: "multiple_choice", prompt: "İşi bildirən üzv necə adlanır?", options: ["xəbər", "mübtəda", "təyin", "tamamlıq"], correctIndex: 0, xp: 10 },
            { id: "az3-cumle-l1-t15", type: "multiple_choice", prompt: "'Günəş parlayır.' — xəbər hansıdır?", options: ["parlayır", "günəş", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "az3-cumle-l1-b1", type: "multiple_choice", prompt: "'Mən kitab oxuyuram.' — mübtəda hansıdır?", options: ["mən", "kitab", "oxuyuram", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "az3-cumle-l1-b2", type: "multiple_choice", prompt: "Mətn nədən ibarətdir?", options: ["cümlələrdən", "yalnız sözlərdən", "hərflərdən", "hecalardan"], correctIndex: 0, xp: 15 },
            { id: "az3-cumle-l1-b3", type: "multiple_choice", prompt: "'Diqqətli ol!' hansı cümlə növüdür?", options: ["nida/əmr", "nəqli", "sual", "adi"], correctIndex: 0, xp: 15 },
            { id: "az3-cumle-l1-b4", type: "multiple_choice", prompt: "Mətnin adı necə adlanır?", options: ["başlıq", "cümlə", "abzas", "söz"], correctIndex: 0, xp: 15 },
            { id: "az3-cumle-l1-b5", type: "multiple_choice", prompt: "'Uşaqlar bağçada oynayır.' — xəbər hansıdır?", options: ["oynayır", "uşaqlar", "bağçada", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
  ],
};
