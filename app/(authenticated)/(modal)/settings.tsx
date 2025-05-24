import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SettingsModal() {
  const router = useRouter();

  const handleAccountPress = () => {
    // モーダルを閉じて、別ページに遷移（replaceでモーダルを上書き）
    router.replace("/(authenticated)/account-settings");
  };

  const handleMyPagePress = () => {
    router.replace("/(authenticated)/mypage");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>⚙️ 設定メニュー</Text>

      <Pressable onPress={handleAccountPress} style={{ padding: 12 }}>
        <Text>アカウント設定</Text>
      </Pressable>

      <Pressable onPress={handleMyPagePress} style={{ padding: 12 }}>
        <Text>マイページ</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={{ marginTop: 40, padding: 12, backgroundColor: "#eee", borderRadius: 8 }}>
        <Text>閉じる</Text>
      </Pressable>
    </View>
  );
}
