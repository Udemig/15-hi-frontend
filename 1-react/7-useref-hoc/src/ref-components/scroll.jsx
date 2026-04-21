import { useRef } from "react";

const Scroll = () => {
  // useRef kurulum
  const topRef = useRef(null);

  // başa dön butonun tıklanınca çalışır
  const handleScroll = () => {
    // scrollIntoView: element ekrana gelene kadar sayfayı kaydırır
    topRef.current.scrollIntoView();
  };

  return (
    <div>
      <h3>Örnek-2: DOM Elementlerine Erişme</h3>
      <p>
        <b>Açıklama</b> sayfanın aşağısına kaydırmış olan kullanıcıyı yukarıya geri göndermek için useRef ile
        istediğimiz elementin referansını aldık
      </p>

      <h3 ref={topRef} className="my-5">
        ⬆️ Sayfanın Başı
      </h3>

      <div className="d-grid gap-5">
        {new Array(20).fill(1).map((item, key) => (
          <div key={key} className="card card-body text-black">
            Kart
          </div>
        ))}
      </div>

      <h3 className="my-5">⬇️ Sayfanın Sonu</h3>

      <div className="d-flex justify-content-center my-5">
        <button className="btn btn-primary" onClick={handleScroll}>
          ^ Başa Dön ^
        </button>
      </div>
    </div>
  );
};

export default Scroll;
