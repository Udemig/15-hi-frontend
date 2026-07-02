import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Detail from "./pages/detail";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/place/:id" element={<Detail />} />
            <Route path="/admin/create" element={<Form />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
