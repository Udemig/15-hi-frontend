import { useState } from "react";

const BuyList = () => {
  // inputa yazılan yazı state'i
  const [product, setProduct] = useState("");
  // alışveriş listesi state'i
  const [list, setList] = useState([]);

  // yeni ürün oluşturma fonksiyonu
  const handleAdd = () => {
    // list dizisin ilk elemanı olarak inputa girilen ürünü ekle
    setList([product, ...list]);
  };

  return (
    <div>
      <h2>Alış Veriş Listesi</h2>

      <div>
        <input onChange={(e) => setProduct(e.target.value)} type="text" placeholder="Ürün Adı" />
        <button onClick={handleAdd}>Ekle</button>
      </div>

      {/* Çoklu eleman renderlama yöntemiyle dizi içerisindeki her bir eleman için ekrana li elementi bastık */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {index} - {item}
          </li>
        ))}
      </ul>

      <br />
      <br />
      <hr />
    </div>
  );
};

export default BuyList;
