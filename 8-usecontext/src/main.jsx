import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App.jsx";
// Context sağlayıcı bileşenini import et
import { ProductProvider } from "./context/product-context.jsx";
import { BasketProvider } from "./context/basket-context.jsx";

// Bileşenlerimizin context yapısında verilere erişebilmesi için context sağlayıcı bileşeni ile app'i sarmalarız
createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BasketProvider>,
);
