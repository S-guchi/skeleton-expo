import { auth } from "@/firebaseConfig";
import { signOut as firebaseSignOut } from "firebase/auth";

export const signOut = () => firebaseSignOut(auth);
