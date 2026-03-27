import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Basket from "./pages/basket";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sepet" element={<Basket />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
