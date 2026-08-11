import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "expo-router";
import { Star, Flame, Gem, LogOut } from "lucide-react-native";
import { useAuth, userGrade, signOut } from "@/lib/auth";
import { loadProgress, type Progress } from "@/lib/progress";
import { levelFromXp } from "@/lib/levels";
import { C } from "@/lib/theme";
import Mascot from "@/components/Mascot";

export default function Profil() {
  const { user } = useAuth();
  const [prog, setProg] = useState<Progress | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (user) loadProgress(user.id).then(setProg);
    }, [user]),
  );

  const lv = levelFromXp(prog?.totalXp ?? 0);
  const name = (user?.user_metadata?.name as string) || user?.email?.split("@")[0] || "İstifadəçi";

  return (
    <View style={s.wrap}>
      <Mascot size={100} mood="happy" />
      <Text style={s.name}>{name}</Text>
      <Text style={s.meta}>{userGrade(user)}-ci sinif · Səviyyə {lv.level} ({lv.title})</Text>

      <View style={s.row}>
        <Stat Icon={Star} v={prog?.totalXp ?? 0} label="XP" color={C.accent} />
        <Stat Icon={Flame} v={prog?.streakDays ?? 0} label="Streak" color={C.brand} />
        <Stat Icon={Gem} v={prog?.gems ?? 0} label="Zümrüd" color={C.success} />
      </View>

      {/* Səviyyə barı */}
      <View style={s.barWrap}>
        <View style={[s.barFill, { width: `${Math.round(lv.progress * 100)}%` }]} />
      </View>
      <Text style={s.barText}>{lv.xpInLevel}/{lv.xpForNext} XP</Text>

      <Pressable style={s.logout} onPress={() => signOut()}>
        <LogOut color={C.fg} size={18} />
        <Text style={s.logoutText}>Çıxış</Text>
      </Pressable>
    </View>
  );
}

function Stat({ Icon, v, label, color }: { Icon: any; v: number; label: string; color: string }) {
  return (
    <View style={s.stat}>
      <Icon color={color} size={22} />
      <Text style={s.statN}>{v}</Text>
      <Text style={s.statL}>{label}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: C.ink, alignItems: "center", paddingTop: 60, paddingHorizontal: 24, gap: 8 },
  name: { fontSize: 24, fontWeight: "800", color: C.fg, marginTop: 8 },
  meta: { color: C.muted, marginBottom: 8 },
  row: { flexDirection: "row", gap: 12, marginTop: 8 },
  stat: { backgroundColor: C.panel, borderWidth: 1, borderColor: C.line, borderRadius: 16, padding: 14, alignItems: "center", width: 92 },
  statN: { fontSize: 18, fontWeight: "800", color: C.fg, marginTop: 4 },
  statL: { fontSize: 11, color: C.muted },
  barWrap: { width: "100%", height: 12, backgroundColor: C.panel2, borderRadius: 8, marginTop: 18, overflow: "hidden" },
  barFill: { height: "100%", backgroundColor: C.accent, borderRadius: 8 },
  barText: { color: C.muted, fontSize: 12, marginTop: 4 },
  logout: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 30, borderWidth: 2, borderColor: C.line, borderRadius: 16, paddingHorizontal: 24, paddingVertical: 12 },
  logoutText: { fontWeight: "700", color: C.fg },
});
