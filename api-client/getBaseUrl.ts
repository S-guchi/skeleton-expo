import { Platform } from "react-native";

export const getBaseUrl = () => {
  const host = process.env.EXPO_PUBLIC_API_HOST;

  if (!host) throw new Error("EXPO_PUBLIC_API_HOST is not defined");

  if (Platform.OS === "android") {
    return `http://10.0.2.2:8000`; // Android Emulator
  }

  return `http://${host}:8000`; // iOS Simulator / 実機
};
