// İstifadəçinin sinfi — onboardingdə seçilib user_metadata.grade-də saxlanılır.
// App məzmunu bu sinfə görə süzür (dashboard yalnız uyğun sinfin fənlərini göstərir).

import type { User } from "@supabase/supabase-js";

// Onboarding sinfi (5–8). Yoxdursa/etibarsızsa default 5.
export function userGrade(user: User | null): number {
  const g = user?.user_metadata?.grade;
  return typeof g === "number" && g >= 5 && g <= 11 ? g : 5;
}

// Hazırda məzmunu olan siniflər (settings sinif dəyişdiricisi bunları göstərir).
export const GRADES_WITH_CONTENT = [5, 6];
