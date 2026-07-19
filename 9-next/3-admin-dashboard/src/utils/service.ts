import { Order, Product } from "@/types";

// api url
const BASE_URL = "http://localhost:4000";

// bütün siparişleri getir
export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BASE_URL}/orders`);

  return res.json();
};

// bütün ürünler igetir
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);

  return res.json();
};

// yeni ürün oluştur
export const createProduct = async (productData: Omit<Product, "id">): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};
