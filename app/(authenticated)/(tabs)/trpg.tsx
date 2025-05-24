import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TrpgScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 TRPG</Text>
      <Pressable onPress={() => router.push("/trpg/1")} className="bg-primary py-3 rounded-md mt-6 mb-8">
        <Text className="text-center text-white font-bold">TRPGを表示</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "600" },
});
