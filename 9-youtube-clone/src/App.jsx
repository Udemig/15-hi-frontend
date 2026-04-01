import Feed from "./pages/feed";
import Search from "./pages/search";
import Detail from "./pages/detail";
import Category from "./pages/category";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <div>
          <Sidebar />

          <main>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/watch" element={<Detail />} />
              <Route path="/results" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
