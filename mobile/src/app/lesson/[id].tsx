import { useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { X, Check } from "lucide-react-native";
import { useAuth } from "@/lib/auth";
import { fetchContentTree } from "@/lib/content";
import { gradeTask, type UserAnswer } from "@/lib/grading";
import { completeLesson } from "@/lib/progress";
import type { Lesson, Task } from "@/lib/types";
import { C } from "@/lib/theme";
import Mascot from "@/components/Mascot";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();
  const [lesson, setLesson] = useState<Lesson | null | undefined>(undefined);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [earned, setEarned] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetchContentTree().then((tree) => {
      for (const s of tree) for (const u of s.units) {
        const l = u.lessons.find((x) => x.id === id);
        if (l) return setLesson(l);
      }
      setLesson(null);
    });
  }, [id]);

  const tasks = lesson?.tasks ?? [];
  const task = tasks[index];
  const total = tasks.length;

  function check() {
    if (answer === null || answer === "") return;
    const r = gradeTask(task, answer);
    setCorrect(r.correct);
    if (r.correct) setEarned((x) => x + 2); // web ilə eyni: hər düz cavab +2 XP
    setChecked(true);
  }
  async function next() {
    setAnswer(null);
    setChecked(false);
    if (index + 1 < total) {
      setIndex((i) => i + 1);
    } else {
      if (user) await completeLesson(user.id, String(id), earned).catch(() => {});
      setDone(true);
    }
  }

  if (lesson === undefined) return <View style={s.center}><ActivityIndicator color={C.brand} size="large" /></View>;
  if (lesson === null || total === 0) {
    return <View style={s.center}><Text style={{ color: C.muted }}>Dərs tapılmadı.</Text><Pressable onPress={() => router.back()}><Text style={s.link}>Geri</Text></Pressable></View>;
  }

  if (done) {
    return (
      <View style={s.center}>
        <Mascot size={130} mood="celebrate" />
        <Text style={s.doneTitle}>Dərs tamamlandı! 🎉</Text>
        <Text style={s.doneXp}>+{earned} XP</Text>
        <Pressable style={s.btn} onPress={() => router.back()}><Text style={s.btnText}>Davam et</Text></Pressable>
      </View>
    );
  }

  const pct = Math.round((index / total) * 100);
  const isChoice = task.type === "multiple_choice" || task.type === "listening";
  const options = isChoice ? (task as any).options as string[] : [];

  return (
    <View style={{ flex: 1, backgroundColor: C.ink }}>
      {/* Üst bar */}
      <View style={s.top}>
        <Pressable onPress={() => router.back()} hitSlop={10}><X color={C.muted} size={26} /></Pressable>
        <View style={s.progress}><View style={[s.progressFill, { width: `${Math.max(pct, 3)}%` }]} /></View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 140 }}>
        <Text style={s.taskNo}>Tapşırıq {index + 1} / {total}</Text>
        <Text style={s.prompt}>{task.prompt}</Text>

        {isChoice ? (
          options.map((opt, i) => {
            const sel = answer === i;
            const reveal = checked;
            const isCorrectOpt = i === (task as any).correctIndex;
            const tone = reveal
              ? isCorrectOpt ? { borderColor: C.success, backgroundColor: "#2FB17022" }
                : sel ? { borderColor: C.danger, backgroundColor: "#FF6B5E22" } : {}
              : sel ? { borderColor: C.brand, backgroundColor: "#F47B3A18" } : {};
            return (
              <Pressable key={i} disabled={checked} onPress={() => setAnswer(i)} style={[s.opt, tone]}>
                <Text style={s.optText}>{opt}</Text>
              </Pressable>
            );
          })
        ) : (
          <TextInput
            style={s.input}
            placeholder="Cavabını yaz…"
            placeholderTextColor={C.muted}
            editable={!checked}
            value={answer !== null ? String(answer) : ""}
            onChangeText={setAnswer}
            keyboardType={task.type === "numeric" ? "numeric" : "default"}
            autoCapitalize="none"
          />
        )}
      </ScrollView>

      {/* Alt: yoxla/növbəti + rəy */}
      <View style={[s.bottom, checked && { backgroundColor: correct ? "#2FB17018" : "#FF6B5E18" }]}>
        {checked && (
          <Text style={[s.feedback, { color: correct ? C.success : C.danger }]}>
            {correct ? "Əla! 🦊" : "Bir də yoxlayaq"}
          </Text>
        )}
        <Pressable
          style={[s.cta, { backgroundColor: checked ? (correct ? C.success : C.danger) : C.brand }, (answer === null || answer === "") && !checked && { opacity: 0.5 }]}
          disabled={(answer === null || answer === "") && !checked}
          onPress={checked ? next : check}
        >
          <Text style={s.ctaText}>{checked ? (index + 1 < total ? "Növbəti" : "Bitir") : "Yoxla"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, backgroundColor: C.ink, alignItems: "center", justifyContent: "center", gap: 12, padding: 24 },
  link: { color: C.brand, fontWeight: "700", marginTop: 12 },
  top: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 16, paddingTop: 16 },
  progress: { flex: 1, height: 14, backgroundColor: C.panel2, borderRadius: 8, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: C.brand, borderRadius: 8 },
  taskNo: { color: C.muted, fontWeight: "700", fontSize: 12, textTransform: "uppercase" },
  prompt: { color: C.fg, fontSize: 22, fontWeight: "800", marginTop: 8, marginBottom: 20 },
  opt: { borderWidth: 2, borderColor: C.line, backgroundColor: C.panel, borderRadius: 16, padding: 16, marginBottom: 12 },
  optText: { fontSize: 17, fontWeight: "600", color: C.fg },
  input: { borderWidth: 2, borderColor: C.line, backgroundColor: C.panel, borderRadius: 16, padding: 16, fontSize: 18, color: C.fg },
  bottom: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, paddingBottom: 28, backgroundColor: C.ink, borderTopWidth: 1, borderTopColor: C.line, gap: 8 },
  feedback: { fontSize: 17, fontWeight: "800" },
  cta: { borderRadius: 16, paddingVertical: 15, alignItems: "center" },
  ctaText: { color: C.white, fontSize: 17, fontWeight: "800", textTransform: "uppercase" },
  doneTitle: { fontSize: 24, fontWeight: "800", color: C.fg, marginTop: 10 },
  doneXp: { fontSize: 20, fontWeight: "900", color: C.accent },
  btn: { backgroundColor: C.brand, borderRadius: 16, paddingVertical: 15, paddingHorizontal: 40, marginTop: 16 },
  btnText: { color: C.white, fontWeight: "800", fontSize: 16, textTransform: "uppercase" },
});
