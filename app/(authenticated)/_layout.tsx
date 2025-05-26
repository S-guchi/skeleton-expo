import { useAuth } from "@/hooks/useAuth";
import { Redirect, Stack } from "expo-router";

export default function AuthedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(modal)" options={{ presentation: "modal" }} />
      <Stack.Screen name="account-settings" />
      <Stack.Screen name="mypage" options={{ headerShown: true }} />
    </Stack>
  );
}
