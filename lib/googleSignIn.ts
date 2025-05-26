import { FirebaseAuthTypes, getAuth, GoogleAuthProvider } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

// Firebase Console → 認証 → Google → ウェブクライアントID
GoogleSignin.configure({
  webClientId: "47307687782-ht602r1v66cbpp3qs7f7lu2mtmdjkbnd.apps.googleusercontent.com",
});

export const listenAuth = (cb: (u: FirebaseAuthTypes.User | null) => void) => {
  const authInstance = getAuth();
  return authInstance.onAuthStateChanged(cb);
};

export async function signInWithGoogle() {
  // Play Services チェック（Android 推奨）
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

  // Google → Firebase Credential 化
  const { data } = await GoogleSignin.signIn();
  if (!data) {
    throw new Error("Google ログインに失敗しました");
  }
  const credential = GoogleAuthProvider.credential(data.idToken);
  const authInstance = getAuth();
  await authInstance.signInWithCredential(credential);
}

// ログアウト関数を追加
export const signOut = async () => {
  const authInstance = getAuth();
  await authInstance.signOut();
  // Google Sign-In からもサインアウト
  await GoogleSignin.signOut();
};

export const firebaseAuth = getAuth();
