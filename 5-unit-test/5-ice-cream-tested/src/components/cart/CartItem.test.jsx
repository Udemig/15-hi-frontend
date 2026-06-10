import { screen } from "@testing-library/react";
import { renderWithStore } from "../../utils/test-utils";
import CartItem from "./CartItem";
import { ITEM, ITEMS } from "../../utils/constants";
import userEvent from "@testing-library/user-event";

const storeState = (items, isOpen = true) => ({ isOpen: isOpen, items: items });

describe("CartItem", () => {
  test("ürün bilgileri ekrana basılır", () => {
    // bileşeni ekrana bas
    renderWithStore(<CartItem item={ITEM} />);

    // yazı içerikleri ekranda mı
    screen.getByText(ITEM.name);
    screen.getByText(ITEM.serving);
    screen.getByText(ITEM.quantity);
    screen.getByText(`₺${(ITEM.quantity * ITEM.price).toFixed(2)}`);

    // fotoğraf var mı & kaynağı doğru mu
    expect(screen.getByAltText(ITEM.name)).toHaveAttribute("src", ITEM.image);
  });

  test("sil butonuna tıklanınca ürün sepetten kaldırılır", async () => {
    // bileşeni ekrana bas
    const user = userEvent.setup();
    const { store } = renderWithStore(<CartItem item={ITEM} />, { preloadedState: storeState(ITEMS) });

    // sil butonuna tıkla
    await user.click(screen.getByRole("button", { name: /sepetten çıkar/i }));

    // ürün sepette yer almaz
    expect(store.getState().cart.items.length).toBe(1);
  });

  // TODO
  test("arttır butonuna tıklanınca ürün miktarı artar", () => {});

  test("azalt butonuna tıklanınca ürün miktarı azalır", () => {});
});
