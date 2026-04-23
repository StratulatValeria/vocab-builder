import { api } from "./client";
import {
  User,
  LoginCredentials,
  RegisterCredentials,
  AuthResponse,
} from "@/lib/type/types";

export const register = async (
  credentials: RegisterCredentials,
): Promise<AuthResponse> => {
  const { data } = await api.post("/users/signup", credentials);
  return data;
};

export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const { data } = await api.post("/users/signin", credentials);
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post("/users/signout");
};

export const getCurrentUser = async (): Promise<User> => {
  const { data } = await api.get("/users/current");
  return data;
};
