import { listenAuth, signInWithGoogle, signOut } from "@/lib/googleSignIn";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  user: any;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    console.log("🔧 AuthProvider: listenAuth設定開始");

    const unsub = listenAuth((newUser) => {
      console.log("🔄 AuthProvider: 認証状態変更検知");
      console.log("新しいユーザー:", newUser);
      console.log("ユーザーUID:", newUser?.uid);
      console.log("ユーザーEmail:", newUser?.email);
      setUser(newUser);
    });

    console.log("✅ AuthProvider: listenAuth設定完了");
    return unsub;
  }, []);

  const loginWithLogging = async () => {
    console.log("🔑 AuthProvider: signInWithGoogle開始");
    await signInWithGoogle();
    console.log("✅ AuthProvider: signInWithGoogle完了");
  };

  return <AuthContext.Provider value={{ user, login: loginWithLogging, logout: signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
