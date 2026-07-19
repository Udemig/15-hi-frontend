import Card from "@/components/home/Card";
import CategoryChart from "@/components/home/CategoryChart";
import SalesChart from "@/components/home/SalesChart";
import { cards } from "@/utils/constants";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="page">
      <div className="mb-6">
        <h1 className="title">Admin Paneli</h1>
        <p className="text-zinc-500 mt-1">Genel bakış ve performans göstergeleri</p>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {cards.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5">
        <div className="lg:col-span-9 size-full overflow-hidden">
          <SalesChart />
        </div>

        <div className="lg:col-span-5 size-full overflow-hidden">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
};

export default Home;
