import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api";

const Detail = () => {
  // useNavigate kurulum
  const navigate = useNavigate();

  // api'dan gelen verilerin statei
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // url'deki parametreye erişim
  const { id } = useParams();

  // bileşenin ekrana basılma anını izle
  useEffect(() => {
    setLoading(true);

    // idsi bilinen kitap verileri için api'a istek at
    api
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch(() => navigate("/404", { state: "Kitap bulunamadı" }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1 className="text-center fw-bold">Yükleniyor...</h1>;

  return (
    <div className="container my-3">
      <Link to={-1}>Geri</Link>

      <h2 className="text-center my-4">Detay Sayfası</h2>

      <div className="d-flex flex-column align-items-center text-center gap-4">
        <img src={book.image} className="img-fluid rounded" style={{ maxHeight: "420px" }} />

        <h1>{book.title}</h1>

        <p>{book.description}</p>

        <div className="row g-3 w-100" style={{ maxWidth: "760px" }}>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yazar</span>
            <span className="fw-semibold">{book.author}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Kategori</span>
            <span className="fw-semibold">{book.category}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yıl</span>
            <span className="fw-semibold">{book.year}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Sayfa</span>
            <span className="fw-semibold">{book.page}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Fiyat</span>
            <span className="fw-semibold">{book.price}₺</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
