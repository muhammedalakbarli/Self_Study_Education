// Auth konteksti — Supabase sessiyası (AsyncStorage-də qalır).
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "./supabase";

interface AuthState {
  session: Session | null;
  user: User | null;
  ready: boolean;
}
const Ctx = createContext<AuthState>({ session: null, user: null, ready: false });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <Ctx.Provider value={{ session, user: session?.user ?? null, ready }}>{children}</Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);

// İstifadəçinin sinfi (onboarding user_metadata.grade), yoxdursa 5.
export function userGrade(user: User | null): number {
  const g = user?.user_metadata?.grade;
  return typeof g === "number" && g >= 1 && g <= 11 ? g : 5;
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email: email.trim(), password });
}
export async function signUp(email: string, password: string, name: string, grade: number) {
  return supabase.auth.signUp({
    email: email.trim(),
    password,
    options: { data: { name: name.trim(), grade } },
  });
}
// Sinfi yenilə (profil-də dəyişmək üçün) — user_metadata.grade.
export async function updateGrade(grade: number) {
  return supabase.auth.updateUser({ data: { grade } });
}
export async function signOut() {
  return supabase.auth.signOut();
}
