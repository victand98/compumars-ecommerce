import axios from "lib/helpers/axios";
import { LOCAL_STORAGE_ITEMS } from "lib/helpers/constants";

const AuthService = {
  login: ({ email, password }) =>
    axios.post("/auth/login", { email, password }),

  register: (data) => axios.post("/auth/register", data),

  refreshToken: async () => {
    const REFRESH_TOKEN = localStorage.getItem(
      LOCAL_STORAGE_ITEMS.REFRESH_TOKEN
    );
    const { data } = await axios.post("/auth/refresh-token", {
      token: REFRESH_TOKEN,
    });
    localStorage.setItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(LOCAL_STORAGE_ITEMS.REFRESH_TOKEN, data.refreshToken);
    return data.accessToken;
  },

  currentRole: () => axios.get("auth/current/role"),

  logout: async (token, user) => {
    try {
      await axios.post("auth/logout", { token, user });
    } catch (error) {
      console.error(error);
    }
  },
};

export default AuthService;
