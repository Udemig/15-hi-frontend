import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <Link to="/" className="group">
            <h1 className="font-bold text-2xl md:text-3xl bg-linear-to-r from-blue-600 to-blue-500 bg-clip group-hover:scale-105 transition-all">
              Tripster
            </h1>
          </Link>

          <nav className="flex gap-6 items-center">
            <Link to="/" className="nav-link group">
              Oteller (44)
              <span className="link-line" />
            </Link>
            <Link to="/" className="nav-link group max-md:hidden">
              Popüler
              <span className="link-line" />
            </Link>
            <Link to="/admin/create" className="nav-link group">
              Oluştur
              <span className="link-line" />
            </Link>
          </nav>
        </div>

        <div className="flex gap-3 items-center">
          <button className="btn-secondary max-md:hidden">Kayıt Ol</button>
          <button className="btn-primary">Giriş Yap</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
