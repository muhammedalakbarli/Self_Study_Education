// Tədris platformasının əsas məlumat tipləri.
// Bu tiplər həm lokal seed məzmununda, həm də sonradan Supabase DB-də istifadə olunur.

export type TaskType = "multiple_choice" | "fill_blank" | "numeric";

// Tapşırığın yanında göstərilən şəkil (illüstrasiya) növləri
export type TaskFigure =
  | { kind: "fractionBar"; parts: number; filled: number } // bölünmüş zolaq
  | {
      kind: "compareBars";
      a: { parts: number; filled: number };
      b: { parts: number; filled: number };
    } // iki zolaq yan-yana
  | { kind: "dots"; total: number; filled?: number } // dairələr
  | { kind: "emoji"; items: string[] }; // emoji obyektlər

// Bütün tapşırıqlar üçün ümumi sahələr
interface TaskBase {
  id: string;
  type: TaskType;
  prompt: string; // sualın mətni
  figure?: TaskFigure; // sualı canlandıran şəkil (istəyə bağlı)
  xp: number; // düzgün cavaba görə qazanılan XP
}

// Çoxseçimli sual
export interface MultipleChoiceTask extends TaskBase {
  type: "multiple_choice";
  options: string[];
  correctIndex: number;
}

// Boşluq doldurma (mətn cavabı)
export interface FillBlankTask extends TaskBase {
  type: "fill_blank";
  // birdən çox düzgün variant ola bilər (məs. böyük/kiçik hərf)
  accepted: string[];
}

// Rəqəm cavabı (riyaziyyat)
export interface NumericTask extends TaskBase {
  type: "numeric";
  answer: number;
  tolerance?: number; // icazə verilən fərq (məs. onluq kəsrlər üçün)
}

export type Task = MultipleChoiceTask | FillBlankTask | NumericTask;

// Layihə (project) səhifəsindəki qayda bölməsi (holberton3 üslubu)
export interface RuleSection {
  heading?: string; // qalın alt başlıq
  body: string; // izah mətni (uşaq dilində)
}

// Lesson = "project": bir mövzu, öz qaydaları, tapşırıqları və son tarixi ilə.
export interface Lesson {
  id: string;
  title: string;
  intro: string; // qısa giriş cümləsi (uşaq dilində, sadə)
  visual?: string; // hero illüstrasiyanın açarı (bax LessonVisual)
  sections?: RuleSection[]; // ətraflı qaydalar (holberton3: şəkil altında)
  tasks: Task[]; // 15 əsas tapşırıq
  bonusTasks?: Task[]; // 5 bonus tapşırıq
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Subject {
  slug: string; // URL-də istifadə olunur, məs. "riyaziyyat"
  name: string;
  grade: number;
  icon: string; // emoji ikon
  color: string; // tailwind rəng sinfi üçün əsas ton, məs. "sky"
  units: Unit[];
}
