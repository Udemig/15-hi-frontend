export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: true;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: number;
}

export interface BasketItem {
  grocery: Product;
  quantity: number;
  price: number;
  name: string;
  _id: string;
}

export interface Basket {
  _id: string;
  userId: string;
  items: BasketItem[];
  totalAmount: string;
  __v: string;
}

export interface Order {
  _id: string;
  items: { product: Product; quantity: number; price: number; name: string }[];
  total_amount: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  is_delivery: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type ProductsRes = Promise<{ groceries: Product[] }>;
export type ProductRes = Promise<{ grocery: Product }>;
export type BasketRes = Promise<{ cart: Basket }>;
export type UrlRes = Promise<{ url: string }>;
export type OrderRes = Promise<{ orders: Order[] }>;
