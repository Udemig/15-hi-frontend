import { useQuery } from "@tanstack/react-query";
import type { Product, ProductValues, Response } from "../types";
import api from "./api";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
  getOne: (id: string) => api.get<Response<Product>>(`/shoes/${id}`),
  create: (data: ProductValues) => api.post<Response<Product>>("/shoes", data),
  update: (id: string, data: ProductValues) => api.put<Response<Product>>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete<Response<null>>(`/shoes/${id}`),
};

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: (res) => res.data.data,
  });

export const useGetOneProduct = (id: string) =>
  useQuery({
    queryKey: ["product"],
    queryFn: () => productService.getOne(id),
    select: (res) => res.data.data,
  });
