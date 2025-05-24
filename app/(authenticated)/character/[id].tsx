// app/(authenticated)/(tabs)/character/[id].tsx
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function CharacterDetailScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>キャラクター詳細ページ</Text>
    </View>
  );
}
