import { render, screen } from "@testing-library/react";
import Item from "../components/home/item";

// Normal şartlarda bir bileşeni kullanmak için göndermemiz gereken zorunlu proplar varsa test anında da bu proplar gönderilmeli
test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-orange-500" label="Toplam Test" value="243M" />);

  // gerekli elementleri çağır
  const icon = screen.getByRole("icon");
  const h2 = screen.getByRole("heading");
  const label = screen.getByText("Toplam Test");

  // color propuyla gelen değer icon'un className'inde var mı
  expect(icon).toHaveClass("text-orange-500");

  // value propu ile gönderdiğimiz değer h2 içerisinde yazıyor mu kontrol et
  expect(h2).toHaveTextContent("243M");
});
