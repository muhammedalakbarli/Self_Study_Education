import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Link } from "expo-router";
import { signUp } from "@/lib/auth";
import { C } from "@/lib/theme";
import Mascot from "@/components/Mascot";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function submit() {
    if (busy) return;
    setMsg("");
    setBusy(true);
    const { error } = await signUp(email, password, name);
    if (error) setMsg(error.message);
    else setMsg("Hesab yaradıldı! Emailini təsdiqlə və ya daxil ol.");
    setBusy(false);
  }

  return (
    <KeyboardAvoidingView style={s.wrap} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={s.inner}>
        <Mascot size={96} mood="celebrate" />
        <Text style={s.title}>Qeydiyyat</Text>

        <TextInput style={s.input} placeholder="Ad" placeholderTextColor={C.muted} value={name} onChangeText={setName} />
        <TextInput style={s.input} placeholder="Email" placeholderTextColor={C.muted} autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput style={s.input} placeholder="Parol (min 6)" placeholderTextColor={C.muted} secureTextEntry value={password} onChangeText={setPassword} />
        {msg ? <Text style={s.msg}>{msg}</Text> : null}

        <Pressable style={[s.btn, busy && { opacity: 0.6 }]} onPress={submit} disabled={busy}>
          <Text style={s.btnText}>{busy ? "Gözlə…" : "Qeydiyyatdan keç"}</Text>
        </Pressable>
        <Link href="/(auth)/login" style={s.link}>Artıq hesabın var? Daxil ol</Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: C.ink },
  inner: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "800", color: C.fg, marginVertical: 8 },
  input: { width: "100%", backgroundColor: C.panel, borderWidth: 2, borderColor: C.line, borderRadius: 16, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, color: C.fg },
  msg: { color: C.brand, fontWeight: "700", textAlign: "center" },
  btn: { width: "100%", backgroundColor: C.brand, borderRadius: 16, paddingVertical: 15, alignItems: "center", marginTop: 4 },
  btnText: { color: C.white, fontSize: 17, fontWeight: "800", textTransform: "uppercase" },
  link: { color: C.brand, fontWeight: "700", marginTop: 10 },
});
