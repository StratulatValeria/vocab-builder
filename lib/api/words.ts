import { api } from "./client";

export const getCategories = async () => {
  const { data } = await api.get("/words/categories");
  return data;
};

export const getOwnWords = async (page = 1, limit = 7) => {
  const { data } = await api.get(`/words/own?page=${page}&limit=${limit}`);
  return data;
};
