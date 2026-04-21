import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Detail from "./pages/detail";
import NotFound from "./pages/not-found";
import Header from "./components/header";
import Footer from "./components/footer";
import Novel from "./pages/novel";
import Story from "./pages/story";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
        <Header />

        <main className="flex-fill d-flex justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />

            {/*
             * Dinamik Route => Url parametresine sahip route'lardır
             * :parametre_ismi => formatında parametreler tanımlanır
             */}
            <Route path="/ürünler/:id" element={<Detail />} />

            {/* * Nested Route => Birden fazla route'u kapsayıcı bir route içerisinde tanımlama */}
            <Route path="/kategori" element={<Layout />}>
              <Route path="hikaye" element={<Story />} />

              <Route path="roman" element={<Novel />} />
            </Route>

            {/* 404 Route => Kullanıcı tanımsız bir urle giderse karşılaşır  */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
