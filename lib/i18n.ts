"use client";

// Sadə i18n: AZ/EN/RU lüğət + hydration-təhlükəsiz useT hook.
// Dil `bilik-prefs` (localStorage) içində saxlanılır; dəyişəndə səhifə yenilənir.
// Qeyd: dərs məzmunu (suallar/variantlar) 5-ci sinif kurikulumu olduğu üçün AZ qalır.

import { useEffect, useState } from "react";
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
  "nav.profile": { az: "Profil", en: "Profile", ru: "Профиль" },
  "nav.more": { az: "Daha çoxu", en: "More", ru: "Ещё" },
  "nav.settings": { az: "Ayarlar", en: "Settings", ru: "Настройки" },
  "nav.help": { az: "Yardım mərkəzi", en: "Help center", ru: "Центр помощи" },
  "nav.logout": { az: "Çıxış", en: "Log out", ru: "Выйти" },

  // Fənn adları (tab-lar, başlıqlar, irəliləyiş)
  "subject.riyaziyyat": { az: "Riyaziyyat", en: "Mathematics", ru: "Математика" },
  "subject.azerbaycan-dili": { az: "Azərbaycan dili", en: "Azerbaijani", ru: "Азербайджанский" },
  "subject.ingilis-dili": { az: "İngilis dili", en: "English", ru: "Английский" },

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

  // Ortaq statistikalar
  "stat.xp": { az: "XP", en: "XP", ru: "XP" },
  "stat.streak": { az: "gün seriya", en: "day streak", ru: "дней подряд" },
  "stat.completed": { az: "tamamlandı", en: "completed", ru: "завершено" },

  // Öyrən (dashboard)
  "dash.title": { az: "Öyrən", en: "Learn", ru: "Учёба" },
  "dash.greeting": { az: "Salam", en: "Hi", ru: "Привет" },
  "dash.continue": { az: "davam edək", en: "let's continue", ru: "продолжим" },
  "dash.dailyBanner": {
    az: "Gündəlik challenge səni gözləyir — 5 tapşırıq",
    en: "Your daily challenge awaits — 5 tasks",
    ru: "Тебя ждёт ежедневный челлендж — 5 заданий",
  },
  "dash.start": { az: "Başla", en: "Start", ru: "Начать" },
  "dash.next": { az: "Növbəti", en: "Next", ru: "Далее" },
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
  "practice.mistakes": { az: "Səhvlər üzərində iş", en: "Review mistakes", ru: "Работа над ошибками" },
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
  "practice.noMistakes": { az: "Səhvin yoxdur — əla!", en: "No mistakes — great!", ru: "Ошибок нет — отлично!" },

  // Profil
  "profile.progress": { az: "Fənlər üzrə irəliləyiş", en: "Progress by subject", ru: "Прогресс по предметам" },
  "profile.badges": { az: "Nişanlar", en: "Badges", ru: "Награды" },
  "profile.badgesHint": {
    az: "İrəlilədikcə yeni nişanlar açılır",
    en: "Unlock new badges as you progress",
    ru: "Открывай новые награды по мере прогресса",
  },
  "profile.logout": { az: "Hesabdan çıx", en: "Log out", ru: "Выйти из аккаунта" },

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

// Hydration-təhlükəsiz: server və ilk render "az", mount-dan sonra real dil.
export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("az");
  useEffect(() => setLang(getLang()), []);
  return lang;
}

export function useT(): (key: string) => string {
  const lang = useLang();
  return (key: string) => t(key, lang);
}
