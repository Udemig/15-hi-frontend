import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton from "../components/ColorButton";

// Unit test yazmak, yazdığımız kodun algoritmik olarak doğru çalışıp çalışmadığını kontrol etmek için kullanılır
test("Butona tıklama olayında renk ve yazı değişir", () => {
  // test edilecek bileşen render edilir
  render(<ColorButton />);

  // test edilecek elementi al
  const button = screen.getByRole("button");

  // butonun arkaplan rengi "kırmızı" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // butonun yazısı "maviye çevir" mi kontrol et
  expect(button).toHaveTextContent("Maviye Çevir");

  // butona tıkla
  fireEvent.click(button);

  // butonun arkaplan rengi "mavi" mi kontrol et
  expect(button).toHaveStyle({ background: "aqua" });

  // butonun yazısı "kırmızıya çevir" mi kontrol et
  expect(button).toHaveTextContent("Kırmızıya Çevir");

  // butona tıkla
  fireEvent.click(button);

  // butonun arkaplan rengi "kırmızı" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // butonun yazısı "maviye çevir" mi kontrol et
  expect(button).toHaveTextContent("Maviye Çevir");
});
