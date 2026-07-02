// Brauzer (client) üçün Supabase client-i.
// "use client" komponentlərində istifadə olunur (login/signup, auth vəziyyəti).

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
