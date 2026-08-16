import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, ActivityIndicator, Vibration } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { X, Heart } from "lucide-react-native";
import TaskView from "@/components/TaskView";
import { addWrong, markCorrect } from "@/lib/srs";
import { useAuth } from "@/lib/auth";
import { fetchContentTree } from "@/lib/content";
import { gradeTask, type UserAnswer } from "@/lib/grading";
import { completeLesson } from "@/lib/progress";
import { loadHearts, loseHeart, MAX_HEARTS } from "@/lib/hearts";
import { addGems, GEMS_PER_LESSON } from "@/lib/gems";
import { loadPlus } from "@/lib/plus";
import { addLeaderboardXp } from "@/lib/leaderboard";
import type { Lesson, Task } from "@/lib/types";
import { C } from "@/lib/theme";
import Mascot from "@/components/Mascot";

type Phase = "main" | "retry" | "done";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();
  const [lesson, setLesson] = useState<Lesson | null | undefined>(undefined);
  const [phase, setPhase] = useState<Phase>("main");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<UserAnswer | null>(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [earned, setEarned] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [gemsEarned, setGemsEarned] = useState(0);

  // Səhvlər — bölmə sonunda düz cavablanana qədər təkrarlanır.
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [retryQueue, setRetryQueue] = useState<Task[]>([]);
  const [retryTotal, setRetryTotal] = useState(0);

  // Oyunlaşdırma
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [plus, setPlus] = useState(false);

  useEffect(() => {
    fetchContentTree().then((tree) => {
      for (const su of tree) for (const un of su.units) {
        const l = un.lessons.find((x) => x.id === id);
        if (l) return setLesson(l);
      }
      setLesson(null);
    });
  }, [id]);
  useEffect(() => { loadHearts().then(setHearts).catch(() => {}); }, [user]);
  useEffect(() => { loadPlus().then(setPlus).catch(() => {}); }, [user]);

  const mainTasks = lesson?.tasks ?? [];
  const inRetry = phase === "retry";
  const task: Task | undefined = inRetry ? retryQueue[0] : mainTasks[index];
  const total = inRetry ? retryTotal : mainTasks.length;
  const doneCount = inRetry ? retryTotal - retryQueue.length : index;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  function check() {
    if (task === undefined || answer === null || answer === "") return;
    const r = gradeTask(task, answer);
    setCorrect(r.correct);
    setChecked(true);

    // SRS (aralıqlı təkrar) — web ilə eyni: düz→irəli/mənimsə, səhv→təkrara sal.
    if (r.correct) markCorrect(task.id);
    else addWrong(task.id);

    if (inRetry) {
      Vibration.vibrate(r.correct ? 25 : 70);
      return; // təkrar mərhələsində XP/can dəyişmir
    }

    setAnswered((a) => a + 1);
    if (r.correct) {
      setEarned((x) => x + 2); // web ilə eyni: hər düz cavab +2 XP
      setCorrectCount((c) => c + 1);
      Vibration.vibrate(25);
    } else {
      setWrongIds((w) => (w.includes(task.id) ? w : [...w, task.id]));
      if (!plus) {
        loseHeart().then((h) => setHearts(h)).catch(() => {});
      }
      Vibration.vibrate(70);
    }
  }

  async function finishLesson() {
    if (user) await completeLesson(user.id, String(id), earned).catch(() => {});
    const g = GEMS_PER_LESSON * (plus ? 2 : 1);
    addGems(g).catch(() => {});
    addLeaderboardXp(earned).catch(() => {});
    setGemsEarned(g);
    Vibration.vibrate([0, 40, 60, 40]);
    setPhase("done");
  }

  async function next() {
    setAnswer(null);
    setChecked(false);

    if (inRetry) {
      const [head, ...rest] = retryQueue;
      const nextQ = correct ? rest : [...rest, head];
      if (nextQ.length === 0) { await finishLesson(); return; }
      setRetryQueue(nextQ);
      return;
    }

    if (index + 1 < mainTasks.length) {
      setIndex((i) => i + 1);
      return;
    }
    // Əsas suallar bitdi — əvvəl səhvlərin təkrarı, sonra bitir.
    if (wrongIds.length > 0) {
      const retry = wrongIds
        .map((wid) => mainTasks.find((t) => t.id === wid))
        .filter((t): t is Task => !!t);
      setRetryQueue(retry);
      setRetryTotal(retry.length);
      setPhase("retry");
    } else {
      await finishLesson();
    }
  }

  if (lesson === undefined) return <View style={s.center}><ActivityIndicator color={C.brand} size="large" /></View>;
  if (lesson === null || mainTasks.length === 0) {
    return <View style={s.center}><Text style={{ color: C.muted }}>Dərs tapılmadı.</Text><Pressable onPress={() => router.back()}><Text style={s.link}>Geri</Text></Pressable></View>;
  }

  if (phase === "done") {
    const accuracy = answered ? Math.round((correctCount / answered) * 100) : 0;
    return (
      <View style={s.center}>
        <Mascot size={130} mood="celebrate" />
        <Text style={s.doneTitle}>Dərs tamamlandı! 🎉</Text>
        <View style={s.doneStats}>
          <Stat value={`+${earned}`} label="XP" color={C.accent} />
          <Stat value={`+${gemsEarned}`} label="Zümrüd" color={C.success} />
          <Stat value={`${accuracy}%`} label="Dəqiqlik" color={C.brand} />
        </View>
        <Pressable style={s.btn} onPress={() => router.back()}><Text style={s.btnText}>Davam et</Text></Pressable>
      </View>
    );
  }

  if (task === undefined) return <View style={s.center}><ActivityIndicator color={C.brand} size="large" /></View>;

  return (
    <View style={{ flex: 1, backgroundColor: C.ink }}>
      {/* Üst bar: çıxış + progress + canlar */}
      <View style={s.top}>
        <Pressable onPress={() => router.back()} hitSlop={10}><X color={C.muted} size={26} /></Pressable>
        <View style={s.progress}>
          <View style={[s.progressFill, { width: `${Math.max(pct, 3)}%`, backgroundColor: inRetry ? "#E9A23B" : C.brand }]} />
        </View>
        <View style={s.hearts}>
          <Heart color={C.danger} fill={C.danger} size={18} />
          <Text style={s.heartsText}>{plus ? "∞" : hearts}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 150 }}>
        <Text style={s.taskNo}>
          {inRetry ? `🔁 Təkrar ${doneCount + 1} / ${total}` : `Tapşırıq ${index + 1} / ${total}`}
        </Text>
        <TaskView task={task} answer={answer} checked={checked} onAnswer={setAnswer} />
      </ScrollView>

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
          <Text style={s.ctaText}>
            {checked
              ? inRetry
                ? (retryQueue.length > 1 || !correct ? "Növbəti" : "Bitir")
                : (index + 1 < total ? "Növbəti" : (wrongIds.length > 0 ? "Davam et" : "Bitir"))
              : "Yoxla"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function Stat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <View style={s.stat}>
      <Text style={[s.statValue, { color }]}>{value}</Text>
      <Text style={s.statLabel}>{label}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, backgroundColor: C.ink, alignItems: "center", justifyContent: "center", gap: 12, padding: 24 },
  link: { color: C.brand, fontWeight: "700", marginTop: 12 },
  top: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 16, paddingTop: 16 },
  progress: { flex: 1, height: 14, backgroundColor: C.panel2, borderRadius: 8, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: C.brand, borderRadius: 8 },
  hearts: { flexDirection: "row", alignItems: "center", gap: 4 },
  heartsText: { color: C.danger, fontWeight: "800", fontSize: 15 },
  taskNo: { color: C.muted, fontWeight: "700", fontSize: 12, textTransform: "uppercase" },
  bottom: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, paddingBottom: 28, backgroundColor: C.ink, borderTopWidth: 1, borderTopColor: C.line, gap: 8 },
  feedback: { fontSize: 17, fontWeight: "800" },
  cta: { borderRadius: 16, paddingVertical: 15, alignItems: "center" },
  ctaText: { color: C.white, fontSize: 17, fontWeight: "800", textTransform: "uppercase" },
  doneTitle: { fontSize: 24, fontWeight: "800", color: C.fg, marginTop: 10 },
  doneStats: { flexDirection: "row", gap: 12, marginTop: 8 },
  stat: { alignItems: "center", backgroundColor: C.panel, borderRadius: 16, borderWidth: 1, borderColor: C.line, paddingVertical: 12, paddingHorizontal: 18 },
  statValue: { fontSize: 20, fontWeight: "900" },
  statLabel: { fontSize: 11, color: C.muted, marginTop: 2 },
  btn: { backgroundColor: C.brand, borderRadius: 16, paddingVertical: 15, paddingHorizontal: 40, marginTop: 16 },
  btnText: { color: C.white, fontWeight: "800", fontSize: 16, textTransform: "uppercase" },
});
