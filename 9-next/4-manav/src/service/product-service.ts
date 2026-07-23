import { ProductRes, ProductsRes } from "@/types";

// api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// tüm ürünleri al
export const getAllProducts = async (): ProductsRes => {
  const res = await fetch(`${BASE_URL}/api/groceries`);
  return res.json();
};

// ürünü al
export const getProductDetails = async (id: string): ProductRes => {
  const res = await fetch(`${BASE_URL}/api/groceries/${id}`);
  return res.json();
};
