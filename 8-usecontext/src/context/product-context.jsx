import { createContext, useState } from "react";

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Context sağlayıcı bileşenini oluşturma (HOC)
export const ProductProvider = ({ children }) => {
  // context yapısında tutulacak state'lar
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // context yapısından bileşenlere aktarılacak verileri belirle
  return <ProductContext.Provider value={{ products, isLoading, error }}>{children}</ProductContext.Provider>;
};
