"use server";

import { redirect } from "next/navigation";
import { createProduct } from "./service";

// server action
export const handleProductForm = async (formData: FormData) => {
  // formdaki verilere eriş
  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const rating = Number(formData.get("rating"));
  const reviews_count = Number(formData.get("reviews_count"));
  const category = formData.get("category") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;

  // ürün bilgilerini nesne formatına getir
  const productData = {
    name,
    brand,
    price,
    stock,
    rating,
    reviews_count,
    category,
    image_url,
    description,
  };

  // ürünü oluşturmak için api isteği at
  await createProduct(productData);

  redirect("/products");
};
