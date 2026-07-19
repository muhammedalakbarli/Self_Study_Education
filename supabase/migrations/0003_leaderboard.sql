-- Bilik Yolu — həftəlik liqa (leaderboard)
-- Supabase SQL Editor-da işə salınır.
-- Hər istifadəçinin həftəlik XP-si; liqa səhifəsi hamının sətrini oxuyur (yalnız ad + xp).

create table if not exists leaderboard (
  user_id uuid not null references profiles(id) on delete cascade,
  week text not null,               -- ISO həftə açarı, məs. "2026-W29"
  name text not null,
  xp int not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, week)
);

create index if not exists leaderboard_week_xp_idx on leaderboard (week, xp desc);

alter table leaderboard enable row level security;

-- Hamı oxuya bilər (yalnız ad + həftəlik xp göstərilir — məxfilik üçün başqa sahə yoxdur).
drop policy if exists "public read leaderboard" on leaderboard;
create policy "public read leaderboard" on leaderboard for select using (true);

-- Yalnız öz sətrini yaza bilər.
drop policy if exists "own leaderboard write" on leaderboard;
create policy "own leaderboard write" on leaderboard
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Atomik increment (read-modify-write race olmasın). auth.uid()-in sətrinə yazır.
create or replace function add_leaderboard_xp(p_week text, p_name text, p_amount int)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null or p_amount <= 0 then
    return;
  end if;
  insert into leaderboard (user_id, week, name, xp)
  values (auth.uid(), p_week, p_name, p_amount)
  on conflict (user_id, week) do update
    set xp = leaderboard.xp + excluded.xp,
        name = excluded.name,
        updated_at = now();
end;
$$;

grant execute on function add_leaderboard_xp(text, text, int) to authenticated;
