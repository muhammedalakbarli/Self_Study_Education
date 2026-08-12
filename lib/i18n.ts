"use client";

// Sadə i18n: AZ/EN/RU lüğət + hydration-təhlükəsiz useT hook.
// Dil `bilik-prefs` (localStorage) içində saxlanılır; dəyişəndə səhifə yenilənir.
// Qeyd: dərs məzmunu (suallar/variantlar) AZ kurikulumu olduğu üçün AZ qalır.

import { useSyncExternalStore } from "react";
import type { Lang } from "./prefs";

export type { Lang };

export const LANG_NAMES: Record<Lang, string> = {
  az: "Azərbaycan dili",
  en: "English",
  ru: "Русский",
};

type Dict = Record<string, Record<Lang, string>>;

const DICT: Dict = {
  // Naviqasiya (sidebar) — bütün səhifələrdə görünür
  "nav.learn": { az: "Öyrən", en: "Learn", ru: "Учёба" },
  "nav.practice": { az: "Praktika et", en: "Practice", ru: "Практика" },
  "nav.league": { az: "Liqa", en: "League", ru: "Лига" },
  "nav.quests": { az: "Görevlər", en: "Quests", ru: "Задания" },
  "nav.shop": { az: "Mağaza", en: "Shop", ru: "Магазин" },
  "nav.schools": { az: "Məktəb", en: "Schools", ru: "Школа" },
  "nav.profile": { az: "Profil", en: "Profile", ru: "Профиль" },
  "nav.more": { az: "Daha çoxu", en: "More", ru: "Ещё" },

  // ── Mağaza ──
  "shop.title": { az: "Mağaza", en: "Shop", ru: "Магазин" },
  "shop.subtitle": {
    az: "Zümrüdlərini xərclə — canını doldur, seriyanı qoru.",
    en: "Spend your gems — refill hearts, protect your streak.",
    ru: "Трать кристаллы — восстанови жизни, защити серию.",
  },
  "shop.balance": { az: "Zümrüd balansın", en: "Your gems", ru: "Твои кристаллы" },
  "shop.refillHearts": { az: "Canları doldur", en: "Refill hearts", ru: "Восстановить жизни" },
  "shop.refillHeartsDesc": { az: "Bütün canları bərpa et", en: "Restore all hearts", ru: "Восстановить все жизни" },
  "shop.buyFreeze": { az: "Seriya qoruyucu", en: "Streak freeze", ru: "Заморозка серии" },
  "shop.buyFreezeDesc": { az: "Bir buraxılmış günü örtür", en: "Covers one missed day", ru: "Покрывает один пропуск" },
  "shop.buy": { az: "Al", en: "Buy", ru: "Купить" },
  "shop.owned": { az: "Alındı!", en: "Purchased!", ru: "Куплено!" },
  "shop.notEnough": { az: "Zümrüd çatmır", en: "Not enough gems", ru: "Недостаточно кристаллов" },
  "shop.full": { az: "Artıq doludur", en: "Already full", ru: "Уже полно" },
  "nav.settings": { az: "Ayarlar", en: "Settings", ru: "Настройки" },
  "nav.help": { az: "Yardım mərkəzi", en: "Help center", ru: "Центр помощи" },
  "nav.logout": { az: "Çıxış", en: "Log out", ru: "Выйти" },

  // Fənn adları (tab-lar, başlıqlar, irəliləyiş)
  "subject.riyaziyyat": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-1": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-1": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-1": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-2": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-2": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-2": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-3": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-3": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-3": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-4": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-4": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-4": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-6": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-6": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-6": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-7": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-7": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-7": { az: "İngilis dili", en: "English", ru: "Английский" },
  "subject.riyaziyyat-8": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili-8": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili-8": { az: "İngilis dili", en: "English", ru: "Английский" },

  // Bölmə (unit) adları — Praktika "Bölmə üzrə" siyahısı
  "unit.ry-natural": {
    az: "Natural ədədlər və onların üzərində əməllər",
    en: "Natural numbers and operations",
    ru: "Натуральные числа и действия",
  },
  "unit.ry-fractions": {
    az: "Kəsrlər (adi kəsrlər)",
    en: "Fractions (common fractions)",
    ru: "Дроби (обыкновенные)",
  },
  "unit.ry-decimals": {
    az: "Onluq kəsrlər",
    en: "Decimals",
    ru: "Десятичные дроби",
  },
  "unit.ry-percent": {
    az: "Faiz, nisbət və tənasüb",
    en: "Percentages, ratio and proportion",
    ru: "Проценты, отношение и пропорция",
  },
  "unit.ry-geometry": {
    az: "Həndəsə elementləri və ölçü vahidləri",
    en: "Geometry elements and units of measurement",
    ru: "Элементы геометрии и единицы измерения",
  },
  "unit.ry-data": {
    az: "Məlumatların təqdim olunması və ehtimal",
    en: "Data presentation and probability",
    ru: "Представление данных и вероятность",
  },
  "unit.ry-divis": {
    az: "Bölünmə əlamətləri və ədədlər",
    en: "Divisibility rules and numbers",
    ru: "Признаки делимости и числа",
  },
  "unit.az-parts-of-speech": {
    az: "Nitq hissələri",
    en: "Parts of speech",
    ru: "Части речи",
  },
  "unit.az-grammar": {
    az: "Dil qaydaları (Qrammatika)",
    en: "Language rules (Grammar)",
    ru: "Правила языка (Грамматика)",
  },
  "unit.az-writing": {
    az: "Yazı və oxu mədəniyyəti",
    en: "Writing and reading culture",
    ru: "Культура письма и чтения",
  },
  "unit.az-speech": {
    az: "Nitq bacarıqlarının inkişafı",
    en: "Developing speech skills",
    ru: "Развитие речевых навыков",
  },
  "unit.en-grammar": {
    az: "Qrammatika — Zamanlar və cümlə",
    en: "Grammar — Tenses and sentences",
    ru: "Грамматика — времена и предложения",
  },
  "unit.en-nouns": {
    az: "İsimlər (Nouns)",
    en: "Nouns",
    ru: "Существительные (Nouns)",
  },
  "unit.en-vocab": {
    az: "Söz ehtiyatı (Vocabulary)",
    en: "Vocabulary",
    ru: "Словарный запас (Vocabulary)",
  },
  "unit.en-skills": {
    az: "Bacarıqlar (Skills)",
    en: "Skills",
    ru: "Навыки (Skills)",
  },

  // Yardım mərkəzi (səhifə çərçivəsi; suallar səhifədə dilə görə saxlanılır)
  "help.faq": {
    az: "Tez-tez verilən suallar",
    en: "Frequently asked questions",
    ru: "Часто задаваемые вопросы",
  },
  "help.stillQ": {
    az: "Hələ də sualın var?",
    en: "Still have questions?",
    ru: "Остались вопросы?",
  },
  "help.stillDesc": {
    az: "Cavabı tapmadınsa, birbaşa bizə yaz.",
    en: "If you didn't find the answer, write to us directly.",
    ru: "Если не нашёл ответ, напиши нам напрямую.",
  },
  "help.writeUs": { az: "Bizə yaz", en: "Write to us", ru: "Напиши нам" },

  // Daha çoxu səhifəsi
  "more.subjects": { az: "Fənlər", en: "Subjects", ru: "Предметы" },
  "more.account": { az: "Hesab", en: "Account", ru: "Аккаунт" },
  "more.config": { az: "Tənzimləmə", en: "Settings", ru: "Настройки" },
  "more.tagline": {
    az: "Azərbaycan məktəbliləri üçün interaktiv öyrənmə platforması",
    en: "Interactive learning platform for students in Azerbaijan",
    ru: "Интерактивная платформа обучения для школьников Азербайджана",
  },

  // Həftəlik liqa
  "league.title": { az: "Liqa", en: "Leaderboard", ru: "Рейтинг" },
  "league.subtitle": {
    az: "Ən çox XP toplayanlar",
    en: "Top XP earners",
    ru: "Лидеры по XP",
  },
  "league.overall": {
    az: "Ümumi sıralama · bütün istifadəçilər",
    en: "Overall ranking · all users",
    ru: "Общий рейтинг · все пользователи",
  },
  "league.empty": {
    az: "Bu həftə hələ heç kim XP qazanmayıb — birinci ol!",
    en: "No XP earned this week yet — be the first!",
    ru: "На этой неделе ещё нет XP — стань первым!",
  },
  "league.you": { az: "Sən", en: "You", ru: "Ты" },
  "league.thisWeek": { az: "Bu həftə", en: "This week", ru: "На этой неделе" },
  "league.needXp": {
    az: "Bu həftə hələ XP qazanmamısan. Liqaya qatılmaq üçün ən azı bir dərs et!",
    en: "You haven't earned any XP this week. Do at least one lesson to join the league!",
    ru: "На этой неделе ты ещё не заработал XP. Пройди хотя бы один урок, чтобы попасть в лигу!",
  },
  "league.needXpCta": { az: "Dərsə keç", en: "Go to lessons", ru: "К урокам" },
  "league.tier.bronze": { az: "Bürünc liqa", en: "Bronze league", ru: "Бронзовая лига" },
  "league.tier.silver": { az: "Gümüş liqa", en: "Silver league", ru: "Серебряная лига" },
  "league.tier.gold": { az: "Qızıl liqa", en: "Gold league", ru: "Золотая лига" },
  "league.tier.platinum": { az: "Platin liqa", en: "Platinum league", ru: "Платиновая лига" },
  "league.tier.diamond": { az: "Almaz liqa", en: "Diamond league", ru: "Алмазная лига" },
  "league.compete": {
    az: "Bu həftə top 5 növbəti liqaya keçir",
    en: "Top 5 advance to the next league this week",
    ru: "Топ-5 проходят в следующую лигу на этой неделе",
  },
  "league.promoZone": { az: "Yüksəliş zonası", en: "Promotion zone", ru: "Зона повышения" },
  "league.demoZone": { az: "Enmə zonası", en: "Demotion zone", ru: "Зона понижения" },
  "league.endsIn": { az: "Bitməsinə", en: "Ends in", ru: "До конца" },
  "league.dayShort": { az: "g", en: "d", ru: "д" },
  "league.hourShort": { az: "s", en: "h", ru: "ч" },
  "league.minShort": { az: "dəq", en: "m", ru: "м" },

  // Səviyyə (level)
  "level.label": { az: "Səviyyə", en: "Level", ru: "Уровень" },
  "level.beginner": { az: "Başlanğıc", en: "Beginner", ru: "Новичок" },
  "level.explorer": { az: "Kəşfiyyatçı", en: "Explorer", ru: "Исследователь" },
  "level.knower": { az: "Bilici", en: "Scholar", ru: "Знаток" },
  "level.master": { az: "Usta", en: "Master", ru: "Мастер" },
  "level.legend": { az: "Əfsanə", en: "Legend", ru: "Легенда" },

  // Gündəlik questlər ({n} → hədəf)
  "quest.title": { az: "Gündəlik hədəflər", en: "Daily goals", ru: "Ежедневные цели" },
  "quest.xp": { az: "{n} XP qazan", en: "Earn {n} XP", ru: "Заработай {n} XP" },
  "quest.correct": {
    az: "{n} düzgün cavab",
    en: "{n} correct answers",
    ru: "{n} верных ответов",
  },
  "quest.lessons": { az: "{n} dərs bitir", en: "Finish {n} lessons", ru: "Заверши {n} уроков" },
  "chest.title": { az: "Gündəlik sandıq", en: "Daily chest", ru: "Ежедневный сундук" },
  "chest.wonHearts": { az: "Canlar doldu!", en: "Hearts refilled!", ru: "Жизни восстановлены!" },
  "chest.wonFreeze": { az: "Seriya qoruyucu!", en: "Streak freeze!", ru: "Заморозка серии!" },
  "chest.ready": {
    az: "Bütün gündəlik görevləri bitirdin! Sandığı aç.",
    en: "You finished all daily goals! Open the chest.",
    ru: "Ты выполнил все дневные цели! Открой сундук.",
  },
  "chest.readyShort": { az: "Sandıq hazır!", en: "Chest ready!", ru: "Сундук готов!" },
  "chest.open": { az: "Aç", en: "Open", ru: "Открыть" },
  "chest.reward": { az: "Təbriklər! Mükafatın:", en: "Congrats! Your reward:", ru: "Поздравляем! Твоя награда:" },
  "common.ok": { az: "Al", en: "Claim", ru: "Забрать" },
  "common.close": { az: "Bağla", en: "Close", ru: "Закрыть" },
  "quest.allDone": {
    az: "Bütün gündəlik hədəflər tamamlandı!",
    en: "All daily goals done!",
    ru: "Все ежедневные цели выполнены!",
  },

  // Achievements (pilləli nişanlar)
  "ach.title": { az: "Nişanlar", en: "Badges", ru: "Награды" },
  "ach.xp": { az: "XP kolleksiyaçısı", en: "XP collector", ru: "Коллекционер XP" },
  "ach.streak": { az: "Alov", en: "Flame", ru: "Пламя" },
  "ach.lessons": { az: "Zəhmətkeş", en: "Hard worker", ru: "Труженик" },
  "ach.level": { az: "Səviyyə ustası", en: "Level master", ru: "Мастер уровней" },

  // Dərs sonu bayramı (celebration)
  "cel.done": { az: "Dərs tamamlandı!", en: "Lesson complete!", ru: "Урок пройден!" },
  "cel.great": { az: "Əla!", en: "Great!", ru: "Отлично!" },
  "cel.answerWas": { az: "Düzgün cavab:", en: "Correct answer:", ru: "Правильный ответ:" },
  "cel.xp": { az: "Qazanılan XP", en: "XP earned", ru: "Заработано XP" },
  "cel.accuracy": { az: "Dəqiqlik", en: "Accuracy", ru: "Точность" },
  "cel.combo": { az: "Ən yaxşı seriya", en: "Best combo", ru: "Лучшее комбо" },
  "cel.levelUp": { az: "Yeni səviyyə!", en: "Level up!", ru: "Новый уровень!" },
  "cel.perfect": { az: "Qüsursuz dərs!", en: "Perfect lesson!", ru: "Идеальный урок!" },

  // Dərs axını (runner chrome)
  "run.check": { az: "Yoxla", en: "Check", ru: "Проверить" },
  "run.next": { az: "Növbəti", en: "Next", ru: "Далее" },
  "run.continue": { az: "Davam et", en: "Continue", ru: "Продолжить" },
  "run.finish": { az: "Bitir", en: "Finish", ru: "Готово" },
  "run.task": { az: "Tapşırıq", en: "Task", ru: "Задание" },
  "run.bonus": { az: "Bonus", en: "Bonus", ru: "Бонус" },
  "run.retry": { az: "Təkrar", en: "Retry", ru: "Повтор" },
  "run.correct": { az: "Doğru! Afərin.", en: "Correct! Well done.", ru: "Верно! Молодец." },
  "run.wrong": {
    az: "Səhv. Növbəti dəfə alınacaq!",
    en: "Wrong. You'll get it next time!",
    ru: "Неверно. В следующий раз получится!",
  },
  "run.mainDone": {
    az: "Əsas hissə bitdi!",
    en: "Main part done!",
    ru: "Основная часть пройдена!",
  },
  "run.earnedSoFar": {
    az: "İndiyə qədər {n} XP qazandın.",
    en: "You've earned {n} XP so far.",
    ru: "Ты заработал {n} XP.",
  },
  "run.bonusOffer": {
    az: "{n} bonus sual var — əlavə XP qazanmaq istəyirsən?",
    en: "There are {n} bonus questions — want extra XP?",
    ru: "Есть {n} бонусных вопросов — хочешь дополнительный XP?",
  },
  "run.startBonus": { az: "Bonusa başla", en: "Start bonus", ru: "Начать бонус" },
  "run.backToPath": { az: "Yola qayıt", en: "Back to path", ru: "Вернуться к пути" },
  "run.home": { az: "Ana səhifə", en: "Home", ru: "Главная" },
  "run.noTasks": {
    az: "Bu dərs üçün hələ tapşırıq əlavə edilməyib.",
    en: "No tasks yet for this lesson.",
    ru: "Для этого урока пока нет заданий.",
  },

  // Ortaq statistikalar
  "stat.xp": { az: "XP", en: "XP", ru: "XP" },
  "stat.hearts": { az: "can", en: "hearts", ru: "жизни" },
  "stat.gems": { az: "zümrüd", en: "gems", ru: "кристаллы" },
  "stat.streak": { az: "gün seriya", en: "day streak", ru: "дней подряд" },
  "stat.completed": { az: "tamamlandı", en: "completed", ru: "завершено" },

  // Öyrən (dashboard)
  "dash.title": { az: "Öyrən", en: "Learn", ru: "Учёба" },
  "dash.greeting": { az: "Salam", en: "Hi", ru: "Привет" },
  "hearts.outTitle": { az: "Canların bitdi!", en: "Out of hearts!", ru: "Жизни закончились!" },
  "hearts.outBody": {
    az: "Canlar zamanla bərpa olunur. Praktika edərək məşq et və ya davam et.",
    en: "Hearts refill over time. Practice to warm up, or keep going.",
    ru: "Жизни восстанавливаются со временем. Потренируйся или продолжай.",
  },
  "hearts.practice": { az: "Praktika et", en: "Practice", ru: "Практика" },
  "hearts.continue": { az: "Davam et", en: "Keep going", ru: "Продолжить" },
  "dash.gradeSoonTitle": { az: "Tezliklə!", en: "Coming soon!", ru: "Скоро!" },
  "dash.gradeSoon": {
    az: "{n}-ci sinif proqramı hazırlanır. Ayarlardan sinfini dəyişə bilərsən.",
    en: "The grade {n} program is being prepared. You can change your grade in settings.",
    ru: "Программа {n} класса готовится. Класс можно изменить в настройках.",
  },
  "dash.changeGrade": { az: "Sinfi dəyiş", en: "Change grade", ru: "Изменить класс" },
  "dash.continue": { az: "davam edək", en: "let's continue", ru: "продолжим" },
  "dash.dailyBanner": {
    az: "Gündəlik challenge səni gözləyir — 5 tapşırıq",
    en: "Your daily challenge awaits — 5 tasks",
    ru: "Тебя ждёт ежедневный челлендж — 5 заданий",
  },
  "dash.start": { az: "Başla", en: "Start", ru: "Начать" },
  "path.locked": { az: "Kilidli", en: "Locked", ru: "Закрыто" },
  "dash.next": { az: "Növbəti", en: "Next", ru: "Далее" },
  "dash.leagueHint": { az: "Reytinqinə bax", en: "See your ranking", ru: "Посмотреть рейтинг" },
  "dash.allDone": {
    az: "Bütün dərslər bitdi!",
    en: "All lessons complete!",
    ru: "Все уроки пройдены!",
  },
  "dash.resume": { az: "Davam et", en: "Continue", ru: "Продолжить" },

  // Praktika
  "practice.title": { az: "Praktika et", en: "Practice", ru: "Практика" },
  "practice.subtitle": {
    az: "Biliyini möhkəmləndir — səhvlərini düzəlt, təkrar et, yarış.",
    en: "Sharpen your skills — fix mistakes, review, compete.",
    ru: "Закрепи знания — исправь ошибки, повтори, соревнуйся.",
  },
  "practice.daily": { az: "Gündəlik challenge", en: "Daily challenge", ru: "Ежедневный челлендж" },
  "practice.dailyDone": {
    az: "Bu gün tamamlandı — sabah yenə!",
    en: "Done for today — come back tomorrow!",
    ru: "На сегодня всё — до завтра!",
  },
  "practice.dailyDesc": {
    az: "5 tapşırıq həll et, formada qal.",
    en: "Solve 5 tasks, stay in shape.",
    ru: "Реши 5 заданий, будь в форме.",
  },
  "practice.mistakes": { az: "Təkrar vaxtıdır", en: "Time to review", ru: "Пора повторить" },
  "practice.mixed": { az: "Qarışıq praktika", en: "Mixed practice", ru: "Смешанная практика" },
  "practice.mixedDesc": {
    az: "Tamamladığın dərslərdən 10 təsadüfi tapşırıq",
    en: "10 random tasks from lessons you've completed",
    ru: "10 случайных заданий из пройденных уроков",
  },
  "practice.speed": { az: "Sürət raundu", en: "Speed round", ru: "Скоростной раунд" },
  "practice.speedDesc": {
    az: "60 saniyədə neçə düzgün cavab?",
    en: "How many correct in 60 seconds?",
    ru: "Сколько верных за 60 секунд?",
  },
  "practice.byUnit": { az: "Bölmə üzrə praktika", en: "Practice by unit", ru: "Практика по разделам" },
  "practice.tasks": { az: "tapşırıq", en: "tasks", ru: "заданий" },
  "practice.noMistakes": { az: "Təkrar yoxdur — əla!", en: "Nothing to review — great!", ru: "Нечего повторять — отлично!" },

  // Profil
  "profile.progress": { az: "Fənlər üzrə irəliləyiş", en: "Progress by subject", ru: "Прогресс по предметам" },
  "profile.badges": { az: "Nişanlar", en: "Badges", ru: "Награды" },
  "profile.badgesHint": {
    az: "İrəlilədikcə yeni nişanlar açılır",
    en: "Unlock new badges as you progress",
    ru: "Открывай новые награды по мере прогресса",
  },
  "profile.logout": { az: "Hesabdan çıx", en: "Log out", ru: "Выйти из аккаунта" },
  "profile.edit": { az: "Profili redaktə et", en: "Edit profile", ru: "Редактировать профиль" },
  "profile.share": { az: "Profili paylaş", en: "Share profile", ru: "Поделиться профилем" },
  "profile.copyLink": { az: "Linki kopyala", en: "Copy link", ru: "Копировать ссылку" },
  "profile.copied": { az: "Kopyalandı!", en: "Copied!", ru: "Скопировано!" },
  "profile.memberSince": { az: "Üzv: {d}", en: "Member since {d}", ru: "С нами с {d}" },
  "profile.name": { az: "Ad", en: "Name", ru: "Имя" },
  "profile.username": { az: "İstifadəçi adı", en: "Username", ru: "Имя пользователя" },
  "profile.avatar": { az: "Avatar", en: "Avatar", ru: "Аватар" },
  "profile.save": { az: "Yadda saxla", en: "Save", ru: "Сохранить" },
  "profile.saved": { az: "Yadda saxlanıldı", en: "Saved", ru: "Сохранено" },
  "profile.usernameTaken": {
    az: "Bu istifadəçi adı tutulub",
    en: "This username is taken",
    ru: "Это имя пользователя занято",
  },
  "profile.usernameHint": {
    az: "3-20 simvol: kiçik hərf, rəqəm, alt xətt (_)",
    en: "3-20 chars: lowercase, digits, underscore (_)",
    ru: "3-20 симв.: строчные, цифры, подчёркивание (_)",
  },
  "profile.monthly": { az: "Bu ayın nişanı", en: "This month's badge", ru: "Значок месяца" },
  "profile.back": { az: "Geri", en: "Back", ru: "Назад" },
  "profile.notFound": {
    az: "Belə profil tapılmadı",
    en: "Profile not found",
    ru: "Профиль не найден",
  },

  // Dostlar
  "friends.title": { az: "Dostlar", en: "Friends", ru: "Друзья" },
  "friends.invite": { az: "Dostunu dəvət et", en: "Invite a friend", ru: "Пригласи друга" },
  "friends.none": {
    az: "Hələ dostun yoxdur — dəvət et!",
    en: "No friends yet — invite one!",
    ru: "Пока нет друзей — пригласи!",
  },
  "friends.add": { az: "Dost əlavə et", en: "Add friend", ru: "Добавить друга" },
  "friends.added": { az: "Dost əlavə olundu!", en: "Friend added!", ru: "Друг добавлен!" },
  "friends.friendStreak": { az: "birgə seriya", en: "friend streak", ru: "совместная серия" },
  "friends.inviteText": {
    az: "{n} səni dost olmağa dəvət edir",
    en: "{n} invites you to be friends",
    ru: "{n} приглашает вас в друзья",
  },
  "friends.loginToAdd": {
    az: "Dost olmaq üçün giriş et",
    en: "Log in to add as a friend",
    ru: "Войди, чтобы добавить в друзья",
  },
  "friends.login": { az: "Giriş et", en: "Log in", ru: "Войти" },
  "friends.ownLink": {
    az: "Bu sənin öz dəvət linkindir",
    en: "This is your own invite link",
    ru: "Это твоя ссылка-приглашение",
  },
  "friends.toProfile": { az: "Profilə keç", en: "Go to profile", ru: "В профиль" },
  "friends.already": { az: "Dostunuz", en: "Your friend", ru: "В друзьях" },
  "follow.follow": { az: "İzlə", en: "Follow", ru: "Подписаться" },
  "follow.following": { az: "İzlənilir", en: "Following", ru: "Вы подписаны" },
  "follow.followers": { az: "izləyici", en: "followers", ru: "подписчиков" },
  "follow.followingCount": { az: "izlənilən", en: "following", ru: "подписки" },

  // Ayarlar
  "settings.title": { az: "Ayarlar", en: "Settings", ru: "Настройки" },
  "settings.subtitle": { az: "Tərcihlər", en: "Preferences", ru: "Предпочтения" },
  "settings.lessonExp": { az: "Dərs təcrübəsi", en: "Lesson experience", ru: "Опыт уроков" },
  "settings.sound": { az: "Səs effektləri", en: "Sound effects", ru: "Звуковые эффекты" },
  "settings.soundHint": {
    az: "Cavab və təbriklərdə səslər",
    en: "Sounds on answers and praise",
    ru: "Звуки при ответах и похвале",
  },
  "settings.animations": { az: "Animasiyalar", en: "Animations", ru: "Анимации" },
  "settings.animationsHint": {
    az: "Ulduz və keçid animasiyaları",
    en: "Ulduz and transition animations",
    ru: "Анимации Улдуз и переходов",
  },
  "settings.motivational": { az: "Motivasiya mesajları", en: "Motivational messages", ru: "Мотивационные сообщения" },
  "settings.motivationalHint": {
    az: "Ruhlandırıcı bildirişlər",
    en: "Encouraging notifications",
    ru: "Ободряющие уведомления",
  },
  "settings.listening": { az: "Dinləmə çalışmaları", en: "Listening exercises", ru: "Аудирование" },
  "settings.listeningHint": { az: "Səsli tapşırıqlar", en: "Audio tasks", ru: "Аудиозадания" },
  "settings.notifSection": { az: "Bildirişlər", en: "Notifications", ru: "Уведомления" },
  "settings.notifications": { az: "Xatırlatmalar", en: "Reminders", ru: "Напоминания" },
  "settings.notificationsHint": {
    az: "Streak-in yanmasın deyə gündəlik xatırlatma göndərək",
    en: "We'll send a daily reminder so your streak doesn't break",
    ru: "Отправим ежедневное напоминание, чтобы не сгорел стрик",
  },
  "settings.notifDenied": {
    az: "Bildirişlər brauzerdə bloklanıb — brauzer ayarlarından icazə ver",
    en: "Notifications are blocked in your browser — allow them in browser settings",
    ru: "Уведомления заблокированы в браузере — разрешите их в настройках",
  },
  "settings.notifUnsupported": {
    az: "Bu brauzer bildirişləri dəstəkləmir",
    en: "This browser does not support notifications",
    ru: "Этот браузер не поддерживает уведомления",
  },
  "settings.notifError": {
    az: "Alınmadı, bir az sonra yenidən yoxla",
    en: "Something went wrong, try again later",
    ru: "Не удалось, попробуйте позже",
  },
  "settings.gradeSection": { az: "Sinif", en: "Grade", ru: "Класс" },
  "settings.grade": { az: "Sinfin", en: "Your grade", ru: "Твой класс" },
  "settings.gradeHint": {
    az: "Proqram seçdiyin sinfə görə göstərilir",
    en: "Content is shown based on your grade",
    ru: "Контент показывается по твоему классу",
  },
  "settings.gradeOption": { az: "{n}-ci sinif", en: "Grade {n}", ru: "{n} класс" },
  "settings.appearance": { az: "Görünüş", en: "Appearance", ru: "Внешний вид" },
  "settings.dark": { az: "Tünd rejim", en: "Dark mode", ru: "Тёмная тема" },
  "settings.darkHint": {
    az: "Gecə üçün rahat görünüş",
    en: "Comfortable look for night",
    ru: "Комфортный вид для ночи",
  },
  "settings.system": { az: "Sistem default", en: "System default", ru: "Как в системе" },
  "settings.light": { az: "İşıqlı", en: "Light", ru: "Светлая" },
  "settings.darkOpt": { az: "Tünd", en: "Dark", ru: "Тёмная" },
  "settings.language": { az: "Dil", en: "Language", ru: "Язык" },
  "settings.languageHint": {
    az: "İnterfeys dili",
    en: "Interface language",
    ru: "Язык интерфейса",
  },

  // ── Landing (ana səhifə) ──
  "home.login": { az: "Daxil ol", en: "Sign in", ru: "Войти" },
  "home.badge": {
    az: "Azərbaycan məktəbliləri üçün · 1–8-ci siniflər",
    en: "For Azerbaijani students · grades 1–8",
    ru: "Для школьников Азербайджана · 1–8 классы",
  },
  "home.hero1": { az: "Öyrənməyi ", en: "Make learning ", ru: "Преврати учёбу в " },
  "home.hero2": { az: "əyləncəyə", en: "fun", ru: "игру" },
  "home.hero3": { az: " çevir", en: "", ru: "" },
  "home.heroBody": {
    az: "Riyaziyyat, Azərbaycan dili və İngilis dilini addım-addım, oyun kimi öyrən. Pulsuz, sadə və maraqlı.",
    en: "Learn Math, Azerbaijani and English step by step, like a game. Free, simple and fun.",
    ru: "Учите математику, азербайджанский и английский шаг за шагом, как в игре. Бесплатно, просто и увлекательно.",
  },
  "home.ctaStart": { az: "Pulsuz başla", en: "Start free", ru: "Начать бесплатно" },
  "home.haveAccount": {
    az: "Artıq hesabım var",
    en: "I already have an account",
    ru: "У меня уже есть аккаунт",
  },
  "home.aferin": { az: "Afərin!", en: "Well done!", ru: "Молодец!" },
  "home.stat.subjects": { az: "fənn", en: "subjects", ru: "предметы" },
  "home.stat.lessons": { az: "dərs", en: "lessons", ru: "уроки" },
  "home.stat.tasks": { az: "tapşırıq", en: "tasks", ru: "задания" },
  "home.streakBadge": { az: "Seriya 5", en: "Streak 5", ru: "Серия 5" },

  "home.r1.tag": { az: "Oyun kimi", en: "Like a game", ru: "Как игра" },
  "home.r1.title": {
    az: "Öyrənmək əyləncəli olsun",
    en: "Make learning enjoyable",
    ru: "Пусть учёба будет в удовольствие",
  },
  "home.r1.body": {
    az: "Hər düzgün cavabda XP qazan, seriyanı qoru, dərsləri tamamla. Ulduz səni hər addımda ruhlandırır.",
    en: "Earn XP for every correct answer, keep your streak, complete lessons. Ulduz cheers you on at every step.",
    ru: "Получай XP за каждый правильный ответ, береги серию, завершай уроки. Улдуз подбадривает тебя на каждом шагу.",
  },
  "home.r2.tag": { az: "Öz sürətinlə", en: "At your own pace", ru: "В своём темпе" },
  "home.r2.title": {
    az: "Addım-addım, tələsmədən",
    en: "Step by step, no rush",
    ru: "Шаг за шагом, без спешки",
  },
  "home.r2.body": {
    az: "Hər dərs bitəndə növbəti açılır. Öz tempinlə irəlilə — irəliləyişin avtomatik yadda qalır.",
    en: "Each lesson unlocks the next. Move at your own pace — your progress is saved automatically.",
    ru: "Каждый урок открывает следующий. Двигайся в своём темпе — прогресс сохраняется автоматически.",
  },
  "home.r3.tag": { az: "Məktəb proqramı", en: "School curriculum", ru: "Школьная программа" },
  "home.r3.title": {
    az: "3 fənn, real kurikulum",
    en: "3 subjects, real curriculum",
    ru: "3 предмета, реальная программа",
  },
  "home.r3.body": {
    az: "1–8-ci sinif proqramına uyğun: hər mövzu izah + tapşırıqlarla. Riyaziyyat, Azərbaycan dili və İngilis dili.",
    en: "Aligned with the grade 1–8 program: each topic with an explanation + exercises. Math, Azerbaijani and English.",
    ru: "По программе 1–8 классов: каждая тема с объяснением и заданиями. Математика, азербайджанский и английский.",
  },
  "home.finalTitle": {
    az: "Bu gün öyrənməyə başla",
    en: "Start learning today",
    ru: "Начните учиться сегодня",
  },
  "home.finalBody": {
    az: "Hesab yarat, ilk dərsini bitir və XP qazan. Tamamilə pulsuz.",
    en: "Create an account, finish your first lesson and earn XP. Completely free.",
    ru: "Создайте аккаунт, завершите первый урок и получите XP. Совершенно бесплатно.",
  },

  // ── Landing: fənn vitrini ──
  "home.subjects.grade": { az: "ci sinif", en: "grade", ru: "класс" },
  "home.subjects.title": {
    az: "Üç fənn, bir yolda",
    en: "Three subjects, one path",
    ru: "Три предмета, один путь",
  },
  "home.subjects.body": {
    az: "Hər fənn kurikuluma uyğun mövzu-mövzu, oyun kimi.",
    en: "Each subject topic by topic, curriculum-aligned, like a game.",
    ru: "Каждый предмет тема за темой, по программе, как игра.",
  },
  "home.subjects.math": { az: "Riyaziyyat", en: "Math", ru: "Математика" },
  "home.subjects.az": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "home.subjects.en": { az: "İngilis dili", en: "English", ru: "Английский" },
  "home.subjects.mathDesc": {
    az: "Saylar, hesab, həndəsə",
    en: "Numbers, arithmetic, geometry",
    ru: "Числа, арифметика, геометрия",
  },
  "home.subjects.azDesc": {
    az: "Qrammatika, oxu, yazı",
    en: "Grammar, reading, writing",
    ru: "Грамматика, чтение, письмо",
  },
  "home.subjects.enDesc": {
    az: "Lüğət, dinləmə, tələffüz",
    en: "Vocabulary, listening, speaking",
    ru: "Лексика, аудирование, речь",
  },

  // ── Landing: oyunlaşdırma çipləri ──
  "home.feat.title": {
    az: "Öyrənməyi əyləncəyə çevirən hər şey",
    en: "Everything that makes learning fun",
    ru: "Всё, что делает учёбу увлекательной",
  },
  "home.feat.xp": { az: "XP və səviyyələr", en: "XP & levels", ru: "XP и уровни" },
  "home.feat.streak": { az: "Gündəlik seriya", en: "Daily streak", ru: "Ежедневная серия" },
  "home.feat.league": { az: "Həftəlik liqa", en: "Weekly league", ru: "Еженедельная лига" },
  "home.feat.badge": { az: "Nişan və mükafat", en: "Badges & rewards", ru: "Значки и награды" },

  // ── Landing: necə işləyir ──
  "home.app.title": { az: "İstənilən yerdə öyrən", en: "Learn anytime, anywhere", ru: "Учись где угодно" },
  "home.app.body": {
    az: "Imparo brauzerdə işləyir və telefonda tətbiq kimi (PWA) quraşdırıla bilər. Native iOS/Android tətbiqi tezliklə.",
    en: "Imparo works in the browser and installs as an app on your phone (PWA). Native iOS/Android apps coming soon.",
    ru: "Imparo работает в браузере и устанавливается как приложение на телефон (PWA). Нативные приложения iOS/Android скоро.",
  },
  "home.app.soon": { az: "Tezliklə", en: "Coming soon", ru: "Скоро" },
  "home.how.title": { az: "Necə işləyir?", en: "How it works", ru: "Как это работает" },
  "home.how.s1.t": { az: "Hesab yarat", en: "Create an account", ru: "Создай аккаунт" },
  "home.how.s1.d": {
    az: "Sinfini seç, bir neçə saniyəyə hazırsan.",
    en: "Pick your grade, ready in seconds.",
    ru: "Выбери класс — готово за секунды.",
  },
  "home.how.s2.t": { az: "Hər gün öyrən", en: "Learn every day", ru: "Учись каждый день" },
  "home.how.s2.d": {
    az: "Qısa dərslər, oyun kimi tapşırıqlar.",
    en: "Short lessons, game-like tasks.",
    ru: "Короткие уроки, задания как игра.",
  },
  "home.how.s3.t": { az: "İrəlilə və qazan", en: "Progress & win", ru: "Прогресс и победа" },
  "home.how.s3.d": {
    az: "XP topla, seriyanı qoru, liqada yüksəl.",
    en: "Earn XP, keep your streak, climb the league.",
    ru: "Набирай XP, береги серию, поднимайся в лиге.",
  },

  // ── Giriş / Qeydiyyat (auth) ──
  "auth.or": { az: "və ya", en: "or", ru: "или" },
  "auth.email": { az: "Email", en: "Email", ru: "Эл. почта" },
  "auth.password": { az: "Parol", en: "Password", ru: "Пароль" },
  "auth.checking": { az: "Yoxlanılır...", en: "Checking...", ru: "Проверка..." },
  "auth.homeAria": { az: "Ana səhifə", en: "Home", ru: "Главная" },
  "auth.showPass": { az: "Parolu göstər", en: "Show password", ru: "Показать пароль" },
  "auth.hidePass": { az: "Parolu gizlət", en: "Hide password", ru: "Скрыть пароль" },
  "auth.tagline": {
    az: "Azərbaycan məktəbliləri üçün interaktiv öyrənmə platforması",
    en: "An interactive learning platform for Azerbaijani students",
    ru: "Интерактивная платформа обучения для школьников Азербайджана",
  },
  "common.user": { az: "İstifadəçi", en: "User", ru: "Пользователь" },

  // Giriş
  "auth.login.title": { az: "Xoş gəldin", en: "Welcome back", ru: "С возвращением" },
  "auth.login.subtitle": {
    az: "Davam etmək üçün hesabına daxil ol",
    en: "Sign in to continue",
    ru: "Войдите, чтобы продолжить",
  },
  "auth.login.google": {
    az: "Google ilə daxil ol",
    en: "Continue with Google",
    ru: "Войти через Google",
  },
  "auth.login.submit": { az: "Daxil ol", en: "Sign in", ru: "Войти" },
  "auth.login.passwordPlaceholder": { az: "Parolun", en: "Your password", ru: "Ваш пароль" },
  "auth.login.brandHeading": {
    az: "Öyrənməyə davam et",
    en: "Keep learning",
    ru: "Продолжайте учиться",
  },
  "auth.login.brandSub": {
    az: "Hesabına daxil ol və qaldığın yerdən davam et.",
    en: "Sign in and pick up where you left off.",
    ru: "Войдите и продолжите с того места, где остановились.",
  },
  "auth.login.noAccount": {
    az: "Hesabın yoxdur?",
    en: "Don't have an account?",
    ru: "Нет аккаунта?",
  },
  "auth.login.signupLink": {
    az: "Qeydiyyatdan keç",
    en: "Sign up",
    ru: "Зарегистрироваться",
  },
  "auth.login.perk1": {
    az: "3 fənn üzrə 60+ interaktiv dərs",
    en: "60+ interactive lessons in 3 subjects",
    ru: "60+ интерактивных уроков по 3 предметам",
  },
  "auth.login.perk2": {
    az: "Öz sürətinlə, oyun kimi öyrənmə",
    en: "Learn at your own pace, like a game",
    ru: "Учитесь в своём темпе, как в игре",
  },
  "auth.login.perk3": {
    az: "İrəliləyişin avtomatik yadda saxlanılır",
    en: "Your progress is saved automatically",
    ru: "Ваш прогресс сохраняется автоматически",
  },

  // Qeydiyyat
  "auth.signup.title": {
    az: "Yeni hesab yarat",
    en: "Create your account",
    ru: "Создайте аккаунт",
  },
  "auth.signup.subtitle": {
    az: "Bir neçə saniyə çəkir",
    en: "Takes a few seconds",
    ru: "Займёт несколько секунд",
  },
  "auth.signup.google": {
    az: "Google ilə qeydiyyat",
    en: "Sign up with Google",
    ru: "Регистрация через Google",
  },
  "auth.signup.submit": { az: "Qeydiyyatdan keç", en: "Sign up", ru: "Зарегистрироваться" },
  "auth.signup.loading": {
    az: "Qeydiyyat aparılır...",
    en: "Signing up...",
    ru: "Регистрация...",
  },
  "auth.signup.brandHeading": {
    az: "Öyrənməyə bu gün başla",
    en: "Start learning today",
    ru: "Начните учиться сегодня",
  },
  "auth.signup.brandSub": {
    az: "Hesab yarat, ilk dərsini bitir və XP qazan.",
    en: "Create an account, finish your first lesson and earn XP.",
    ru: "Создайте аккаунт, завершите первый урок и получите XP.",
  },
  "auth.signup.haveAccount": {
    az: "Artıq hesabın var?",
    en: "Already have an account?",
    ru: "Уже есть аккаунт?",
  },
  "auth.signup.loginLink": { az: "Daxil ol", en: "Sign in", ru: "Войти" },
  "auth.signup.name": { az: "Ad və Soyad", en: "Full name", ru: "Имя и фамилия" },
  "auth.signup.namePlaceholder": {
    az: "Adınız və soyadınız",
    en: "Your first and last name",
    ru: "Ваши имя и фамилия",
  },
  "auth.signup.password": { az: "Şifrə", en: "Password", ru: "Пароль" },
  "auth.signup.passwordPlaceholder": {
    az: "Ən az 6 simvol",
    en: "At least 6 characters",
    ru: "Минимум 6 символов",
  },
  "auth.signup.confirm": {
    az: "Şifrəni təkrar daxil et",
    en: "Confirm password",
    ru: "Повторите пароль",
  },
  "auth.signup.confirmPlaceholder": {
    az: "Şifrəni təkrar yazın",
    en: "Re-enter your password",
    ru: "Введите пароль ещё раз",
  },
  "auth.signup.match": {
    az: "Şifrələr uyğundur",
    en: "Passwords match",
    ru: "Пароли совпадают",
  },
  "auth.signup.perk1": {
    az: "Pulsuz — kart və ödəniş yoxdur",
    en: "Free — no card, no payment",
    ru: "Бесплатно — без карты и оплаты",
  },
  "auth.signup.perk2": {
    az: "3 fənn: Riyaziyyat, Azərbaycan dili, İngilis dili",
    en: "3 subjects: Math, Azerbaijani, English",
    ru: "3 предмета: математика, азербайджанский, английский",
  },
  "auth.signup.perk3": {
    az: "İrəliləyişin hər cihazda yadda qalır",
    en: "Your progress is saved on every device",
    ru: "Ваш прогресс сохраняется на всех устройствах",
  },

  // Şifrə gücü
  "auth.strength.weak": { az: "Zəif", en: "Weak", ru: "Слабый" },
  "auth.strength.fair": { az: "Orta", en: "Fair", ru: "Средний" },
  "auth.strength.good": { az: "Yaxşı", en: "Good", ru: "Хороший" },
  "auth.strength.strong": { az: "Güclü", en: "Strong", ru: "Сильный" },

  // Xətalar
  "auth.err.invalid": {
    az: "Email və ya parol yanlışdır.",
    en: "Email or password is incorrect.",
    ru: "Неверный эл. адрес или пароль.",
  },
  "auth.err.allFields": {
    az: "Bütün sahələri doldurun.",
    en: "Please fill in all fields.",
    ru: "Заполните все поля.",
  },
  "auth.err.passMismatch": {
    az: "Şifrələr uyğun gəlmir.",
    en: "Passwords do not match.",
    ru: "Пароли не совпадают.",
  },
  "auth.err.passShort": {
    az: "Şifrə ən az 6 simvol olmalıdır.",
    en: "Password must be at least 6 characters.",
    ru: "Пароль должен быть не менее 6 символов.",
  },
  "auth.err.signupFailed": {
    az: "Qeydiyyat alınmadı. Yenidən cəhd et.",
    en: "Sign-up failed. Please try again.",
    ru: "Регистрация не удалась. Попробуйте снова.",
  },
  "auth.err.oauth": {
    az: "Google ilə giriş alınmadı. Yenidən cəhd et.",
    en: "Google sign-in failed. Please try again.",
    ru: "Не удалось войти через Google. Попробуйте снова.",
  },

  // ── Haqqımızda səhifəsi ──
  "about.login": { az: "Daxil ol", en: "Log in", ru: "Войти" },
  "about.mission.badge": { az: "Missiyamız", en: "Our mission", ru: "Наша миссия" },
  "about.mission.title1": { az: "Azərbaycan üçün ən yaxşı təhsili qur və ", en: "Build the best education for Azerbaijan and ", ru: "Создай лучшее образование для Азербайджана и " },
  "about.mission.titleHi": { az: "hamıya çatdır", en: "make it available to all", ru: "сделай его доступным для всех" },
  "about.mission.body": {
    az: "Imparo — məktəblilərin öyrənməyi sevməsi üçün qurulmuş oyunlaşdırılmış təhsil platformasıdır. İnanırıq ki, keyfiyyətli təhsil imtiyaz yox, hüquqdur.",
    en: "Imparo is a gamified learning platform built to help students fall in love with learning. We believe quality education is a right, not a privilege.",
    ru: "Imparo — это геймифицированная образовательная платформа, созданная, чтобы школьники полюбили учёбу. Мы верим, что качественное образование — это право, а не привилегия.",
  },
  "about.products.heading": { az: "Nə təklif edirik", en: "What we offer", ru: "Что мы предлагаем" },
  "about.prod.imparo.title": { az: "Imparo", en: "Imparo", ru: "Imparo" },
  "about.prod.imparo.desc": {
    az: "1–8-ci siniflər üçün interaktiv öyrənmə platforması — Riyaziyyat, Azərbaycan dili və İngilis dili, oyun kimi.",
    en: "An interactive learning platform for grades 1–8 — Math, Azerbaijani and English, like a game.",
    ru: "Интерактивная платформа для 1–8 классов — математика, азербайджанский и английский, как игра.",
  },
  "about.prod.plus.title": { az: "Imparo Plus", en: "Imparo Plus", ru: "Imparo Plus" },
  "about.prod.plus.desc": {
    az: "Limitsiz can, 2× zümrüd və reklamsız təcrübə ilə öyrənməni daha rahat və sürətli et.",
    en: "Make learning smoother and faster with unlimited hearts, 2× gems and an ad-free experience.",
    ru: "Сделай учёбу удобнее и быстрее с безлимитными жизнями, 2× кристаллами и без рекламы.",
  },
  "about.prod.school.title": { az: "Imparo Məktəb", en: "Imparo for Schools", ru: "Imparo для школ" },
  "about.prod.school.desc": {
    az: "Müəllimlər üçün: sinif yarat, tapşırıq ver, şagirdlərin irəliləyişini izlə — hamısı bir yerdə.",
    en: "For teachers: create classes, assign tasks and track student progress — all in one place.",
    ru: "Для учителей: создавай классы, давай задания и отслеживай прогресс учеников — всё в одном месте.",
  },
  "about.more": { az: "Ətraflı", en: "Learn more", ru: "Подробнее" },
  "about.values.heading": { az: "Yanaşmamız", en: "Our approach", ru: "Наш подход" },
  "about.val.game.title": { az: "Oyun kimi öyrənmə", en: "Learning like a game", ru: "Учёба как игра" },
  "about.val.game.desc": {
    az: "XP, seriya, liqa və mükafatlar — motivasiyanı yüksək saxlayan təcrübə.",
    en: "XP, streaks, leagues and rewards — an experience that keeps motivation high.",
    ru: "XP, серии, лиги и награды — опыт, который держит мотивацию на высоте.",
  },
  "about.val.curriculum.title": { az: "Kurikuluma uyğun", en: "Curriculum-aligned", ru: "По учебной программе" },
  "about.val.curriculum.desc": {
    az: "Bütün məzmun Azərbaycan təhsil proqramına (1–8 sinif) uyğun hazırlanır — məktəblə sinxron.",
    en: "All content follows the Azerbaijani curriculum (grades 1–8) — in sync with school.",
    ru: "Весь контент соответствует азербайджанской программе (1–8 классы) — синхронно со школой.",
  },
  "about.val.access.title": { az: "Hamı üçün əlçatan", en: "Accessible to everyone", ru: "Доступно каждому" },
  "about.val.access.desc": {
    az: "Əsas öyrənmə pulsuzdur. Hədəfimiz keyfiyyətli təhsili hər şagirdə çatdırmaqdır.",
    en: "Core learning is free. Our goal is to bring quality education to every student.",
    ru: "Основное обучение бесплатно. Наша цель — дать качественное образование каждому ученику.",
  },
  "about.stats.subjects": { az: "Fənn", en: "Subjects", ru: "Предметы" },
  "about.stats.lessons": { az: "İnteraktiv dərs", en: "Interactive lessons", ru: "Интерактивных уроков" },
  "about.stats.grades": { az: "Sinif", en: "Grades", ru: "Классы" },
  "about.contact.heading": { az: "Bizimlə əlaqə", en: "Contact us", ru: "Свяжитесь с нами" },
  "about.contact.body": { az: "Sual, əməkdaşlıq və ya təklif üçün yaz:", en: "For questions, partnerships or feedback, write to us:", ru: "По вопросам, сотрудничеству или предложениям пишите нам:" },
  "about.cta.title": { az: "Öyrənməyə bu gün başla", en: "Start learning today", ru: "Начни учиться сегодня" },
  "about.cta.body": { az: "Pulsuz, sadə və əyləncəli. Zefi səni gözləyir!", en: "Free, simple and fun. Zefi is waiting for you!", ru: "Бесплатно, просто и весело. Zefi ждёт тебя!" },
  "about.cta.btn": { az: "Pulsuz başla", en: "Start free", ru: "Начать бесплатно" },

  // ── Footer (Haqqımızda + hüquqi səhifələr) ──
  "ft.col.products": { az: "Məhsullar", en: "Products", ru: "Продукты" },
  "ft.col.support": { az: "Dəstək", en: "Support", ru: "Поддержка" },
  "ft.col.legal": { az: "Hüquqi", en: "Legal", ru: "Правовое" },
  "ft.about": { az: "Haqqımızda", en: "About us", ru: "О нас" },
  "ft.mission": { az: "Missiya", en: "Mission", ru: "Миссия" },
  "ft.blog": { az: "Bloq", en: "Blog", ru: "Блог" },
  "ft.careers": { az: "Karyera", en: "Careers", ru: "Карьера" },
  "ft.efficacy": { az: "Səmərəlilik", en: "Efficacy", ru: "Эффективность" },
  "ft.school": { az: "Imparo Məktəb", en: "Imparo for Schools", ru: "Imparo для школ" },
  "ft.shop": { az: "Mağaza", en: "Store", ru: "Магазин" },
  "ft.help": { az: "Yardım mərkəzi", en: "Help center", ru: "Центр помощи" },
  "ft.contact": { az: "Əlaqə", en: "Contact", ru: "Контакты" },
  "ft.investors": { az: "İnvestorlar", en: "Investors", ru: "Инвесторы" },
  "ft.terms": { az: "Şərtlər", en: "Terms", ru: "Условия" },
  "ft.privacy": { az: "Məxfilik", en: "Privacy", ru: "Конфиденциальность" },
  "ft.rights": { az: "Bütün hüquqlar qorunur.", en: "All rights reserved.", ru: "Все права защищены." },

  // ── Hüquqi (ümumi) ──
  "legal.updated": { az: "Son yenilənmə: 12 avqust 2026", en: "Last updated: August 12, 2026", ru: "Обновлено: 12 августа 2026" },
  "legal.contactLine": { az: "Sualın var? Bizə yaz:", en: "Have a question? Write to us:", ru: "Есть вопрос? Напишите нам:" },

  // ── Info səhifələri (Bloq, Karyera, İnvestorlar, Səmərəlilik) ──
  "info.home": { az: "Ana səhifə", en: "Home", ru: "Главная" },
  "info.contactBtn": { az: "Bizə yaz", en: "Write to us", ru: "Написать нам" },

  "blog.title": { az: "Bloq", en: "Blog", ru: "Блог" },
  "blog.body": {
    az: "Tezliklə burada təhsil, öyrənmə üsulları və Imparo yenilikləri haqqında məqalələr paylaşacağıq. İzləməkdə qal!",
    en: "Soon we’ll share articles here about education, learning methods and Imparo updates. Stay tuned!",
    ru: "Скоро мы будем публиковать здесь статьи об образовании, методах обучения и новостях Imparo. Следите за обновлениями!",
  },

  "careers.title": { az: "Karyera", en: "Careers", ru: "Карьера" },
  "careers.body": {
    az: "Imparo Azərbaycan təhsilini dəyişmək istəyən kiçik, həvəsli komandadır. Hazırda rəsmi açıq vakansiyamız olmasa da, missiyamıza inanırsansa və töhfə vermək istəyirsənsə — bizə yaz. Müəllim, dizayner, developer və məzmun yaradıcılarını həmişə eşitməyə açıqıq.",
    en: "Imparo is a small, passionate team on a mission to transform education in Azerbaijan. We may not have formal openings right now, but if you believe in our mission and want to contribute — write to us. We’re always open to teachers, designers, developers and content creators.",
    ru: "Imparo — небольшая увлечённая команда, меняющая образование в Азербайджане. Сейчас у нас нет формальных вакансий, но если вы разделяете нашу миссию и хотите внести вклад — напишите нам. Мы всегда рады учителям, дизайнерам, разработчикам и авторам контента.",
  },

  "investors.title": { az: "İnvestorlar", en: "Investors", ru: "Инвесторы" },
  "investors.body": {
    az: "Imparo Azərbaycan bazarında böyüyən oyunlaşdırılmış təhsil platformasıdır — həm B2C (şagird/valideyn), həm B2B (məktəb/müəllim) istiqamətləri ilə. Əməkdaşlıq, sərmayə və ya strateji tərəfdaşlıq marağınız varsa, bizimlə əlaqə saxlayın.",
    en: "Imparo is a growing gamified education platform in the Azerbaijani market — with both B2C (students/parents) and B2B (schools/teachers) directions. If you’re interested in collaboration, investment or strategic partnership, get in touch.",
    ru: "Imparo — растущая геймифицированная образовательная платформа на азербайджанском рынке — с направлениями B2C (ученики/родители) и B2B (школы/учителя). Если вам интересно сотрудничество, инвестиции или стратегическое партнёрство — свяжитесь с нами.",
  },

  "efficacy.title": { az: "Səmərəlilik", en: "Efficacy", ru: "Эффективность" },
  "efficacy.intro": {
    az: "Imparo təsadüfi qurulmayıb — hər elementi öyrənmənin işləməsi üçün düşünülüb. Yanaşmamızın əsasında dayanan üç prinsip:",
    en: "Imparo isn’t built at random — every element is designed to make learning work. Three principles behind our approach:",
    ru: "Imparo построен не случайно — каждый элемент создан, чтобы обучение работало. Три принципа нашего подхода:",
  },
  "efficacy.p1t": { az: "Aralıqlı təkrar (SRS)", en: "Spaced repetition (SRS)", ru: "Интервальное повторение (SRS)" },
  "efficacy.p1b": {
    az: "Səhv etdiyin suallar düzgün cavablanana qədər təkrarlanır və vaxt keçdikcə yenidən qarşına çıxır — beləcə bilik uzunmüddətli yaddaşa köçür.",
    en: "Questions you get wrong repeat until answered correctly and resurface over time — so knowledge moves into long-term memory.",
    ru: "Вопросы, в которых вы ошиблись, повторяются до верного ответа и возвращаются со временем — так знания переходят в долговременную память.",
  },
  "efficacy.p2t": { az: "Oyunlaşdırma", en: "Gamification", ru: "Геймификация" },
  "efficacy.p2b": {
    az: "XP, seriya, liqa və mükafatlar motivasiyanı yüksək saxlayır və gündəlik öyrənmə vərdişi formalaşdırır.",
    en: "XP, streaks, leagues and rewards keep motivation high and build a daily learning habit.",
    ru: "XP, серии, лиги и награды поддерживают мотивацию и формируют ежедневную привычку к учёбе.",
  },
  "efficacy.p3t": { az: "Kurikuluma uyğunluq", en: "Curriculum alignment", ru: "Соответствие программе" },
  "efficacy.p3b": {
    az: "Bütün məzmun Azərbaycan təhsil proqramına (1–8 sinif) uyğundur — məktəbdə öyrənilənlə birbaşa üst-üstə düşür.",
    en: "All content aligns with the Azerbaijani curriculum (grades 1–8) — directly matching what’s learned at school.",
    ru: "Весь контент соответствует азербайджанской программе (1–8 классы) — напрямую совпадает с тем, что учат в школе.",
  },

  // ── Şərtlər ──
  "terms.title": { az: "İstifadə şərtləri", en: "Terms of Service", ru: "Условия использования" },
  "terms.s1.t": { az: "1. Şərtlərin qəbulu", en: "1. Acceptance of terms", ru: "1. Принятие условий" },
  "terms.s1.b": {
    az: "Imparo platformasından (“Xidmət”) istifadə edərək bu İstifadə şərtlərini qəbul etmiş olursan. Razı deyilsənsə, Xidmətdən istifadə etmə. Bu şərtlər vaxtaşırı yenilənə bilər.",
    en: "By using the Imparo platform (the “Service”) you accept these Terms of Service. If you do not agree, do not use the Service. These terms may be updated from time to time.",
    ru: "Используя платформу Imparo («Сервис»), вы принимаете настоящие Условия. Если вы не согласны, не пользуйтесь Сервисом. Эти условия могут периодически обновляться.",
  },
  "terms.s2.t": { az: "2. Xidmətin təsviri", en: "2. Description of the Service", ru: "2. Описание Сервиса" },
  "terms.s2.b": {
    az: "Imparo — 1–8-ci siniflər üçün Riyaziyyat, Azərbaycan dili və İngilis dili üzrə oyunlaşdırılmış onlayn öyrənmə platformasıdır. Məzmun və funksiyalar zamanla dəyişə bilər.",
    en: "Imparo is a gamified online learning platform for grades 1–8 covering Math, Azerbaijani and English. Content and features may change over time.",
    ru: "Imparo — геймифицированная онлайн-платформа для 1–8 классов по математике, азербайджанскому и английскому. Контент и функции могут меняться со временем.",
  },
  "terms.s3.t": { az: "3. Hesab və yaş", en: "3. Account and age", ru: "3. Аккаунт и возраст" },
  "terms.s3.b": {
    az: "Hesab yaratmaq üçün doğru məlumat verməlisən və parolunun təhlükəsizliyinə özün cavabdehsən. Xidmət məktəblilərə yönəlib; 13 yaşdan kiçik istifadəçilər üçün valideyn/qəyyum razılığı və nəzarəti tələb olunur.",
    en: "You must provide accurate information and are responsible for the security of your password. The Service is aimed at students; users under 13 require parental/guardian consent and supervision.",
    ru: "Вы должны предоставить достоверные данные и отвечаете за безопасность своего пароля. Сервис предназначен для школьников; пользователям младше 13 лет требуется согласие и контроль родителей/опекунов.",
  },
  "terms.s4.t": { az: "4. Qəbuledilən istifadə", en: "4. Acceptable use", ru: "4. Допустимое использование" },
  "terms.s4.b": {
    az: "Qadağandır:\n• Xidməti qanunsuz məqsədlə və ya başqalarına zərər üçün istifadə etmək;\n• Sistemə icazəsiz daxil olmağa və ya onu pozmağa cəhd etmək;\n• Məzmunu icazəsiz kopyalamaq, satmaq və ya yenidən yaymaq;\n• Digər istifadəçiləri təhqir etmək və ya aldatmaq.",
    en: "The following are prohibited:\n• Using the Service for unlawful purposes or to harm others;\n• Attempting unauthorized access to or disruption of the system;\n• Copying, selling or redistributing content without permission;\n• Insulting or deceiving other users.",
    ru: "Запрещается:\n• Использовать Сервис в незаконных целях или во вред другим;\n• Пытаться получить несанкционированный доступ или нарушить работу системы;\n• Копировать, продавать или распространять контент без разрешения;\n• Оскорблять или обманывать других пользователей.",
  },
  "terms.s5.t": { az: "5. Imparo Plus və ödənişlər", en: "5. Imparo Plus and payments", ru: "5. Imparo Plus и платежи" },
  "terms.s5.b": {
    az: "Əsas öyrənmə pulsuzdur. Imparo Plus əlavə üstünlüklər təqdim edən ödənişli abunəlikdir. Qiymətlər platformada göstərilir və dəyişə bilər. Ödənişlər üçüncü tərəf provayder vasitəsilə emal olunur; abunəlik ləğv edilməyənə qədər avtomatik yenilənə bilər. Ləğvi istənilən vaxt edə bilərsən.",
    en: "Core learning is free. Imparo Plus is a paid subscription offering extra benefits. Prices are shown on the platform and may change. Payments are processed by a third-party provider; the subscription may auto-renew until cancelled. You can cancel at any time.",
    ru: "Основное обучение бесплатно. Imparo Plus — платная подписка с дополнительными преимуществами. Цены указаны на платформе и могут меняться. Платежи обрабатываются сторонним провайдером; подписка может продлеваться автоматически до отмены. Отменить можно в любой момент.",
  },
  "terms.s6.t": { az: "6. Əqli mülkiyyət", en: "6. Intellectual property", ru: "6. Интеллектуальная собственность" },
  "terms.s6.b": {
    az: "Platformadakı bütün məzmun, dizayn, loqo və Zefi personajı Imparo-ya məxsusdur və müəllif hüquqları ilə qorunur. Şəxsi, qeyri-kommersiya öyrənmə məqsədi xaricində istifadə qadağandır.",
    en: "All content, design, logo and the Zefi character on the platform belong to Imparo and are protected by copyright. Use outside personal, non-commercial learning is prohibited.",
    ru: "Весь контент, дизайн, логотип и персонаж Zefi на платформе принадлежат Imparo и защищены авторским правом. Использование вне личного некоммерческого обучения запрещено.",
  },
  "terms.s7.t": { az: "7. Xidmətin dayandırılması", en: "7. Suspension of the Service", ru: "7. Приостановка Сервиса" },
  "terms.s7.b": {
    az: "Bu şərtləri pozan hesabları xəbərdarlıqla və ya xəbərdarlıqsız məhdudlaşdıra/dayandıra bilərik. Sən də istənilən vaxt hesabını silə bilərsən.",
    en: "We may restrict or suspend accounts that violate these terms, with or without notice. You may also delete your account at any time.",
    ru: "Мы можем ограничить или приостановить аккаунты, нарушающие эти условия, с уведомлением или без. Вы также можете удалить свой аккаунт в любое время.",
  },
  "terms.s8.t": { az: "8. Zəmanətlərdən imtina", en: "8. Disclaimer of warranties", ru: "8. Отказ от гарантий" },
  "terms.s8.b": {
    az: "Xidmət “olduğu kimi” təqdim olunur. Fasiləsiz və qüsursuz işləyəcəyinə zəmanət vermirik. Qanunun icazə verdiyi həddə, istifadədən yaranan dolayı zərərlərə görə məsuliyyət daşımırıq.",
    en: "The Service is provided “as is”. We do not guarantee it will be uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect damages arising from use.",
    ru: "Сервис предоставляется «как есть». Мы не гарантируем бесперебойную и безошибочную работу. В пределах, допустимых законом, мы не несём ответственности за косвенный ущерб от использования.",
  },
  "terms.s9.t": { az: "9. Əlaqə", en: "9. Contact", ru: "9. Контакты" },
  "terms.s9.b": {
    az: "Şərtlərlə bağlı suallar üçün: m.alakbarli2007@gmail.com və ya ichbinmahammad@gmail.com.",
    en: "For questions about these terms: m.alakbarli2007@gmail.com or ichbinmahammad@gmail.com.",
    ru: "По вопросам об условиях: m.alakbarli2007@gmail.com или ichbinmahammad@gmail.com.",
  },

  // ── Məxfilik ──
  "privacy.title": { az: "Məxfilik siyasəti", en: "Privacy Policy", ru: "Политика конфиденциальности" },
  "privacy.s0.t": { az: "Qısaca", en: "In short", ru: "Кратко" },
  "privacy.s0.b": {
    az: "Imparo sənin məxfiliyinə hörmət edir. Yalnız Xidməti təqdim etmək üçün lazım olan məlumatları toplayırıq, onları satmırıq və qorunması üçün tədbirlər görürük.",
    en: "Imparo respects your privacy. We collect only the data needed to provide the Service, we do not sell it, and we take measures to protect it.",
    ru: "Imparo уважает вашу конфиденциальность. Мы собираем только данные, нужные для работы Сервиса, не продаём их и принимаем меры для их защиты.",
  },
  "privacy.s1.t": { az: "1. Topladığımız məlumatlar", en: "1. Data we collect", ru: "1. Какие данные мы собираем" },
  "privacy.s1.b": {
    az: "• Hesab məlumatı: ad, e-poçt, (Google ilə girişdə) profil məlumatı;\n• Öyrənmə məlumatı: irəliləyiş, XP, seriya, zümrüd, cavablar, tamamlanan dərslər;\n• Texniki məlumat: cihaz/brauzer növü, təxmini istifadə statistikası;\n• Ödəniş məlumatı: Plus alınarsa ödəniş üçüncü tərəf provayder tərəfindən emal olunur — kart məlumatlarını biz saxlamırıq.",
    en: "• Account data: name, email, (with Google sign-in) profile info;\n• Learning data: progress, XP, streaks, gems, answers, completed lessons;\n• Technical data: device/browser type, approximate usage statistics;\n• Payment data: if you buy Plus, payment is processed by a third-party provider — we do not store card details.",
    ru: "• Данные аккаунта: имя, эл. почта, (при входе через Google) данные профиля;\n• Данные обучения: прогресс, XP, серии, кристаллы, ответы, пройденные уроки;\n• Технические данные: тип устройства/браузера, приблизительная статистика использования;\n• Платёжные данные: при покупке Plus платёж обрабатывается сторонним провайдером — данные карты мы не храним.",
  },
  "privacy.s2.t": { az: "2. Məlumatdan necə istifadə edirik", en: "2. How we use data", ru: "2. Как мы используем данные" },
  "privacy.s2.b": {
    az: "• Xidməti təqdim etmək və irəliləyişini yadda saxlamaq;\n• Platformanı yaxşılaşdırmaq;\n• Təhlükəsizlik və sui-istifadənin qarşısını almaq;\n• Səninlə vacib məlumatlar barədə əlaqə saxlamaq.",
    en: "• To provide the Service and save your progress;\n• To improve the platform;\n• For security and to prevent abuse;\n• To contact you about important matters.",
    ru: "• Для предоставления Сервиса и сохранения прогресса;\n• Для улучшения платформы;\n• Для безопасности и предотвращения злоупотреблений;\n• Для связи с вами по важным вопросам.",
  },
  "privacy.s3.t": { az: "3. Uşaqların məxfiliyi", en: "3. Children’s privacy", ru: "3. Конфиденциальность детей" },
  "privacy.s3.b": {
    az: "Xidmət məktəblilərə yönəlib. 13 yaşdan kiçik uşaqların hesabları valideyn/qəyyum razılığı və nəzarəti ilə istifadə olunmalıdır. Uşaqlardan zəruri olmayan şəxsi məlumat toplamamağa çalışırıq.",
    en: "The Service is aimed at students. Accounts of children under 13 must be used with parental/guardian consent and supervision. We avoid collecting unnecessary personal data from children.",
    ru: "Сервис предназначен для школьников. Аккаунты детей младше 13 лет должны использоваться с согласия и под контролем родителей/опекунов. Мы стараемся не собирать лишние личные данные детей.",
  },
  "privacy.s4.t": { az: "4. Üçüncü tərəf xidmətləri", en: "4. Third-party services", ru: "4. Сторонние сервисы" },
  "privacy.s4.b": {
    az: "Xidmət etibarlı provayderlərdən istifadə edir:\n• Supabase — məlumat bazası və autentifikasiya;\n• PostHog — anonim/aqreqat istifadə analitikası;\n• Google — istəyə bağlı “Google ilə giriş”;\n• Ödəniş provayderi — Imparo Plus ödənişləri.\nBu provayderlər öz məxfilik siyasətlərinə tabedir.",
    en: "The Service uses trusted providers:\n• Supabase — database and authentication;\n• PostHog — anonymous/aggregate usage analytics;\n• Google — optional “Sign in with Google”;\n• Payment provider — Imparo Plus payments.\nThese providers follow their own privacy policies.",
    ru: "Сервис использует надёжных провайдеров:\n• Supabase — база данных и аутентификация;\n• PostHog — анонимная/сводная аналитика использования;\n• Google — опциональный «Вход через Google»;\n• Платёжный провайдер — платежи Imparo Plus.\nЭти провайдеры следуют своим политикам конфиденциальности.",
  },
  "privacy.s5.t": { az: "5. Kukilər və lokal yaddaş", en: "5. Cookies and local storage", ru: "5. Куки и локальное хранилище" },
  "privacy.s5.b": {
    az: "Girişi saxlamaq, seçimlərini yadda saxlamaq və təcrübəni yaxşılaşdırmaq üçün brauzerin lokal yaddaşından (localStorage) və zəruri kukilərdən istifadə edirik.",
    en: "We use the browser’s local storage (localStorage) and essential cookies to keep you signed in, remember your preferences and improve the experience.",
    ru: "Мы используем локальное хранилище браузера (localStorage) и необходимые куки, чтобы сохранять вход, запоминать настройки и улучшать работу.",
  },
  "privacy.s6.t": { az: "6. Saxlanma və təhlükəsizlik", en: "6. Retention and security", ru: "6. Хранение и безопасность" },
  "privacy.s6.b": {
    az: "Məlumatları yalnız lazım olduğu müddətdə saxlayırıq. Sənaye standartı təhlükəsizlik tədbirləri tətbiq edirik, lakin internetdə heç bir sistem 100% təhlükəsiz deyil.",
    en: "We keep data only as long as necessary. We apply industry-standard security measures, but no system on the internet is 100% secure.",
    ru: "Мы храним данные только столько, сколько необходимо. Мы применяем отраслевые меры безопасности, но ни одна система в интернете не защищена на 100%.",
  },
  "privacy.s7.t": { az: "7. Hüquqların", en: "7. Your rights", ru: "7. Ваши права" },
  "privacy.s7.b": {
    az: "Öz məlumatına baxmaq, düzəltmək və ya silmək hüququn var. Hesabını istənilən vaxt platformadan və ya bizə yazaraq sildirə bilərsən — bu, əlaqəli məlumatlarını da silir.",
    en: "You have the right to access, correct or delete your data. You can delete your account at any time from the platform or by writing to us — this also removes your related data.",
    ru: "Вы вправе просматривать, исправлять или удалять свои данные. Вы можете удалить аккаунт в любое время на платформе или написав нам — это также удалит связанные данные.",
  },
  "privacy.s8.t": { az: "8. Dəyişikliklər", en: "8. Changes", ru: "8. Изменения" },
  "privacy.s8.b": {
    az: "Bu siyasəti yeniləyə bilərik. Əhəmiyyətli dəyişikliklər barədə platformada məlumat veririk.",
    en: "We may update this policy. We will announce significant changes on the platform.",
    ru: "Мы можем обновлять эту политику. О существенных изменениях мы сообщим на платформе.",
  },
  "privacy.s9.t": { az: "9. Əlaqə", en: "9. Contact", ru: "9. Контакты" },
  "privacy.s9.b": {
    az: "Məxfiliklə bağlı suallar üçün: m.alakbarli2007@gmail.com və ya ichbinmahammad@gmail.com.",
    en: "For privacy questions: m.alakbarli2007@gmail.com or ichbinmahammad@gmail.com.",
    ru: "По вопросам конфиденциальности: m.alakbarli2007@gmail.com или ichbinmahammad@gmail.com.",
  },
};

export function getLang(): Lang {
  if (typeof window === "undefined") return "az";
  try {
    const p = JSON.parse(localStorage.getItem("bilik-prefs") || "{}");
    return (p.lang as Lang) || "az";
  } catch {
    return "az";
  }
}

export function t(key: string, lang: Lang = getLang()): string {
  return DICT[key]?.[lang] ?? DICT[key]?.az ?? key;
}

// Açar sözlükdə varmı? Naməlum id-lər (məs. admin paneldən yaradılmış bölmələr)
// üçün xam açar əvəzinə DB başlığına düşmək qərarında istifadə olunur.
export function hasKey(key: string): boolean {
  return key in DICT;
}

// Hydration-təhlükəsiz: server və hidrasiya "az", sonra real dil.
// useSyncExternalStore hidrasiya uyğunsuzluğu vermədən localStorage dilini oxuyur
// və "bilik-lang" / storage hadisələrində yenilənir.
function subscribeLang(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  window.addEventListener("bilik-lang", cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener("bilik-lang", cb);
  };
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribeLang, getLang, () => "az" as Lang);
}

export function useT(): (key: string) => string {
  const lang = useLang();
  return (key: string) => t(key, lang);
}
