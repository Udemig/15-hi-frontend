// Bileşen kullanılırken gönderilen prop'lara erişmek için fonksiyonun parametre kısmını kullanırız
// Prop'lar otomatik olarak nesne formatında gelir
function Card(props) {
  return (
    <div className="card">
      <img src={props.resim} width={100} />

      <p>{props.fiyat} TL</p>

      <h3>{props.isim}</h3>

      <button>Sepete Ekle</button>
    </div>
  );
}

export default Card;
