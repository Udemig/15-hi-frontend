import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  // kullanıcının bulunduğu adres ile alakalı bilgilere erişmemizi sağlar
  const location = useLocation();

  return (
    <div>
      <div className="text-center">
        <h1>404</h1>

        <h2 className="my-4">{location.state ? location.state : "Aradığınız Sayfa Bulunamadı"}</h2>

        <Link to="/" className="btn btn-outline-secondary">
          Anasayfa'ya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
