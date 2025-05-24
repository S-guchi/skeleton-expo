import { auth } from "@/firebaseConfig";
import * as AppleAuthentication from "expo-apple-authentication";
import { OAuthProvider, signInWithCredential } from "firebase/auth";

export async function signInWithApple() {
    const appleCredential = await AppleAuthentication.signInAsync({
        requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
    });

    const provider = new OAuthProvider("apple.com");
    const firebaseCredential = provider.credential({
        idToken: appleCredential.identityToken!,
    });

    await signInWithCredential(auth, firebaseCredential);
}
