import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import ProductList from "@/components/home/ProductList";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="page">
      <Hero />

      <Features />

      <ProductList />
    </div>
  );
};

export default Home;
