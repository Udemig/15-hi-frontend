import { useQuery } from "@tanstack/react-query";
import api from "./api";
import type { GetPlacesResponse } from "../types";

// custom hook
export const useGetPlaces = () =>
  useQuery({
    queryKey: ["places"],
    queryFn: () => api.get<GetPlacesResponse>("/places"),
    select: (res) => res.data.places,
  });
