import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Form from "./components/form";
import Button from "./components/button";

/*
 * Bir bileşeni kullanmak için.
 * 1) kullanmak istediğimiz bileşeni import ederiz
 * 2) return satırı içerisinde bileşeni çağırırız
 * 3) <Bileşenİsmi />
 */

function App() {
  // Koşullu renderlama için kullanılan değişken
  const girişYapildiMi = true;

  // Çoklu renderlama yöntemini kullanmak için öncelikle bir dizi oluşturuyoruz
  // Bu diziyi map yöntemiyle dönersek dizideki eleman sayısı kadar bileşeni ekrana basarız
  const ürünler = [
    {
      isim: "Nestle Çikolata",
      fiyat: 250,
      resim: "https://cdn-image.getir.com/market/product/02c129cc-ac18-490b-882e-a80fa3c47599.png",
    },
    {
      isim: "Ülker Çikolata",
      fiyat: 750,
      resim: "https://cdn.getir.com/product/5936674138003900045406d0_tr_1608389364430.jpeg",
    },
    {
      isim: "Eti Canga",
      fiyat: 50,
      resim: "https://cdn-image.getir.com/market/product/3663502e-c15d-4ce2-8f14-6d68e1bfcca0.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />

      <main>
        <h2>{girişYapildiMi ? "Hoş Geldin!" : "Lütfen Giriş Yap"}</h2>

        <Form />

        <Button />

        <section>
          {ürünler.map((ürün) => (
            <Card isim={ürün.isim} fiyat={ürün.fiyat} resim={ürün.resim} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
