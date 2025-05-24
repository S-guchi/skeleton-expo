import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CharacterScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Character</Text>
      <Pressable onPress={() => router.push("/character/1")} className="bg-primary py-3 rounded-md mt-6 mb-8">
        <Text className="text-center text-white font-bold">キャラクターを表示</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "600" },
});
