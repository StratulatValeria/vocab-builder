import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api, setAuthHeader, clearAuthHeader } from "../api/client";
import { RegisterCredentials, LoginCredentials, User } from "../type/types";

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  register: (credentials: RegisterCredentials) => Promise<void>;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: { name: null, email: null } as User,
      token: null,
      isLoggedIn: false,

      register: async (credentials) => {
        const { data } = await api.post("/users/signup", credentials);
        setAuthHeader(data.token);
        set({ user: data.user, token: data.token, isLoggedIn: true });
      },

      login: async (credentials) => {
        const { data } = await api.post("/users/signin", credentials);
        setAuthHeader(data.token);
        set({ user: data.user, token: data.token, isLoggedIn: true });
      },

      logout: async () => {
        try {
          await api.post("/users/signout");
        } finally {
          clearAuthHeader();
          set({
            user: { name: null, email: null } as User,
            token: null,
            isLoggedIn: false,
          });
          localStorage.removeItem("auth-storage");
        }
      },

      refresh: () => {
        const currentToken = get().token;
        if (currentToken) {
          setAuthHeader(currentToken);
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        user: state.user,
      }),
    },
  ),
);
