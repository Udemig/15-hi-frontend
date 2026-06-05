import { render, screen } from "@testing-library/react";
import Header from "../components/detail/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockDetailData } from "../utils/constants";

//sahte store oluşturmaya yarayan fonksiyonu kur
const createMockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumda sahte bir store oluştur
  const store = createMockStore({ isLoading: true, error: null, data: null });

  // bileşen içerisinde react-router-dom veya react-redux gibi kütüphanelerin kodları yer alıyorsa test ortamında bileşeni renderlarken bu gibi kütüphanelerin provider'ları ile sarmalamalıyız
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  // ekranda loader var mı
  screen.getByTestId("loader");
});

test("store'a veri geldiğinde ekrana ülke ismi ve bayrağı gelir", () => {
  // test seneryosuna uygun sahte bir store oluştur
  const store = createMockStore({ isLoading: false, error: null, data: mockDetailData });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  // loader'ın ekranda olmadığını kontrol et
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  // ülke ismi ekranda mı ve doğru mu
  screen.getByRole("heading", { name: "Brazil" });

  // ülke bayrağı ekranda mı
  const flag = screen.getByAltText(mockDetailData.flag.alt);

  // ülke bayrağının src doğru mu
  expect(flag).toHaveAttribute("src", mockDetailData.flag.png);
});
