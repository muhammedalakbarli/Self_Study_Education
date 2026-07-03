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
    // BÖLMƏ 1 — QRAMMATİKA (Grammar)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-grammar",
      title: "Qrammatika — Zamanlar və cümlə",
      description:
        "Present Simple, Present Continuous, Past Simple, sual/inkar cümlələr, əvəzliklər, artikllar, sifət dərəcələri və modal fellər.",
      lessons: [
        // ── PROJECT 1: Present Simple ──────────────────────────────
        {
          id: "en-gr-l1",
          title: "Present Simple (İndiki sadə zaman)",
          intro:
            "Hər gün təkrarlanan işləri və faktları bildirən zaman. Bu layihədə onu öyrənəcəyik.",
          visual: "verb-timeline",
          sections: [
            {
              heading: "Nə vaxt işlədilir?",
              body: "Present Simple hər gün, tez-tez təkrarlanan işlər (I go to school every day) və ümumi faktlar (The sun rises in the east) üçün işlədilir.",
            },
            {
              heading: "he / she / it qaydası",
              body: "I, you, we, they ilə fel dəyişmir: I play, they play. Amma he, she, it ilə felə -s (və ya -es) əlavə olunur: he plays, she watches.",
            },
            {
              heading: "İnkar və sual",
              body: "İnkar: don't / doesn't (I don't like, she doesn't like). Sual: Do / Does (Do you like? Does he play?). Bunlardan sonra fel əsas formada qalır.",
            },
          ],
          tasks: [
            { id: "en-gr-l1-t1", type: "multiple_choice", prompt: "'I ___ to school every day.'", options: ["go", "goes", "going", "went"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l1-t2", type: "multiple_choice", prompt: "'She ___ English.'", options: ["speak", "speaks", "speaking", "spoke"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l1-t3", type: "multiple_choice", prompt: "'He ___ football on Sundays.'", options: ["play", "plays", "playing", "played"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l1-t4", type: "multiple_choice", prompt: "'They ___ in Baku.'", options: ["live", "lives", "living", "lived"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l1-t5", type: "fill_blank", prompt: "'He (read) books.' — boşluğa düzgün formanı yaz.", accepted: ["reads"], xp: 10 },
            { id: "en-gr-l1-t6", type: "multiple_choice", prompt: "Present Simple hansı iş üçün işlədilir?", options: ["indi baş verən iş", "hər gün təkrarlanan iş", "keçmiş iş", "gələcək iş"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l1-t7", type: "multiple_choice", prompt: "he / she / it ilə felə hansı şəkilçi əlavə olunur?", options: ["-s", "-ed", "-ing", "heç nə"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l1-t8", type: "multiple_choice", prompt: "'I don't ___ coffee.'", options: ["like", "likes", "liking", "liked"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l1-t9", type: "multiple_choice", prompt: "İnkar: 'She ___ like tea.'", options: ["don't", "doesn't", "isn't", "not"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l1-t10", type: "multiple_choice", prompt: "Sual: '___ you like music?'", options: ["Do", "Does", "Are", "Is"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l1-t11", type: "multiple_choice", prompt: "Sual: '___ he play tennis?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l1-t12", type: "fill_blank", prompt: "'They (go) to school.' — düzgün formanı yaz.", accepted: ["go"], xp: 10 },
            { id: "en-gr-l1-t13", type: "multiple_choice", prompt: "'The sun ___ in the east.' (fakt)", options: ["rise", "rises", "rising", "rose"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l1-t14", type: "multiple_choice", prompt: "'We ___ TV in the evening.'", options: ["watch", "watches", "watching", "watched"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l1-t15", type: "multiple_choice", prompt: "'My mother ___ dinner every day.'", options: ["cook", "cooks", "cooking", "cooked"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l1-b1", type: "multiple_choice", prompt: "'Cats ___ milk.'", options: ["drink", "drinks", "drinking", "drank"], correctIndex: 0, xp: 15 },
            { id: "en-gr-l1-b2", type: "fill_blank", prompt: "'She (watch) TV.' — düzgün formanı yaz.", accepted: ["watches"], xp: 15 },
            { id: "en-gr-l1-b3", type: "multiple_choice", prompt: "Hansı cümlə düzgündür?", options: ["He go home.", "He goes home.", "He going home.", "He gone home."], correctIndex: 1, xp: 15 },
            { id: "en-gr-l1-b4", type: "multiple_choice", prompt: "'___ your sister speak French?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l1-b5", type: "multiple_choice", prompt: "'I ___ not eat meat.'", options: ["do", "does", "am", "is"], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 2: Present Continuous ──────────────────────────
        {
          id: "en-gr-l2",
          title: "Present Continuous (İndiki davamedici zaman)",
          intro:
            "Danışıq anında — indi, elə bu dəqiqə — baş verən işləri bildirir. am/is/are + fel-ing.",
          visual: "verb-timeline",
          sections: [
            {
              heading: "Quruluş: am / is / are + fel-ing",
              body: "I am reading. She is playing. They are running. 'be' feli (am/is/are) + əsas felə -ing əlavə olunur.",
            },
            {
              heading: "am / is / are seçimi",
              body: "I → am; he, she, it → is; you, we, they → are. Məsələn: I am, he is, we are.",
            },
            {
              heading: "-ing qaydaları",
              body: "Adətən sadəcə -ing əlavə olunur: play → playing. 'e' ilə bitirsə düşür: make → making. Qısa sözlərdə son samit qoşalaşır: run → running, sit → sitting.",
            },
          ],
          tasks: [
            { id: "en-gr-l2-t1", type: "multiple_choice", prompt: "'I ___ reading a book.'", options: ["am", "is", "are", "be"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l2-t2", type: "multiple_choice", prompt: "'She ___ playing.'", options: ["am", "is", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l2-t3", type: "multiple_choice", prompt: "'They ___ running.'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l2-t4", type: "multiple_choice", prompt: "'We ___ watching TV.'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l2-t5", type: "fill_blank", prompt: "'play' sözünə -ing əlavə et.", accepted: ["playing"], xp: 10 },
            { id: "en-gr-l2-t6", type: "multiple_choice", prompt: "Present Continuous nə vaxt işlədilir?", options: ["hər gün olan iş", "indi, danışıq anında baş verən iş", "keçmiş iş", "ümumi fakt"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l2-t7", type: "multiple_choice", prompt: "'He is ___ now.' (write)", options: ["write", "writes", "writing", "wrote"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l2-t8", type: "fill_blank", prompt: "'run' sözünə -ing əlavə et (son samit qoşalaşır).", accepted: ["running"], xp: 10 },
            { id: "en-gr-l2-t9", type: "multiple_choice", prompt: "'The baby ___ sleeping.'", options: ["am", "is", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l2-t10", type: "multiple_choice", prompt: "'Look! It ___ raining.'", options: ["am", "is", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l2-t11", type: "fill_blank", prompt: "'make' sözünə -ing əlavə et ('e' düşür).", accepted: ["making"], xp: 10 },
            { id: "en-gr-l2-t12", type: "multiple_choice", prompt: "'You ___ studying English.'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l2-t13", type: "multiple_choice", prompt: "Hansı cümlə Present Continuous-dur?", options: ["I eat lunch.", "I am eating lunch.", "I ate lunch.", "I will eat lunch."], correctIndex: 1, xp: 10 },
            { id: "en-gr-l2-t14", type: "multiple_choice", prompt: "'-ing' hansı zamanın əlamətidir (bu mövzuda)?", options: ["Present Simple", "Present Continuous", "Past Simple", "hamısı"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l2-t15", type: "multiple_choice", prompt: "'My friends ___ dancing.'", options: ["is", "are", "am", "be"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l2-b1", type: "fill_blank", prompt: "'sit' sözünə -ing əlavə et (son samit qoşalaşır).", accepted: ["sitting"], xp: 15 },
            { id: "en-gr-l2-b2", type: "multiple_choice", prompt: "Hansı cümlə SƏHVDİR?", options: ["She is cooking.", "They are playing.", "I am go.", "He is running."], correctIndex: 2, xp: 15 },
            { id: "en-gr-l2-b3", type: "fill_blank", prompt: "'swim' sözünə -ing əlavə et.", accepted: ["swimming"], xp: 15 },
            { id: "en-gr-l2-b4", type: "multiple_choice", prompt: "'What ___ you doing?'", options: ["am", "is", "are", "be"], correctIndex: 2, xp: 15 },
            { id: "en-gr-l2-b5", type: "multiple_choice", prompt: "'The dogs ___ barking.'", options: ["is", "are", "am", "was"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 3: Past Simple ─────────────────────────────────
        {
          id: "en-gr-l3",
          title: "Past Simple (Keçmiş sadə zaman)",
          intro:
            "Keçmişdə baş verib bitmiş işlər. 'to be' (was/were), qaydalı fellər (+ed) və qaydasız fellər.",
          visual: "tobe-table",
          sections: [
            {
              heading: "to be — was / were",
              body: "I, he, she, it → was (I was at home). You, we, they → were (They were happy).",
            },
            {
              heading: "Qaydalı fellər: +ed",
              body: "Adi fellərə keçmişdə -ed əlavə olunur: play → played, watch → watched, visit → visited.",
            },
            {
              heading: "Qaydasız (irregular) fellər",
              body: "Bəzi fellər tamamilə dəyişir və əzbərlənməlidir: go → went, eat → ate, see → saw, have → had, make → made, come → came, take → took.",
            },
          ],
          tasks: [
            { id: "en-gr-l3-t1", type: "multiple_choice", prompt: "'I ___ at home yesterday.' (to be)", options: ["was", "were", "am", "is"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l3-t2", type: "multiple_choice", prompt: "'They ___ happy.' (past)", options: ["was", "were", "are", "is"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t3", type: "multiple_choice", prompt: "'She ___ a teacher.' (past)", options: ["was", "were", "are", "am"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l3-t4", type: "multiple_choice", prompt: "'We ___ at school.' (past)", options: ["was", "were", "am", "is"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t5", type: "fill_blank", prompt: "'play' felinin keçmiş forması?", accepted: ["played"], xp: 10 },
            { id: "en-gr-l3-t6", type: "fill_blank", prompt: "'watch' felinin keçmiş forması?", accepted: ["watched"], xp: 10 },
            { id: "en-gr-l3-t7", type: "multiple_choice", prompt: "'go' felinin keçmiş forması (qaydasız)?", options: ["goed", "went", "gone", "going"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t8", type: "multiple_choice", prompt: "'eat' felinin keçmiş forması?", options: ["eated", "ate", "eaten", "eating"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t9", type: "multiple_choice", prompt: "Qaydalı fellərə keçmişdə hansı şəkilçi əlavə olunur?", options: ["-s", "-ing", "-ed", "-es"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l3-t10", type: "fill_blank", prompt: "'visit' felinin keçmiş forması?", accepted: ["visited"], xp: 10 },
            { id: "en-gr-l3-t11", type: "multiple_choice", prompt: "'see' felinin keçmiş forması?", options: ["seed", "saw", "seen", "sawed"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t12", type: "multiple_choice", prompt: "'have' felinin keçmiş forması?", options: ["haved", "had", "has", "having"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t13", type: "multiple_choice", prompt: "'You ___ my friend.' (past)", options: ["was", "were", "are", "am"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l3-t14", type: "multiple_choice", prompt: "'He ___ not at home.' (past)", options: ["was", "were", "is", "are"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l3-t15", type: "multiple_choice", prompt: "'make' felinin keçmiş forması?", options: ["maked", "made", "making", "makes"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l3-b1", type: "multiple_choice", prompt: "'come' felinin keçmiş forması?", options: ["comed", "came", "come", "coming"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l3-b2", type: "fill_blank", prompt: "'study' felinin keçmiş forması?", accepted: ["studied"], xp: 15 },
            { id: "en-gr-l3-b3", type: "multiple_choice", prompt: "'They ___ football yesterday.' (play)", options: ["play", "plays", "played", "playing"], correctIndex: 2, xp: 15 },
            { id: "en-gr-l3-b4", type: "multiple_choice", prompt: "'was' hansı əvəzliklərlə işlədilir?", options: ["I, he, she, it", "you, we, they", "hamısı", "heç biri"], correctIndex: 0, xp: 15 },
            { id: "en-gr-l3-b5", type: "multiple_choice", prompt: "'take' felinin keçmiş forması?", options: ["taked", "took", "taken", "takes"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 4: Sual və inkar cümlələr ──────────────────────
        {
          id: "en-gr-l4",
          title: "Sual və inkar cümlələr (Questions & negatives)",
          intro:
            "Wh- sual sözləri (Who, What, Where, When, Why, How) və inkar cümlələr qurmağı öyrənirik.",
          sections: [
            {
              heading: "Wh- sual sözləri",
              body: "Who = kim, What = nə, Where = harada, When = nə vaxt, Why = niyə, How = necə. Bu sözlər sualın əvvəlində gəlir.",
            },
            {
              heading: "İnkar cümlələr",
              body: "Present Simple: don't / doesn't (I don't like, She doesn't play). 'to be': isn't/aren't (past: wasn't/weren't).",
            },
            {
              heading: "Durğu işarəsi",
              body: "Sual cümləsi həmişə sual işarəsi (?) ilə bitir. Nəqli cümlə nöqtə (.) ilə bitir.",
            },
          ],
          tasks: [
            { id: "en-gr-l4-t1", type: "multiple_choice", prompt: "'___ is your name?' (adını soruşur)", options: ["Who", "What", "Where", "When"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t2", type: "multiple_choice", prompt: "'___ do you live?' (yer soruşur)", options: ["Who", "What", "Where", "When"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l4-t3", type: "multiple_choice", prompt: "'___ is that boy?' (kim)", options: ["Who", "What", "Where", "Why"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l4-t4", type: "multiple_choice", prompt: "'___ is your birthday?' (vaxt)", options: ["Where", "When", "Why", "How"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t5", type: "multiple_choice", prompt: "'___ are you sad?' (səbəb)", options: ["Who", "Why", "Where", "When"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t6", type: "multiple_choice", prompt: "'___ are you?' (necəsən)", options: ["What", "Who", "How", "Where"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l4-t7", type: "multiple_choice", prompt: "Wh- sualları əsasən hansı hərflərlə başlayır?", options: ["a, b", "wh, h", "s, es", "ed"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t8", type: "multiple_choice", prompt: "İnkar: 'I ___ like fish.' (Present Simple)", options: ["don't", "doesn't", "isn't", "not"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l4-t9", type: "multiple_choice", prompt: "İnkar: 'She ___ play tennis.'", options: ["don't", "doesn't", "isn't", "aren't"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t10", type: "multiple_choice", prompt: "'___ many books do you have?' (say soruşur)", options: ["How", "What", "Who", "Why"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l4-t11", type: "multiple_choice", prompt: "'___ colour is it?' (rəng soruşur)", options: ["What", "Who", "When", "Why"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l4-t12", type: "multiple_choice", prompt: "İnkar: 'They ___ at home.' (past: to be)", options: ["wasn't", "weren't", "isn't", "don't"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t13", type: "multiple_choice", prompt: "Sual cümləsi hansı işarə ilə bitir?", options: [".", "?", "!", ","], correctIndex: 1, xp: 10 },
            { id: "en-gr-l4-t14", type: "multiple_choice", prompt: "'Do you like ice cream?' — müsbət cavab?", options: ["Yes, I do.", "Yes, I am.", "No, I don't like", "I do not"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l4-t15", type: "multiple_choice", prompt: "'___ is your teacher?' (kim)", options: ["What", "Who", "Where", "When"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l4-b1", type: "multiple_choice", prompt: "'___ do you go to school?' (nə vaxt)", options: ["Where", "When", "Why", "Who"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l4-b2", type: "multiple_choice", prompt: "İnkar: 'He ___ not my brother.' (to be)", options: ["is", "does", "do", "are"], correctIndex: 0, xp: 15 },
            { id: "en-gr-l4-b3", type: "multiple_choice", prompt: "'How old ___ you?'", options: ["is", "are", "am", "do"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l4-b4", type: "multiple_choice", prompt: "'___ is the weather today?' (necə)", options: ["What", "How", "Who", "When"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l4-b5", type: "multiple_choice", prompt: "Hansı sual sözü 'səbəb' soruşur?", options: ["Where", "Why", "When", "Who"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 5: Pronouns ────────────────────────────────────
        {
          id: "en-gr-l5",
          title: "Əvəzliklər (Pronouns)",
          intro:
            "Şəxs (I, you, he...), yiyəlik (my, your, his...) və işarə (this, that, these, those) əvəzlikləri.",
          visual: "noun-cards",
          sections: [
            {
              heading: "Şəxs əvəzlikləri",
              body: "I (mən), you (sən/siz), he (o — kişi), she (o — qadın), it (o — əşya/heyvan), we (biz), they (onlar).",
            },
            {
              heading: "Yiyəlik əvəzlikləri",
              body: "my (mənim), your (sənin), his (onun — kişi), her (onun — qadın), its (onun — əşya), our (bizim), their (onların).",
            },
            {
              heading: "İşarə əvəzlikləri",
              body: "this (bu — yaxın, tək), these (bunlar — yaxın, cəm), that (o — uzaq, tək), those (onlar — uzaq, cəm).",
            },
          ],
          tasks: [
            { id: "en-gr-l5-t1", type: "multiple_choice", prompt: "'___ am a student.'", options: ["I", "You", "He", "She"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l5-t2", type: "multiple_choice", prompt: "Qız (a girl) üçün hansı əvəzlik?", options: ["he", "she", "it", "they"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t3", type: "multiple_choice", prompt: "Oğlan (a boy) üçün hansı əvəzlik?", options: ["he", "she", "it", "we"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l5-t4", type: "multiple_choice", prompt: "Əşya və ya heyvan üçün hansı əvəzlik?", options: ["he", "she", "it", "they"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l5-t5", type: "multiple_choice", prompt: "'This is ___ book.' (mənim)", options: ["my", "your", "his", "her"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l5-t6", type: "multiple_choice", prompt: "'That is ___ car.' (onun — qadın)", options: ["his", "her", "its", "their"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t7", type: "multiple_choice", prompt: "'___ is my friend.' (yaxında bir nəfər)", options: ["This", "These", "Those", "Them"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l5-t8", type: "multiple_choice", prompt: "'___ are my friends.' (yaxında çox)", options: ["This", "These", "That", "Those"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t9", type: "multiple_choice", prompt: "'___ is a dog over there.' (uzaqda tək)", options: ["This", "That", "These", "Those"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t10", type: "multiple_choice", prompt: "'___ are cars over there.' (uzaqda çox)", options: ["These", "Those", "This", "That"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t11", type: "multiple_choice", prompt: "Biz (we) — hansı əvəzlik doğrudur?", options: ["we", "they", "you", "it"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l5-t12", type: "multiple_choice", prompt: "'It is ___ house.' (bizim)", options: ["our", "their", "your", "my"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l5-t13", type: "multiple_choice", prompt: "'They are ___ toys.' (onların)", options: ["our", "their", "his", "her"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t14", type: "multiple_choice", prompt: "Hansı yiyəlik əvəzliyidir?", options: ["I", "my", "this", "she"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l5-t15", type: "multiple_choice", prompt: "'___ and my brother play together.' (Mən)", options: ["I", "Me", "My", "Mine"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l5-b1", type: "multiple_choice", prompt: "'his' hansı növ əvəzlikdir?", options: ["şəxs", "yiyəlik", "işarə", "sual"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l5-b2", type: "multiple_choice", prompt: "'these' nə bildirir?", options: ["yaxında bir", "yaxında çox", "uzaqda bir", "uzaqda çox"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l5-b3", type: "multiple_choice", prompt: "'The book is ___.' (mənimdir)", options: ["my", "mine", "me", "I"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l5-b4", type: "multiple_choice", prompt: "'The dog wags ___ tail.' (heyvan — onun)", options: ["his", "her", "its", "their"], correctIndex: 2, xp: 15 },
            { id: "en-gr-l5-b5", type: "multiple_choice", prompt: "'You and I' = hansı əvəzlik?", options: ["we", "they", "you", "he"], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 6: Articles ────────────────────────────────────
        {
          id: "en-gr-l6",
          title: "Artikllar (a / an / the)",
          intro:
            "a, an və the artikllarını nə vaxt işlətmək lazım olduğunu öyrənirik.",
          sections: [
            {
              heading: "a / an — qeyri-müəyyən",
              body: "Samit səsi ilə başlayan sözdən əvvəl 'a' (a book, a dog). Sait səsi (a, e, i, o, u) ilə başlayan sözdən əvvəl 'an' (an apple, an orange).",
            },
            {
              heading: "the — müəyyən artikl",
              body: "Konkret, hər iki tərəfə məlum olan əşya üçün 'the' işlədilir: The sun is bright. I saw a cat. The cat was black.",
            },
            {
              heading: "Diqqət — səsə görə",
              body: "Qayda hərfə yox, SƏSƏ görədir: an hour ('h' oxunmur), a university ('yu' — samit səsi).",
            },
          ],
          tasks: [
            { id: "en-gr-l6-t1", type: "multiple_choice", prompt: "'___ apple'", options: ["a", "an", "the", "-"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t2", type: "multiple_choice", prompt: "'___ book'", options: ["a", "an", "the", "-"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l6-t3", type: "multiple_choice", prompt: "'___ orange'", options: ["a", "an", "the", "-"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t4", type: "multiple_choice", prompt: "'___ dog'", options: ["a", "an", "the", "-"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l6-t5", type: "multiple_choice", prompt: "'___ umbrella'", options: ["a", "an", "the", "-"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t6", type: "multiple_choice", prompt: "'___ car'", options: ["a", "an", "the", "-"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l6-t7", type: "multiple_choice", prompt: "Sait səsi ilə başlayan sözdən əvvəl hansı artikl?", options: ["a", "an", "the", "heç nə"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t8", type: "multiple_choice", prompt: "'___ egg'", options: ["a", "an", "the", "-"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t9", type: "multiple_choice", prompt: "'___ house'", options: ["a", "an", "the", "-"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l6-t10", type: "multiple_choice", prompt: "Konkret, məlum əşya üçün hansı artikl?", options: ["a", "an", "the", "heç nə"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l6-t11", type: "multiple_choice", prompt: "'I saw a cat. ___ cat was black.'", options: ["A", "An", "The", "-"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l6-t12", type: "multiple_choice", prompt: "'___ elephant is big.'", options: ["A", "An", "The", "-"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t13", type: "multiple_choice", prompt: "'___ sun is bright.' (tək və məlumdur)", options: ["A", "An", "The", "-"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l6-t14", type: "multiple_choice", prompt: "'___ apple a day.'", options: ["A", "An", "The", "-"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l6-t15", type: "multiple_choice", prompt: "Hansı ifadə düzgündür?", options: ["a apple", "an apple", "the a apple", "an book"], correctIndex: 1, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l6-b1", type: "multiple_choice", prompt: "'___ hour' ('h' oxunmur — sait səsi)", options: ["a", "an", "the", "-"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l6-b2", type: "multiple_choice", prompt: "'___ university' ('yu' — samit səsi)", options: ["a", "an", "the", "-"], correctIndex: 0, xp: 15 },
            { id: "en-gr-l6-b3", type: "multiple_choice", prompt: "Hansı cümlə düzgündür?", options: ["I have an dog.", "She is a teacher.", "He is an student.", "It is a apple."], correctIndex: 1, xp: 15 },
            { id: "en-gr-l6-b4", type: "multiple_choice", prompt: "'the' nə vaxt işlədilir?", options: ["hər hansı bir əşya", "konkret, məlum əşya", "yalnız cəmdə", "heç vaxt"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l6-b5", type: "multiple_choice", prompt: "'___ ice cream, please.'", options: ["a", "an", "the", "-"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 7: Adjectives — degrees ────────────────────────
        {
          id: "en-gr-l7",
          title: "Sifətin dərəcələri (Comparative & superlative)",
          intro:
            "Sifətləri müqayisə etmək (comparative) və üstünlük dərəcəsi (superlative) qurmaq.",
          visual: "adjective-apple",
          sections: [
            {
              heading: "Qısa sifətlər: -er / -est",
              body: "Qısa sifətə müqayisədə -er, üstünlük dərəcəsində -est əlavə olunur: tall → taller → tallest; big → bigger → biggest (son samit qoşalaşa bilər).",
            },
            {
              heading: "Uzun sifətlər: more / most",
              body: "Uzun sifətlərdə more (müqayisə) və most (üstünlük) işlədilir: beautiful → more beautiful → most beautiful.",
            },
            {
              heading: "Qaydasız sifətlər və 'than'",
              body: "good → better → best; bad → worse → worst; far → farther → farthest. Müqayisədə 'than' işlədilir: A is taller than B.",
            },
          ],
          tasks: [
            { id: "en-gr-l7-t1", type: "multiple_choice", prompt: "'big' sifətinin müqayisə dərəcəsi?", options: ["biger", "bigger", "more big", "biggest"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t2", type: "multiple_choice", prompt: "'tall' müqayisə dərəcəsi (comparative)?", options: ["taller", "tallest", "more tall", "talls"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l7-t3", type: "multiple_choice", prompt: "'small' üstünlük dərəcəsi (superlative)?", options: ["smaller", "smallest", "most small", "smalls"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t4", type: "fill_blank", prompt: "'fast' sözünün comparative forması?", accepted: ["faster"], xp: 10 },
            { id: "en-gr-l7-t5", type: "multiple_choice", prompt: "'good' müqayisə dərəcəsi (qaydasız)?", options: ["gooder", "better", "best", "more good"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t6", type: "multiple_choice", prompt: "'good' üstünlük dərəcəsi?", options: ["better", "best", "goodest", "most good"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t7", type: "multiple_choice", prompt: "'beautiful' müqayisə dərəcəsi?", options: ["beautifuller", "more beautiful", "beautifulest", "most beautiful"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t8", type: "multiple_choice", prompt: "Uzun sifətlərə müqayisədə hansı söz əlavə olunur?", options: ["-er", "more", "-est", "most"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t9", type: "multiple_choice", prompt: "Qısa sifətlərə üstünlük dərəcəsində hansı şəkilçi?", options: ["-er", "-est", "more", "most"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t10", type: "multiple_choice", prompt: "'A is taller ___ B.'", options: ["then", "than", "that", "to"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t11", type: "fill_blank", prompt: "'high' sözünün superlative forması (the ___)?", accepted: ["highest"], xp: 10 },
            { id: "en-gr-l7-t12", type: "multiple_choice", prompt: "'happy' comparative ('y' → 'i')?", options: ["happier", "happyer", "more happy", "happiest"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l7-t13", type: "multiple_choice", prompt: "'bad' müqayisə dərəcəsi (qaydasız)?", options: ["badder", "worse", "worst", "more bad"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t14", type: "multiple_choice", prompt: "'The elephant is the ___ animal here.' (big)", options: ["bigger", "biggest", "more big", "big"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l7-t15", type: "multiple_choice", prompt: "'This car is ___ than that one.' (fast)", options: ["faster", "fastest", "more fast", "fast"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l7-b1", type: "multiple_choice", prompt: "'long' superlative?", options: ["longer", "longest", "most long", "longs"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l7-b2", type: "multiple_choice", prompt: "'expensive' comparative?", options: ["expensiver", "more expensive", "expensivest", "most expensive"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l7-b3", type: "multiple_choice", prompt: "'bad' superlative?", options: ["baddest", "worst", "worse", "most bad"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l7-b4", type: "fill_blank", prompt: "'nice' comparative forması?", accepted: ["nicer"], xp: 15 },
            { id: "en-gr-l7-b5", type: "multiple_choice", prompt: "'far' comparative (qaydasız)?", options: ["farer", "farther", "farthest", "more far"], correctIndex: 1, xp: 15 },
          ],
        },

        // ── PROJECT 8: Modal verbs ─────────────────────────────────
        {
          id: "en-gr-l8",
          title: "Modal fellər (can / must / should)",
          intro:
            "can (bacarıq/icazə), must (məcburiyyət) və should (məsləhət) fellərini öyrənirik.",
          sections: [
            {
              heading: "Mənaları",
              body: "can = bacarıq və ya icazə (I can swim). must = məcburiyyət (You must stop). should = məsləhət/tövsiyə (You should rest).",
            },
            {
              heading: "Quruluş",
              body: "Modal feldən sonra fel HƏMİŞƏ əsas formada (base) qalır: 'She can speak' (can speaks YOX), 'He should go'.",
            },
            {
              heading: "Sual və inkar",
              body: "Sual: Can I open the window? İnkar: can't (bacarmıram), mustn't (olmaz), shouldn't (yaxşı deyil).",
            },
          ],
          tasks: [
            { id: "en-gr-l8-t1", type: "multiple_choice", prompt: "'I ___ swim.' (bacarıq)", options: ["can", "must", "should", "am"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t2", type: "multiple_choice", prompt: "Modaldan sonra fel hansı formada olur?", options: ["+s", "+ing", "+ed", "əsas forma (base)"], correctIndex: 3, xp: 10 },
            { id: "en-gr-l8-t3", type: "multiple_choice", prompt: "'You ___ do your homework.' (məcburiyyət)", options: ["can", "must", "should", "are"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l8-t4", type: "multiple_choice", prompt: "'You ___ eat vegetables.' (məsləhət)", options: ["can", "must", "should", "do"], correctIndex: 2, xp: 10 },
            { id: "en-gr-l8-t5", type: "multiple_choice", prompt: "'She can ___ English.'", options: ["speak", "speaks", "speaking", "spoke"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t6", type: "multiple_choice", prompt: "'can' nə bildirir?", options: ["bacarıq/icazə", "keçmiş", "cəm", "sual"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t7", type: "multiple_choice", prompt: "'must' nə bildirir?", options: ["məsləhət", "məcburiyyət", "bacarıq", "arzu"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l8-t8", type: "multiple_choice", prompt: "'should' nə bildirir?", options: ["məcburiyyət", "məsləhət/tövsiyə", "bacarıq", "icazə"], correctIndex: 1, xp: 10 },
            { id: "en-gr-l8-t9", type: "multiple_choice", prompt: "İnkar: 'I ___ swim.' (bacarmıram)", options: ["can't", "mustn't", "shouldn't", "don't"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t10", type: "multiple_choice", prompt: "'___ I open the window?' (icazə soruşur)", options: ["Can", "Must", "Should", "Do"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t11", type: "multiple_choice", prompt: "'Birds ___ fly.'", options: ["can", "must", "should", "are"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t12", type: "multiple_choice", prompt: "'You ___ tell lies.' (yaxşı deyil)", options: ["shouldn't", "can", "should", "do"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t13", type: "multiple_choice", prompt: "'We ___ wear a seatbelt.' (məcburiyyət)", options: ["must", "can", "should", "are"], correctIndex: 0, xp: 10 },
            { id: "en-gr-l8-t14", type: "multiple_choice", prompt: "Hansı cümlə düzgündür?", options: ["I can to swim.", "I can swim.", "I can swims.", "I can swimming."], correctIndex: 1, xp: 10 },
            { id: "en-gr-l8-t15", type: "multiple_choice", prompt: "'He ___ play the piano.' (bacarır)", options: ["can", "must", "should", "is"], correctIndex: 0, xp: 15 },
          ],
          bonusTasks: [
            { id: "en-gr-l8-b1", type: "multiple_choice", prompt: "'You should ___ more water.' (drink)", options: ["drink", "drinks", "drinking", "drank"], correctIndex: 0, xp: 15 },
            { id: "en-gr-l8-b2", type: "multiple_choice", prompt: "İcazə istəmək üçün hansı söz?", options: ["must", "can", "should", "do"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l8-b3", type: "multiple_choice", prompt: "'Students ___ respect teachers.' (məcburiyyət)", options: ["must", "can", "might", "could"], correctIndex: 0, xp: 15 },
            { id: "en-gr-l8-b4", type: "multiple_choice", prompt: "'can' felinin keçmiş forması?", options: ["canned", "could", "caned", "cans"], correctIndex: 1, xp: 15 },
            { id: "en-gr-l8-b5", type: "multiple_choice", prompt: "Hansı cümlə SƏHVDİR?", options: ["I can run.", "She must go.", "You should rest.", "He can runs."], correctIndex: 3, xp: 15 },
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

    // ═══════════════════════════════════════════════════════════════
    // BÖLMƏ 4 — BACARIQLAR (Skills)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "en-skills",
      title: "Bacarıqlar (Skills)",
      description:
        "Oxu, dinləmə, danışma və yazı bacarıqlarını inkişaf etdirmək.",
      lessons: [
        // ── PROJECT 1: Reading ─────────────────────────────────────
        {
          id: "en-sk-l1",
          title: "Oxu (Reading)",
          intro:
            "Kiçik mətnləri oxuyub başa düşmək və mətn əsasında suallara cavab vermək.",
          sections: [
            {
              heading: "Mətn 1",
              body: "Tom is a boy. He is ten years old. He lives in Baku with his family. He has a dog. The dog's name is Rex. Tom likes football.",
            },
            {
              heading: "Mətn 2",
              body: "Anna gets up at seven o'clock. She has breakfast. Then she goes to school. After school she reads books.",
            },
            {
              heading: "Məsləhət",
              body: "Cavabı tapmaq üçün mətni diqqətlə oxu. Yeni sözü cümlə içində (kontekstlə) öyrənmək daha yaxşıdır.",
            },
          ],
          tasks: [
            { id: "en-sk-l1-t1", type: "multiple_choice", prompt: "Mətn 1: How old is Tom?", options: ["nine", "ten", "eleven", "twelve"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t2", type: "multiple_choice", prompt: "Mətn 1: Where does Tom live?", options: ["Ganja", "Baku", "London", "Sheki"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t3", type: "multiple_choice", prompt: "Mətn 1: What pet does Tom have?", options: ["a cat", "a dog", "a bird", "a fish"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t4", type: "multiple_choice", prompt: "Mətn 1: What is the dog's name?", options: ["Rex", "Tom", "Max", "Bob"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l1-t5", type: "multiple_choice", prompt: "Mətn 1: What does Tom like?", options: ["basketball", "football", "tennis", "swimming"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t6", type: "multiple_choice", prompt: "Mətn 1: Is Tom a girl or a boy?", options: ["a girl", "a boy"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t7", type: "multiple_choice", prompt: "Mətn 1: Who does Tom live with?", options: ["alone", "his family", "his friend", "his teacher"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t8", type: "multiple_choice", prompt: "Mətn 2: What time does Anna get up?", options: ["six o'clock", "seven o'clock", "eight o'clock", "nine o'clock"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t9", type: "multiple_choice", prompt: "Mətn 2: What does Anna do after breakfast?", options: ["sleeps", "goes to school", "plays", "cooks"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t10", type: "multiple_choice", prompt: "Mətn 2: What does Anna do after school?", options: ["reads books", "plays football", "sleeps", "cooks"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l1-t11", type: "multiple_choice", prompt: "Oxu (reading) bacarığı nədir?", options: ["dinləmək", "mətni oxuyub başa düşmək", "danışmaq", "yazmaq"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t12", type: "multiple_choice", prompt: "Mətndə cavabı tapmaq üçün nə etməli?", options: ["mətni diqqətlə oxumaq", "yalnız şəkilə baxmaq", "təxmin etmək", "başqasından soruşmaq"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l1-t13", type: "fill_blank", prompt: "Mətn 2: Anna gets up at seven o'___. (boşluğu tamamla)", accepted: ["clock"], xp: 10 },
            { id: "en-sk-l1-t14", type: "multiple_choice", prompt: "Mətn 1: 'Tom likes football.' — Tom neyi sevir?", options: ["kitab", "futbol", "musiqi", "üzgüçülük"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l1-t15", type: "multiple_choice", prompt: "Başlıq (title) mətnin nəyidir?", options: ["sonu", "adı / mövzusu", "şəkli", "sualı"], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-sk-l1-b1", type: "multiple_choice", prompt: "'Ali has a red bike. He rides it every day in the park.' — What colour is the bike?", options: ["blue", "red", "green", "black"], correctIndex: 1, xp: 15 },
            { id: "en-sk-l1-b2", type: "multiple_choice", prompt: "Yuxarıdakı mətn: Where does Ali ride his bike?", options: ["in the park", "at school", "at home", "in the shop"], correctIndex: 0, xp: 15 },
            { id: "en-sk-l1-b3", type: "multiple_choice", prompt: "Yuxarıdakı mətn: How often does Ali ride?", options: ["never", "every day", "once a week", "yesterday"], correctIndex: 1, xp: 15 },
            { id: "en-sk-l1-b4", type: "multiple_choice", prompt: "'He rides it every day.' — 'it' nəyi bildirir?", options: ["the park", "the bike", "Ali", "the day"], correctIndex: 1, xp: 15 },
            { id: "en-sk-l1-b5", type: "multiple_choice", prompt: "Oxuyarkən yeni sözü öyrənməyin ən yaxşı yolu?", options: ["cümlə içində, kontekstlə", "tək-tək əzbərləməklə", "heç öyrənməmək", "yalnız şəklə baxmaq"], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 2: Listening ───────────────────────────────────
        {
          id: "en-sk-l2",
          title: "Dinləmə (Listening)",
          intro:
            "Eşitdiyini başa düşmək və gündəlik salamlaşma, sual-cavab ifadələrini tanımaq.",
          visual: "fonetika",
          sections: [
            {
              heading: "Dinləmə nədir?",
              body: "Dinləmə — kiminsə dediyini eşidib başa düşmək bacarığıdır. Yaxşı dinləmək üçün diqqətlə qulaq asmaq lazımdır.",
            },
            {
              heading: "Salamlaşma ifadələri",
              body: "Good morning! (sabahınız xeyir), Hello! (salam), How are you? (necəsən?), Goodbye! (əlvida), Good night! (gecəniz xeyrə).",
            },
            {
              heading: "Faydalı ifadələr",
              body: "Thank you (təşəkkür), You're welcome (dəyməz), Can you repeat, please? (təkrar edin), Excuse me (bağışlayın).",
            },
          ],
          tasks: [
            { id: "en-sk-l2-t1", type: "multiple_choice", prompt: "Dinləmə (listening) bacarığı nədir?", options: ["oxumaq", "eşidib başa düşmək", "yazmaq", "rəsm çəkmək"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l2-t2", type: "multiple_choice", prompt: "'Hello! How are you?' — uyğun cavab?", options: ["I am fine, thank you.", "Yes, I do.", "It is red.", "Good night."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t3", type: "multiple_choice", prompt: "'What is your name?' — düzgün cavab?", options: ["I am ten.", "My name is Ali.", "I like tea.", "It is Monday."], correctIndex: 1, xp: 10 },
            { id: "en-sk-l2-t4", type: "multiple_choice", prompt: "'How old are you?' — düzgün cavab?", options: ["I am eleven.", "My name is Sam.", "I live in Baku.", "It is blue."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t5", type: "multiple_choice", prompt: "'Where are you from?' — düzgün cavab?", options: ["I am from Azerbaijan.", "I am fine.", "It is a cat.", "Yes, please."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t6", type: "multiple_choice", prompt: "'Goodbye!' nə deməkdir?", options: ["salam", "sağ ol", "əlvida", "xoş gəldin"], correctIndex: 2, xp: 10 },
            { id: "en-sk-l2-t7", type: "multiple_choice", prompt: "'Thank you!' — uyğun cavab?", options: ["You're welcome.", "Goodbye.", "I am ten.", "No."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t8", type: "multiple_choice", prompt: "'Nice to meet you.' nə vaxt deyilir?", options: ["yeni tanış olanda", "yatanda", "yeyəndə", "gedəndə"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t9", type: "multiple_choice", prompt: "'Can you repeat, please?' nə vaxt deyilir?", options: ["başa düşmədikdə", "yatanda", "yeyəndə", "oynayanda"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t10", type: "multiple_choice", prompt: "Yaxşı dinləmək üçün nə etməli?", options: ["diqqətlə qulaq asmaq", "danışmaq", "yazmaq", "yatmaq"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t11", type: "multiple_choice", prompt: "'Good morning!' nə vaxt deyilir?", options: ["səhər", "axşam", "gecə", "günorta"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t12", type: "multiple_choice", prompt: "'Good night!' nə vaxt deyilir?", options: ["səhər", "yatmazdan əvvəl", "günorta", "səhər yeməyində"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l2-t13", type: "multiple_choice", prompt: "'What time is it?' nə soruşur?", options: ["vaxtı / saatı", "adı", "yeri", "rəngi"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t14", type: "multiple_choice", prompt: "'Yes, please.' nə vaxt deyilir?", options: ["nəyisə qəbul edəndə", "imtina edəndə", "salamlaşanda", "gedəndə"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l2-t15", type: "multiple_choice", prompt: "'No, thank you.' nə bildirir?", options: ["nəzakətli imtina", "qəbul", "sual", "salam"], correctIndex: 0, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-sk-l2-b1", type: "multiple_choice", prompt: "'How do you spell it?' nə soruşur?", options: ["sözün hərflərlə yazılışını", "yaşı", "rəngi", "vaxtı"], correctIndex: 0, xp: 15 },
            { id: "en-sk-l2-b2", type: "multiple_choice", prompt: "'Listen carefully.' nə deməkdir?", options: ["diqqətlə qulaq as", "yüksək danış", "tez yaz", "otur"], correctIndex: 0, xp: 15 },
            { id: "en-sk-l2-b3", type: "multiple_choice", prompt: "'See you tomorrow!' nə vaxt deyilir?", options: ["ayrılarkən", "salamlaşarkən", "yeyərkən", "yatarkən"], correctIndex: 0, xp: 15 },
            { id: "en-sk-l2-b4", type: "multiple_choice", prompt: "'Excuse me' nə vaxt deyilir?", options: ["kimisə çağırmaq/üzr istəmək", "yatmaq", "yemək", "oxumaq"], correctIndex: 0, xp: 15 },
            { id: "en-sk-l2-b5", type: "multiple_choice", prompt: "'How are you?' — ən uyğun cavab?", options: ["I'm fine, thanks.", "It is a book.", "I am from Baku.", "Yes."], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 3: Speaking ────────────────────────────────────
        {
          id: "en-sk-l3",
          title: "Danışma (Speaking)",
          intro:
            "Özün, ailən və gündəlik fəaliyyətlərin haqqında sadə dialoqlar qurmaq.",
          visual: "fonetika",
          sections: [
            {
              heading: "Özünü təqdim et",
              body: "My name is Ali. I am eleven years old. I am from Azerbaijan. I live in Baku.",
            },
            {
              heading: "Sual-cavab",
              body: "How are you? → I'm fine, thank you. Where do you live? → I live in Ganja. What is your favourite food? → I like pizza.",
            },
            {
              heading: "Məsləhət",
              body: "Aydın və yavaş danış. Yeni sözlərlə qorxmadan danışmağa çalış — səhv etmək öyrənmənin bir hissəsidir.",
            },
          ],
          tasks: [
            { id: "en-sk-l3-t1", type: "multiple_choice", prompt: "Özünü təqdim: 'My name ___ Ali.'", options: ["is", "am", "are", "be"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t2", type: "multiple_choice", prompt: "'I ___ from Azerbaijan.'", options: ["is", "am", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l3-t3", type: "multiple_choice", prompt: "'I ___ eleven years old.'", options: ["is", "am", "are", "be"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l3-t4", type: "multiple_choice", prompt: "'This is my ___.' (ananı təqdim et)", options: ["mother", "run", "blue", "fast"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t5", type: "multiple_choice", prompt: "'I like ___.' (idman)", options: ["sport", "the", "a", "is"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t6", type: "multiple_choice", prompt: "Səhər salamı necə deyilir?", options: ["Good morning", "Good night", "Goodbye", "Thanks"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t7", type: "multiple_choice", prompt: "Kimsə ilə tanış olanda nə deyirik?", options: ["Nice to meet you.", "Good night.", "No, thanks.", "I am hungry."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t8", type: "multiple_choice", prompt: "'What do you do every day?' — düzgün cavab?", options: ["I go to school.", "I going school.", "I goes school.", "I went school."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t9", type: "multiple_choice", prompt: "'I have a ___.' (bacı)", options: ["sister", "tall", "run", "blue"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t10", type: "multiple_choice", prompt: "'My favourite colour is ___.'", options: ["blue", "run", "tall", "fast"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t11", type: "multiple_choice", prompt: "Danışarkən nə vacibdir?", options: ["aydın və yavaş danışmaq", "susmaq", "yalnız pıçıldamaq", "tez-tez qışqırmaq"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t12", type: "multiple_choice", prompt: "'How are you?' sualına cavab ver:", options: ["I'm fine, thank you.", "It is red.", "Yes, I do.", "At school."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t13", type: "fill_blank", prompt: "'Salam' (qeyri-rəsmi) ingiliscə?", accepted: ["hi", "hello"], xp: 10 },
            { id: "en-sk-l3-t14", type: "multiple_choice", prompt: "'I live ___ Baku.'", options: ["in", "on", "at", "to"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l3-t15", type: "multiple_choice", prompt: "Yeni sözlərlə danışmaq üçün ən yaxşı yol?", options: ["qorxmadan çalışmaq", "heç danışmamaq", "yalnız yazmaq", "tərcümə gözləmək"], correctIndex: 0, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-sk-l3-b1", type: "multiple_choice", prompt: "'Can you help me?' — nəzakətli razılıq cavabı?", options: ["Sure!", "No.", "Goodbye.", "I am ten."], correctIndex: 0, xp: 15 },
            { id: "en-sk-l3-b2", type: "multiple_choice", prompt: "'What is your favourite food?' — cavab?", options: ["I like pizza.", "I am fine.", "It is Monday.", "Yes, please."], correctIndex: 0, xp: 15 },
            { id: "en-sk-l3-b3", type: "multiple_choice", prompt: "'Where do you live?' — cavab?", options: ["I live in Ganja.", "I am eleven.", "It is red.", "Good night."], correctIndex: 0, xp: 15 },
            { id: "en-sk-l3-b4", type: "fill_blank", prompt: "Təşəkkür etmək üçün ingiliscə söz?", accepted: ["thank you", "thanks"], xp: 15 },
            { id: "en-sk-l3-b5", type: "multiple_choice", prompt: "Təqdimatda adətən ilk nə deyirik?", options: ["adımızı", "yaşımızı", "rəngi", "vaxtı"], correctIndex: 0, xp: 15 },
          ],
        },

        // ── PROJECT 4: Writing ─────────────────────────────────────
        {
          id: "en-sk-l4",
          title: "Yazı (Writing)",
          intro:
            "Böyük hərf, durğu işarələri və düzgün cümlə quruluşu ilə qısa mətnlər yazmaq.",
          sections: [
            {
              heading: "Böyük hərf",
              body: "İngilis cümləsi həmişə BÖYÜK hərflə başlayır. İnsan, şəhər, ölkə, həftə günü və ay adları da böyük hərflə yazılır: Ali, Baku, England, Monday.",
            },
            {
              heading: "Durğu işarələri",
              body: "Nəqli cümlə nöqtə (.) ilə, sual cümləsi sual işarəsi (?) ilə, nida cümləsi nida işarəsi (!) ilə bitir.",
            },
            {
              heading: "Cümlə quruluşu",
              body: "İngilis cümləsi adətən Subject + Verb + Object sırası ilə qurulur: I (S) like (V) apples (O).",
            },
          ],
          tasks: [
            { id: "en-sk-l4-t1", type: "multiple_choice", prompt: "İngilis cümləsi hansı hərflə başlayır?", options: ["kiçik", "böyük", "rəqəm", "işarə"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t2", type: "multiple_choice", prompt: "Nəqli cümlənin sonunda hansı işarə qoyulur?", options: [".", "?", "!", ","], correctIndex: 0, xp: 10 },
            { id: "en-sk-l4-t3", type: "multiple_choice", prompt: "Sual cümləsinin sonunda hansı işarə?", options: [".", "?", "!", ";"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t4", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["i am a student.", "I am a student.", "I Am A Student.", "i Am a student."], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t5", type: "multiple_choice", prompt: "İnsan adları hansı hərflə yazılır?", options: ["kiçik", "böyük", "rəqəmlə", "hamısı böyük"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t6", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["my name is ali", "My name is Ali.", "my Name Is Ali", "MY NAME IS ALI"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t7", type: "multiple_choice", prompt: "Cümlə quruluşu düzgün olanı seç (S+V+O):", options: ["I like apples.", "Apples I like.", "Like I apples.", "I apples like."], correctIndex: 0, xp: 10 },
            { id: "en-sk-l4-t8", type: "multiple_choice", prompt: "'She ___ a letter.' (write, Present Simple)", options: ["write", "writes", "writing", "wrote"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t9", type: "multiple_choice", prompt: "Sözlər arasında boşluq nə üçün lazımdır?", options: ["sözləri ayırmaq üçün", "rəng üçün", "səs üçün", "heç nə üçün"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l4-t10", type: "multiple_choice", prompt: "Şəhər adı 'Baku' hansı formada düzgündür?", options: ["baku", "Baku", "BAKU", "baKU"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t11", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["the dog is big", "The dog is big.", "The Dog Is Big", "the Dog is big."], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t12", type: "multiple_choice", prompt: "Qısa məktubda ilk söz adətən nədir?", options: ["Dear ...", "End", "Yes", "Big"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l4-t13", type: "multiple_choice", prompt: "'I have two ___.' (cat — cəm)", options: ["cat", "cats", "cates", "caties"], correctIndex: 1, xp: 10 },
            { id: "en-sk-l4-t14", type: "multiple_choice", prompt: "Vergül (,) nə üçün işlədilir?", options: ["fasilə / ayırma üçün", "cümləni bitirmək", "sual üçün", "böyük hərf üçün"], correctIndex: 0, xp: 10 },
            { id: "en-sk-l4-t15", type: "multiple_choice", prompt: "Düzgün cümləni seç:", options: ["I is happy.", "I am happy.", "I are happy.", "I happy am."], correctIndex: 1, xp: 10 },
          ],
          bonusTasks: [
            { id: "en-sk-l4-b1", type: "multiple_choice", prompt: "Həftənin günü 'Monday' hansı formada düzgündür?", options: ["monday", "Monday", "MONDAY", "MonDay"], correctIndex: 1, xp: 15 },
            { id: "en-sk-l4-b2", type: "multiple_choice", prompt: "Nida cümləsinin sonunda hansı işarə?", options: [".", "?", "!", ":"], correctIndex: 2, xp: 15 },
            { id: "en-sk-l4-b3", type: "multiple_choice", prompt: "Ölkə adı hansı formada düzgündür?", options: ["england", "England", "ENGLAND", "eng land"], correctIndex: 1, xp: 15 },
            { id: "en-sk-l4-b4", type: "multiple_choice", prompt: "Hansı düzgün yazılıb?", options: ["we are friends", "We are friends.", "We Are Friends", "we Are friends."], correctIndex: 1, xp: 15 },
            { id: "en-sk-l4-b5", type: "multiple_choice", prompt: "Yaxşı yazı üçün nə vacibdir?", options: ["böyük hərf, durğu işarəsi, düzgün quruluş", "yalnız uzun sözlər", "heç bir qayda", "yalnız rəqəmlər"], correctIndex: 0, xp: 15 },
          ],
        },
      ],
    },
  ],
};
