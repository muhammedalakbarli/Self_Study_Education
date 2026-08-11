import { View, Text, StyleSheet } from "react-native";
import { Trophy } from "lucide-react-native";
import { C } from "@/lib/theme";

export default function Liqa() {
  return (
    <View style={s.wrap}>
      <Trophy color={C.gold} size={64} />
      <Text style={s.title}>Liqa</Text>
      <Text style={s.sub}>Həftəlik reytinq tezliklə mobil app-ə gəlir.</Text>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: C.ink, alignItems: "center", justifyContent: "center", gap: 10, padding: 24 },
  title: { fontSize: 26, fontWeight: "800", color: C.fg },
  sub: { color: C.muted, textAlign: "center" },
});
