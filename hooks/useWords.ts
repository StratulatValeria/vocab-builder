import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useWords = () => {
  return useQuery({
    queryKey: ["words"],
    queryFn: async () => {
      const { data } = await axios.get("/words/own");
      return data;
    },
  });
};
