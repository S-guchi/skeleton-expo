import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const useGoogleAuthRequest = () =>
  Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_EXPO_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
  });

export async function signInWithGoogle(idToken: string | null) {
  if (!idToken) throw new Error("No id_token");
  const credential = GoogleAuthProvider.credential(idToken);
  await signInWithCredential(auth, credential);
}
