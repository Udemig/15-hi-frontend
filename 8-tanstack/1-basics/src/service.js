import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://dummyjson.com/users"),
    select: (res) => res.data.users,
    retry: 5,
  });
