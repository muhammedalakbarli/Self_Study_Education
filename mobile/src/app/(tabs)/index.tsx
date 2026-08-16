import { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, ActivityIndicator, RefreshControl } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { Flame, Gem, Check, Star, Lock, Heart } from "lucide-react-native";
import { useAuth, userGrade } from "@/lib/auth";
import { fetchContentTree } from "@/lib/content";
import { loadProgress, lessonState, type Progress } from "@/lib/progress";
import { loadHearts, MAX_HEARTS } from "@/lib/hearts";
import { loadPlus } from "@/lib/plus";
import type { Subject } from "@/lib/types";
import { C } from "@/lib/theme";

export default function Learn() {
  const router = useRouter();
  const { user } = useAuth();
  const grade = userGrade(user);
  const [subjects, setSubjects] = useState<Subject[] | null>(null);
  const [prog, setProg] = useState<Progress | null>(null);
  const [activeSlug, setActiveSlug] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [plus, setPlus] = useState(false);

  const load = useCallback(async () => {
    const [tree, p, h, pl] = await Promise.all([
      fetchContentTree(),
      user ? loadProgress(user.id) : Promise.resolve(null),
      loadHearts(),
      loadPlus(),
    ]);
    setSubjects(tree);
    setProg(p);
    setHearts(h);
    setPlus(pl);
  }, [user]);

  useEffect(() => {
    // async data-loader: setState await-dən sonra baş verir, sinxron cascade yoxdur.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);
  // Dərsdən qayıdanda irəliləyişi + can yenilə.
  useFocusEffect(
    useCallback(() => {
      if (user) loadProgress(user.id).then(setProg);
      loadHearts().then(setHearts).catch(() => {});
    }, [user]),
  );

  const shown = useMemo(() => (subjects ?? []).filter((s) => s.grade === grade), [subjects, grade]);
  const active = shown.find((s) => s.slug === activeSlug) ?? shown[0];

  const nodes = useMemo(() => {
    if (!active) return [];
    const lessons = active.units.flatMap((u) => u.lessons);
    const order = lessons.map((l) => l.id);
    const done = prog?.completedLessons ?? [];
    return active.units.flatMap((u) =>
      u.lessons.map((l, i) => ({
        id: l.id,
        title: l.title,
        unit: i === 0 ? u.title : null,
        state: lessonState(order, l.id, done),
      })),
    );
  }, [active, prog]);

  if (!subjects || !prog) {
    return (
      <View style={s.center}>
        <ActivityIndicator color={C.brand} size="large" />
      </View>
    );
  }

  if (shown.length === 0) {
    return (
      <View style={s.center}>
        <Text style={{ color: C.fg, fontSize: 18, fontWeight: "700" }}>Tezliklə!</Text>
        <Text style={{ color: C.muted, marginTop: 6, textAlign: "center", paddingHorizontal: 30 }}>
          {grade}-ci sinif üçün məzmun hazırlanır.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: C.ink }}>
      {/* Stat zolağı */}
      <View style={s.statbar}>
        <View style={s.stat}><Flame color={C.brand} size={22} fill={C.brand} /><Text style={s.statN}>{prog.streakDays}</Text></View>
        <View style={s.stat}><Gem color={C.success} size={22} fill={C.success} /><Text style={s.statN}>{prog.gems}</Text></View>
        <View style={s.stat}><Heart color={C.danger} size={22} fill={C.danger} /><Text style={s.statN}>{plus ? "∞" : hearts}</Text></View>
      </View>

      {/* Fənn seçici */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.subjects}>
        {shown.map((sub) => {
          const on = sub.slug === active?.slug;
          return (
            <Pressable key={sub.slug} onPress={() => setActiveSlug(sub.slug)} style={[s.chip, on && s.chipOn]}>
              <Text style={{ fontSize: 18 }}>{sub.icon}</Text>
              <Text style={[s.chipText, on && { color: C.white }]}>{sub.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Yol */}
      <ScrollView
        contentContainerStyle={s.path}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => { setRefreshing(true); await load(); setRefreshing(false); }} tintColor={C.brand} />}
      >
        {nodes.map((n, i) => {
          const offset = Math.round(Math.sin(i * 0.9) * 70);
          const bg = n.state === "done" ? C.success : n.state === "current" ? C.gold : C.panel2;
          const locked = n.state === "locked";
          return (
            <View key={n.id} style={{ width: "100%" }}>
              {n.unit ? <Text style={s.unit}>{n.unit}</Text> : null}
              <View style={{ alignItems: "center", transform: [{ translateX: offset }], paddingVertical: 8 }}>
                <Pressable
                  disabled={locked}
                  onPress={() => router.push(`/lesson/${n.id}`)}
                  style={[s.node, { backgroundColor: bg }, locked && { opacity: 0.55 }]}
                >
                  {n.state === "done" ? <Check color={C.white} size={30} strokeWidth={3} />
                    : n.state === "current" ? <Star color={C.white} size={30} fill={C.white} />
                    : <Lock color={C.muted} size={26} />}
                </Pressable>
                <Text style={s.nodeLabel} numberOfLines={1}>{n.title}</Text>
              </View>
            </View>
          );
        })}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, backgroundColor: C.ink, alignItems: "center", justifyContent: "center" },
  statbar: { flexDirection: "row", justifyContent: "flex-end", gap: 20, paddingHorizontal: 20, paddingTop: 14, paddingBottom: 6 },
  stat: { flexDirection: "row", alignItems: "center", gap: 5 },
  statN: { fontSize: 17, fontWeight: "800", color: C.fg },
  subjects: { gap: 8, paddingHorizontal: 16, paddingVertical: 8 },
  chip: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: C.panel, borderWidth: 2, borderColor: C.line, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8 },
  chipOn: { backgroundColor: C.brand, borderColor: C.brand },
  chipText: { fontWeight: "800", color: C.muted, fontSize: 13 },
  path: { paddingHorizontal: 16, paddingTop: 8 },
  unit: { textAlign: "center", fontWeight: "800", color: C.brand, backgroundColor: C.panel2, borderRadius: 14, paddingVertical: 8, marginVertical: 10 },
  node: { width: 74, height: 74, borderRadius: 37, alignItems: "center", justifyContent: "center", shadowColor: "#000", shadowOpacity: 0.15, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
  nodeLabel: { marginTop: 6, fontSize: 12, fontWeight: "600", color: C.fg, maxWidth: 120, textAlign: "center" },
});
