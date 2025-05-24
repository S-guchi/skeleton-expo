import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={() => router.push("/(authenticated)/(modal)/settings")} style={{ paddingHorizontal: 16 }}>
            <Ionicons name="settings-outline" size={24} />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="character" options={{ title: "Character" }} />
      <Tabs.Screen name="trpg" options={{ title: "TRPG" }} />
    </Tabs>
  );
}
