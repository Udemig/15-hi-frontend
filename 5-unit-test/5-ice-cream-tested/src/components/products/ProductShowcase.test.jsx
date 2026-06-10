import { render, screen } from "@testing-library/react";
import ProductShowcase from "./ProductShowcase";
import { renderWithStore } from "../../utils/test-utils";
import { getIcecreams } from "../../api/icecreams";
import { PRODUCTS } from "../../utils/constants";
import userEvent from "@testing-library/user-event";

// API isteğini atan fonksiyonu mock'layalım bu sayede test ortamında api isteği atılmasın
jest.mock("../../api/icecreams");

describe("ProductShowcase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("başlangıç anında loading durumundadır", () => {
    // bu test için api isteğinden dönmesi gereken cevabı belirle
    getIcecreams.mockReturnValue(new Promise(() => {}));

    // bileşeni provider ile sarmalayarak ekrana bas
    renderWithStore(<ProductShowcase />);

    // ekranda loader var mı
    screen.getByText("Lezzetler yükleniyor…");
  });

  test("hata gelirse hata mesajını ekrana basar", async () => {
    // api'dan dönücek cevabı belirle
    getIcecreams.mockRejectedValue(new Error("dondurma bitti"));

    // bileşeni ekrana bas
    renderWithStore(<ProductShowcase />);

    // bir süre sonra ekranda hata mesajı var mı
    await screen.findByText("Ürünler yüklenemedi.");
  });

  test("veri gelince ürünleri ekrana basar", async () => {
    // api'dan dönücek cevabı belirle
    getIcecreams.mockResolvedValue(PRODUCTS);

    // bileşeni ekrana bas
    renderWithStore(<ProductShowcase />);

    // belirli bir süre sonra ürünler ekrana basıldı mı
    await screen.findByText("Vanilya Rüyası");
    screen.getByText("Çikolata Cenneti");
    screen.getByText("Çilek Bahçesi");
  });

  test("kategori seçimine göre ürünler filtrelenir", async () => {
    // userevent kurulum
    const user = userEvent.setup();
    // api'dan gelen cevabı belirle ve bileşeni renderla
    getIcecreams.mockResolvedValue(PRODUCTS);
    renderWithStore(<ProductShowcase />);

    // ürünlerin ekran basılmasını bekle
    await screen.findByText("Vanilya Rüyası");

    // vegan butonuna tıkla
    await user.click(screen.getByRole("button", { name: "Vegan" }));

    // doğru ürünler ekranda mı
    screen.getByText("Çilek Bahçesi");
    expect(screen.queryByText("Vanilya Rüyası")).toBeNull();
    expect(screen.queryByText("Çikolata Cenneti")).toBeNull();
  });

  test("kategoride ürün yoksa ekranda ürün bulunmadı yazar", async () => {
    // api'dan dönen ccevabı belirle ve bileşeni renderla
    getIcecreams.mockResolvedValue([]);
    render(<ProductShowcase />);

    // ekranda bulunamadı yazar
    await screen.findByText("Bu kategoride ürün bulunamadı.");
  });
});
