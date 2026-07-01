// Tədris platformasının əsas məlumat tipləri.
// Bu tiplər həm lokal seed məzmununda, həm də sonradan Supabase DB-də istifadə olunur.

export type TaskType = "multiple_choice" | "fill_blank" | "numeric";

// Bütün tapşırıqlar üçün ümumi sahələr
interface TaskBase {
  id: string;
  type: TaskType;
  prompt: string; // sualın mətni
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

export interface Lesson {
  id: string;
  title: string;
  intro: string; // dərsin qısa izahı (markdown/mətn)
  tasks: Task[];
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
