import type { FC } from "react";
import Hero from "./hero";
import List from "./list";

const Home: FC = () => {
  return (
    <div>
      <h1 className="uppercase whitespace-nowrap font-rubik font-bold text-center welcome-text">
        Do it <span className="text-blue">right</span>
      </h1>

      <Hero />

      <div className="mt-6 md:mt-7 lg:mt-8 flex justify-between items-center">
        <h1 className="font-rubik font-semibold text-2xl md:text-3xl lg:text-4xl text-dark-gray uppercase">
          Yeni sezon ürünleri <br /> sakın kaçırma
        </h1>

        <button className="bg-blue text-white py-2 px-3 rounded-lg lg:py-3 lg:px-7 transition hover:brightness-90">
          Alışverişe Başla
        </button>
      </div>

      <List />
    </div>
  );
};

export default Home;
