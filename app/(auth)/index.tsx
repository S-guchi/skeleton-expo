import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function LoginScreen() {
  const { login, user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("=== useEffect実行 ===");
    console.log("user:", user);
    console.log("user type:", typeof user);
    console.log("user exists:", !!user);

    if (user) {
      console.log("🚀 ユーザーが存在するので画面遷移を実行します");
      console.log("遷移先: /(authenticated)/(tabs)/home");
      router.replace("/(authenticated)/(tabs)/home");
      console.log("✅ router.replace実行完了");
    } else {
      console.log("❌ ユーザーが存在しないため遷移しません");
    }
  }, [user, router]);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      console.log("🔑 ログイン開始");
      await login();
      console.log("✅ ログイン成功");

      // ログイン直後のユーザー状態を確認
      setTimeout(() => {
        console.log("📊 ログイン後のユーザー状態チェック:", user);
      }, 1000);
    } catch (error) {
      console.error("❌ ログインエラー:", error);
      Alert.alert("ログインエラー", `ログインに失敗しました: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text>ログインしてください</Text>
      <Text>現在のユーザー: {user ? "ログイン済み" : "未ログイン"}</Text>
      <Button title={isLoading ? "ログイン中..." : "Google でログイン"} onPress={handleLogin} disabled={isLoading} />
    </View>
  );
}
