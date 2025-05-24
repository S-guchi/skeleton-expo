import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter(); // ← 追加

  const handleLogin = () => {
    // ここでメール / パスワードのバリデーションや Firebase Auth などを実行
    // await signInWithEmailAndPassword(...);

    // 認証後、タブの Home へ遷移
    router.replace("/(authenticated)/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Log in" onPress={handleLogin} />
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-2xl font-bold text-blue-500">Hello NativeWind</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "600", textAlign: "center", marginBottom: 12 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8 },
  link: { color: "dodgerblue", textAlign: "center" },
});
