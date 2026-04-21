// useContext: context yapılarına abone olmamızı sağlayan react hooku
import { useContext } from "react";
// abone olmak istediğimiz context yapısını import ederiz
import { ProductContext } from "../context/product-context";
import Card from "../components/card";

const Home = () => {
  // product context yapısındaki verilere erişmek için abone oluyoruz
  const { isLoading, error, products } = useContext(ProductContext);

  return (
    <div className="container py-4">
      <h2 className="my-4">Güncel Ürünler</h2>

      <div className="cards-wrapper">
        {isLoading ? (
          <p>Yükleniyor..</p>
        ) : error ? (
          <p>Hata!: {error}</p>
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Home;
