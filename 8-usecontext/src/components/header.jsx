import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
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
                Anasayfa (30)
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sepet">
                Sepet (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
