import { auth } from "@/firebaseConfig";
import { getBaseUrl } from "./getBaseUrl";
import { trpgApi } from "./trpgApi";

export const api = new trpgApi({
  BASE: getBaseUrl(),
  TOKEN: async () => {
    const user = auth.currentUser;
    return user ? await user.getIdToken() : "";
  },
});
