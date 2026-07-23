import { BasketRes, Product, UrlRes } from "@/types";

// api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// kullanıcı id'si
const userId = process.env.NEXT_PUBLIC_USER_ID;

// sepete ürün ekle
export const addToBasket = async (groceryId: string, quantity: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ groceryId, quantity, userId }),
  });

  return res.json();
};

// sespetteki ürünleri al
export const getBasket = async (): BasketRes => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, { cache: "no-store" });

  return res.json();
};

// bir ürün satın al
export const checkoutSingleItem = async (grocery: Product, quantity: number): UrlRes => {
  const body = {
    grocery: grocery._id,
    quantity,
    customerInfo: {
      userId,
      name: "Furkan Evin",
      phone: "0 555 987 65 43",
      deliveryAddress: "Bahçeli Mahalle, Meyve Sokak No:45, Ankara",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};
