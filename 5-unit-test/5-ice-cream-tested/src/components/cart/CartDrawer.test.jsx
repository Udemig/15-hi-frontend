import { screen } from "@testing-library/react";
import { renderWithStore } from "../../utils/test-utils";
import CartDrawer from "./CartDrawer";
import { ITEMS } from "../../utils/constants";
import userEvent from "@testing-library/user-event";

const storeState = (items, isOpen = true) => ({ isOpen: isOpen, items: items });

describe("CartDrawer", () => {
  test("isOpen false ise modal görünmez", () => {
    renderWithStore(<CartDrawer />, { preloadedState: storeState([], false) });

    expect(screen.getByTestId("modal")).toHaveClass("opacity-0");
  });

  test("isOpen true ise modal görünür", () => {
    renderWithStore(<CartDrawer />, { preloadedState: storeState([]) });

    expect(screen.getByTestId("modal")).toHaveClass("opacity-100");
  });

  test("sepette ürün yoksa ekranda 'Sepetiniz Boş' yazar", () => {
    renderWithStore(<CartDrawer />, { preloadedState: storeState([]) });

    screen.getByText(/Sepetiniz Boş/i);
  });

  test("sepette ürün varsa ekranda listelenir", () => {
    renderWithStore(<CartDrawer />, { preloadedState: storeState(ITEMS) });

    screen.getByText(ITEMS[0].name);
    screen.getByText(ITEMS[1].name);
  });

  test("sepette ürün varsa toplam bilgisi ekran basılır", () => {
    renderWithStore(<CartDrawer />, { preloadedState: storeState(ITEMS) });

    screen.getByText(/3 ürün/i);
    screen.getByText(/₺464.70/i);
  });

  test("x butonuna tıklanınca modal kapanır", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<CartDrawer />, { preloadedState: storeState([]) });

    await user.click(screen.getByRole("button", { name: /sepeti kapat/i }));

    expect(store.getState().cart.isOpen).toBe(false);
  });

  test("esc tuşuna basınca modal kapanır", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<CartDrawer />, { preloadedState: storeState([]) });

    await user.keyboard("{Escape}");

    expect(store.getState().cart.isOpen).toBe(false);
  });

  test("sepeti onayla butonuna tıklanınca sepet temizlenir", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<CartDrawer />, { preloadedState: storeState(ITEMS) });

    await userEvent.click(screen.getByRole("button", { name: /sepeti onayla/i }));

    expect(store.getState().cart.items.length).toBe(0);
  });
});
