import { createContext, useState, useEffect } from "react";
import axios from "axios";

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Context sağlayıcı bileşenini oluşturma (HOC)
export const ProductProvider = ({ children }) => {
  // context yapısında tutulacak state'lar
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // bileşenin ekrana basılma anında çalışır
  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // context yapısından bileşenlere aktarılacak verileri belirle
  return <ProductContext.Provider value={{ products, isLoading, error }}>{children}</ProductContext.Provider>;
};
