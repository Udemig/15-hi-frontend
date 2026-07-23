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

export type ProductsRes = Promise<{ groceries: Product[] }>;
export type ProductRes = Promise<{ grocery: Product }>;
export type BasketRes = Promise<{ cart: Basket }>;
export type UrlRes = Promise<{ url: string }>;
