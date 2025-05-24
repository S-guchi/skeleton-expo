import { BackButton } from "@/components/BackButton";
import { Stack, useRouter } from "expo-router";

export default function AccountSettingsLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => <BackButton onPress={() => router.back()} />,
          title: "アカウント設定",
        }}
      />
      <Stack.Screen name="privacy" options={{ title: "プライバシーポリシー" }} />
      <Stack.Screen name="terms" options={{ title: "利用規約" }} />
      <Stack.Screen name="logout" options={{ title: "ログアウト" }} />
    </Stack>
  );
}
