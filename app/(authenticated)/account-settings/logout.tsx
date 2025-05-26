import { useAuth } from "@/hooks/useAuth";
import { Alert, Button, Text, View } from "react-native";

export default function Logout() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      Alert.alert("エラー", "ログアウトに失敗しました");
      console.error("Logout error:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>ログアウトしますか？</Text>
      <Button title="ログアウト" onPress={handleLogout} color="#ff4444" />
    </View>
  );
}
