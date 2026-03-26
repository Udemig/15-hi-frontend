import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // fonksiyonu çağırınca dizi içeriskaranlıkinde 2 eleman dönder:
  // 1) url'deki parametrelere erişmemizi ve değiştirmemizi sağlayan nesne
  // 2) url'i güncelleyen fonksiyon
  const [searchParams, setSearchParams] = useSearchParams();

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfanın yenilenmesi engelle
    e.preventDefault();

    // inputta yazılan yazıya eriş
    const text = e.target[0].value;

    // aratılan metni url'e queryParam olarak ekle
    searchParams.set("arama_terimi", text);

    // parameterede yaptığımız güncellemeyi url'e yansıtalım
    setSearchParams(searchParams);
  };

  return (
    <div className="card shadow-sm my-4">
      <form onSubmit={handleSubmit} className="card-body d-flex gap-2 p-3">
        <input
          type="text"
          placeholder="kitap ara..."
          className="form-control"
          defaultValue={searchParams.get("arama_terimi")}
        />

        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Filter;
