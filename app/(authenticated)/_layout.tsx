import { Stack } from "expo-router";

export default function AuthedLayout() {
  /** 認証チェックはここに仕込んでも良い */
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(modal)" options={{ presentation: "modal" }} />
      <Stack.Screen name="account-settings" />
      <Stack.Screen name="mypage" options={{ headerShown: true }} />
    </Stack>
  );
}
