import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/products/ProductShowcase";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CartDrawer from "./components/cart/CartDrawer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="grow">
        <Hero />
        <ProductShowcase />
        <Features />
      </main>
      <Footer />
      <CartDrawer />

      {/* Global toast notifications (Turkish) */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
