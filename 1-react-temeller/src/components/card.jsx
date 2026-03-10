// Bileşen kullanılırken gönderilen prop'lara erişmek için fonksiyonun parametre kısmını kullanırız
// Prop'lar otomatik olarak nesne formatında gelir
function Card(props) {
  return (
    <div className="card">
      <img src="https://cdn-image.getir.com/market/product/ebd9f958-d1c8-4002-8983-95095480f809.jpg" width={100} />

      <p>{props.fiyat} TL</p>

      <h3>{props.isim}</h3>
    </div>
  );
}

export default Card;
