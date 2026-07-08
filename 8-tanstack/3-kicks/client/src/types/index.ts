export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
  id: string;
}

// api yanıt tipi
export interface Response<T> {
  message: string;
  data: T;
}

export interface Product {
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: "men" | "women" | "unisex";
  price: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ProductValues {
  name: string;
  description: string;
  isNew: boolean;
  size: string;
  color: string;
  gender: "men" | "women" | "unisex";
  price: number;
}
