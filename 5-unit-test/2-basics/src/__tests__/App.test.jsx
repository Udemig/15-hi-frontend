/*
 ! Test Nasıl Yazılır
 * test yazarken *test* veya *it* methodlarını kullanırız
 * test fonksiyonu 2 parametre alır:
 * 1) testin adı:string
 * 2) testin yazıldığı fonksiyon
 */

import { render, screen } from "@testing-library/react";
import App from "../App";

test("ekranda merhaba dünya yazar", () => {
  // test edilecek bileşen render edilir (sanal ortam)
  render(<App />);

  // test edilecek elementi çağır
  // eğer bileşen tarayıcıda render ediliyor olsaydı document.querySelector() fonksiyonu ile çağırırdıl ama sanal ortamda render edildiği için elementi çağırken document yerine screen ve querySelector yerine farklı methodalar kullanıcaz
  const h1 = screen.getByText("Merhaba Dünya");

  // çağrılan elementten beklentimizi söyleriz
  // beklenetimiz: elementin ekrana bassılmış olması
  expect(h1).toBeInTheDocument();
});
