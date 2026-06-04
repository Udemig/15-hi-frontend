import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../components/home/statistics";

/*
 ! Mock
 * Yazdığımız testler kesinlikle api istekleri gibi dış etkenlerden tamamen bağımsız olmalı, yani api'dan gelicek olan cevap testin sonucunu etkilememeli

 * Yani api "api'dan yanıt geliyor mu" testi değil, "api'dan bu yanıt gelince arayüz güncelleniyor mu" testi  yazarız

 * API isteğini atan fonksiyonu "mock'layıp" bu sayede api'ın  döndüreceği cevabu test içerisinde biz belirleyeceğiz
*/

// 1) mock'lamak istediğimiz değişkeni import ederiz
import { totalApi } from "../utils/api";
import { mockStatisticsData } from "../utils/constants";

// 2) api isteğini atan get fonksiyonu yerine sahte bir test fonksiyonu koyalım
jest.mock("../utils/api", () => ({ totalApi: { get: jest.fn() } }));

test("bileşen render olduğunda api isteği atılır ve ekrana loader gelir", () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değerin return edileceğini belirle
  totalApi.get.mockReturnValue(new Promise(() => {}));

  // bileşeni renderla
  render(<Statistics />);

  // api isteğini atan fonksiyon çalıştı mı?
  expect(totalApi.get).toHaveBeenCalled();

  // ekrana loader bileşeni geldi mi
  screen.getByTestId("loader");
});

test("api'dan hata gelirse ekrana hata mesajı gelir", async () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değerin return edileceğini belirle
  totalApi.get.mockRejectedValue(new Error("İnternetin çok yavaş"));

  // bileşeni renderla
  render(<Statistics />);

  // belirli bir süre sonra hata mesajı ekrana geliyor mu
  // waitFor: fonksiyonda verilen olay gerçekleşene kadar bir süre bekler
  await waitFor(() => screen.getByText("Üzgünüz bir hata oluştu"));
});

test("api'dan veri gelirse ekrana istatistikler gelir", async () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değerin return edileceğini belirle
  totalApi.get.mockResolvedValue({ data: mockStatisticsData });

  // bileşeni renderla
  render(<Statistics />);

  // api isteğinin atılmasını bekle
  await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

  // ekrana veriler geldi mi
  screen.getByText("Toplam Vaka");
  screen.getByText("Toplam Vefat");
  screen.getByText("Aktif Vaka");
});
