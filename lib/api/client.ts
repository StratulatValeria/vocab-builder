import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const setAuthHeader = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

const storage =
  typeof window !== "undefined" ? localStorage.getItem("auth-storage") : null;
if (storage) {
  const parsed = JSON.parse(storage);
  if (parsed.state.token) {
    setAuthHeader(parsed.state.token);
  }
}
