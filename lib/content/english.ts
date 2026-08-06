// İngilis dili — 5-ci sinif tam kurikulumu.
// Bölmələr: Qrammatika → İsimlər (Nouns) → Söz ehtiyatı → Bacarıqlar.
// Hər layihədə (project) 15 əsas + 5 bonus tapşırıq. Suallar AZ dilində izahla,
// İngilis dilini yoxlayır.

import type { Subject } from "../types";

export const english: Subject = {
  slug: "ingilis-dili",
  name: "İngilis dili",
  grade: 5,
  icon: "İ",
  color: "violet",
  units: [
    // ═══════════════════════════════════════════════════════════════
    // 1-Cİ DÖVR — PRESENT SIMPLE (Qayda → Lüğət → Dinləmə → Oxu → Yazı)
    // Hər bölmə bir bacarıqdır; hamısı eyni "gündəlik fellər" lüğəti ilə bağlıdır.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c1-grammar",
      title: "Qayda: Present Simple",
      description: "İndiki sadə zaman — hər gün təkrarlanan işlər. Qaydanı oxu, sonra məşq et.",
      lessons: [
        {
          id: "ps-rule",
          title: "Present Simple qaydası",
          intro: "Present Simple hər gün təkrarlanan işləri bildirir. Gəl qaydanı öyrənək!",
          sections: [
            { heading: "Present Simple nədir?", body: "Hər gün, həmişə və ya adətən təkrarlanan işləri bildirir: I go to school every day. (Mən hər gün məktəbə gedirəm.)" },
            { heading: "he / she / it → felə -s", body: "O (he/she/it) ilə felin sonuna -s əlavə olunur: She reads. He plays. Amma I/you/we/they ilə fel dəyişmir: I read, they play." },
            { heading: "Sual və inkar: do / does", body: "Sual: Do you like tea? Does she go? İnkar: I don't eat meat. He doesn't play. (he/she/it → does/doesn't.)" },
          ],
          tasks: [
            { id: "ps-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'I ___ to school every day.'", options: ["go", "goes", "going", "went"], correctIndex: 0, xp: 10 },
            { id: "ps-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'She ___ a book.' (read)", options: ["read", "reads", "reading", "readed"], correctIndex: 1, xp: 10 },
            { id: "ps-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'He ___ football.' (play)", options: ["play", "plays", "playing", "played"], correctIndex: 1, xp: 10 },
            { id: "ps-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "'They ___ water.' (drink)", options: ["drink", "drinks", "drinking", "drank"], correctIndex: 0, xp: 10 },
            { id: "ps-rule-t5", type: "fill_blank", prompt: "'She (watch) TV.' — düzgün formanı yaz.", accepted: ["watches"], xp: 10 },
            { id: "ps-rule-t6", type: "multiple_choice", prompt: "he / she / it ilə felə hansı şəkilçi əlavə olunur?", options: ["-s", "-ed", "-ing", "heç nə"], correctIndex: 0, xp: 10 },
            { id: "ps-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'We ___ breakfast every morning.' (eat)", options: ["eat", "eats", "eating", "ate"], correctIndex: 0, xp: 10 },
            { id: "ps-rule-t8", type: "multiple_choice", speakOptions: true, prompt: "İnkar: 'He ___ like milk.'", options: ["don't", "doesn't", "isn't", "not"], correctIndex: 1, xp: 10 },
            { id: "ps-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "Sual: '___ you play football?'", options: ["Do", "Does", "Are", "Is"], correctIndex: 0, xp: 10 },
            { id: "ps-rule-t10", type: "multiple_choice", speakOptions: true, prompt: "Sual: '___ she read books?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, xp: 10 },
            { id: "ps-rule-t11", type: "multiple_choice", speakOptions: true, prompt: "'My father ___ every day.' (work)", options: ["work", "works", "working", "worked"], correctIndex: 1, xp: 10 },
            { id: "ps-rule-t12", type: "multiple_choice", speakOptions: true, prompt: "'I ___ apples.' (like)", options: ["like", "likes", "liking", "liked"], correctIndex: 0, xp: 10 },
            { id: "ps-rule-t13", type: "multiple_choice", speakOptions: true, prompt: "'My sister ___ English.' (study — y→ies)", options: ["study", "studys", "studies", "studying"], correctIndex: 2, xp: 10 },
            { id: "ps-rule-t14", type: "multiple_choice", speakOptions: true, prompt: "Sual: '___ he like tea?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, xp: 10 },
            { id: "ps-rule-t15", type: "multiple_choice", prompt: "Hansı cümlə düzgündür?", options: ["I plays tennis.", "I play tennis.", "I playing tennis.", "I to play tennis."], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "ps-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'The sun ___ in the east.' (fakt, rise)", options: ["rise", "rises", "rising", "rose"], correctIndex: 1, xp: 15 },
            { id: "ps-rule-b2", type: "fill_blank", prompt: "'He (go) to school.' — düzgün formanı yaz.", accepted: ["goes"], xp: 15 },
            { id: "ps-rule-b3", type: "multiple_choice", speakOptions: true, prompt: "Hansı cümlə düzgündür?", options: ["She go home.", "She goes home.", "She going home.", "She gone home."], correctIndex: 1, xp: 15 },
            { id: "ps-rule-b4", type: "multiple_choice", speakOptions: true, prompt: "'Cats ___ milk.' (drink)", options: ["drink", "drinks", "drinking", "drank"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c1-vocab",
      title: "Lüğət: Gündəlik fellər",
      description: "8 yeni fel — eyni sözləri müxtəlif cümlələrdə təkrar-təkrar işlət.",
      lessons: [
        {
          id: "ps-vocab",
          title: "Gündəlik fellər (8 söz)",
          intro: "Bu gün 8 yeni fel öyrənəcəyik və onları cümlələrdə işlədəcəyik.",
          sections: [
            { heading: "Yeni sözlər (8 fel)", body: "get up — durmaq/qalxmaq · go — getmək · eat — yemək · drink — içmək · read — oxumaq · play — oynamaq · watch — baxmaq · like — sevmək" },
            { heading: "Məsləhət", body: "Hər sözü bir cümlədə xatırla: I eat breakfast. She reads a book. Sözü cümlə ilə öyrənmək daha asandır." },
          ],
          tasks: [
            { id: "ps-vocab-t1", type: "multiple_choice", prompt: "'eat' sözünün mənası nədir?", options: ["içmək", "yemək", "oxumaq", "getmək"], correctIndex: 1, xp: 10 },
            { id: "ps-vocab-t2", type: "multiple_choice", prompt: "'read' sözünün mənası?", options: ["oynamaq", "oxumaq", "baxmaq", "durmaq"], correctIndex: 1, xp: 10 },
            { id: "ps-vocab-t3", type: "multiple_choice", prompt: "'play' sözünün mənası?", options: ["oynamaq", "yemək", "içmək", "sevmək"], correctIndex: 0, xp: 10 },
            { id: "ps-vocab-t4", type: "multiple_choice", prompt: "'drink' sözünün mənası?", options: ["baxmaq", "içmək", "getmək", "oxumaq"], correctIndex: 1, xp: 10 },
            { id: "ps-vocab-t5", type: "multiple_choice", prompt: "'watch' sözünün mənası?", options: ["baxmaq", "durmaq", "yemək", "oynamaq"], correctIndex: 0, xp: 10 },
            { id: "ps-vocab-t6", type: "multiple_choice", prompt: "'go' sözünün mənası?", options: ["getmək", "gəlmək", "durmaq", "içmək"], correctIndex: 0, xp: 10 },
            { id: "ps-vocab-t7", type: "fill_blank", prompt: "'getmək' ingiliscə necə yazılır?", accepted: ["go"], xp: 10 },
            { id: "ps-vocab-t8", type: "fill_blank", prompt: "'oxumaq' ingiliscə necə yazılır?", accepted: ["read"], xp: 10 },
            { id: "ps-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'I ___ water.' (içmək)", options: ["drink", "eat", "read", "play"], correctIndex: 0, xp: 10 },
            { id: "ps-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'She ___ a book.' (oxumaq)", options: ["reads", "eats", "plays", "drinks"], correctIndex: 0, xp: 10 },
            { id: "ps-vocab-t11", type: "multiple_choice", speakOptions: true, prompt: "'They ___ football.' (oynamaq)", options: ["play", "watch", "drink", "go"], correctIndex: 0, xp: 10 },
            { id: "ps-vocab-t12", type: "fill_blank", prompt: "'I ___ TV in the evening.' (baxmaq — düzgün feli yaz)", accepted: ["watch"], xp: 10 },
            { id: "ps-vocab-t13", type: "fill_blank", prompt: "'içmək' ingiliscə necə yazılır?", accepted: ["drink"], xp: 10 },
            { id: "ps-vocab-t14", type: "fill_blank", prompt: "'baxmaq' ingiliscə necə yazılır?", accepted: ["watch"], xp: 10 },
            { id: "ps-vocab-t15", type: "multiple_choice", speakOptions: true, prompt: "'He ___ up at seven.' (durmaq)", options: ["gets", "eats", "goes", "reads"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "ps-vocab-b1", type: "multiple_choice", prompt: "'get up' nə deməkdir?", options: ["yatmaq", "durmaq / qalxmaq", "oturmaq", "qaçmaq"], correctIndex: 1, xp: 15 },
            { id: "ps-vocab-b2", type: "multiple_choice", prompt: "'like' nə deməkdir?", options: ["sevmək", "sevməmək", "bilmək", "istəmək"], correctIndex: 0, xp: 15 },
            { id: "ps-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "'We ___ breakfast.' (yemək)", options: ["eat", "drink", "read", "watch"], correctIndex: 0, xp: 15 },
            { id: "ps-vocab-b4", type: "fill_blank", prompt: "'oynamaq' ingiliscə necə yazılır?", accepted: ["play"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c1-listening",
      title: "Dinləmə: Present Simple",
      description: "Present Simple cümlələrini qulaqla tanı — dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "ps-listen",
          title: "Dinlə və seç: cümlələr",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "ps-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I eat breakfast.", options: ["Mən səhər yeməyi yeyirəm.", "Mən su içirəm.", "Mən kitab oxuyuram.", "Mən televizora baxıram."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She reads a book.", options: ["O futbol oynayır.", "O kitab oxuyur.", "O su içir.", "O məktəbə gedir."], correctIndex: 1, xp: 10 },
            { id: "ps-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He plays football.", options: ["O televizora baxır.", "O yemək yeyir.", "O futbol oynayır.", "O durur."], correctIndex: 2, xp: 10 },
            { id: "ps-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We drink water.", options: ["Biz su içirik.", "Biz yemək yeyirik.", "Biz oynayırıq.", "Biz oxuyuruq."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t5", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "They go to school.", options: ["Onlar evə gedir.", "Onlar məktəbə gedir.", "Onlar oynayır.", "Onlar yatır."], correctIndex: 1, xp: 10 },
            { id: "ps-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I watch TV.", options: ["Mən televizora baxıram.", "Mən kitab oxuyuram.", "Mən su içirəm.", "Mən qaçıram."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She likes apples.", options: ["O almanı sevmir.", "O alma yeyir.", "O almanı sevir.", "O alma alır."], correctIndex: 2, xp: 10 },
            { id: "ps-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He gets up at seven.", options: ["O saat yeddidə durur.", "O saat yeddidə yatır.", "O saat səkkizdə durur.", "O saat altıda gəlir."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t9", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We eat lunch at school.", options: ["Biz evdə nahar edirik.", "Biz məktəbdə nahar edirik.", "Biz məktəbdə oynayırıq.", "Biz nahar etmirik."], correctIndex: 1, xp: 10 },
            { id: "ps-listen-t10", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You read every day.", options: ["Sən hər gün oxuyursan.", "Sən heç oxumursan.", "Sən hər gün oynayırsan.", "Sən bəzən oxuyursan."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t11", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He drinks milk.", options: ["O süd içir.", "O su içir.", "O çay içir.", "O süd sevir."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t12", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We play in the park.", options: ["Biz parkda oynayırıq.", "Biz evdə oynayırıq.", "Biz parkda gəzirik.", "Biz parkda qaçırıq."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t13", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She goes to school by bus.", options: ["O məktəbə avtobusla gedir.", "O məktəbə piyada gedir.", "O işə avtobusla gedir.", "O evə avtobusla gedir."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t14", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I read a book every night.", options: ["Mən hər gecə kitab oxuyuram.", "Mən hər səhər kitab oxuyuram.", "Mən heç kitab oxumuram.", "Mən hər gecə televizora baxıram."], correctIndex: 0, xp: 10 },
            { id: "ps-listen-t15", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Does he like tea?", options: ["O çayı sevir?", "O çay içir?", "O çay alır?", "O çay bilir?"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "ps-listen-b1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "The cat drinks milk.", options: ["Pişik su içir.", "Pişik süd içir.", "Pişik yemək yeyir.", "İt süd içir."], correctIndex: 1, xp: 15 },
            { id: "ps-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "My mother watches TV in the evening.", options: ["Anam səhər televizora baxır.", "Anam axşam televizora baxır.", "Anam axşam kitab oxuyur.", "Atam axşam televizora baxır."], correctIndex: 1, xp: 15 },
            { id: "ps-listen-b3", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Do you like football?", options: ["Sən futbol oynayırsan?", "Sən futbolu sevirsən?", "Sən futbola baxırsan?", "Sən futbol bilirsən?"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c1-reading",
      title: "Oxu: Mənim günüm",
      description: "Qısa mətni oxu və suallara cavab ver (Present Simple).",
      lessons: [
        {
          id: "ps-read",
          title: "Reading: My day",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "This is Leyla. She is eleven years old. Every day she gets up at seven o'clock. She eats breakfast and drinks milk. Then she goes to school. At school she reads books and plays with her friends. In the evening she watches TV. She likes her day." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "ps-read-t1", type: "multiple_choice", speakOptions: true, prompt: "How old is Leyla?", options: ["ten", "eleven", "twelve", "nine"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t2", type: "multiple_choice", speakOptions: true, prompt: "What time does Leyla get up?", options: ["six o'clock", "seven o'clock", "eight o'clock", "nine o'clock"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t3", type: "multiple_choice", speakOptions: true, prompt: "What does Leyla drink?", options: ["water", "juice", "milk", "tea"], correctIndex: 2, xp: 10 },
            { id: "ps-read-t4", type: "multiple_choice", speakOptions: true, prompt: "Where does she go every day?", options: ["to the park", "to school", "to work", "home"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What does she do at school?", options: ["sleeps", "reads and plays", "cooks", "watches TV"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t6", type: "multiple_choice", speakOptions: true, prompt: "What does Leyla do in the evening?", options: ["reads books", "watches TV", "plays football", "goes to school"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t7", type: "fill_blank", prompt: "'She eats breakfast and ___ milk.' (mətndən sözü yaz)", accepted: ["drinks"], xp: 10 },
            { id: "ps-read-t8", type: "multiple_choice", speakOptions: true, prompt: "Does Leyla like her day?", options: ["Yes, she does.", "No, she doesn't.", "We don't know.", "She is sad."], correctIndex: 0, xp: 10 },
            { id: "ps-read-t9", type: "multiple_choice", prompt: "'She gets up at seven o'clock.' — bu nə vaxtdır?", options: ["səhər", "gecə", "günorta", "axşam"], correctIndex: 0, xp: 10 },
            { id: "ps-read-t10", type: "multiple_choice", speakOptions: true, prompt: "Mətn kimin haqqındadır?", options: ["Tom", "Leyla", "Anna", "Ali"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t11", type: "multiple_choice", speakOptions: true, prompt: "What does Leyla eat in the morning?", options: ["lunch", "breakfast", "dinner", "nothing"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t12", type: "multiple_choice", speakOptions: true, prompt: "Who does Leyla play with?", options: ["her friends", "her cat", "her brother", "her mother"], correctIndex: 0, xp: 10 },
            { id: "ps-read-t13", type: "fill_blank", prompt: "'She ___ to school.' (mətndəki feli yaz)", accepted: ["goes"], xp: 10 },
            { id: "ps-read-t14", type: "multiple_choice", prompt: "Mətnə görə Leyla neçə yaşındadır?", options: ["10", "11", "12", "9"], correctIndex: 1, xp: 10 },
            { id: "ps-read-t15", type: "multiple_choice", speakOptions: true, prompt: "When does she watch TV?", options: ["in the morning", "at school", "in the evening", "at night"], correctIndex: 2, xp: 15 },
          ],
          bonusTasks: [
            { id: "ps-read-b1", type: "multiple_choice", prompt: "'Every day' nə deməkdir?", options: ["hər gün", "bəzən", "heç vaxt", "dünən"], correctIndex: 0, xp: 15 },
            { id: "ps-read-b2", type: "fill_blank", prompt: "'Leyla ___ books at school.' (oxuyur — mətndən)", accepted: ["reads"], xp: 15 },
            { id: "ps-read-b3", type: "multiple_choice", speakOptions: true, prompt: "'She plays with her ___.'", options: ["books", "friends", "cat", "food"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c1-writing",
      title: "Yazı: Present Simple",
      description: "Sözlərdən düzgün Present Simple cümləsi qur.",
      lessons: [
        {
          id: "ps-write",
          title: "Cümlə qur: Present Simple",
          intro: "Sözləri düzgün sıraya düz və Present Simple cümləsi qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas — cümlə yuxarıda düzələcək. İngilis cümləsi: kim → nə edir → nəyi. he/she ilə felə -s yadında olsun!" },
          ],
          tasks: [
            { id: "ps-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "eat", "breakfast"], answer: "I eat breakfast", translation: "Mən səhər yeməyi yeyirəm.", xp: 10 },
            { id: "ps-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "reads", "a", "book"], answer: "She reads a book", translation: "O kitab oxuyur.", xp: 10 },
            { id: "ps-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "plays", "football"], answer: "He plays football", translation: "O futbol oynayır.", xp: 10 },
            { id: "ps-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "drink", "water"], answer: "We drink water", translation: "Biz su içirik.", xp: 10 },
            { id: "ps-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["They", "go", "to", "school"], answer: "They go to school", translation: "Onlar məktəbə gedir.", xp: 10 },
            { id: "ps-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "watch", "TV"], answer: "I watch TV", translation: "Mən televizora baxıram.", xp: 10 },
            { id: "ps-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "likes", "apples"], answer: "She likes apples", translation: "O almanı sevir.", xp: 10 },
            { id: "ps-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "gets", "up", "early"], answer: "He gets up early", translation: "O tez durur.", xp: 10 },
            { id: "ps-write-t9", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "read", "every", "day"], answer: "We read every day", translation: "Biz hər gün oxuyuruq.", xp: 10 },
            { id: "ps-write-t10", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["My", "mother", "watches", "TV"], answer: "My mother watches TV", translation: "Anam televizora baxır.", xp: 10 },
            { id: "ps-write-t11", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "drinks", "milk"], answer: "She drinks milk", translation: "O süd içir.", xp: 10 },
            { id: "ps-write-t12", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["They", "play", "football"], answer: "They play football", translation: "Onlar futbol oynayır.", xp: 10 },
            { id: "ps-write-t13", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "go", "to", "school"], answer: "I go to school", translation: "Mən məktəbə gedirəm.", xp: 10 },
            { id: "ps-write-t14", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "watch", "TV", "together"], answer: "We watch TV together", translation: "Biz birlikdə televizora baxırıq.", xp: 10 },
            { id: "ps-write-t15", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Does", "she", "read", "books"], answer: "Does she read books", translation: "O kitab oxuyur?", xp: 15 },
          ],
          bonusTasks: [
            { id: "ps-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Do", "you", "like", "football"], answer: "Do you like football", translation: "Sən futbolu sevirsən?", xp: 15 },
            { id: "ps-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "does", "not", "eat", "meat"], answer: "He does not eat meat", translation: "O ət yemir.", xp: 15 },
            { id: "ps-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "plays", "with", "her", "friends"], answer: "She plays with her friends", translation: "O dostları ilə oynayır.", xp: 15 },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2-Cİ DÖVR — PRESENT CONTINUOUS (Qayda → Lüğət → Dinləmə → Oxu → Yazı)
    // İndi baş verən işlər; yeni fellər: run, write, sleep, cook, sing, dance, swim, sit.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c2-grammar",
      title: "Qayda: Present Continuous",
      description: "İndi, danışıq anında baş verən işlər. Qaydanı oxu, sonra məşq et.",
      lessons: [
        {
          id: "pc-rule",
          title: "Present Continuous qaydası",
          intro: "Present Continuous indi, bu anda baş verən işi bildirir. Gəl qaydanı öyrənək!",
          sections: [
            { heading: "Present Continuous nədir?", body: "İndi, danışıq anında baş verən işi bildirir: I am reading now. (Mən indi oxuyuram.) Çox vaxt 'now', 'at the moment' sözləri ilə işlənir." },
            { heading: "am / is / are + fel + -ing", body: "I → am (I am playing). he/she/it → is (She is running). you/we/they → are (They are singing)." },
            { heading: "-ing yazılışı", body: "Adətən sadəcə -ing: play → playing. Sonu 'e' olanda 'e' düşür: write → writing. Qısa sözlərdə son samit qoşalaşır: run → running, sit → sitting." },
          ],
          tasks: [
            { id: "pc-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'I ___ reading now.'", options: ["am", "is", "are", "be"], correctIndex: 0, xp: 10 },
            { id: "pc-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'She ___ running.'", options: ["am", "is", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "pc-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'They ___ singing.'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 10 },
            { id: "pc-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "'We ___ cooking.'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 10 },
            { id: "pc-rule-t5", type: "fill_blank", prompt: "'play' sözünə -ing əlavə et.", accepted: ["playing"], xp: 10 },
            { id: "pc-rule-t6", type: "multiple_choice", prompt: "Present Continuous nə vaxt işlədilir?", options: ["hər gün olan iş", "indi baş verən iş", "keçmiş iş", "gələcək iş"], correctIndex: 1, xp: 10 },
            { id: "pc-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'He is ___ now.' (write)", options: ["write", "writes", "writing", "wrote"], correctIndex: 2, xp: 10 },
            { id: "pc-rule-t8", type: "fill_blank", prompt: "'run' sözünə -ing əlavə et (son samit qoşalaşır).", accepted: ["running"], xp: 10 },
            { id: "pc-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "'The baby ___ sleeping.'", options: ["am", "is", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "pc-rule-t10", type: "multiple_choice", speakOptions: true, prompt: "'Look! It ___ raining.'", options: ["am", "is", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "pc-rule-t11", type: "fill_blank", prompt: "'dance' sözünə -ing əlavə et ('e' düşür).", accepted: ["dancing"], xp: 10 },
            { id: "pc-rule-t12", type: "multiple_choice", speakOptions: true, prompt: "'You ___ studying English.'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 15 },
          ],
          bonusTasks: [
            { id: "pc-rule-b1", type: "fill_blank", prompt: "'sit' sözünə -ing əlavə et (son samit qoşalaşır).", accepted: ["sitting"], xp: 15 },
            { id: "pc-rule-b2", type: "multiple_choice", speakOptions: true, prompt: "Hansı cümlə Present Continuous-dur?", options: ["I eat lunch.", "I am eating lunch.", "I ate lunch.", "I will eat lunch."], correctIndex: 1, xp: 15 },
            { id: "pc-rule-b3", type: "fill_blank", prompt: "'swim' sözünə -ing əlavə et.", accepted: ["swimming"], xp: 15 },
            { id: "pc-rule-b4", type: "multiple_choice", speakOptions: true, prompt: "'What ___ you doing?'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c2-vocab",
      title: "Lüğət: İndi görülən işlər",
      description: "8 yeni fel — run, write, sleep, cook, sing, dance, swim, sit.",
      lessons: [
        {
          id: "pc-vocab",
          title: "İş felləri (8 söz)",
          intro: "İndi görülən işləri bildirən 8 yeni fel öyrənək.",
          sections: [
            { heading: "Yeni sözlər (8 fel)", body: "run — qaçmaq · write — yazmaq · sleep — yatmaq · cook — bişirmək · sing — mahnı oxumaq · dance — rəqs etmək · swim — üzmək · sit — oturmaq" },
            { heading: "Məsləhət", body: "Bu felləri -ing forması ilə xatırla: running, writing, sleeping... çünki indi baş verən işi bildirirlər." },
          ],
          tasks: [
            { id: "pc-vocab-t1", type: "multiple_choice", prompt: "'run' sözünün mənası?", options: ["qaçmaq", "yatmaq", "üzmək", "oxumaq"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t2", type: "multiple_choice", prompt: "'sleep' sözünün mənası?", options: ["oturmaq", "yatmaq", "qaçmaq", "bişirmək"], correctIndex: 1, xp: 10 },
            { id: "pc-vocab-t3", type: "multiple_choice", prompt: "'cook' sözünün mənası?", options: ["bişirmək", "üzmək", "yazmaq", "rəqs etmək"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t4", type: "multiple_choice", prompt: "'swim' sözünün mənası?", options: ["oxumaq", "üzmək", "qaçmaq", "oturmaq"], correctIndex: 1, xp: 10 },
            { id: "pc-vocab-t5", type: "multiple_choice", prompt: "'write' sözünün mənası?", options: ["yazmaq", "oxumaq", "oturmaq", "qaçmaq"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t6", type: "multiple_choice", prompt: "'dance' sözünün mənası?", options: ["rəqs etmək", "oxumaq", "üzmək", "yatmaq"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t7", type: "fill_blank", prompt: "'yatmaq' ingiliscə necə yazılır?", accepted: ["sleep"], xp: 10 },
            { id: "pc-vocab-t8", type: "fill_blank", prompt: "'oturmaq' ingiliscə necə yazılır?", accepted: ["sit"], xp: 10 },
            { id: "pc-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'She is ___ in the pool.' (üzmək)", options: ["swimming", "running", "cooking", "singing"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'He is ___ a letter.' (yazmaq)", options: ["writing", "reading", "cooking", "dancing"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t11", type: "multiple_choice", speakOptions: true, prompt: "'They are ___ a song.' (oxumaq)", options: ["singing", "sleeping", "sitting", "running"], correctIndex: 0, xp: 10 },
            { id: "pc-vocab-t12", type: "fill_blank", prompt: "'The boys are ___ in the yard.' (qaçmaq — -ing forması)", accepted: ["running"], xp: 15 },
          ],
          bonusTasks: [
            { id: "pc-vocab-b1", type: "multiple_choice", prompt: "'sing' sözünün mənası?", options: ["mahnı oxumaq", "yatmaq", "oturmaq", "üzmək"], correctIndex: 0, xp: 15 },
            { id: "pc-vocab-b2", type: "multiple_choice", prompt: "'sit' sözünün mənası?", options: ["oturmaq", "qaçmaq", "bişirmək", "yazmaq"], correctIndex: 0, xp: 15 },
            { id: "pc-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "'Mum is ___ dinner.' (bişirmək)", options: ["cooking", "swimming", "writing", "dancing"], correctIndex: 0, xp: 15 },
            { id: "pc-vocab-b4", type: "fill_blank", prompt: "'rəqs etmək' ingiliscə necə yazılır?", accepted: ["dance"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c2-listening",
      title: "Dinləmə: Present Continuous",
      description: "İndi baş verən işlərin cümlələrini dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "pc-listen",
          title: "Dinlə və seç: indi baş verən iş",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "pc-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I am reading a book.", options: ["Mən kitab oxuyuram.", "Mən yazıram.", "Mən yatıram.", "Mən qaçıram."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She is running.", options: ["O yazır.", "O qaçır.", "O yatır.", "O üzür."], correctIndex: 1, xp: 10 },
            { id: "pc-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "They are singing.", options: ["Onlar rəqs edir.", "Onlar mahnı oxuyur.", "Onlar yatır.", "Onlar qaçır."], correctIndex: 1, xp: 10 },
            { id: "pc-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He is cooking dinner.", options: ["O şam yeməyi bişirir.", "O yemək yeyir.", "O yazır.", "O yatır."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t5", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We are swimming.", options: ["Biz üzürük.", "Biz qaçırıq.", "Biz oxuyuruq.", "Biz yatırıq."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "The baby is sleeping.", options: ["Körpə yatır.", "Körpə ağlayır.", "Körpə oynayır.", "Körpə yeyir."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You are writing a letter.", options: ["Sən məktub yazırsan.", "Sən oxuyursan.", "Sən qaçırsan.", "Sən yatırsan."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She is dancing now.", options: ["O indi rəqs edir.", "O indi oxuyur.", "O indi yatır.", "O indi qaçır."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t9", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "The children are playing.", options: ["Uşaqlar oynayır.", "Uşaqlar yatır.", "Uşaqlar yeyir.", "Uşaqlar oxuyur."], correctIndex: 0, xp: 10 },
            { id: "pc-listen-t10", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I am sitting on the chair.", options: ["Mən stulda oturmuşam.", "Mən qaçıram.", "Mən üzürəm.", "Mən yazıram."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "pc-listen-b1", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "What are you doing?", options: ["Sən nə edirsən?", "Sən hara gedirsən?", "Sən kimsən?", "Sən neçə yaşındasan?"], correctIndex: 0, xp: 15 },
            { id: "pc-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "Look! It is raining.", options: ["Bax! Yağış yağır.", "Bax! Gün çıxıb.", "Bax! Qar yağır.", "Bax! Külək əsir."], correctIndex: 0, xp: 15 },
            { id: "pc-listen-b3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "My father is reading a newspaper.", options: ["Atam qəzet oxuyur.", "Anam qəzet oxuyur.", "Atam kitab oxuyur.", "Atam yazır."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c2-reading",
      title: "Oxu: In the park",
      description: "Qısa mətni oxu və suallara cavab ver (Present Continuous).",
      lessons: [
        {
          id: "pc-read",
          title: "Reading: In the park",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "Look at the park. It is a sunny day. Many people are in the park. Two boys are playing football. A girl is running with her dog. An old man is sitting on a bench and reading a newspaper. Some children are singing and dancing. Everyone is having a good time." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "pc-read-t1", type: "multiple_choice", speakOptions: true, prompt: "What is the weather like?", options: ["rainy", "sunny", "snowy", "cloudy"], correctIndex: 1, xp: 10 },
            { id: "pc-read-t2", type: "multiple_choice", speakOptions: true, prompt: "Where are the people?", options: ["at school", "in the park", "at home", "at the shop"], correctIndex: 1, xp: 10 },
            { id: "pc-read-t3", type: "multiple_choice", speakOptions: true, prompt: "What are the two boys doing?", options: ["swimming", "playing football", "sleeping", "cooking"], correctIndex: 1, xp: 10 },
            { id: "pc-read-t4", type: "multiple_choice", speakOptions: true, prompt: "What is the girl doing?", options: ["running with her dog", "reading", "dancing", "cooking"], correctIndex: 0, xp: 10 },
            { id: "pc-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What is the old man doing?", options: ["singing", "reading a newspaper", "running", "swimming"], correctIndex: 1, xp: 10 },
            { id: "pc-read-t6", type: "multiple_choice", speakOptions: true, prompt: "Where is the old man sitting?", options: ["on a bench", "on the grass", "on a chair", "on the floor"], correctIndex: 0, xp: 10 },
            { id: "pc-read-t7", type: "fill_blank", prompt: "'Some children are singing and ___.' (mətndən sözü yaz)", accepted: ["dancing"], xp: 10 },
            { id: "pc-read-t8", type: "multiple_choice", speakOptions: true, prompt: "Are the people happy?", options: ["Yes, they are.", "No, they aren't.", "We don't know.", "They are sad."], correctIndex: 0, xp: 10 },
            { id: "pc-read-t9", type: "multiple_choice", prompt: "'It is a sunny day.' — hava necədir?", options: ["günəşli", "yağışlı", "qarlı", "küləkli"], correctIndex: 0, xp: 10 },
            { id: "pc-read-t10", type: "multiple_choice", speakOptions: true, prompt: "What is everyone having?", options: ["a good time", "lunch", "a book", "a car"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "pc-read-b1", type: "multiple_choice", prompt: "'are playing' hansı zamandır?", options: ["Present Simple", "Present Continuous", "Past Simple", "Future"], correctIndex: 1, xp: 15 },
            { id: "pc-read-b2", type: "fill_blank", prompt: "'A girl is ___ with her dog.' (qaçmaq — -ing, mətndən)", accepted: ["running"], xp: 15 },
            { id: "pc-read-b3", type: "multiple_choice", prompt: "'Everyone is having a good time.' nə deməkdir?", options: ["hamı yaxşı vaxt keçirir", "hamı yorğundur", "hamı acdır", "hamı yatır"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c2-writing",
      title: "Yazı: Present Continuous",
      description: "Sözlərdən düzgün Present Continuous cümləsi qur.",
      lessons: [
        {
          id: "pc-write",
          title: "Cümlə qur: Present Continuous",
          intro: "Sözləri düzgün sıraya düz və Present Continuous cümləsi qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas — cümlə yuxarıda düzələcək. Quruluş: kim → am/is/are → fel+ing." },
          ],
          tasks: [
            { id: "pc-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "am", "reading"], answer: "I am reading", translation: "Mən oxuyuram.", xp: 10 },
            { id: "pc-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "is", "running"], answer: "She is running", translation: "O qaçır.", xp: 10 },
            { id: "pc-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["They", "are", "singing"], answer: "They are singing", translation: "Onlar mahnı oxuyur.", xp: 10 },
            { id: "pc-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "is", "cooking", "dinner"], answer: "He is cooking dinner", translation: "O şam yeməyi bişirir.", xp: 10 },
            { id: "pc-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "are", "swimming"], answer: "We are swimming", translation: "Biz üzürük.", xp: 10 },
            { id: "pc-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["The", "baby", "is", "sleeping"], answer: "The baby is sleeping", translation: "Körpə yatır.", xp: 10 },
            { id: "pc-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["You", "are", "writing", "a", "letter"], answer: "You are writing a letter", translation: "Sən məktub yazırsan.", xp: 10 },
            { id: "pc-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "is", "dancing", "now"], answer: "She is dancing now", translation: "O indi rəqs edir.", xp: 10 },
            { id: "pc-write-t9", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "am", "sitting", "here"], answer: "I am sitting here", translation: "Mən burada oturmuşam.", xp: 10 },
            { id: "pc-write-t10", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["The", "children", "are", "playing"], answer: "The children are playing", translation: "Uşaqlar oynayır.", xp: 15 },
          ],
          bonusTasks: [
            { id: "pc-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["What", "are", "you", "doing"], answer: "What are you doing", translation: "Sən nə edirsən?", xp: 15 },
            { id: "pc-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["It", "is", "raining", "now"], answer: "It is raining now", translation: "İndi yağış yağır.", xp: 15 },
            { id: "pc-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["My", "father", "is", "reading"], answer: "My father is reading", translation: "Atam oxuyur.", xp: 15 },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3-CÜ DÖVR — PAST SIMPLE (Qayda → Lüğət → Dinləmə → Oxu → Yazı)
    // Keçmiş işlər; yeni fellər: visit, help, clean, wash, walk, talk, want, call.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c3-grammar",
      title: "Qayda: Past Simple",
      description: "Keçmişdə bitmiş işlər. Qaydalı (-ed) və qaydasız fellər.",
      lessons: [
        {
          id: "past-rule",
          title: "Past Simple qaydası",
          intro: "Past Simple keçmişdə bitmiş işi bildirir. Gəl qaydanı öyrənək!",
          sections: [
            { heading: "Past Simple nədir?", body: "Keçmişdə bitmiş işi bildirir: I played yesterday. Çox vaxt 'yesterday', 'last week', 'ago' sözləri ilə işlənir." },
            { heading: "Qaydalı fellər: -ed", body: "Əksər fellərə -ed əlavə olunur: play → played, visit → visited, help → helped. Bütün şəxslərdə eynidir (I/he/we played)." },
            { heading: "Qaydasız fellər", body: "Bəzi fellər dəyişir: go → went, see → saw, eat → ate, have → had. Bunları əzbərləmək lazımdır." },
          ],
          tasks: [
            { id: "past-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'I ___ football yesterday.'", options: ["play", "plays", "played", "playing"], correctIndex: 2, xp: 10 },
            { id: "past-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'She ___ her homework.' (do)", options: ["do", "does", "did", "done"], correctIndex: 2, xp: 10 },
            { id: "past-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'We ___ to the park.' (go)", options: ["go", "goes", "went", "gone"], correctIndex: 2, xp: 10 },
            { id: "past-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "'He ___ a film.' (watch)", options: ["watch", "watched", "watching", "watches"], correctIndex: 1, xp: 10 },
            { id: "past-rule-t5", type: "fill_blank", prompt: "'visit' felinin keçmiş formasını yaz.", accepted: ["visited"], xp: 10 },
            { id: "past-rule-t6", type: "multiple_choice", prompt: "Past Simple hansı vaxt üçündür?", options: ["indi", "keçmiş", "gələcək", "həmişə"], correctIndex: 1, xp: 10 },
            { id: "past-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'They ___ pizza.' (eat)", options: ["eat", "ate", "eaten", "eats"], correctIndex: 1, xp: 10 },
            { id: "past-rule-t8", type: "multiple_choice", speakOptions: true, prompt: "İnkar: 'I ___ not play.'", options: ["do", "did", "does", "am"], correctIndex: 1, xp: 10 },
            { id: "past-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "Sual: '___ you see the film?'", options: ["Do", "Did", "Does", "Are"], correctIndex: 1, xp: 10 },
            { id: "past-rule-t10", type: "fill_blank", prompt: "'help' felinin keçmiş formasını yaz.", accepted: ["helped"], xp: 15 },
          ],
          bonusTasks: [
            { id: "past-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'She ___ a letter.' (write)", options: ["write", "wrote", "written", "writes"], correctIndex: 1, xp: 15 },
            { id: "past-rule-b2", type: "fill_blank", prompt: "'clean' felinin keçmiş formasını yaz.", accepted: ["cleaned"], xp: 15 },
            { id: "past-rule-b3", type: "multiple_choice", speakOptions: true, prompt: "'I ___ happy yesterday.' (be)", options: ["am", "was", "were", "is"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c3-vocab",
      title: "Lüğət: Keçmiş işlər",
      description: "8 yeni fel — visit, help, clean, wash, walk, talk, want, call.",
      lessons: [
        {
          id: "past-vocab",
          title: "Gündəlik fellər II (8 söz)",
          intro: "Keçmişdə görülən işləri bildirən 8 yeni fel öyrənək.",
          sections: [
            { heading: "Yeni sözlər (8 fel)", body: "visit — ziyarət etmək · help — kömək etmək · clean — təmizləmək · wash — yumaq · walk — gəzmək · talk — danışmaq · want — istəmək · call — zəng etmək" },
            { heading: "Məsləhət", body: "Bu fellər qaydalıdır — keçmişdə -ed alır: visited, helped, cleaned... Bir cümlədə xatırla: I helped my mother." },
          ],
          tasks: [
            { id: "past-vocab-t1", type: "multiple_choice", prompt: "'visit' sözünün mənası?", options: ["ziyarət etmək", "təmizləmək", "yumaq", "gəzmək"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t2", type: "multiple_choice", prompt: "'help' sözünün mənası?", options: ["kömək etmək", "danışmaq", "istəmək", "zəng etmək"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t3", type: "multiple_choice", prompt: "'clean' sözünün mənası?", options: ["təmizləmək", "yumaq", "gəzmək", "ziyarət etmək"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t4", type: "multiple_choice", prompt: "'wash' sözünün mənası?", options: ["yumaq", "təmizləmək", "danışmaq", "istəmək"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t5", type: "multiple_choice", prompt: "'walk' sözünün mənası?", options: ["gəzmək / yerimək", "qaçmaq", "üzmək", "oturmaq"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t6", type: "multiple_choice", prompt: "'talk' sözünün mənası?", options: ["danışmaq", "dinləmək", "oxumaq", "yazmaq"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t7", type: "fill_blank", prompt: "'istəmək' ingiliscə necə yazılır?", accepted: ["want"], xp: 10 },
            { id: "past-vocab-t8", type: "fill_blank", prompt: "'zəng etmək' ingiliscə necə yazılır?", accepted: ["call"], xp: 10 },
            { id: "past-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'Yesterday I ___ my grandma.' (ziyarət etdim)", options: ["visited", "cleaned", "walked", "wanted"], correctIndex: 0, xp: 10 },
            { id: "past-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'She ___ the dishes.' (yudu)", options: ["washed", "helped", "talked", "called"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "past-vocab-b1", type: "multiple_choice", prompt: "'want' sözünün mənası?", options: ["istəmək", "sevmək", "bilmək", "görmək"], correctIndex: 0, xp: 15 },
            { id: "past-vocab-b2", type: "multiple_choice", prompt: "'call' sözünün mənası?", options: ["zəng etmək", "gəzmək", "yumaq", "oxumaq"], correctIndex: 0, xp: 15 },
            { id: "past-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "'We ___ in the park.' (gəzdik)", options: ["walked", "washed", "wanted", "called"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c3-listening",
      title: "Dinləmə: Past Simple",
      description: "Keçmiş işlərin cümlələrini dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "past-listen",
          title: "Dinlə və seç: keçmiş iş",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "past-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I played football yesterday.", options: ["Mən dünən futbol oynadım.", "Mən indi futbol oynayıram.", "Mən sabah oynayacağam.", "Mən futbola baxdım."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She visited her grandmother.", options: ["O nənəsini ziyarət etdi.", "O nənəsinə zəng etdi.", "O anasını ziyarət etdi.", "O nənəsinə kömək etdi."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We went to school.", options: ["Biz məktəbə getdik.", "Biz evə getdik.", "Biz məktəbdəyik.", "Biz məktəbə gedirik."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He watched a film.", options: ["O film izlədi.", "O kitab oxudu.", "O film çəkdi.", "O televizora baxır."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t5", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "They ate pizza.", options: ["Onlar pizza yedi.", "Onlar pizza bişirdi.", "Onlar pizza istədi.", "Onlar yemək yeyir."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I cleaned my room.", options: ["Mən otağımı təmizlədim.", "Mən otağıma getdim.", "Mən otağımı yudum.", "Mən otağı gördüm."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She washed the dishes.", options: ["O qabları yudu.", "O qabları yığdı.", "O əllərini yudu.", "O paltar yudu."], correctIndex: 0, xp: 10 },
            { id: "past-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We walked in the park.", options: ["Biz parkda gəzdik.", "Biz parkda qaçdıq.", "Biz parka getdik.", "Biz bağda gəzdik."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "past-listen-b1", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Did you see the film?", options: ["Sən filmi gördün?", "Sən film çəkdin?", "Sən film izləyirsən?", "Sən filmi bəyəndin?"], correctIndex: 0, xp: 15 },
            { id: "past-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He helped his mother.", options: ["O anasına kömək etdi.", "O anasına zəng etdi.", "O atasına kömək etdi.", "O anası ilə danışdı."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c3-reading",
      title: "Oxu: My weekend",
      description: "Keçmiş haqqında qısa mətni oxu və suallara cavab ver (Past Simple).",
      lessons: [
        {
          id: "past-read",
          title: "Reading: My weekend",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "Last Saturday was a great day. In the morning I cleaned my room and helped my mother. Then we visited my grandmother. She cooked a nice dinner. In the afternoon I played football with my friends. In the evening I watched a film and went to bed early. It was a happy day." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "past-read-t1", type: "multiple_choice", speakOptions: true, prompt: "When was the great day?", options: ["last Sunday", "last Saturday", "yesterday", "last Monday"], correctIndex: 1, xp: 10 },
            { id: "past-read-t2", type: "multiple_choice", speakOptions: true, prompt: "What did the boy do in the morning?", options: ["played football", "cleaned his room", "watched a film", "slept"], correctIndex: 1, xp: 10 },
            { id: "past-read-t3", type: "multiple_choice", speakOptions: true, prompt: "Who did they visit?", options: ["his teacher", "his grandmother", "his friend", "his uncle"], correctIndex: 1, xp: 10 },
            { id: "past-read-t4", type: "multiple_choice", speakOptions: true, prompt: "Who cooked dinner?", options: ["his mother", "his grandmother", "the boy", "his father"], correctIndex: 1, xp: 10 },
            { id: "past-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What did he do in the afternoon?", options: ["watched TV", "played football", "cleaned", "slept"], correctIndex: 1, xp: 10 },
            { id: "past-read-t6", type: "multiple_choice", speakOptions: true, prompt: "What did he do in the evening?", options: ["watched a film", "played football", "cooked", "cleaned"], correctIndex: 0, xp: 10 },
            { id: "past-read-t7", type: "fill_blank", prompt: "'I ___ my mother.' (kömək etdim — mətndən)", accepted: ["helped"], xp: 10 },
            { id: "past-read-t8", type: "multiple_choice", speakOptions: true, prompt: "Was it a happy day?", options: ["Yes, it was.", "No, it wasn't.", "We don't know.", "It was sad."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "past-read-b1", type: "multiple_choice", prompt: "'went to bed' nə deməkdir?", options: ["yatmağa getdi", "oyandı", "yeməyə getdi", "çölə çıxdı"], correctIndex: 0, xp: 15 },
            { id: "past-read-b2", type: "fill_blank", prompt: "'We ___ my grandmother.' (ziyarət etdik — mətndən)", accepted: ["visited"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c3-writing",
      title: "Yazı: Past Simple",
      description: "Sözlərdən düzgün Past Simple cümləsi qur.",
      lessons: [
        {
          id: "past-write",
          title: "Cümlə qur: Past Simple",
          intro: "Sözləri düzgün sıraya düz və Past Simple cümləsi qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas — cümlə yuxarıda düzələcək. Keçmişdə fel -ed alır və ya qaydasız dəyişir (played, went, ate)." },
          ],
          tasks: [
            { id: "past-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "played", "football"], answer: "I played football", translation: "Mən futbol oynadım.", xp: 10 },
            { id: "past-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "visited", "her", "grandmother"], answer: "She visited her grandmother", translation: "O nənəsini ziyarət etdi.", xp: 10 },
            { id: "past-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "went", "to", "school"], answer: "We went to school", translation: "Biz məktəbə getdik.", xp: 10 },
            { id: "past-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "watched", "a", "film"], answer: "He watched a film", translation: "O film izlədi.", xp: 10 },
            { id: "past-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["They", "ate", "pizza"], answer: "They ate pizza", translation: "Onlar pizza yedi.", xp: 10 },
            { id: "past-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "cleaned", "my", "room"], answer: "I cleaned my room", translation: "Mən otağımı təmizlədim.", xp: 10 },
            { id: "past-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "washed", "the", "dishes"], answer: "She washed the dishes", translation: "O qabları yudu.", xp: 10 },
            { id: "past-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "walked", "in", "the", "park"], answer: "We walked in the park", translation: "Biz parkda gəzdik.", xp: 15 },
          ],
          bonusTasks: [
            { id: "past-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "helped", "my", "mother"], answer: "I helped my mother", translation: "Mən anama kömək etdim.", xp: 15 },
            { id: "past-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Did", "you", "see", "the", "film"], answer: "Did you see the film", translation: "Sən filmi gördün?", xp: 15 },
            { id: "past-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "did", "not", "play"], answer: "He did not play", translation: "O oynamadı.", xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 4-CÜ DÖVR — QUESTIONS & NEGATIVES (Sual və inkar)
    // Sual sözləri: what, where, when, who, why, how.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c4-grammar",
      title: "Qayda: Sual və inkar",
      description: "Sual (do/does/did) və inkar (don't/doesn't/didn't) cümlələri.",
      lessons: [
        {
          id: "q-rule",
          title: "Sual və inkar qaydası",
          intro: "İngiliscə sual və inkar necə qurulur? Gəl öyrənək!",
          sections: [
            { heading: "Sual necə qurulur?", body: "do/does/did + kim + fel: Do you like tea? Does she play? Did they go? Sual sözü əvvələ gəlir: What do you want?" },
            { heading: "İnkar (negatives)", body: "don't/doesn't/didn't + fel: I don't like. She doesn't play. We didn't go." },
            { heading: "Sual sözləri", body: "what (nə), where (harada), when (nə vaxt), who (kim), why (niyə), how (necə)." },
          ],
          tasks: [
            { id: "q-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "Sual: '___ you like music?'", options: ["Do", "Does", "Did", "Are"], correctIndex: 0, xp: 10 },
            { id: "q-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "Sual: '___ she play tennis?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, xp: 10 },
            { id: "q-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "İnkar: 'I ___ like coffee.'", options: ["don't", "doesn't", "isn't", "not"], correctIndex: 0, xp: 10 },
            { id: "q-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "İnkar: 'He ___ eat meat.'", options: ["don't", "doesn't", "isn't", "aren't"], correctIndex: 1, xp: 10 },
            { id: "q-rule-t5", type: "multiple_choice", speakOptions: true, prompt: "'___ do you live?' (harada)", options: ["What", "Where", "When", "Who"], correctIndex: 1, xp: 10 },
            { id: "q-rule-t6", type: "multiple_choice", speakOptions: true, prompt: "'___ is your name?' (nə)", options: ["What", "Where", "When", "Why"], correctIndex: 0, xp: 10 },
            { id: "q-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'___ are you sad?' (niyə)", options: ["What", "Where", "Why", "Who"], correctIndex: 2, xp: 10 },
            { id: "q-rule-t8", type: "fill_blank", prompt: "'kim' sual sözü ingiliscə necə yazılır?", accepted: ["who"], xp: 10 },
            { id: "q-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "Keçmiş sual: '___ you see it?'", options: ["Do", "Does", "Did", "Are"], correctIndex: 2, xp: 10 },
            { id: "q-rule-t10", type: "multiple_choice", speakOptions: true, prompt: "İnkar (keçmiş): 'We ___ go.'", options: ["don't", "doesn't", "didn't", "isn't"], correctIndex: 2, xp: 15 },
          ],
          bonusTasks: [
            { id: "q-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'___ old are you?' (necə — yaş)", options: ["How", "What", "Where", "Who"], correctIndex: 0, xp: 15 },
            { id: "q-rule-b2", type: "multiple_choice", speakOptions: true, prompt: "'Does he ___ English?'", options: ["speak", "speaks", "speaking", "spoke"], correctIndex: 0, xp: 15 },
            { id: "q-rule-b3", type: "fill_blank", prompt: "'nə vaxt' sual sözü ingiliscə necə yazılır?", accepted: ["when"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c4-vocab",
      title: "Lüğət: Sual sözləri",
      description: "6 sual sözü: what, where, when, who, why, how.",
      lessons: [
        {
          id: "q-vocab",
          title: "Sual sözləri (wh- sözlər)",
          intro: "İngiliscə sual verməyə kömək edən 6 sözü öyrənək.",
          sections: [
            { heading: "Yeni sözlər (sual sözləri)", body: "what — nə · where — harada · when — nə vaxt · who — kim · why — niyə · how — necə" },
            { heading: "Məsləhət", body: "Bu sözlər cümlənin əvvəlində gəlir: What is your name? Where do you live?" },
          ],
          tasks: [
            { id: "q-vocab-t1", type: "multiple_choice", prompt: "'what' sözünün mənası?", options: ["nə", "harada", "nə vaxt", "kim"], correctIndex: 0, xp: 10 },
            { id: "q-vocab-t2", type: "multiple_choice", prompt: "'where' sözünün mənası?", options: ["kim", "harada", "niyə", "necə"], correctIndex: 1, xp: 10 },
            { id: "q-vocab-t3", type: "multiple_choice", prompt: "'when' sözünün mənası?", options: ["nə vaxt", "harada", "nə", "kim"], correctIndex: 0, xp: 10 },
            { id: "q-vocab-t4", type: "multiple_choice", prompt: "'who' sözünün mənası?", options: ["kim", "nə", "harada", "niyə"], correctIndex: 0, xp: 10 },
            { id: "q-vocab-t5", type: "multiple_choice", prompt: "'why' sözünün mənası?", options: ["niyə", "necə", "nə vaxt", "kim"], correctIndex: 0, xp: 10 },
            { id: "q-vocab-t6", type: "multiple_choice", prompt: "'how' sözünün mənası?", options: ["necə", "niyə", "harada", "nə"], correctIndex: 0, xp: 10 },
            { id: "q-vocab-t7", type: "fill_blank", prompt: "'harada' ingiliscə necə yazılır?", accepted: ["where"], xp: 10 },
            { id: "q-vocab-t8", type: "fill_blank", prompt: "'niyə' ingiliscə necə yazılır?", accepted: ["why"], xp: 10 },
            { id: "q-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'___ is your teacher?' (kim)", options: ["Who", "What", "Where", "When"], correctIndex: 0, xp: 10 },
            { id: "q-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'___ do you go to school?' (nə vaxt)", options: ["When", "Who", "What", "Why"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "q-vocab-b1", type: "multiple_choice", prompt: "'how' sözünün mənası?", options: ["necə", "nə", "kim", "harada"], correctIndex: 0, xp: 15 },
            { id: "q-vocab-b2", type: "fill_blank", prompt: "'nə' ingiliscə necə yazılır?", accepted: ["what"], xp: 15 },
            { id: "q-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "'___ are you? — I am fine.' (necə)", options: ["How", "What", "Who", "Why"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c4-listening",
      title: "Dinləmə: Sual və inkar",
      description: "Sual və inkar cümlələrini dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "q-listen",
          title: "Dinlə və seç: sual-cavab",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "q-listen-t1", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "What is your name?", options: ["Adın nədir?", "Neçə yaşın var?", "Haralısan?", "Necəsən?"], correctIndex: 0, xp: 10 },
            { id: "q-listen-t2", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Where do you live?", options: ["Harada yaşayırsan?", "Nə vaxt gəlirsən?", "Kimsən?", "Niyə gəldin?"], correctIndex: 0, xp: 10 },
            { id: "q-listen-t3", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "How old are you?", options: ["Neçə yaşın var?", "Adın nədir?", "Necəsən?", "Haradasan?"], correctIndex: 0, xp: 10 },
            { id: "q-listen-t4", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Do you like football?", options: ["Futbolu sevirsən?", "Futbol oynayırsan?", "Futbola baxırsan?", "Futbol bilirsən?"], correctIndex: 0, xp: 10 },
            { id: "q-listen-t5", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Why are you late?", options: ["Niyə gecikirsən?", "Harada idin?", "Kiminlə gəldin?", "Nə vaxt gəldin?"], correctIndex: 0, xp: 10 },
            { id: "q-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I don't like coffee.", options: ["Mən qəhvə sevmirəm.", "Mən qəhvə sevirəm.", "Mən çay sevmirəm.", "Mən qəhvə içirəm."], correctIndex: 0, xp: 10 },
            { id: "q-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She doesn't play tennis.", options: ["O tennis oynamır.", "O tennis oynayır.", "O futbol oynamır.", "O tennisə baxmır."], correctIndex: 0, xp: 10 },
            { id: "q-listen-t8", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "When do you get up?", options: ["Nə vaxt durursan?", "Harada durursan?", "Niyə durursan?", "Necə durursan?"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "q-listen-b1", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Who is your best friend?", options: ["Ən yaxşı dostun kimdir?", "Dostun haradadır?", "Dostun neçə yaşındadır?", "Dostun necədir?"], correctIndex: 0, xp: 15 },
            { id: "q-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We didn't watch the film.", options: ["Biz filmi izləmədik.", "Biz filmi izlədik.", "Biz filmə baxırıq.", "Biz filmi bəyənmədik."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c4-reading",
      title: "Oxu: An interview",
      description: "Qısa müsahibəni oxu və suallara cavab ver (sual-cavab).",
      lessons: [
        {
          id: "q-read",
          title: "Reading: An interview",
          intro: "Qısa müsahibəni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "This is an interview with Nigar. — What is your name? — My name is Nigar. — Where are you from? — I am from Ganja. — How old are you? — I am eleven. — Do you like school? — Yes, I do. I like English very much. — What is your favourite sport? — I like basketball. — Do you play every day? — No, I don't. I play on Sundays." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "q-read-t1", type: "multiple_choice", speakOptions: true, prompt: "What is her name?", options: ["Leyla", "Nigar", "Anna", "Sara"], correctIndex: 1, xp: 10 },
            { id: "q-read-t2", type: "multiple_choice", speakOptions: true, prompt: "Where is she from?", options: ["Baku", "Ganja", "Sheki", "London"], correctIndex: 1, xp: 10 },
            { id: "q-read-t3", type: "multiple_choice", speakOptions: true, prompt: "How old is she?", options: ["ten", "eleven", "twelve", "nine"], correctIndex: 1, xp: 10 },
            { id: "q-read-t4", type: "multiple_choice", speakOptions: true, prompt: "Does she like school?", options: ["Yes, she does.", "No, she doesn't.", "We don't know.", "She likes maths."], correctIndex: 0, xp: 10 },
            { id: "q-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What is her favourite sport?", options: ["football", "basketball", "tennis", "swimming"], correctIndex: 1, xp: 10 },
            { id: "q-read-t6", type: "multiple_choice", speakOptions: true, prompt: "Does she play every day?", options: ["Yes, every day.", "No, she plays on Sundays.", "Yes, on Mondays.", "She doesn't play."], correctIndex: 1, xp: 10 },
            { id: "q-read-t7", type: "fill_blank", prompt: "'What is your ___? — My name is Nigar.'", accepted: ["name"], xp: 10 },
            { id: "q-read-t8", type: "multiple_choice", speakOptions: true, prompt: "Which subject does she like?", options: ["maths", "English", "science", "art"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "q-read-b1", type: "multiple_choice", prompt: "'favourite' nə deməkdir?", options: ["ən sevimli", "ən pis", "ən böyük", "ən kiçik"], correctIndex: 0, xp: 15 },
            { id: "q-read-b2", type: "fill_blank", prompt: "'Where are you ___? — I am from Ganja.'", accepted: ["from"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c4-writing",
      title: "Yazı: Sual və inkar",
      description: "Sözlərdən düzgün sual və inkar cümləsi qur.",
      lessons: [
        {
          id: "q-write",
          title: "Cümlə qur: sual və inkar",
          intro: "Sözləri düzgün sıraya düz və sual/inkar cümləsi qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas. Sual: (sual sözü) + do/does/did + kim + fel. İnkar: kim + do/does not + fel." },
          ],
          tasks: [
            { id: "q-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["What", "is", "your", "name"], answer: "What is your name", translation: "Adın nədir?", xp: 10 },
            { id: "q-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Where", "do", "you", "live"], answer: "Where do you live", translation: "Harada yaşayırsan?", xp: 10 },
            { id: "q-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Do", "you", "like", "music"], answer: "Do you like music", translation: "Musiqini sevirsən?", xp: 10 },
            { id: "q-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "do", "not", "like", "tea"], answer: "I do not like tea", translation: "Mən çay sevmirəm.", xp: 10 },
            { id: "q-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["When", "do", "you", "get", "up"], answer: "When do you get up", translation: "Nə vaxt durursan?", xp: 10 },
            { id: "q-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Why", "are", "you", "sad"], answer: "Why are you sad", translation: "Niyə kədərlisən?", xp: 10 },
            { id: "q-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "does", "not", "play"], answer: "She does not play", translation: "O oynamır.", xp: 10 },
            { id: "q-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["How", "old", "are", "you"], answer: "How old are you", translation: "Neçə yaşın var?", xp: 15 },
          ],
          bonusTasks: [
            { id: "q-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Who", "is", "your", "teacher"], answer: "Who is your teacher", translation: "Müəllimin kimdir?", xp: 15 },
            { id: "q-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Did", "you", "see", "it"], answer: "Did you see it", translation: "Onu gördün?", xp: 15 },
            { id: "q-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "did", "not", "go"], answer: "We did not go", translation: "Biz getmədik.", xp: 15 },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5-Cİ DÖVR — PRONOUNS (Əvəzliklər)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c5-grammar",
      title: "Qayda: Əvəzliklər",
      description: "Şəxs (I, you, he...) və yiyəlik (my, your, his...) əvəzlikləri.",
      lessons: [
        {
          id: "pron-rule",
          title: "Əvəzliklər qaydası",
          intro: "İsim əvəzinə işlənən sözlər — əvəzliklər. Gəl öyrənək!",
          sections: [
            { heading: "Şəxs əvəzlikləri", body: "I (mən), you (sən/siz), he (o — kişi), she (o — qadın), it (o — əşya/heyvan), we (biz), they (onlar). Cümlədə isim əvəzinə işlənir." },
            { heading: "Yiyəlik əvəzlikləri", body: "my (mənim), your (sənin), his (onun — kişi), her (onun — qadın), its (onun), our (bizim), their (onların). İsimdən əvvəl gəlir: my book, her cat." },
            { heading: "Nə vaxt he / she / it?", body: "Kişi üçün he, qadın üçün she, əşya/heyvan üçün it. Ali → he, Nigar → she, the cat → it." },
          ],
          tasks: [
            { id: "pron-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'Ali is my friend. ___ is nice.'", options: ["He", "She", "It", "They"], correctIndex: 0, xp: 10 },
            { id: "pron-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'Nigar is a girl. ___ is tall.'", options: ["He", "She", "It", "We"], correctIndex: 1, xp: 10 },
            { id: "pron-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'The dog is big. ___ is black.'", options: ["He", "She", "It", "They"], correctIndex: 2, xp: 10 },
            { id: "pron-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "'This is ___ book.' (mənim)", options: ["my", "your", "his", "her"], correctIndex: 0, xp: 10 },
            { id: "pron-rule-t5", type: "multiple_choice", speakOptions: true, prompt: "'Leyla has a cat. ___ cat is white.' (onun — qadın)", options: ["His", "Her", "Its", "Their"], correctIndex: 1, xp: 10 },
            { id: "pron-rule-t6", type: "multiple_choice", speakOptions: true, prompt: "'We are students. ___ are happy.'", options: ["We", "They", "You", "He"], correctIndex: 0, xp: 10 },
            { id: "pron-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'___ am a boy.' (mən)", options: ["I", "You", "He", "We"], correctIndex: 0, xp: 10 },
            { id: "pron-rule-t8", type: "fill_blank", prompt: "'biz' ingiliscə əvəzlik necə yazılır?", accepted: ["we"], xp: 10 },
            { id: "pron-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "'Tom and Sam are here. ___ are my friends.' (onlar)", options: ["We", "They", "You", "He"], correctIndex: 1, xp: 10 },
            { id: "pron-rule-t10", type: "multiple_choice", speakOptions: true, prompt: "'Is this ___ pen?' (sənin)", options: ["my", "your", "his", "its"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "pron-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'onlar' ingiliscə əvəzlik?", options: ["we", "you", "they", "he"], correctIndex: 2, xp: 15 },
            { id: "pron-rule-b2", type: "multiple_choice", speakOptions: true, prompt: "'The book is on the table. ___ is red.'", options: ["He", "She", "It", "They"], correctIndex: 2, xp: 15 },
            { id: "pron-rule-b3", type: "fill_blank", prompt: "'mənim' (yiyəlik) ingiliscə necə yazılır?", accepted: ["my"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c5-vocab",
      title: "Lüğət: Əvəzliklər",
      description: "Şəxs və yiyəlik əvəzlikləri: I/he/she/we/they, my/your/her...",
      lessons: [
        {
          id: "pron-vocab",
          title: "Əvəzliklər (sözlər)",
          intro: "Əvəzliklərin mənasını öyrənək.",
          sections: [
            { heading: "Şəxs əvəzlikləri", body: "I — mən · you — sən/siz · he — o (kişi) · she — o (qadın) · it — o (əşya) · we — biz · they — onlar" },
            { heading: "Yiyəlik əvəzlikləri", body: "my — mənim · your — sənin · his — onun (kişi) · her — onun (qadın) · our — bizim · their — onların" },
          ],
          tasks: [
            { id: "pron-vocab-t1", type: "multiple_choice", prompt: "'he' nə deməkdir?", options: ["o (kişi)", "o (qadın)", "mən", "biz"], correctIndex: 0, xp: 10 },
            { id: "pron-vocab-t2", type: "multiple_choice", prompt: "'she' nə deməkdir?", options: ["o (kişi)", "o (qadın)", "sən", "onlar"], correctIndex: 1, xp: 10 },
            { id: "pron-vocab-t3", type: "multiple_choice", prompt: "'we' nə deməkdir?", options: ["biz", "siz", "onlar", "mən"], correctIndex: 0, xp: 10 },
            { id: "pron-vocab-t4", type: "multiple_choice", prompt: "'they' nə deməkdir?", options: ["onlar", "biz", "sən", "o"], correctIndex: 0, xp: 10 },
            { id: "pron-vocab-t5", type: "multiple_choice", prompt: "'my' nə deməkdir?", options: ["mənim", "sənin", "onun", "bizim"], correctIndex: 0, xp: 10 },
            { id: "pron-vocab-t6", type: "multiple_choice", prompt: "'your' nə deməkdir?", options: ["sənin", "mənim", "onun", "onların"], correctIndex: 0, xp: 10 },
            { id: "pron-vocab-t7", type: "fill_blank", prompt: "'mən' ingiliscə əvəzlik necə yazılır?", accepted: ["i"], xp: 10 },
            { id: "pron-vocab-t8", type: "fill_blank", prompt: "'o' (əşya/heyvan) ingiliscə əvəzlik?", accepted: ["it"], xp: 10 },
            { id: "pron-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'This is ___ dog.' (onun — kişi)", options: ["his", "her", "its", "my"], correctIndex: 0, xp: 10 },
            { id: "pron-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'___ are teachers.' (onlar)", options: ["They", "We", "You", "He"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "pron-vocab-b1", type: "multiple_choice", prompt: "'her' (yiyəlik) nə deməkdir?", options: ["onun (qadın)", "onun (kişi)", "mənim", "sənin"], correctIndex: 0, xp: 15 },
            { id: "pron-vocab-b2", type: "multiple_choice", prompt: "'it' nə deməkdir?", options: ["o (əşya)", "o (kişi)", "o (qadın)", "onlar"], correctIndex: 0, xp: 15 },
            { id: "pron-vocab-b3", type: "fill_blank", prompt: "'biz' ingiliscə necə yazılır?", accepted: ["we"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c5-listening",
      title: "Dinləmə: Əvəzliklər",
      description: "Əvəzlikli cümlələri dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "pron-listen",
          title: "Dinlə və seç: əvəzliklər",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "pron-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He is my brother.", options: ["O mənim qardaşımdır.", "O mənim bacımdır.", "Onlar mənim qardaşımdır.", "Bu mənim qardaşımdır."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She is a teacher.", options: ["O müəllimdir (qadın).", "O müəllimdir (kişi).", "O şagirddir.", "Onlar müəllimdir."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "They are my friends.", options: ["Onlar mənim dostlarımdır.", "Biz dostuq.", "O mənim dostumdur.", "Sən mənim dostumsan."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "This is my book.", options: ["Bu mənim kitabımdır.", "Bu sənin kitabındır.", "Bu onun kitabıdır.", "Bunlar mənim kitabımdır."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t5", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We are happy.", options: ["Biz xoşbəxtik.", "Onlar xoşbəxtdir.", "Mən xoşbəxtəm.", "Sən xoşbəxtsən."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "It is a cat.", options: ["Bu pişikdir.", "Bu itdir.", "O uşaqdır.", "Onlar pişikdir."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "Her name is Leyla.", options: ["Onun adı Leyladır (qadın).", "Onun adı Leyladır (kişi).", "Mənim adım Leyladır.", "Sənin adın Leyladır."], correctIndex: 0, xp: 10 },
            { id: "pron-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I am a student.", options: ["Mən şagirdəm.", "Sən şagirdsən.", "O şagirddir.", "Biz şagirdik."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "pron-listen-b1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "His car is fast.", options: ["Onun maşını sürətlidir.", "Onun maşını yavaşdır.", "Mənim maşınım sürətlidir.", "Sənin maşının sürətlidir."], correctIndex: 0, xp: 15 },
            { id: "pron-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You are my friend.", options: ["Sən mənim dostumsan.", "O mənim dostumdur.", "Biz dostuq.", "Onlar mənim dostumdur."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c5-reading",
      title: "Oxu: My family",
      description: "Ailə haqqında mətni oxu və suallara cavab ver (əvəzliklər).",
      lessons: [
        {
          id: "pron-read",
          title: "Reading: My family",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "This is my family. My father is a doctor. He works at a hospital. My mother is a teacher. She works at a school. I have a sister. Her name is Aysel. She is nine. We have a cat. It is black and white. Its name is Pamuk. We love our cat." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "pron-read-t1", type: "multiple_choice", speakOptions: true, prompt: "What is the father's job?", options: ["teacher", "doctor", "driver", "cook"], correctIndex: 1, xp: 10 },
            { id: "pron-read-t2", type: "multiple_choice", speakOptions: true, prompt: "Where does the mother work?", options: ["at a hospital", "at a school", "at home", "at a shop"], correctIndex: 1, xp: 10 },
            { id: "pron-read-t3", type: "multiple_choice", speakOptions: true, prompt: "What is the sister's name?", options: ["Leyla", "Aysel", "Nigar", "Sara"], correctIndex: 1, xp: 10 },
            { id: "pron-read-t4", type: "multiple_choice", speakOptions: true, prompt: "How old is the sister?", options: ["eight", "nine", "ten", "eleven"], correctIndex: 1, xp: 10 },
            { id: "pron-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What colour is the cat?", options: ["black", "white", "black and white", "brown"], correctIndex: 2, xp: 10 },
            { id: "pron-read-t6", type: "multiple_choice", speakOptions: true, prompt: "What is the cat's name?", options: ["Pamuk", "Rex", "Max", "Tom"], correctIndex: 0, xp: 10 },
            { id: "pron-read-t7", type: "fill_blank", prompt: "'___ father is a doctor.' (mənim — mətndən)", accepted: ["my"], xp: 10 },
            { id: "pron-read-t8", type: "multiple_choice", speakOptions: true, prompt: "'He works at a hospital.' — Who is 'He'?", options: ["the father", "the mother", "the sister", "the cat"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "pron-read-b1", type: "multiple_choice", speakOptions: true, prompt: "'Its name is Pamuk.' — What is 'Its'?", options: ["the cat", "the father", "the sister", "the mother"], correctIndex: 0, xp: 15 },
            { id: "pron-read-b2", type: "fill_blank", prompt: "'Her name is ___.' (mətndən)", accepted: ["aysel"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c5-writing",
      title: "Yazı: Əvəzliklər",
      description: "Sözlərdən əvəzlikli cümlə qur.",
      lessons: [
        {
          id: "pron-write",
          title: "Cümlə qur: əvəzliklər",
          intro: "Sözləri düzgün sıraya düz və cümlə qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas. Cümlə əvəzliklə başlaya bilər: He is..., They are..., This is my..." },
          ],
          tasks: [
            { id: "pron-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "is", "my", "brother"], answer: "He is my brother", translation: "O mənim qardaşımdır.", xp: 10 },
            { id: "pron-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "is", "a", "teacher"], answer: "She is a teacher", translation: "O müəllimdir.", xp: 10 },
            { id: "pron-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["They", "are", "my", "friends"], answer: "They are my friends", translation: "Onlar mənim dostlarımdır.", xp: 10 },
            { id: "pron-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["This", "is", "my", "book"], answer: "This is my book", translation: "Bu mənim kitabımdır.", xp: 10 },
            { id: "pron-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "are", "happy"], answer: "We are happy", translation: "Biz xoşbəxtik.", xp: 10 },
            { id: "pron-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["It", "is", "a", "cat"], answer: "It is a cat", translation: "Bu pişikdir.", xp: 10 },
            { id: "pron-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Her", "name", "is", "Leyla"], answer: "Her name is Leyla", translation: "Onun adı Leyladır.", xp: 10 },
            { id: "pron-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "am", "a", "student"], answer: "I am a student", translation: "Mən şagirdəm.", xp: 15 },
          ],
          bonusTasks: [
            { id: "pron-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["His", "car", "is", "fast"], answer: "His car is fast", translation: "Onun maşını sürətlidir.", xp: 15 },
            { id: "pron-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["You", "are", "my", "friend"], answer: "You are my friend", translation: "Sən mənim dostumsan.", xp: 15 },
            { id: "pron-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Our", "cat", "is", "black"], answer: "Our cat is black", translation: "Bizim pişiyimiz qaradır.", xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 6-CI DÖVR — ARTICLES (a / an / the)
    // Yeni isimlər: orange, egg, umbrella, elephant, banana, pen, car, box.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c6-grammar",
      title: "Qayda: Artikllar (a / an / the)",
      description: "Qeyri-müəyyən (a/an) və müəyyən (the) artikllar.",
      lessons: [
        {
          id: "art-rule",
          title: "Artikllar qaydası",
          intro: "a, an, the — İngiliscə artikllar. Nə vaxt hansını işlətməli?",
          sections: [
            { heading: "a / an nə üçündür?", body: "Tək, sayıla bilən isimdən əvvəl: a book, a dog. Samitlə başlayan sözdən əvvəl 'a', saitlə (a,e,i,o,u) başlayan sözdən əvvəl 'an': an apple, an egg, an umbrella." },
            { heading: "the nə üçündür?", body: "Konkret, məlum əşya üçün: the sun, the book (masanın üstündəki). Həm tək, həm cəm ilə işlənir." },
            { heading: "Nə vaxt artikl yox?", body: "Cəm ümumi isimlərdə artikl işlənmir: I like apples. Dogs are friendly." },
          ],
          tasks: [
            { id: "art-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'___ apple' (düzgün artikl)", options: ["a", "an", "the", "this"], correctIndex: 1, xp: 10 },
            { id: "art-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'___ dog'", options: ["a", "an", "the", "this"], correctIndex: 0, xp: 10 },
            { id: "art-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'___ egg'", options: ["a", "an", "the", "this"], correctIndex: 1, xp: 10 },
            { id: "art-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "'___ book'", options: ["a", "an", "the", "this"], correctIndex: 0, xp: 10 },
            { id: "art-rule-t5", type: "multiple_choice", speakOptions: true, prompt: "'___ umbrella'", options: ["a", "an", "the", "this"], correctIndex: 1, xp: 10 },
            { id: "art-rule-t6", type: "multiple_choice", speakOptions: true, prompt: "Saitlə başlayan sözdən əvvəl hansı işlənir?", options: ["a", "an", "the", "this"], correctIndex: 1, xp: 10 },
            { id: "art-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'Look at ___ sun.' (konkret)", options: ["a", "an", "the", "this"], correctIndex: 2, xp: 10 },
            { id: "art-rule-t8", type: "multiple_choice", speakOptions: true, prompt: "'I have ___ orange.'", options: ["a", "an", "the", "some"], correctIndex: 1, xp: 10 },
            { id: "art-rule-t9", type: "fill_blank", prompt: "Saitlə başlayan 'egg' üçün hansı artikl? (a / an)", accepted: ["an"], xp: 10 },
            { id: "art-rule-t10", type: "multiple_choice", speakOptions: true, prompt: "'She is ___ teacher.'", options: ["a", "an", "the", "this"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "art-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'___ elephant is big.'", options: ["A", "An", "The", "This"], correctIndex: 1, xp: 15 },
            { id: "art-rule-b2", type: "multiple_choice", prompt: "Cəm ümumi isimdə (apples) hansı artikl işlənir?", options: ["a", "an", "the", "heç biri"], correctIndex: 3, xp: 15 },
            { id: "art-rule-b3", type: "fill_blank", prompt: "Samitlə başlayan 'car' üçün hansı artikl? (a / an)", accepted: ["a"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c6-vocab",
      title: "Lüğət: Əşyalar",
      description: "8 yeni isim: orange, egg, umbrella, elephant, banana, pen, car, box.",
      lessons: [
        {
          id: "art-vocab",
          title: "Əşyalar (8 söz)",
          intro: "8 yeni isim öyrənək və a/an ilə işlədək.",
          sections: [
            { heading: "Yeni sözlər (8 isim)", body: "orange — portağal · egg — yumurta · umbrella — çətir · elephant — fil · banana — banan · pen — qələm · car — maşın · box — qutu" },
            { heading: "Məsləhət", body: "Saitlə başlayanlar 'an' alır: an orange, an egg, an umbrella, an elephant. Samitlə başlayanlar 'a': a banana, a pen, a car, a box." },
          ],
          tasks: [
            { id: "art-vocab-t1", type: "multiple_choice", prompt: "'orange' sözünün mənası?", options: ["portağal", "alma", "banan", "yumurta"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t2", type: "multiple_choice", prompt: "'egg' sözünün mənası?", options: ["yumurta", "portağal", "çətir", "qutu"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t3", type: "multiple_choice", prompt: "'umbrella' sözünün mənası?", options: ["çətir", "qələm", "qutu", "maşın"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t4", type: "multiple_choice", prompt: "'elephant' sözünün mənası?", options: ["fil", "pişik", "it", "quş"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t5", type: "multiple_choice", prompt: "'banana' sözünün mənası?", options: ["banan", "portağal", "alma", "yumurta"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t6", type: "multiple_choice", prompt: "'pen' sözünün mənası?", options: ["qələm", "kitab", "qutu", "çətir"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t7", type: "fill_blank", prompt: "'maşın' ingiliscə necə yazılır?", accepted: ["car"], xp: 10 },
            { id: "art-vocab-t8", type: "fill_blank", prompt: "'qutu' ingiliscə necə yazılır?", accepted: ["box"], xp: 10 },
            { id: "art-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "Hansı söz 'an' ilə işlənir?", options: ["apple", "dog", "book", "car"], correctIndex: 0, xp: 10 },
            { id: "art-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "Hansı söz 'a' ilə işlənir?", options: ["egg", "orange", "banana", "umbrella"], correctIndex: 2, xp: 15 },
          ],
          bonusTasks: [
            { id: "art-vocab-b1", type: "multiple_choice", prompt: "'box' sözünün mənası?", options: ["qutu", "çətir", "qələm", "fil"], correctIndex: 0, xp: 15 },
            { id: "art-vocab-b2", type: "multiple_choice", prompt: "'car' sözünün mənası?", options: ["maşın", "qutu", "banan", "qələm"], correctIndex: 0, xp: 15 },
            { id: "art-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "Hansı sözdən əvvəl 'an' gəlir?", options: ["banana", "elephant", "pen", "car"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c6-listening",
      title: "Dinləmə: Artikllar",
      description: "Artikllı cümlələri dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "art-listen",
          title: "Dinlə və seç: əşyalar",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "art-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I have an apple.", options: ["Mənim almam var.", "Mənim iki almam var.", "Mən alma istəyirəm.", "Mənim portağalım var."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She has a dog.", options: ["Onun iti var.", "Onun pişiyi var.", "Mənim itim var.", "Onun iki iti var."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "Look at the sun.", options: ["Günəşə bax.", "Aya bax.", "Ulduza bax.", "Buluda bax."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "It is an egg.", options: ["Bu yumurtadır.", "Bu almadır.", "Bu qutudur.", "Bu portağaldır."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t5", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "This is a book.", options: ["Bu kitabdır.", "Bu qələmdir.", "Bunlar kitabdır.", "Bu qutudur."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I see an elephant.", options: ["Mən fil görürəm.", "Mən pişik görürəm.", "Mən it görürəm.", "Mən quş görürəm."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "The car is red.", options: ["Maşın qırmızıdır.", "Maşın mavidir.", "Qutu qırmızıdır.", "Maşın yaşıldır."], correctIndex: 0, xp: 10 },
            { id: "art-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I want an orange.", options: ["Mən portağal istəyirəm.", "Mən alma istəyirəm.", "Mən banan istəyirəm.", "Mən yumurta istəyirəm."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "art-listen-b1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She has an umbrella.", options: ["Onun çətiri var.", "Onun qələmi var.", "Mənim çətirim var.", "Onun iki çətiri var."], correctIndex: 0, xp: 15 },
            { id: "art-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "The book is on the table.", options: ["Kitab masanın üstündədir.", "Kitab masanın altındadır.", "Qutu masanın üstündədir.", "Kitab stulun üstündədir."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c6-reading",
      title: "Oxu: A day at the zoo",
      description: "Heyvanxana haqqında mətni oxu və suallara cavab ver (artikllar).",
      lessons: [
        {
          id: "art-read",
          title: "Reading: A day at the zoo",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "Today we are at the zoo. Look! There is an elephant. It is very big. There is a lion too. The lion is sleeping. I can see a monkey. The monkey is eating a banana. Near the water there is a bird. It is an eagle. I like the zoo very much." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "art-read-t1", type: "multiple_choice", speakOptions: true, prompt: "Where are they today?", options: ["at school", "at the zoo", "at home", "in the park"], correctIndex: 1, xp: 10 },
            { id: "art-read-t2", type: "multiple_choice", speakOptions: true, prompt: "What is very big?", options: ["the lion", "the elephant", "the monkey", "the bird"], correctIndex: 1, xp: 10 },
            { id: "art-read-t3", type: "multiple_choice", speakOptions: true, prompt: "What is the lion doing?", options: ["eating", "sleeping", "running", "drinking"], correctIndex: 1, xp: 10 },
            { id: "art-read-t4", type: "multiple_choice", speakOptions: true, prompt: "What is the monkey eating?", options: ["an apple", "a banana", "an orange", "an egg"], correctIndex: 1, xp: 10 },
            { id: "art-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What kind of bird is it?", options: ["an eagle", "a duck", "a parrot", "an owl"], correctIndex: 0, xp: 10 },
            { id: "art-read-t6", type: "fill_blank", prompt: "'There is ___ elephant.' (a / an — mətndən)", accepted: ["an"], xp: 10 },
            { id: "art-read-t7", type: "multiple_choice", speakOptions: true, prompt: "Does the child like the zoo?", options: ["Yes, very much.", "No.", "We don't know.", "A little."], correctIndex: 0, xp: 10 },
            { id: "art-read-t8", type: "fill_blank", prompt: "'The monkey is eating a ___.' (mətndən)", accepted: ["banana"], xp: 15 },
          ],
          bonusTasks: [
            { id: "art-read-b1", type: "multiple_choice", prompt: "'zoo' nə deməkdir?", options: ["heyvanxana", "məktəb", "park", "bağça"], correctIndex: 0, xp: 15 },
            { id: "art-read-b2", type: "multiple_choice", speakOptions: true, prompt: "'The lion is sleeping.' — Is the lion awake?", options: ["No, it is sleeping.", "Yes, it is.", "It is eating.", "It is running."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c6-writing",
      title: "Yazı: Artikllar",
      description: "Sözlərdən artikllı cümlə qur.",
      lessons: [
        {
          id: "art-write",
          title: "Cümlə qur: artikllar",
          intro: "Sözləri düzgün sıraya düz və cümlə qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas. Saitlə başlayan isimdən əvvəl 'an', samitlə başlayandan əvvəl 'a'." },
          ],
          tasks: [
            { id: "art-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "have", "an", "apple"], answer: "I have an apple", translation: "Mənim almam var.", xp: 10 },
            { id: "art-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "has", "a", "dog"], answer: "She has a dog", translation: "Onun iti var.", xp: 10 },
            { id: "art-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Look", "at", "the", "sun"], answer: "Look at the sun", translation: "Günəşə bax.", xp: 10 },
            { id: "art-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["It", "is", "an", "egg"], answer: "It is an egg", translation: "Bu yumurtadır.", xp: 10 },
            { id: "art-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["This", "is", "a", "book"], answer: "This is a book", translation: "Bu kitabdır.", xp: 10 },
            { id: "art-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "see", "an", "elephant"], answer: "I see an elephant", translation: "Mən fil görürəm.", xp: 10 },
            { id: "art-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["The", "car", "is", "red"], answer: "The car is red", translation: "Maşın qırmızıdır.", xp: 10 },
            { id: "art-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "want", "an", "orange"], answer: "I want an orange", translation: "Mən portağal istəyirəm.", xp: 15 },
          ],
          bonusTasks: [
            { id: "art-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "has", "an", "umbrella"], answer: "She has an umbrella", translation: "Onun çətiri var.", xp: 15 },
            { id: "art-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["The", "book", "is", "here"], answer: "The book is here", translation: "Kitab buradadır.", xp: 15 },
            { id: "art-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "has", "a", "pen"], answer: "He has a pen", translation: "Onun qələmi var.", xp: 15 },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 7-Cİ DÖVR — COMPARATIVES (Sifət dərəcələri)
    // Yeni sifətlər: tall, short, fast, slow, strong, young, clever, heavy.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c7-grammar",
      title: "Qayda: Sifət dərəcələri",
      description: "Müqayisə (-er / more) və üstünlük (-est / most) dərəcələri.",
      lessons: [
        {
          id: "comp-rule",
          title: "Sifət dərəcələri qaydası",
          intro: "İki və ya daha çox şeyi müqayisə edək. Gəl öyrənək!",
          sections: [
            { heading: "Müqayisə dərəcəsi (-er / more)", body: "İki şeyi müqayisə edərkən: tall → taller, big → bigger. Uzun sözlərdə 'more': beautiful → more beautiful. 'than' ilə: Tom is taller than Sam." },
            { heading: "Üstünlük dərəcəsi (-est / most)", body: "Ən yüksək dərəcə: tall → the tallest, big → the biggest. Uzun sözlərdə 'the most': the most beautiful." },
            { heading: "Qeyri-qaydalı", body: "good → better → the best. bad → worse → the worst." },
          ],
          tasks: [
            { id: "comp-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'Tom is ___ than Sam.' (tall)", options: ["tall", "taller", "tallest", "more tall"], correctIndex: 1, xp: 10 },
            { id: "comp-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'This box is ___ than that one.' (big)", options: ["big", "bigger", "biggest", "more big"], correctIndex: 1, xp: 10 },
            { id: "comp-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'She is the ___ girl in the class.' (tall)", options: ["tall", "taller", "tallest", "more tall"], correctIndex: 2, xp: 10 },
            { id: "comp-rule-t4", type: "multiple_choice", speakOptions: true, prompt: "'A car is ___ than a bike.' (fast)", options: ["fast", "faster", "fastest", "more fast"], correctIndex: 1, xp: 10 },
            { id: "comp-rule-t5", type: "multiple_choice", speakOptions: true, prompt: "'good' müqayisə forması?", options: ["gooder", "better", "more good", "best"], correctIndex: 1, xp: 10 },
            { id: "comp-rule-t6", type: "fill_blank", prompt: "'small' sözünün müqayisə forması (-er)?", accepted: ["smaller"], xp: 10 },
            { id: "comp-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'Everest is the ___ mountain.' (high)", options: ["high", "higher", "highest", "more high"], correctIndex: 2, xp: 10 },
            { id: "comp-rule-t8", type: "multiple_choice", speakOptions: true, prompt: "'This book is ___ than that one.' (interesting)", options: ["interestinger", "more interesting", "most interesting", "interesting"], correctIndex: 1, xp: 10 },
            { id: "comp-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "Müqayisə üçün hansı söz işlənir?", options: ["than", "then", "that", "the"], correctIndex: 0, xp: 10 },
            { id: "comp-rule-t10", type: "fill_blank", prompt: "'old' sözünün üstünlük forması (the ___)?", accepted: ["oldest"], xp: 15 },
          ],
          bonusTasks: [
            { id: "comp-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'bad' üstünlük forması?", options: ["baddest", "worst", "more bad", "worse"], correctIndex: 1, xp: 15 },
            { id: "comp-rule-b2", type: "multiple_choice", speakOptions: true, prompt: "'An elephant is ___ than a cat.' (big)", options: ["big", "bigger", "biggest", "more big"], correctIndex: 1, xp: 15 },
            { id: "comp-rule-b3", type: "fill_blank", prompt: "'fast' sözünün üstünlük forması (the ___)?", accepted: ["fastest"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c7-vocab",
      title: "Lüğət: Sifətlər",
      description: "8 yeni sifət: tall, short, fast, slow, strong, young, clever, heavy.",
      lessons: [
        {
          id: "comp-vocab",
          title: "Sifətlər (8 söz)",
          intro: "Müqayisə üçün 8 yeni sifət öyrənək.",
          sections: [
            { heading: "Yeni sözlər (8 sifət)", body: "tall — hündür · short — qısa/alçaq · fast — sürətli · slow — yavaş · strong — güclü · young — gənc/cavan · clever — ağıllı · heavy — ağır" },
            { heading: "Məsləhət", body: "Bu sifətlərin müqayisə formasını da yadda saxla: taller, faster, stronger, heavier..." },
          ],
          tasks: [
            { id: "comp-vocab-t1", type: "multiple_choice", prompt: "'tall' sözünün mənası?", options: ["hündür", "alçaq", "sürətli", "yavaş"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t2", type: "multiple_choice", prompt: "'fast' sözünün mənası?", options: ["sürətli", "yavaş", "güclü", "ağır"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t3", type: "multiple_choice", prompt: "'slow' sözünün mənası?", options: ["yavaş", "sürətli", "hündür", "gənc"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t4", type: "multiple_choice", prompt: "'strong' sözünün mənası?", options: ["güclü", "zəif", "ağıllı", "gənc"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t5", type: "multiple_choice", prompt: "'young' sözünün mənası?", options: ["gənc / cavan", "qoca", "hündür", "ağır"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t6", type: "multiple_choice", prompt: "'clever' sözünün mənası?", options: ["ağıllı", "güclü", "sürətli", "hündür"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t7", type: "fill_blank", prompt: "'ağır' ingiliscə necə yazılır?", accepted: ["heavy"], xp: 10 },
            { id: "comp-vocab-t8", type: "fill_blank", prompt: "'qısa / alçaq' ingiliscə necə yazılır?", accepted: ["short"], xp: 10 },
            { id: "comp-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'A giraffe is very ___.' (hündür)", options: ["tall", "short", "slow", "heavy"], correctIndex: 0, xp: 10 },
            { id: "comp-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'A turtle is ___.' (yavaş)", options: ["slow", "fast", "tall", "strong"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "comp-vocab-b1", type: "multiple_choice", prompt: "'heavy' sözünün mənası?", options: ["ağır", "yüngül", "sürətli", "ağıllı"], correctIndex: 0, xp: 15 },
            { id: "comp-vocab-b2", type: "multiple_choice", prompt: "'short' sözünün mənası?", options: ["qısa / alçaq", "hündür", "güclü", "gənc"], correctIndex: 0, xp: 15 },
            { id: "comp-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "'A lion is ___.' (güclü)", options: ["strong", "weak", "slow", "short"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c7-listening",
      title: "Dinləmə: Sifət dərəcələri",
      description: "Müqayisə cümlələrini dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "comp-listen",
          title: "Dinlə və seç: müqayisə",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "comp-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "Tom is taller than Sam.", options: ["Tom Samdan hündürdür.", "Tom Samdan alçaqdır.", "Sam Tomdan hündürdür.", "Tom və Sam eyni boydadır."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "A car is faster than a bike.", options: ["Maşın velosipeddən sürətlidir.", "Velosiped maşından sürətlidir.", "Maşın velosipeddən yavaşdır.", "Maşın və velosiped eynidir."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "This box is bigger.", options: ["Bu qutu daha böyükdür.", "Bu qutu daha kiçikdir.", "Bu qutu ağırdır.", "Bu qutu yüngüldür."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She is the best student.", options: ["O ən yaxşı şagirddir.", "O ən pis şagirddir.", "O yaxşı şagirddir.", "O yeni şagirddir."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t5", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "An elephant is heavy.", options: ["Fil ağırdır.", "Fil yüngüldür.", "Pişik ağırdır.", "Fil sürətlidir."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "A turtle is slow.", options: ["Tısbağa yavaşdır.", "Tısbağa sürətlidir.", "Dovşan yavaşdır.", "Tısbağa güclüdür."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "He is stronger than me.", options: ["O məndən güclüdür.", "O məndən zəifdir.", "Mən ondan güclüyəm.", "Biz eyni güclüyük."], correctIndex: 0, xp: 10 },
            { id: "comp-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "This is the tallest tree.", options: ["Bu ən hündür ağacdır.", "Bu ən alçaq ağacdır.", "Bu hündür ağacdır.", "Bu qısa ağacdır."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "comp-listen-b1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "A plane is faster than a car.", options: ["Təyyarə maşından sürətlidir.", "Maşın təyyarədən sürətlidir.", "Təyyarə maşından yavaşdır.", "Təyyarə və maşın eynidir."], correctIndex: 0, xp: 15 },
            { id: "comp-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She is younger than her brother.", options: ["O qardaşından cavandır.", "O qardaşından böyükdür.", "O qardaşı ilə eyni yaşdadır.", "Qardaşı ondan cavandır."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c7-reading",
      title: "Oxu: Animals",
      description: "Heyvanlar haqqında mətni oxu və suallara cavab ver (müqayisə).",
      lessons: [
        {
          id: "comp-read",
          title: "Reading: Animals",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "Animals are different. The cheetah is the fastest animal. It can run very fast. The elephant is the biggest animal on land. It is very heavy. The giraffe is the tallest animal. Its neck is very long. A mouse is smaller than a cat, but a cat is smaller than a dog. The blue whale is the biggest animal in the world." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "comp-read-t1", type: "multiple_choice", speakOptions: true, prompt: "Which is the fastest animal?", options: ["the elephant", "the cheetah", "the giraffe", "the mouse"], correctIndex: 1, xp: 10 },
            { id: "comp-read-t2", type: "multiple_choice", speakOptions: true, prompt: "Which is the biggest animal on land?", options: ["the giraffe", "the elephant", "the cheetah", "the mouse"], correctIndex: 1, xp: 10 },
            { id: "comp-read-t3", type: "multiple_choice", speakOptions: true, prompt: "Which is the tallest animal?", options: ["the elephant", "the giraffe", "the cheetah", "the whale"], correctIndex: 1, xp: 10 },
            { id: "comp-read-t4", type: "multiple_choice", speakOptions: true, prompt: "Is a mouse bigger than a cat?", options: ["Yes.", "No, it is smaller.", "They are the same.", "We don't know."], correctIndex: 1, xp: 10 },
            { id: "comp-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What is the biggest animal in the world?", options: ["the elephant", "the blue whale", "the giraffe", "the cheetah"], correctIndex: 1, xp: 10 },
            { id: "comp-read-t6", type: "fill_blank", prompt: "'The giraffe is the ___ animal.' (ən hündür — mətndən)", accepted: ["tallest"], xp: 10 },
            { id: "comp-read-t7", type: "multiple_choice", speakOptions: true, prompt: "'The elephant is very ___.'", options: ["heavy", "light", "small", "fast"], correctIndex: 0, xp: 10 },
            { id: "comp-read-t8", type: "multiple_choice", speakOptions: true, prompt: "A cat is smaller than a ___.", options: ["mouse", "dog", "elephant", "giraffe"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "comp-read-b1", type: "multiple_choice", prompt: "'neck' nə deməkdir?", options: ["boyun", "ayaq", "qol", "quyruq"], correctIndex: 0, xp: 15 },
            { id: "comp-read-b2", type: "fill_blank", prompt: "'The cheetah is the ___ animal.' (ən sürətli — mətndən)", accepted: ["fastest"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c7-writing",
      title: "Yazı: Sifət dərəcələri",
      description: "Sözlərdən müqayisə cümləsi qur.",
      lessons: [
        {
          id: "comp-write",
          title: "Cümlə qur: müqayisə",
          intro: "Sözləri düzgün sıraya düz və müqayisə cümləsi qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas. Müqayisə: X is + sifət-er + than + Y. Üstünlük: the + sifət-est." },
          ],
          tasks: [
            { id: "comp-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Tom", "is", "taller", "than", "Sam"], answer: "Tom is taller than Sam", translation: "Tom Samdan hündürdür.", xp: 10 },
            { id: "comp-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["A", "car", "is", "faster"], answer: "A car is faster", translation: "Maşın daha sürətlidir.", xp: 10 },
            { id: "comp-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["This", "box", "is", "bigger"], answer: "This box is bigger", translation: "Bu qutu daha böyükdür.", xp: 10 },
            { id: "comp-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "is", "the", "best"], answer: "She is the best", translation: "O ən yaxşıdır.", xp: 10 },
            { id: "comp-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["An", "elephant", "is", "heavy"], answer: "An elephant is heavy", translation: "Fil ağırdır.", xp: 10 },
            { id: "comp-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["A", "turtle", "is", "slow"], answer: "A turtle is slow", translation: "Tısbağa yavaşdır.", xp: 10 },
            { id: "comp-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "is", "stronger", "than", "me"], answer: "He is stronger than me", translation: "O məndən güclüdür.", xp: 10 },
            { id: "comp-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["This", "tree", "is", "the", "tallest"], answer: "This tree is the tallest", translation: "Bu ağac ən hündürdür.", xp: 15 },
          ],
          bonusTasks: [
            { id: "comp-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["A", "plane", "is", "fast"], answer: "A plane is fast", translation: "Təyyarə sürətlidir.", xp: 15 },
            { id: "comp-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "is", "younger", "than", "me"], answer: "She is younger than me", translation: "O məndən cavandır.", xp: 15 },
            { id: "comp-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["This", "is", "the", "biggest", "box"], answer: "This is the biggest box", translation: "Bu ən böyük qutudur.", xp: 15 },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 8-Cİ DÖVR — MODAL VERBS (can / must / should)
    // Yeni fellər: jump, climb, fly, draw, drive, fix, ride, count.
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-c8-grammar",
      title: "Qayda: Modal fellər",
      description: "can (bacarıq), must (məcburiyyət), should (məsləhət).",
      lessons: [
        {
          id: "modal-rule",
          title: "Modal fellər qaydası",
          intro: "can, must, should — modal fellər. Nə vaxt hansını işlətməli?",
          sections: [
            { heading: "can — bacarıq / icazə", body: "Bir işi bacarmaq və ya icazə: I can swim. Can I go? Modaldan sonra fel əsas formadadır (can swim, NOT can swims)." },
            { heading: "must — məcburiyyət", body: "Vacib, məcburi iş: You must stop. İnkar mustn't = qadağan: You mustn't run here." },
            { heading: "should — məsləhət", body: "Tövsiyə/məsləhət: You should sleep early. İnkar shouldn't: You shouldn't eat too much." },
          ],
          tasks: [
            { id: "modal-rule-t1", type: "multiple_choice", speakOptions: true, prompt: "'I ___ swim very well.' (bacarıq)", options: ["can", "must", "should", "am"], correctIndex: 0, xp: 10 },
            { id: "modal-rule-t2", type: "multiple_choice", speakOptions: true, prompt: "'You ___ stop at a red light.' (məcburi)", options: ["can", "must", "should", "may"], correctIndex: 1, xp: 10 },
            { id: "modal-rule-t3", type: "multiple_choice", speakOptions: true, prompt: "'You ___ sleep early.' (məsləhət)", options: ["can", "must", "should", "do"], correctIndex: 2, xp: 10 },
            { id: "modal-rule-t4", type: "multiple_choice", prompt: "Modaldan sonra fel hansı formada olur?", options: ["əsas forma", "-s", "-ing", "-ed"], correctIndex: 0, xp: 10 },
            { id: "modal-rule-t5", type: "multiple_choice", speakOptions: true, prompt: "'Birds ___ fly.'", options: ["can", "must", "should", "are"], correctIndex: 0, xp: 10 },
            { id: "modal-rule-t6", type: "multiple_choice", speakOptions: true, prompt: "'___ I open the window?' (icazə)", options: ["Can", "Must", "Should", "Do"], correctIndex: 0, xp: 10 },
            { id: "modal-rule-t7", type: "multiple_choice", speakOptions: true, prompt: "'You ___ run in the hospital.' (qadağa)", options: ["can", "mustn't", "should", "may"], correctIndex: 1, xp: 10 },
            { id: "modal-rule-t8", type: "multiple_choice", speakOptions: true, prompt: "'She ___ drive a car.' (bacarır)", options: ["can", "must", "should", "is"], correctIndex: 0, xp: 10 },
            { id: "modal-rule-t9", type: "multiple_choice", speakOptions: true, prompt: "'You ___ eat too much sugar.' (məsləhət — inkar)", options: ["shouldn't", "can", "must", "do"], correctIndex: 0, xp: 10 },
            { id: "modal-rule-t10", type: "fill_blank", prompt: "'bacarmaq' mənasını verən modal fel?", accepted: ["can"], xp: 15 },
          ],
          bonusTasks: [
            { id: "modal-rule-b1", type: "multiple_choice", speakOptions: true, prompt: "'Fish ___ swim.'", options: ["can", "must", "should", "are"], correctIndex: 0, xp: 15 },
            { id: "modal-rule-b2", type: "multiple_choice", speakOptions: true, prompt: "'We ___ help our friends.' (məsləhət)", options: ["should", "mustn't", "can't", "do"], correctIndex: 0, xp: 15 },
            { id: "modal-rule-b3", type: "fill_blank", prompt: "'məcburiyyət' bildirən modal fel?", accepted: ["must"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c8-vocab",
      title: "Lüğət: Bacarıq felləri",
      description: "8 yeni fel: jump, climb, fly, draw, drive, fix, ride, count.",
      lessons: [
        {
          id: "modal-vocab",
          title: "Bacarıq felləri (8 söz)",
          intro: "'can' ilə işlədəcəyimiz 8 yeni fel öyrənək.",
          sections: [
            { heading: "Yeni sözlər (8 fel)", body: "jump — tullanmaq · climb — dırmaşmaq · fly — uçmaq · draw — rəsm çəkmək · drive — sürmək · fix — təmir etmək · ride — minmək · count — saymaq" },
            { heading: "Məsləhət", body: "Bu felləri 'can' ilə işlət: I can jump. She can draw. A bird can fly." },
          ],
          tasks: [
            { id: "modal-vocab-t1", type: "multiple_choice", prompt: "'jump' sözünün mənası?", options: ["tullanmaq", "dırmaşmaq", "uçmaq", "sürmək"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t2", type: "multiple_choice", prompt: "'climb' sözünün mənası?", options: ["dırmaşmaq", "tullanmaq", "minmək", "saymaq"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t3", type: "multiple_choice", prompt: "'fly' sözünün mənası?", options: ["uçmaq", "üzmək", "qaçmaq", "tullanmaq"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t4", type: "multiple_choice", prompt: "'draw' sözünün mənası?", options: ["rəsm çəkmək", "yazmaq", "oxumaq", "sürmək"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t5", type: "multiple_choice", prompt: "'drive' sözünün mənası?", options: ["sürmək", "minmək", "uçmaq", "təmir etmək"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t6", type: "multiple_choice", prompt: "'fix' sözünün mənası?", options: ["təmir etmək", "sürmək", "saymaq", "dırmaşmaq"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t7", type: "fill_blank", prompt: "'minmək' ingiliscə necə yazılır?", accepted: ["ride"], xp: 10 },
            { id: "modal-vocab-t8", type: "fill_blank", prompt: "'saymaq' ingiliscə necə yazılır?", accepted: ["count"], xp: 10 },
            { id: "modal-vocab-t9", type: "multiple_choice", speakOptions: true, prompt: "'A bird can ___.' (uçmaq)", options: ["fly", "swim", "drive", "count"], correctIndex: 0, xp: 10 },
            { id: "modal-vocab-t10", type: "multiple_choice", speakOptions: true, prompt: "'I can ___ a bike.' (minmək)", options: ["ride", "fly", "draw", "fix"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "modal-vocab-b1", type: "multiple_choice", prompt: "'count' sözünün mənası?", options: ["saymaq", "çəkmək", "sürmək", "uçmaq"], correctIndex: 0, xp: 15 },
            { id: "modal-vocab-b2", type: "multiple_choice", prompt: "'ride' sözünün mənası?", options: ["minmək", "tullanmaq", "uçmaq", "saymaq"], correctIndex: 0, xp: 15 },
            { id: "modal-vocab-b3", type: "multiple_choice", speakOptions: true, prompt: "'She can ___ a picture.' (rəsm çəkmək)", options: ["draw", "drive", "count", "climb"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c8-listening",
      title: "Dinləmə: Modal fellər",
      description: "Modal cümlələri dinlə və düzgün mənanı seç.",
      lessons: [
        {
          id: "modal-listen",
          title: "Dinlə və seç: can / must / should",
          intro: "Cümləni dinlə və düzgün cavabı seç.",
          sections: [
            { heading: "Necə işləyir?", body: "«Dinlə» düyməsinə bas, cümləni eşit və düzgün variantı seç. İstədiyin qədər təkrar dinlə." },
          ],
          tasks: [
            { id: "modal-listen-t1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I can swim.", options: ["Mən üzə bilirəm.", "Mən üzmürəm.", "Mən üzmək istəyirəm.", "Mən üzürəm."], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You must stop.", options: ["Sən dayanmalısan.", "Sən getməlisən.", "Sən dayanma.", "Sən dayana bilərsən."], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t3", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You should sleep early.", options: ["Sən erkən yatmalısan.", "Sən gec yatmalısan.", "Sən yatmamalısan.", "Sən erkən durmalısan."], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t4", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "Birds can fly.", options: ["Quşlar uça bilər.", "Quşlar uça bilməz.", "Balıqlar uça bilər.", "Quşlar üzə bilər."], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t5", type: "listening", prompt: "Dinlə və sualın mənasını seç.", audioText: "Can I open the window?", options: ["Pəncərəni aça bilərəm?", "Pəncərəni bağlaya bilərəm?", "Qapını aça bilərəm?", "Pəncərəni açmalıyam?"], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t6", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You mustn't run here.", options: ["Sən burada qaçmamalısan.", "Sən burada qaça bilərsən.", "Sən burada gəzməlisən.", "Sən burada qaçmalısan."], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t7", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "She can drive a car.", options: ["O maşın sürə bilir.", "O maşın sürə bilmir.", "O velosiped sürə bilir.", "O maşın sürməlidir."], correctIndex: 0, xp: 10 },
            { id: "modal-listen-t8", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "We should help others.", options: ["Biz başqalarına kömək etməliyik.", "Biz kömək etməməliyik.", "Biz özümüzə kömək etməliyik.", "Biz kömək edə bilərik."], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "modal-listen-b1", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "I can ride a bike.", options: ["Mən velosiped sürə bilirəm.", "Mən velosiped sürə bilmirəm.", "Mən maşın sürə bilirəm.", "Mən velosiped sürməliyəm."], correctIndex: 0, xp: 15 },
            { id: "modal-listen-b2", type: "listening", prompt: "Dinlə və cümlənin mənasını seç.", audioText: "You shouldn't eat too much.", options: ["Sən çox yeməməlisən.", "Sən çox yeməlisən.", "Sən az yeməməlisən.", "Sən çox yeyə bilərsən."], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c8-reading",
      title: "Oxu: School rules",
      description: "Məktəb qaydaları haqqında mətni oxu və suallara cavab ver (modallar).",
      lessons: [
        {
          id: "modal-read",
          title: "Reading: School rules",
          intro: "Qısa mətni oxu və suallara cavab ver.",
          sections: [
            { heading: "Read the text (Mətni oxu)", body: "At our school there are some rules. You must come to school on time. You must listen to the teacher. You should do your homework every day. You can play in the yard at break time. You mustn't run in the classroom. You shouldn't shout. Good students always follow the rules." },
            { heading: "İpucu", body: "Sualı oxu, cavabı mətndə tap. Lazım olsa mətnə yenidən bax." },
          ],
          tasks: [
            { id: "modal-read-t1", type: "multiple_choice", speakOptions: true, prompt: "What must you do on time?", options: ["play", "come to school", "run", "shout"], correctIndex: 1, xp: 10 },
            { id: "modal-read-t2", type: "multiple_choice", speakOptions: true, prompt: "What should you do every day?", options: ["play football", "do your homework", "shout", "run"], correctIndex: 1, xp: 10 },
            { id: "modal-read-t3", type: "multiple_choice", speakOptions: true, prompt: "Where can you play?", options: ["in the classroom", "in the yard", "on the road", "at home"], correctIndex: 1, xp: 10 },
            { id: "modal-read-t4", type: "multiple_choice", speakOptions: true, prompt: "What mustn't you do in the classroom?", options: ["listen", "run", "sit", "write"], correctIndex: 1, xp: 10 },
            { id: "modal-read-t5", type: "multiple_choice", speakOptions: true, prompt: "What shouldn't you do?", options: ["shout", "study", "listen", "read"], correctIndex: 0, xp: 10 },
            { id: "modal-read-t6", type: "fill_blank", prompt: "'You ___ listen to the teacher.' (məcburi — mətndən)", accepted: ["must"], xp: 10 },
            { id: "modal-read-t7", type: "multiple_choice", speakOptions: true, prompt: "Can you play at break time?", options: ["Yes, in the yard.", "No.", "Only at home.", "We don't know."], correctIndex: 0, xp: 10 },
            { id: "modal-read-t8", type: "multiple_choice", speakOptions: true, prompt: "'Good students follow the ___.'", options: ["rules", "cars", "birds", "boxes"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "modal-read-b1", type: "multiple_choice", prompt: "'on time' nə deməkdir?", options: ["vaxtında", "gec", "tez", "heç vaxt"], correctIndex: 0, xp: 15 },
            { id: "modal-read-b2", type: "fill_blank", prompt: "'You ___ run in the classroom.' (qadağa — mətndən)", accepted: ["mustn't"], xp: 15 },
          ],
        },
      ],
    },
    {
      id: "en-c8-writing",
      title: "Yazı: Modal fellər",
      description: "Sözlərdən modal fellə cümlə qur.",
      lessons: [
        {
          id: "modal-write",
          title: "Cümlə qur: can / must / should",
          intro: "Sözləri düzgün sıraya düz və modal cümlə qur.",
          sections: [
            { heading: "Necə işləyir?", body: "Sözlərə sıra ilə bas. Quruluş: kim + modal (can/must/should) + fel (əsas forma)." },
          ],
          tasks: [
            { id: "modal-write-t1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "can", "swim"], answer: "I can swim", translation: "Mən üzə bilirəm.", xp: 10 },
            { id: "modal-write-t2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["You", "must", "stop"], answer: "You must stop", translation: "Sən dayanmalısan.", xp: 10 },
            { id: "modal-write-t3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["You", "should", "sleep", "early"], answer: "You should sleep early", translation: "Sən erkən yatmalısan.", xp: 10 },
            { id: "modal-write-t4", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Birds", "can", "fly"], answer: "Birds can fly", translation: "Quşlar uça bilər.", xp: 10 },
            { id: "modal-write-t5", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["Can", "I", "open", "the", "window"], answer: "Can I open the window", translation: "Pəncərəni aça bilərəm?", xp: 10 },
            { id: "modal-write-t6", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["She", "can", "drive", "a", "car"], answer: "She can drive a car", translation: "O maşın sürə bilir.", xp: 10 },
            { id: "modal-write-t7", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["We", "should", "help", "others"], answer: "We should help others", translation: "Biz başqalarına kömək etməliyik.", xp: 10 },
            { id: "modal-write-t8", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["I", "can", "ride", "a", "bike"], answer: "I can ride a bike", translation: "Mən velosiped sürə bilirəm.", xp: 15 },
          ],
          bonusTasks: [
            { id: "modal-write-b1", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["You", "mustn't", "run", "here"], answer: "You mustn't run here", translation: "Sən burada qaçmamalısan.", xp: 15 },
            { id: "modal-write-b2", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["He", "can", "draw"], answer: "He can draw", translation: "O rəsm çəkə bilir.", xp: 15 },
            { id: "modal-write-b3", type: "word_order", prompt: "Sözləri düzgün sıraya düz.", words: ["You", "should", "listen"], answer: "You should listen", translation: "Sən qulaq asmalısan.", xp: 15 },
          ],
        },
      ],
    },


    // ═══════════════════════════════════════════════════════════════
    // BÖLMƏ 2 — İSİMLƏR (Nouns)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-nouns",
      title: "İsimlər (Nouns)",
      description:
        "İsim nədir, cəm forması, sayıla bilən və sayıla bilməyən isimlər.",
      lessons: [
        // ── PROJECT 1 ──────────────────────────────────────────────
        {
          id: "en-noun-1",
          title: "Noun nədir? (What is a noun)",
          intro:
            "Noun sözünün Azərbaycancası 'isim'dir. Bu layihədə isimləri tanımağı öyrənəcəyik.",
          visual: "noun-cards",
          sections: [
            {
              heading: "Noun (isim) nədir?",
              body: "Noun — insanların, əşyaların, yerlərin və hisslərin adıdır. Məsələn: book (kitab), teacher (müəllim), city (şəhər), love (sevgi).",
            },
            {
              heading: "Common və Proper noun",
              body: "Ümumi isimlər (common noun) əşyanın ümumi adıdır: boy, city, dog. Xüsusi isimlər (proper noun) konkret ad bildirir və BÖYÜK hərflə yazılır: Ali, London, Azerbaijan.",
            },
            {
              heading: "Necə tanıyaq?",
              body: "Əgər söz bir şeyin adıdırsa (kim? nə? hara?), o, isimdir. Hərəkət (run, eat) və ya əlamət (happy, tall) isim deyil.",
            },
          ],
          tasks: [
            { id: "en-noun-1-t1", type: "multiple_choice", prompt: "Hansı söz isimdir (noun)?", options: ["run", "book", "happy", "quickly"], correctIndex: 1, xp: 10 },
            { id: "en-noun-1-t2", type: "multiple_choice", prompt: "Hansı söz isimdir?", options: ["teacher", "beautiful", "eat", "slowly"], correctIndex: 0, xp: 10 },
            { id: "en-noun-1-t3", type: "multiple_choice", prompt: "Which one is a noun? (Hansı isimdir?)", options: ["city", "blue", "jump", "fast"], correctIndex: 0, xp: 10 },
            { id: "en-noun-1-t4", type: "fill_blank", prompt: "'apple' isimdirmi? (bəli / xeyr)", accepted: ["bəli", "beli", "yes"], xp: 10 },
            { id: "en-noun-1-t5", type: "multiple_choice", prompt: "Hansı söz isim DEYİL?", options: ["dog", "table", "sing", "house"], correctIndex: 2, xp: 10 },
            { id: "en-noun-1-t6", type: "multiple_choice", prompt: "Proper noun (xüsusi isim) hansıdır?", options: ["boy", "London", "street", "river"], correctIndex: 1, xp: 10 },
            { id: "en-noun-1-t7", type: "multiple_choice", prompt: "Hansı xüsusi isimdir (böyük hərflə)?", options: ["teacher", "Ali", "book", "city"], correctIndex: 1, xp: 10 },
            { id: "en-noun-1-t8", type: "multiple_choice", prompt: "Common noun (ümumi isim) hansıdır?", options: ["Baku", "Azerbaijan", "school", "Nigar"], correctIndex: 2, xp: 10 },
            { id: "en-noun-1-t9", type: "fill_blank", prompt: "İnsan adları hansı hərflə başlayır? (böyük / kiçik)", accepted: ["böyük", "boyuk"], xp: 10 },
            { id: "en-noun-1-t10", type: "multiple_choice", prompt: "Which word names a place? (yer adı)", options: ["run", "park", "red", "sing"], correctIndex: 1, xp: 10 },
            { id: "en-noun-1-t11", type: "multiple_choice", prompt: "Which word names a person? (insan)", options: ["doctor", "tall", "green", "read"], correctIndex: 0, xp: 10 },
            { id: "en-noun-1-t12", type: "multiple_choice", prompt: "Which word names a thing? (əşya)", options: ["pen", "happy", "go", "fast"], correctIndex: 0, xp: 10 },
            { id: "en-noun-1-t13", type: "fill_blank", prompt: "'water' isimdirmi? (bəli / xeyr)", accepted: ["bəli", "beli", "yes"], xp: 10 },
            { id: "en-noun-1-t14", type: "multiple_choice", prompt: "Hansı söz isimdir?", options: ["friendship", "kind", "walk", "loudly"], correctIndex: 0, xp: 10 },
            { id: "en-noun-1-t15", type: "multiple_choice", prompt: "'The cat is black.' — cümlədə isim hansıdır?", options: ["The", "cat", "is", "black"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-noun-1-b1", type: "multiple_choice", prompt: "'My brother has a dog.' — cümlədə neçə isim var?", options: ["1", "2", "3", "4"], correctIndex: 1, xp: 15 },
            { id: "en-noun-1-b2", type: "multiple_choice", prompt: "'I live in Ganja.' — xüsusi isim hansıdır?", options: ["I", "live", "in", "Ganja"], correctIndex: 3, xp: 15 },
            { id: "en-noun-1-b3", type: "fill_blank", prompt: "'happiness' isimdirmi? (bəli / xeyr)", accepted: ["bəli", "beli", "yes"], xp: 15 },
            { id: "en-noun-1-b4", type: "multiple_choice", prompt: "Hansı sıradakı BÜTÜN sözlər isimdir?", options: ["cat, run, sky", "book, city, love", "happy, dog, sing", "red, blue, green"], correctIndex: 1, xp: 15 },
            { id: "en-noun-1-b5", type: "multiple_choice", prompt: "'Birds fly.' — cümlədə isim hansıdır?", options: ["Birds", "fly", "hər ikisi", "heç biri"], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 2 ──────────────────────────────────────────────
        {
          id: "en-noun-2",
          title: "Nounun cəm forması (Plural nouns)",
          intro:
            "Bir şeydən çox olanda isim dəyişir. Bu layihədə isimləri cəm halda yazmağı öyrənəcəyik.",
          visual: "plural-books",
          sections: [
            {
              heading: "Əsas qayda: -s",
              body: "Bir şeydən çox olanda adətən sözün sonuna -s əlavə edirik: book → books, pen → pens, dog → dogs.",
            },
            {
              heading: "-es qaydası",
              body: "Söz -s, -x, -ch, -sh ilə bitirsə, -es əlavə olunur: box → boxes, bus → buses, watch → watches, dish → dishes.",
            },
            {
              heading: "-y qaydası",
              body: "Samitdən sonra -y gəlirsə, y hərfi i olur və -es əlavə olunur: baby → babies, city → cities.",
            },
            {
              heading: "Qaydasız (irregular) isimlər",
              body: "Bəzi sözlər ümumi qaydaya tabe olmur: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice.",
            },
          ],
          tasks: [
            { id: "en-noun-2-t1", type: "multiple_choice", prompt: "'book' cəm forması?", options: ["books", "bookes", "book", "bookies"], correctIndex: 0, xp: 10 },
            { id: "en-noun-2-t2", type: "fill_blank", prompt: "'pen' sözünü cəm halda yaz.", accepted: ["pens"], xp: 10 },
            { id: "en-noun-2-t3", type: "multiple_choice", prompt: "'box' cəm forması?", options: ["boxs", "boxes", "box", "boxies"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t4", type: "multiple_choice", prompt: "'bus' cəm forması?", options: ["buss", "buses", "bus", "busies"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t5", type: "fill_blank", prompt: "'dog' sözünü cəm halda yaz.", accepted: ["dogs"], xp: 10 },
            { id: "en-noun-2-t6", type: "multiple_choice", prompt: "'watch' cəm forması?", options: ["watchs", "watches", "watch", "watchies"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t7", type: "multiple_choice", prompt: "'dish' cəm forması?", options: ["dishs", "dishes", "dish", "dishies"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t8", type: "multiple_choice", prompt: "'baby' cəm forması?", options: ["babys", "babies", "baby", "babyes"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t9", type: "multiple_choice", prompt: "'city' cəm forması?", options: ["citys", "cities", "city", "cityes"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t10", type: "fill_blank", prompt: "'cat' sözünü cəm halda yaz.", accepted: ["cats"], xp: 10 },
            { id: "en-noun-2-t11", type: "multiple_choice", prompt: "'man' cəm forması?", options: ["mans", "men", "manes", "mens"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t12", type: "multiple_choice", prompt: "'child' cəm forması?", options: ["childs", "children", "childes", "childern"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t13", type: "multiple_choice", prompt: "'foot' cəm forması?", options: ["foots", "feet", "footes", "feets"], correctIndex: 1, xp: 10 },
            { id: "en-noun-2-t14", type: "fill_blank", prompt: "'car' sözünü cəm halda yaz.", accepted: ["cars"], xp: 10 },
            { id: "en-noun-2-t15", type: "multiple_choice", prompt: "-s, -x, -ch, -sh ilə bitən sözlərə hansı şəkilçi əlavə olunur?", options: ["-s", "-es", "-ies", "-en"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-noun-2-b1", type: "multiple_choice", prompt: "'tooth' cəm forması?", options: ["tooths", "teeth", "toothes", "teeths"], correctIndex: 1, xp: 15 },
            { id: "en-noun-2-b2", type: "multiple_choice", prompt: "'woman' cəm forması?", options: ["womans", "women", "womens", "womanes"], correctIndex: 1, xp: 15 },
            { id: "en-noun-2-b3", type: "multiple_choice", prompt: "'mouse' cəm forması?", options: ["mouses", "mice", "mousees", "mouse"], correctIndex: 1, xp: 15 },
            { id: "en-noun-2-b4", type: "fill_blank", prompt: "'city' sözünü cəm halda yaz.", accepted: ["cities"], xp: 15 },
            { id: "en-noun-2-b5", type: "multiple_choice", prompt: "Hansı cəm forması SƏHVDİR?", options: ["books", "boxes", "childs", "cats"], correctIndex: 2, xp: 15 },
          ],
        },

        // ── PROJECT 3 ──────────────────────────────────────────────
        {
          id: "en-noun-3",
          title: "Countable & Uncountable nouns",
          intro:
            "Bəzi isimləri bir-bir saya bilirik, bəzilərini yox. Bu layihədə bu fərqi öyrənəcəyik.",
          visual: "count-uncount",
          sections: [
            {
              heading: "Countable (sayıla bilən)",
              body: "Bir-bir saya bildiyimiz isimlər: apple, book, chair, pen. Bunlar cəm ola bilər: two apples, three books.",
            },
            {
              heading: "Uncountable (sayıla bilməyən)",
              body: "Ayrı-ayrı saya bilmədiyimiz isimlər: water, milk, rice, sugar, money, bread. Bunlar cəm olmur ('waters' yanlışdır).",
            },
            {
              heading: "a / some",
              body: "Countable təkə 'a/an' işlədirik: a book, an apple. Uncountable-ə 'some' işlədirik: some water, some milk.",
            },
          ],
          tasks: [
            { id: "en-noun-3-t1", type: "multiple_choice", prompt: "'water' countable, yoxsa uncountable?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 10 },
            { id: "en-noun-3-t2", type: "multiple_choice", prompt: "'apple' countable, yoxsa uncountable?", options: ["Countable", "Uncountable"], correctIndex: 0, xp: 10 },
            { id: "en-noun-3-t3", type: "multiple_choice", prompt: "'milk' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 10 },
            { id: "en-noun-3-t4", type: "multiple_choice", prompt: "'book' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 0, xp: 10 },
            { id: "en-noun-3-t5", type: "multiple_choice", prompt: "'rice' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 10 },
            { id: "en-noun-3-t6", type: "multiple_choice", prompt: "'chair' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 0, xp: 10 },
            { id: "en-noun-3-t7", type: "multiple_choice", prompt: "Hansı isim sayıla bilməz (uncountable)?", options: ["pen", "sugar", "dog", "city"], correctIndex: 1, xp: 10 },
            { id: "en-noun-3-t8", type: "multiple_choice", prompt: "Hansı isim sayıla bilər (countable)?", options: ["water", "money", "table", "bread"], correctIndex: 2, xp: 10 },
            { id: "en-noun-3-t9", type: "multiple_choice", prompt: "Düzgün cavabı seç: I have ___ water.", options: ["a", "an", "some", "two"], correctIndex: 2, xp: 10 },
            { id: "en-noun-3-t10", type: "multiple_choice", prompt: "Düzgün cavabı seç: I have ___ apple.", options: ["a", "some", "much", "water"], correctIndex: 0, xp: 10 },
            { id: "en-noun-3-t11", type: "multiple_choice", prompt: "'money' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 10 },
            { id: "en-noun-3-t12", type: "multiple_choice", prompt: "'car' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 0, xp: 10 },
            { id: "en-noun-3-t13", type: "multiple_choice", prompt: "Uncountable isimlər cəm ola bilərmi?", options: ["Bəli", "Xeyr"], correctIndex: 1, xp: 10 },
            { id: "en-noun-3-t14", type: "multiple_choice", prompt: "Hansı ifadə SƏHVDİR?", options: ["two books", "three cars", "two waters", "five pens"], correctIndex: 2, xp: 10 },
            { id: "en-noun-3-t15", type: "multiple_choice", prompt: "'bread' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-noun-3-b1", type: "multiple_choice", prompt: "'information' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 15 },
            { id: "en-noun-3-b2", type: "multiple_choice", prompt: "'salt' hansıdır?", options: ["Countable", "Uncountable"], correctIndex: 1, xp: 15 },
            { id: "en-noun-3-b3", type: "multiple_choice", prompt: "Düzgün cavabı seç: There is ___ milk.", options: ["a", "an", "some", "many"], correctIndex: 2, xp: 15 },
            { id: "en-noun-3-b4", type: "multiple_choice", prompt: "Düzgün cavabı seç: There are three ___.", options: ["water", "money", "books", "rice"], correctIndex: 2, xp: 15 },
            { id: "en-noun-3-b5", type: "multiple_choice", prompt: "Hansı isim sayıla bilər (countable)?", options: ["water", "chair", "milk", "sugar"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // BÖLMƏ 3 — SÖZ EHTİYATI (Vocabulary)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-vocab",
      title: "Söz ehtiyatı (Vocabulary)",
      description:
        "Gündəlik həyatla bağlı mövzular: ailə, məktəb, təbiət, qida, şəhər və hobbilər.",
      lessons: [
        // ── PROJECT 1: Family and friends ──────────────────────────
        {
          id: "en-vo-l1",
          title: "Ailə və dostlar (Family and friends)",
          intro:
            "Ailə üzvləri, xarici görünüş və xarakterin təsviri ilə bağlı sözlər.",
          visual: "leksika",
          sections: [
            {
              heading: "Ailə üzvləri",
              body: "mother (ana), father (ata), brother (qardaş), sister (bacı), grandmother (nənə), grandfather (baba), son (oğul), daughter (qız), parents (valideynlər).",
            },
            {
              heading: "Dostlar və qohumlar",
              body: "friend (dost), aunt (bibi/xala), uncle (əmi/dayı), cousin (əmioğlu, xalaqızı və s.).",
            },
            {
              heading: "Təsvir sözləri",
              body: "tall (uca), short (qısa), young (gənc), old (qoca), kind (mehriban), clever (ağıllı), beautiful (gözəl).",
            },
          ],
          tasks: [
            { id: "en-vo-l1-t1", type: "multiple_choice", prompt: "'mother' azərbaycanca?", options: ["ata", "ana", "bacı", "qardaş"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t2", type: "multiple_choice", prompt: "'father' azərbaycanca?", options: ["ata", "ana", "baba", "əmi"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l1-t3", type: "multiple_choice", prompt: "'brother' azərbaycanca?", options: ["bacı", "qardaş", "dost", "oğul"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t4", type: "multiple_choice", prompt: "'sister' azərbaycanca?", options: ["bacı", "qardaş", "ana", "xala"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l1-t5", type: "multiple_choice", prompt: "'friend' azərbaycanca?", options: ["düşmən", "dost", "qonşu", "müəllim"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t6", type: "multiple_choice", prompt: "'grandmother' azərbaycanca?", options: ["nənə", "baba", "bibi", "ana"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l1-t7", type: "multiple_choice", prompt: "'grandfather' azərbaycanca?", options: ["nənə", "baba", "ata", "dayı"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t8", type: "fill_blank", prompt: "'ana' ingiliscə?", accepted: ["mother", "mum", "mom"], xp: 10 },
            { id: "en-vo-l1-t9", type: "fill_blank", prompt: "'ata' ingiliscə?", accepted: ["father", "dad"], xp: 10 },
            { id: "en-vo-l1-t10", type: "multiple_choice", prompt: "'parents' azərbaycanca?", options: ["uşaqlar", "valideynlər", "qohumlar", "dostlar"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t11", type: "multiple_choice", prompt: "'son' azərbaycanca?", options: ["oğul", "qız", "ata", "əmi"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l1-t12", type: "multiple_choice", prompt: "'daughter' azərbaycanca?", options: ["oğul", "qız", "bacı", "ana"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t13", type: "multiple_choice", prompt: "Xarici görünüş: 'tall' azərbaycanca?", options: ["qısa", "uca/hündür", "gözəl", "gənc"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l1-t14", type: "multiple_choice", prompt: "Xarakter: 'kind' azərbaycanca?", options: ["mehriban", "tənbəl", "qəzəbli", "güclü"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l1-t15", type: "fill_blank", prompt: "'dost' ingiliscə?", accepted: ["friend"], xp: 10 },
          ],
          bonusTasks: [
            { id: "en-vo-l1-b1", type: "multiple_choice", prompt: "'aunt' azərbaycanca?", options: ["bibi/xala", "əmi/dayı", "nənə", "baba"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l1-b2", type: "multiple_choice", prompt: "'uncle' azərbaycanca?", options: ["bibi", "əmi/dayı", "baba", "oğul"], correctIndex: 1, xp: 15 },
            { id: "en-vo-l1-b3", type: "multiple_choice", prompt: "'cousin' azərbaycanca?", options: ["əmioğlu/xalaqızı və s.", "qardaş", "ana", "dost"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l1-b4", type: "fill_blank", prompt: "'bacı' ingiliscə?", accepted: ["sister"], xp: 15 },
            { id: "en-vo-l1-b5", type: "multiple_choice", prompt: "'young' azərbaycanca?", options: ["qoca", "gənc/cavan", "hündür", "gözəl"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 2: School life ─────────────────────────────────
        {
          id: "en-vo-l2",
          title: "Məktəb həyatı (School life)",
          intro:
            "Məktəb ləvazimatları, dərslər və gündəlik məktəb sözləri.",
          visual: "leksika",
          sections: [
            {
              heading: "Ləvazimatlar",
              body: "book (kitab), notebook (dəftər), pen (qələm), pencil (karandaş), ruler (xətkeş), eraser (silgi), bag (çanta).",
            },
            {
              heading: "İnsanlar və yerlər",
              body: "teacher (müəllim), pupil/student (şagird), school (məktəb), classroom (sinif otağı), library (kitabxana).",
            },
            {
              heading: "Dərs və gün",
              body: "lesson (dərs), homework (ev tapşırığı), timetable (dərs cədvəli), desk (parta), board (lövhə).",
            },
          ],
          tasks: [
            { id: "en-vo-l2-t1", type: "multiple_choice", prompt: "'book' azərbaycanca?", options: ["qələm", "kitab", "dəftər", "çanta"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l2-t2", type: "multiple_choice", prompt: "'pen' azərbaycanca?", options: ["qələm", "kitab", "xətkeş", "silgi"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t3", type: "multiple_choice", prompt: "'pencil' azərbaycanca?", options: ["karandaş", "kitab", "dəftər", "stol"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t4", type: "multiple_choice", prompt: "'teacher' azərbaycanca?", options: ["şagird", "müəllim", "direktor", "valideyn"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l2-t5", type: "multiple_choice", prompt: "'pupil / student' azərbaycanca?", options: ["müəllim", "şagird", "direktor", "qonaq"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l2-t6", type: "multiple_choice", prompt: "'school' azərbaycanca?", options: ["ev", "məktəb", "xəstəxana", "mağaza"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l2-t7", type: "multiple_choice", prompt: "'classroom' azərbaycanca?", options: ["sinif otağı", "həyət", "kitabxana", "idman zalı"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t8", type: "fill_blank", prompt: "'kitab' ingiliscə?", accepted: ["book"], xp: 10 },
            { id: "en-vo-l2-t9", type: "fill_blank", prompt: "'müəllim' ingiliscə?", accepted: ["teacher"], xp: 10 },
            { id: "en-vo-l2-t10", type: "multiple_choice", prompt: "'bag' azərbaycanca?", options: ["çanta", "stol", "lövhə", "qapı"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t11", type: "multiple_choice", prompt: "'desk' azərbaycanca?", options: ["stol/parta", "stul", "lövhə", "qapı"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t12", type: "multiple_choice", prompt: "'lesson' azərbaycanca?", options: ["dərs", "zəng", "kitab", "imtahan"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t13", type: "multiple_choice", prompt: "'homework' azərbaycanca?", options: ["ev tapşırığı", "imtahan", "dərs cədvəli", "kitabxana"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t14", type: "multiple_choice", prompt: "'board' azərbaycanca?", options: ["lövhə", "stol", "kitab", "qapı"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l2-t15", type: "fill_blank", prompt: "'dəftər' ingiliscə?", accepted: ["notebook", "copybook"], xp: 10 },
          ],
          bonusTasks: [
            { id: "en-vo-l2-b1", type: "multiple_choice", prompt: "'ruler' azərbaycanca?", options: ["silgi", "xətkeş", "qələm", "kitab"], correctIndex: 1, xp: 15 },
            { id: "en-vo-l2-b2", type: "multiple_choice", prompt: "'eraser / rubber' azərbaycanca?", options: ["silgi", "xətkeş", "dəftər", "qələm"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l2-b3", type: "multiple_choice", prompt: "'timetable' azərbaycanca?", options: ["dərs cədvəli", "ev tapşırığı", "imtahan", "zəng"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l2-b4", type: "fill_blank", prompt: "'məktəb' ingiliscə?", accepted: ["school"], xp: 15 },
            { id: "en-vo-l2-b5", type: "multiple_choice", prompt: "'library' azərbaycanca?", options: ["kitabxana", "idman zalı", "yeməkxana", "həyət"], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 3: Nature and animals ──────────────────────────
        {
          id: "en-vo-l3",
          title: "Təbiət və heyvanlar (Nature and animals)",
          intro:
            "Heyvanlar, fəsillər və hava şəraiti ilə bağlı sözlər.",
          visual: "leksika",
          sections: [
            {
              heading: "Heyvanlar",
              body: "dog (it), cat (pişik), bird (quş), fish (balıq), horse (at).",
            },
            {
              heading: "Təbiət və hava",
              body: "tree (ağac), flower (gül), sun (günəş), rain (yağış), snow (qar), wind (külək).",
            },
            {
              heading: "Fəsillər (seasons)",
              body: "spring (yaz), summer (yay), autumn/fall (payız), winter (qış).",
            },
          ],
          tasks: [
            { id: "en-vo-l3-t1", type: "multiple_choice", prompt: "'dog' azərbaycanca?", options: ["pişik", "it", "quş", "balıq"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t2", type: "multiple_choice", prompt: "'cat' azərbaycanca?", options: ["pişik", "it", "siçan", "at"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l3-t3", type: "multiple_choice", prompt: "'bird' azərbaycanca?", options: ["balıq", "quş", "ilan", "arı"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t4", type: "multiple_choice", prompt: "'tree' azərbaycanca?", options: ["gül", "ağac", "ot", "yarpaq"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t5", type: "multiple_choice", prompt: "'flower' azərbaycanca?", options: ["gül", "ağac", "meşə", "kök"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l3-t6", type: "multiple_choice", prompt: "'sun' azərbaycanca?", options: ["ay", "günəş", "ulduz", "bulud"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t7", type: "multiple_choice", prompt: "'rain' azərbaycanca?", options: ["qar", "yağış", "külək", "günəş"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t8", type: "multiple_choice", prompt: "'snow' azərbaycanca?", options: ["yağış", "qar", "dolu", "duman"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t9", type: "multiple_choice", prompt: "Fəsil: 'summer' azərbaycanca?", options: ["qış", "yay", "payız", "yaz"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t10", type: "multiple_choice", prompt: "Fəsil: 'winter' azərbaycanca?", options: ["qış", "yay", "payız", "yaz"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l3-t11", type: "multiple_choice", prompt: "Fəsil: 'spring' azərbaycanca?", options: ["qış", "yay", "payız", "yaz"], correctIndex: 3, xp: 10 },
            { id: "en-vo-l3-t12", type: "multiple_choice", prompt: "Fəsil: 'autumn / fall' azərbaycanca?", options: ["qış", "yay", "payız", "yaz"], correctIndex: 2, xp: 10 },
            { id: "en-vo-l3-t13", type: "fill_blank", prompt: "'günəş' ingiliscə?", accepted: ["sun"], xp: 10 },
            { id: "en-vo-l3-t14", type: "multiple_choice", prompt: "'fish' azərbaycanca?", options: ["quş", "balıq", "pişik", "at"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l3-t15", type: "fill_blank", prompt: "'yağış' ingiliscə?", accepted: ["rain"], xp: 10 },
          ],
          bonusTasks: [
            { id: "en-vo-l3-b1", type: "multiple_choice", prompt: "'horse' azərbaycanca?", options: ["at", "eşşək", "inək", "qoyun"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l3-b2", type: "multiple_choice", prompt: "'wind' azərbaycanca?", options: ["külək", "yağış", "qar", "günəş"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l3-b3", type: "multiple_choice", prompt: "'hot' azərbaycanca?", options: ["soyuq", "isti", "sərin", "yağışlı"], correctIndex: 1, xp: 15 },
            { id: "en-vo-l3-b4", type: "fill_blank", prompt: "'ağac' ingiliscə?", accepted: ["tree"], xp: 15 },
            { id: "en-vo-l3-b5", type: "multiple_choice", prompt: "İngilis dilində neçə fəsil sadalanır?", options: ["2", "3", "4", "5"], correctIndex: 2, xp: 15 },
          ],
        },

        // ── PROJECT 4: Food and health ─────────────────────────────
        {
          id: "en-vo-l4",
          title: "Qida və sağlamlıq (Food and health)",
          intro:
            "Yeməklər, meyvə-tərəvəz və sağlam qidalanma ilə bağlı sözlər.",
          visual: "leksika",
          sections: [
            {
              heading: "Yeməklər",
              body: "bread (çörək), meat (ət), egg (yumurta), cheese (pendir), rice (düyü).",
            },
            {
              heading: "İçkilər və meyvə-tərəvəz",
              body: "water (su), milk (süd), fruit (meyvə), vegetable (tərəvəz), apple (alma).",
            },
            {
              heading: "Sağlamlıq",
              body: "healthy (sağlam), hungry (ac), thirsty (susuz), breakfast (səhər yeməyi), lunch (nahar), dinner (şam yeməyi).",
            },
          ],
          tasks: [
            { id: "en-vo-l4-t1", type: "multiple_choice", prompt: "'apple' azərbaycanca?", options: ["armud", "alma", "üzüm", "nar"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t2", type: "multiple_choice", prompt: "'bread' azərbaycanca?", options: ["çörək", "su", "pendir", "yağ"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l4-t3", type: "multiple_choice", prompt: "'water' azərbaycanca?", options: ["süd", "su", "çay", "şirə"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t4", type: "multiple_choice", prompt: "'milk' azərbaycanca?", options: ["süd", "su", "çay", "bal"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l4-t5", type: "multiple_choice", prompt: "'meat' azərbaycanca?", options: ["balıq", "ət", "çörək", "düyü"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t6", type: "multiple_choice", prompt: "'fruit' azərbaycanca?", options: ["tərəvəz", "meyvə", "ət", "süd"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t7", type: "multiple_choice", prompt: "'vegetable' azərbaycanca?", options: ["tərəvəz", "meyvə", "çörək", "şirniyyat"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l4-t8", type: "fill_blank", prompt: "'su' ingiliscə?", accepted: ["water"], xp: 10 },
            { id: "en-vo-l4-t9", type: "fill_blank", prompt: "'alma' ingiliscə?", accepted: ["apple"], xp: 10 },
            { id: "en-vo-l4-t10", type: "multiple_choice", prompt: "'egg' azərbaycanca?", options: ["yumurta", "pendir", "yağ", "süd"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l4-t11", type: "multiple_choice", prompt: "'cheese' azərbaycanca?", options: ["pendir", "yağ", "süd", "yumurta"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l4-t12", type: "multiple_choice", prompt: "'healthy' azərbaycanca?", options: ["xəstə", "sağlam", "yorğun", "ac"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t13", type: "multiple_choice", prompt: "'hungry' azərbaycanca?", options: ["susuz", "ac", "tox", "yorğun"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t14", type: "multiple_choice", prompt: "'thirsty' azərbaycanca?", options: ["ac", "susuz", "xəstə", "sağlam"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l4-t15", type: "fill_blank", prompt: "'süd' ingiliscə?", accepted: ["milk"], xp: 10 },
          ],
          bonusTasks: [
            { id: "en-vo-l4-b1", type: "multiple_choice", prompt: "'breakfast' azərbaycanca?", options: ["səhər yeməyi", "nahar", "şam yeməyi", "qəlyanaltı"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l4-b2", type: "multiple_choice", prompt: "'dinner / supper' azərbaycanca?", options: ["səhər yeməyi", "nahar", "şam yeməyi", "çay"], correctIndex: 2, xp: 15 },
            { id: "en-vo-l4-b3", type: "multiple_choice", prompt: "'lunch' azərbaycanca?", options: ["səhər yeməyi", "nahar", "şam", "qəlyanaltı"], correctIndex: 1, xp: 15 },
            { id: "en-vo-l4-b4", type: "fill_blank", prompt: "'çörək' ingiliscə?", accepted: ["bread"], xp: 15 },
            { id: "en-vo-l4-b5", type: "multiple_choice", prompt: "Sağlam qalmaq üçün düzgün məsləhət hansıdır?", options: ["eat junk food", "eat fruit and vegetables", "sleep all day", "drink no water"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 5: City and places ─────────────────────────────
        {
          id: "en-vo-l5",
          title: "Şəhər, məkanlar və ev (City, places, home)",
          intro:
            "Evin hissələri, mebel, şəhərdəki yerlər və istiqamətlər.",
          visual: "leksika",
          sections: [
            {
              heading: "Ev və mebel",
              body: "house/home (ev), kitchen (mətbəx), bedroom (yataq otağı), bathroom (hamam), table (masa), chair (stul), bed (çarpayı), door (qapı), window (pəncərə).",
            },
            {
              heading: "Şəhərdəki yerlər",
              body: "hospital (xəstəxana), shop/store (mağaza), park (park), street (küçə), bank (bank).",
            },
            {
              heading: "İstiqamətlər",
              body: "left (sol), right (sağ), straight (düz irəli). 'Where is...?' = hara sualıdır.",
            },
          ],
          tasks: [
            { id: "en-vo-l5-t1", type: "multiple_choice", prompt: "'house / home' azərbaycanca?", options: ["ev", "məktəb", "mağaza", "park"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t2", type: "multiple_choice", prompt: "'kitchen' azərbaycanca?", options: ["mətbəx", "yataq otağı", "hamam", "zal"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t3", type: "multiple_choice", prompt: "'bedroom' azərbaycanca?", options: ["mətbəx", "yataq otağı", "hamam", "həyət"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l5-t4", type: "multiple_choice", prompt: "'bathroom' azərbaycanca?", options: ["hamam", "mətbəx", "zal", "otaq"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t5", type: "multiple_choice", prompt: "'table' azərbaycanca?", options: ["stol/masa", "stul", "çarpayı", "şkaf"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t6", type: "multiple_choice", prompt: "'chair' azərbaycanca?", options: ["stol", "stul", "çarpayı", "qapı"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l5-t7", type: "multiple_choice", prompt: "'bed' azərbaycanca?", options: ["stol", "stul", "çarpayı", "şkaf"], correctIndex: 2, xp: 10 },
            { id: "en-vo-l5-t8", type: "multiple_choice", prompt: "'hospital' azərbaycanca?", options: ["xəstəxana", "məktəb", "mağaza", "bank"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t9", type: "multiple_choice", prompt: "'shop / store' azərbaycanca?", options: ["mağaza", "park", "muzey", "körpü"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t10", type: "multiple_choice", prompt: "'park' azərbaycanca?", options: ["park", "mağaza", "xəstəxana", "körpü"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t11", type: "multiple_choice", prompt: "İstiqamət: 'left' azərbaycanca?", options: ["sağ", "sol", "düz", "geri"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l5-t12", type: "multiple_choice", prompt: "İstiqamət: 'right' azərbaycanca?", options: ["sağ", "sol", "yuxarı", "aşağı"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l5-t13", type: "multiple_choice", prompt: "İstiqamət: 'straight' azərbaycanca?", options: ["sola", "sağa", "düz irəli", "geri"], correctIndex: 2, xp: 10 },
            { id: "en-vo-l5-t14", type: "fill_blank", prompt: "'ev' ingiliscə?", accepted: ["house", "home"], xp: 10 },
            { id: "en-vo-l5-t15", type: "fill_blank", prompt: "'mağaza' ingiliscə?", accepted: ["shop", "store"], xp: 10 },
          ],
          bonusTasks: [
            { id: "en-vo-l5-b1", type: "multiple_choice", prompt: "'street' azərbaycanca?", options: ["küçə", "meydan", "körpü", "bina"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l5-b2", type: "multiple_choice", prompt: "'window' azərbaycanca?", options: ["qapı", "pəncərə", "divar", "dam"], correctIndex: 1, xp: 15 },
            { id: "en-vo-l5-b3", type: "multiple_choice", prompt: "'door' azərbaycanca?", options: ["qapı", "pəncərə", "divar", "döşəmə"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l5-b4", type: "fill_blank", prompt: "'sol' ingiliscə?", accepted: ["left"], xp: 15 },
            { id: "en-vo-l5-b5", type: "multiple_choice", prompt: "'Where is the bank?' sualı nə soruşur?", options: ["vaxt", "yer", "səbəb", "say"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 6: Hobbies and daily routines ──────────────────
        {
          id: "en-vo-l6",
          title: "Hobbilər və gündəlik işlər (Hobbies & daily routines)",
          intro:
            "İdman, musiqi, oyunlar və gündəlik fəaliyyətlərlə (daily routines) bağlı sözlər.",
          visual: "leksika",
          sections: [
            {
              heading: "Hobbilər",
              body: "read (oxumaq), swim (üzmək), dance (rəqs etmək), sing (mahnı oxumaq), draw (rəsm çəkmək), play football (futbol oynamaq).",
            },
            {
              heading: "Maraqlar",
              body: "music (musiqi), sport (idman), game (oyun), ride a bike (velosiped sürmək), watch TV (televizora baxmaq).",
            },
            {
              heading: "Gündəlik işlər",
              body: "wake up (oyanmaq), have breakfast (səhər yeməyi yemək), go to school (məktəbə getmək), go to bed (yatmaq).",
            },
          ],
          tasks: [
            { id: "en-vo-l6-t1", type: "multiple_choice", prompt: "'read' azərbaycanca?", options: ["yazmaq", "oxumaq (kitab)", "qaçmaq", "üzmək"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t2", type: "multiple_choice", prompt: "'play football' azərbaycanca?", options: ["futbol oynamaq", "üzmək", "rəqs etmək", "oxumaq"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l6-t3", type: "multiple_choice", prompt: "'swim' azərbaycanca?", options: ["qaçmaq", "üzmək", "tullanmaq", "sürmək"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t4", type: "multiple_choice", prompt: "'dance' azərbaycanca?", options: ["oxumaq", "rəqs etmək", "rəsm çəkmək", "qaçmaq"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t5", type: "multiple_choice", prompt: "'sing' azərbaycanca?", options: ["mahnı oxumaq", "rəqs etmək", "qaçmaq", "yemək"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l6-t6", type: "multiple_choice", prompt: "'draw / paint' azərbaycanca?", options: ["rəsm çəkmək", "oxumaq", "yazmaq", "oynamaq"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l6-t7", type: "multiple_choice", prompt: "'music' azərbaycanca?", options: ["idman", "musiqi", "rəqs", "kitab"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t8", type: "multiple_choice", prompt: "'sport' azərbaycanca?", options: ["idman", "musiqi", "oyun", "film"], correctIndex: 0, xp: 10 },
            { id: "en-vo-l6-t9", type: "multiple_choice", prompt: "Gündəlik: 'wake up' azərbaycanca?", options: ["yatmaq", "oyanmaq", "yemək", "getmək"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t10", type: "multiple_choice", prompt: "'go to school' azərbaycanca?", options: ["evə getmək", "məktəbə getmək", "yatmaq", "oynamaq"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t11", type: "multiple_choice", prompt: "'have breakfast' azərbaycanca?", options: ["nahar etmək", "səhər yeməyi yemək", "şam etmək", "yatmaq"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t12", type: "multiple_choice", prompt: "'go to bed' azərbaycanca?", options: ["oyanmaq", "yatmaq", "qaçmaq", "yemək"], correctIndex: 1, xp: 10 },
            { id: "en-vo-l6-t13", type: "fill_blank", prompt: "'üzmək' ingiliscə?", accepted: ["swim"], xp: 10 },
            { id: "en-vo-l6-t14", type: "fill_blank", prompt: "'oxumaq (kitab)' ingiliscə?", accepted: ["read"], xp: 10 },
            { id: "en-vo-l6-t15", type: "multiple_choice", prompt: "'rəsm çəkmək' ingiliscə (hobbi)?", options: ["reading", "drawing", "singing", "cooking"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-vo-l6-b1", type: "multiple_choice", prompt: "'game' azərbaycanca?", options: ["oyun", "kitab", "film", "mahnı"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l6-b2", type: "multiple_choice", prompt: "'ride a bike' azərbaycanca?", options: ["velosiped sürmək", "üzmək", "qaçmaq", "tullanmaq"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l6-b3", type: "multiple_choice", prompt: "'watch TV' azərbaycanca?", options: ["televizora baxmaq", "radio dinləmək", "kitab oxumaq", "oyun oynamaq"], correctIndex: 0, xp: 15 },
            { id: "en-vo-l6-b4", type: "fill_blank", prompt: "'rəqs etmək' ingiliscə?", accepted: ["dance"], xp: 15 },
            { id: "en-vo-l6-b5", type: "multiple_choice", prompt: "'What is your hobby?' nə soruşur?", options: ["yaşını", "hobbini", "adını", "şəhərini"], correctIndex: 1, xp: 15 },
          ],
        },
      ],
    },

  ],
};
