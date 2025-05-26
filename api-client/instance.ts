import { getAuth } from "@react-native-firebase/auth";

import { getBaseUrl } from "./getBaseUrl";
import { trpgApi } from "./trpgApi";

export const api = new trpgApi({
  BASE: getBaseUrl(),
  TOKEN: async () => {
    const user = getAuth().currentUser;
    return user ? await user.getIdToken() : "";
  },
});
