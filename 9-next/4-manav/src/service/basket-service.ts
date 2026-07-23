import { BasketRes, OrderRes, Product, UrlRes } from "@/types";

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

// sepeti temizle
export const clearBasket = async (): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, { method: "DELETE" });

  return res.json();
};

// sepetteki ürün miktarını güncelle
export const updateQuantity = async (groceryId: string, newQuatity: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart/item`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity: newQuatity }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// ürünü sepetten kaldır
export const removeFromBasket = async (groceryId: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`, {
    method: "DELETE",
  });

  return res.json();
};

// sepetteki ürünleri satın al
export const checkoutBasket = async (): UrlRes => {
  const body = {
    userId,
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

// siparişleri getir
export const getOrders = async (): OrderRes => {
  const res = await fetch(`${BASE_URL}/api/orders?customer_id=${userId}`);

  return res.json();
};
