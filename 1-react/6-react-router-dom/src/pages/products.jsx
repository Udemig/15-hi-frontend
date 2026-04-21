import api from "../api";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Filter from "../components/filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // url'deki query parametresine erişmek için
  const [searchParams, setSearchParams] = useSearchParams();

  // url'deki arama_terimi parametresinin değerine erişelim
  const searchTerm = searchParams.get("arama_terimi");

  // api'dan gelen kitap verilerini tutucağımız state
  const [books, setBooks] = useState([]);

  // bileşenin ekrana basılma olayını izle (componentDidMount)
  useEffect(() => {
    // api'a gönderilecek parametreyi ayarla
    const params = { q: searchTerm };

    // api'a ürün kitap verileri için istek at
    api
      .get("/books", { params })
      // api'dan gelen cevabı state'e aktar
      .then((res) => setBooks(res.data));
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="my-3">
        <h1>Ürünler</h1>
        <p>Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <Filter />

      <div className="row p-1 g-4">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
