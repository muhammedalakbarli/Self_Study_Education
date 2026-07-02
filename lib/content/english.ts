// İngilis dili — "Nouns" treki. Hər layihə (project) bir mövzu:
// P1 Noun nədir → P2 cəm forması → P3 countable/uncountable.
// Hər layihədə 15 əsas + 5 bonus tapşırıq. Suallar AZ dilində izahla, İngilis dilini yoxlayır.

import type { Subject } from "../types";

export const english: Subject = {
  slug: "ingilis-dili",
  name: "İngilis dili",
  grade: 5,
  icon: "🇬🇧",
  color: "violet",
  units: [
    {
      id: "en-nouns",
      title: "Nouns — İsimlər",
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
  ],
};
