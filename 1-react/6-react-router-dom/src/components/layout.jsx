import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  /*
   * Bu nested routes özelliğini kullanıcı yetkilendirme sistemlerinde yaygın bir şekilde kullanırız.
   * Örneğin bu parent route içerisinde bütün child route'lar sadece admin kullanıcısı tarafından giriş yapılabilir tarzı koşullar yazılır.
   */

  return (
    <div className="container d-flex gap-4">
      {/* Bütün child route'lar için ortak bir aside elementi tanımladık */}
      <aside className="border rounded p-4 d-flex flex-column gap-3">
        <NavLink to="/kategori/roman">Roman</NavLink>
        <NavLink to="/kategori/hikaye">Hikaye</NavLink>
      </aside>

      {/* Outlet: Kapsayıcı route içerisinde child route elementinin ekrana basılacağı konumu belirler */}
      <Outlet />
    </div>
  );
};

export default Layout;
