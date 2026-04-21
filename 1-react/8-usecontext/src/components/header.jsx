import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BasketContext } from "../context/basket-context";
import { ProductContext } from "../context/product-context";

const Header = () => {
  // productContext'e abone ol
  const { products } = useContext(ProductContext);

  // basketContext'e abone ol
  const { basket } = useContext(BasketContext);

  // sepetteki toplam ürün sayısını hesapla
  const totalItem = basket.reduce((total, item) => total + item.amount, 0);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">
          Context Store
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Anasayfa ({products.length})
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sepet">
                Sepet ({totalItem})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
