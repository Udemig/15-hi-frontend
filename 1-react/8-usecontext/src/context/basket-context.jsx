import { createContext, useState } from "react";

//! context yapısının temelini oluştur
export const BasketContext = createContext();

//! context sağlayacı bileşeni oluştur
export const BasketProvider = ({ children }) => {
  // sepet state'i
  const [basket, setBasket] = useState([]);

  // sepete ürün ekle
  const addToBasket = (newProduct) => {
    // ürün sepete daha önce eklendi mi?
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // eğer ürün sepette zaten varsa: miktarını arttır
      // a) bulanan ürürnün miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      // b) sepet dizisindeki eski ürün yerine güncellenmiş ürünü ekle
      setBasket(basket.map((item) => (item.id === updated.id ? updated : item)));
    } else {
      // eğer ürün sepette yoksa: ürünü sepete ekle
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    }
  };

  // sepetten ürün çıkar
  const removeFromBasket = (productId) => {
    // sepetteki ürünü bul
    const found = basket.find((i) => i.id === productId);

    if (found.amount > 1) {
      // ürünün miktarı 1'den büyükse: miktarı azalt
      const updated = { ...found, amount: found.amount - 1 };
      setBasket(basket.map((i) => (i.id === updated.id ? updated : i)));
    } else {
      // ürünün miktarı 1 ise: ürünü kaldır
      setBasket(basket.filter((i) => i.id !== productId));
    }
  };

  // sepeti temizle
  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
