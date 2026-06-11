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

  test("arttır butonuna tıklanınca ürün miktarı artar", async () => {
    // bileşeni renderla
    const user = userEvent.setup();
    const { store } = renderWithStore(<CartItem item={ITEM} />, { preloadedState: storeState(ITEMS) });

    // store'daki ürünün miktarı 2'dir
    expect(store.getState().cart.items[0].quantity).toBe(2);

    // + butona tıkla
    const btn = screen.getByRole("button", { name: /ADET artır/i });
    await user.click(btn);

    // store'daki ürünün miktarı artmıştır
    expect(store.getState().cart.items[0].quantity).toBe(3);
  });

  test("azalt butonuna tıklanınca ürün miktarı azalır", async () => {
    // bileşeni renderla
    const user = userEvent.setup();
    const { store } = renderWithStore(<CartItem item={ITEM} />, { preloadedState: storeState(ITEMS) });

    // - butonuna al
    const button = screen.getByRole("button", { name: /adet azalt/i });

    // store'daki miktar 2 mi ve buton aktif mi
    expect(store.getState().cart.items[0].quantity).toBe(2);

    // butona tıkla
    await user.click(button);

    // store'daki miktar 1 mi ve buton inaktif mi
    expect(store.getState().cart.items[0].quantity).toBe(1);
  });

  test("miktar 1 ise azalt butonu inaktif olur", () => {
    renderWithStore(<CartItem item={{ ...ITEM, quantity: 1 }} />);

    const button = screen.getByRole("button", { name: /adet azalt/i });
    expect(button).toBeDisabled();
  });
});
