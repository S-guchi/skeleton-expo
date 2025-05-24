import { useAuth } from "@/contexts/AuthProvider";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function AuthedLayout() {
  const { user, loading } = useAuth();

  if (loading) return <ActivityIndicator />;
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
