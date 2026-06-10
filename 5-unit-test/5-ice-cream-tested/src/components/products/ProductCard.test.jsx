import { screen } from "@testing-library/react";
import { renderWithStore } from "../../utils/test-utils";
import ProductCard from "./ProductCard";
import { PRODUCT } from "../../utils/constants";
import userEvent from "@testing-library/user-event";

describe("ProductCard", () => {
  test("ürün bilgilerini doğru şekilde ekrana basar", () => {
    // bileşeni ürün bilgisini prop göndererek renderla
    renderWithStore(<ProductCard product={PRODUCT} />);

    // ürün bilgileri ekrana basıldı mı kontrol et
    screen.getByText(PRODUCT.name);
    screen.getByText(PRODUCT.description);
    screen.getByText(new RegExp(PRODUCT.category, "i"));
    screen.getByText(`₺${PRODUCT.price}`);

    // resmin src'si doğru mu
    expect(screen.getByAltText(PRODUCT.name)).toHaveAttribute("src", PRODUCT.image);
  });

  test("külah seçiliyken ürün sepete eklenir", async () => {
    // bileşeni ekrana bas
    const user = userEvent.setup();
    const { store } = renderWithStore(<ProductCard product={PRODUCT} />);

    // sepete ekle butonuna tıkla
    await user.click(screen.getByRole("button", { name: "Sepete Ekle" }));

    // ürün store'a kaydedildi mi
    expect(store.getState().cart.items[0]).toEqual({
      id: 1,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      name: "Vanilya Rüyası",
      price: 149.9,
      quantity: 1,
      serving: "Külah",
    });
  });

  test("kap seçiliyken ürün sepete eklenir", async () => {
    // bileşeni ekrana bas
    const user = userEvent.setup();
    const { store } = renderWithStore(<ProductCard product={PRODUCT} />);

    // kap seçeneğini seç
    await user.click(screen.getByRole("button", { name: "Kap" }));

    // sepete ekle butonuna tıkla
    await user.click(screen.getByRole("button", { name: /sepete ekle/i }));

    // serving değeri kap olan ürün sepete eklenir
    expect(store.getState().cart.items[0].serving).toBe("Kap");
  });

  test("butona tıklayınca 'Sepete Eklendi' yazar", async () => {
    // bileşeni ekrana bas
    const user = userEvent.setup();
    renderWithStore(<ProductCard product={PRODUCT} />);

    // sepete ekle butonuna tıkla
    await user.click(screen.getByRole("button", { name: /Sepete Ekle/i }));

    // butonda eklendi yazar
    screen.getByRole("button", { name: /Eklendi/i });
  });
});
