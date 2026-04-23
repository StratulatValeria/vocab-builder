import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api/client";
import page from "@/app/(dashboard)/dictionary/page";
import { WordsResponse } from "@/lib/type/types";

export const useWords = (page = 1) => {
  return useQuery<WordsResponse>({
    queryKey: ["words", page],
    queryFn: async () => {
      const { data } = await api.get(`/words/own?page=${page}&limit=7`);
      return data;
    },
  });
};
