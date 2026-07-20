-- Bilik Yolu — admin paneli üçün: məzmun sxemini tamamla + admin rolu + yazı RLS.
-- Supabase SQL Editor-da işə salınır.
--
-- Niyə: məzmun (fənn/bölmə/dərs/tapşırıq) DB-yə keçir ki, admin paneldən redaktə oluna bilsin.
-- lessons cədvəlində visual/sections yox idi (dərs giriş səhifəsinin qaydaları) — əlavə olunur.

-- 1. Dərs sxemini tamamla (hero illüstrasiya açarı + qayda bölmələri).
alter table lessons add column if not exists visual text;
alter table lessons add column if not exists sections jsonb;

-- 2. Admin bayrağı.
alter table profiles add column if not exists is_admin boolean not null default false;

-- 3. Admin yoxlaması (RLS siyasətlərində istifadə üçün — RLS-i keçmək lazım deyil).
create or replace function is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select p.is_admin from profiles p where p.id = auth.uid()), false);
$$;
grant execute on function is_admin() to authenticated;

-- 4. Content cədvəllərinə admin yazı icazəsi (public read qalır — bax 0002).
--    Yalnız is_admin() olanlar insert/update/delete edə bilər.
do $$
declare tbl text;
begin
  foreach tbl in array array['subjects','units','lessons','tasks'] loop
    execute format('drop policy if exists "admin write %1$s" on %1$s;', tbl);
    execute format(
      'create policy "admin write %1$s" on %1$s for all using (is_admin()) with check (is_admin());',
      tbl
    );
  end loop;
end $$;

-- 5. Öz hesabını admin et (öz istifadəçi id-ni yaz və ya email ilə).
--    Supabase SQL Editor-da bunu ayrıca işə sal:
--
--    update profiles set is_admin = true
--    where id = (select id from auth.users where email = 'm.alakbarli2007@gmail.com');
