import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function AccountSettingsIndex() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>アカウント設定</Text>

      <Pressable onPress={() => router.push("/(authenticated)/account-settings/privacy")}>
        <Text style={{ fontSize: 18, marginVertical: 8 }}>プライバシーポリシー</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(authenticated)/account-settings/terms")}>
        <Text style={{ fontSize: 18, marginVertical: 8 }}>利用規約</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(authenticated)/account-settings/logout")}>
        <Text style={{ fontSize: 18, marginVertical: 8, color: "red" }}>ログアウト</Text>
      </Pressable>
    </View>
  );
}
