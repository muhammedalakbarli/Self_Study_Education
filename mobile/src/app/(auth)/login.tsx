import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Link } from "expo-router";
import { signIn } from "@/lib/auth";
import { C } from "@/lib/theme";
import Mascot from "@/components/Mascot";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function submit() {
    if (busy) return;
    setErr("");
    setBusy(true);
    const { error } = await signIn(email, password);
    if (error) setErr("Email və ya parol yanlışdır.");
    setBusy(false);
  }

  return (
    <KeyboardAvoidingView style={s.wrap} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={s.inner}>
        <Mascot size={110} mood="happy" />
        <Text style={s.title}>Imparo</Text>
        <Text style={s.sub}>Öyrənməyə davam et 🦊</Text>

        <TextInput
          style={s.input}
          placeholder="Email"
          placeholderTextColor={C.muted}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={s.input}
          placeholder="Parol"
          placeholderTextColor={C.muted}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {err ? <Text style={s.err}>{err}</Text> : null}

        <Pressable style={[s.btn, busy && { opacity: 0.6 }]} onPress={submit} disabled={busy}>
          <Text style={s.btnText}>{busy ? "Gözlə…" : "Daxil ol"}</Text>
        </Pressable>

        <Link href="/(auth)/signup" style={s.link}>
          Hesabın yoxdur? Qeydiyyatdan keç
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: C.ink },
  inner: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 12 },
  title: { fontSize: 34, fontWeight: "800", color: C.brand, marginTop: 8 },
  sub: { fontSize: 15, color: C.muted, marginBottom: 12 },
  input: {
    width: "100%", backgroundColor: C.panel, borderWidth: 2, borderColor: C.line,
    borderRadius: 16, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, color: C.fg,
  },
  err: { color: C.danger, fontWeight: "700" },
  btn: {
    width: "100%", backgroundColor: C.brand, borderRadius: 16, paddingVertical: 15,
    alignItems: "center", marginTop: 4,
  },
  btnText: { color: C.white, fontSize: 17, fontWeight: "800", textTransform: "uppercase" },
  link: { color: C.brand, fontWeight: "700", marginTop: 10 },
});
