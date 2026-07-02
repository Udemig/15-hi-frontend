import { useQuery, useMutation } from "@tanstack/react-query";
import api from "./api";
import type { FilterParams, GetPlacesResponse, PlaceResponse } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// custom hooks
// useQuery: sayfa yüklendiği anda api isteğini atar
export const useGetPlaces = (params?: FilterParams) =>
  useQuery({
    queryKey: ["places", params], // params her değiştiğinde sorguyu tekrar çalışır
    queryFn: () => api.get<GetPlacesResponse>("/places", { params }),
    select: (res) => res.data.places,
  });

// useMutation: mutate fonksiyonu çağrılınca api isteği atar
export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: any) => api.post("/places", data),
    onSuccess: () => {
      toast.success("Konaklama alanı oluşturuldu");
      navigate("/");
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};

// bir konaklama alanını alıcak
export const useGetPlace = (id?: string) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    select: (res) => res.data.place,
    enabled: !!id,
  });

// konaklama alanını kaldır
export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama alanı kaldırıldı");
      navigate("/");
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};
