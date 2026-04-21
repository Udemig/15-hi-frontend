import Feed from "./pages/feed";
import Search from "./pages/search";
import Detail from "./pages/detail";
import Category from "./pages/category";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header toggleSidebar={toggleSidebar} />

        <div className="flex w-full">
          <Sidebar isExpanded={isExpanded} />

          <main className="flex-1 h-[calc(100vh-56px)] w-full overflow-x-hidden overflow-y-auto">
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
