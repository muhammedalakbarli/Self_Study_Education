// POST /api/auth/signup — ad + email + parol ilə qeydiyyat.
// Uğurlu olsa session cookie qoyulur (email təsdiqi söndürülübsə).

import { createClient } from "@/lib/supabase/server";
import { ok, fail, readJson } from "@/lib/api/http";

interface Body {
  name?: string;
  email?: string;
  password?: string;
}

export async function POST(req: Request) {
  const body = await readJson<Body>(req);
  if (!body) return fail("Yanlış JSON gövdəsi");

  const { name, email, password } = body;
  if (!email || !password) return fail("email və password tələb olunur");
  if (password.length < 6) return fail("Parol ən azı 6 simvol olmalıdır");

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name: name ?? "" } },
  });
  if (error) return fail(error.message, 400);

  return ok(
    {
      user: data.user
        ? { id: data.user.id, email: data.user.email, name: name ?? "" }
        : null,
      needsEmailConfirm: !data.session,
    },
    201,
  );
}
