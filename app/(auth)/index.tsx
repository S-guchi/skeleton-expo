import { useAuth } from "@/contexts/AuthProvider";
import { signInWithGoogle, useGoogleAuthRequest } from "@/lib/googleSignIn";
import { router } from "expo-router";
import React from "react";
import { ActivityIndicator, Button, View } from "react-native";

export default function LoginScreen() {
  const { user, loading } = useAuth();
  const [request, response, promptAsync] = useGoogleAuthRequest();

  React.useEffect(() => {
    if (response?.type === "success") {
      signInWithGoogle(response.params.id_token);
    }
  }, [response]);

  if (loading) return <ActivityIndicator />;
  if (user) {
    router.replace("/(authenticated)/(tabs)/home");
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Button disabled={!request} title="Google でログイン" onPress={() => promptAsync()} />
    </View>
  );
}
