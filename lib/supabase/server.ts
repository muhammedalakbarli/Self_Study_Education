// Server (RSC / route handler) üçün Supabase client-i.
// Next 16-da `cookies()` async-dır — ona görə funksiya async-dır.
// Gələcəkdə server tərəfdə progress/DB sorğuları üçün istifadə olunacaq.

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          // RSC-dən çağırılanda cookie yazıla bilməz — səhvi udmaq təhlükəsizdir
          // (sessiya middleware/route handler tərəfindən yenilənir).
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // no-op
          }
        },
      },
    },
  );
}
