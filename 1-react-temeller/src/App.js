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
  const ürünler = [1, 1, 1, 1, 1, 1, 1, 1];

  // TODO: PROPSLAR İÇİN ÖRNEĞE DEVAM
  return (
    <div className="App">
      <Header />

      <main>
        <h2>{girişYapildiMi ? "Hoş Geldin!" : "Lütfen Giriş Yap"}</h2>

        <Form />

        <Button />

        <section>
          <Card isim="Nestle Çikolata" fiyat={250} />

          <Card isim="Ülker Ece Fındıklı" fiyat={750} />

          {/* {ürünler.map((ürün) => (
            <Card />
          ))} */}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
