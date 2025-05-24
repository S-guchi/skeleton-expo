import React from "react";
import { Button, Text, View } from "react-native";

// import { useAuth } from "@/hooks/useAuth";
import { useColorScheme } from "@/lib/useColorScheme";

export default function MyPage() {
  // const { logout } = useAuth();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text>ログイン完了 🎉</Text>
      {/* <Button title="ログアウト" onPress={logout} /> */}

      {/* ダークモード切り替えボタン */}
      <Button title={colorScheme === "dark" ? "ライトモードに切り替え" : "ダークモードに切り替え"} onPress={toggleColorScheme} />
    </View>
  );
}
