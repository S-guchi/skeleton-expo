import { Stack } from "expo-router";

export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        presentation: "modal", // 👈 下からスライド！
        headerShown: false, // 👈 いらなければ非表示にもできる
      }}
    />
  );
}
