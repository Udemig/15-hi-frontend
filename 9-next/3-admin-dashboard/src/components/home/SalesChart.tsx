import { FC } from "react";
import { ChartData } from "@/types";
import LineGraphic from "../graphics/LineGraphic";
import { getOrders } from "@/utils/service";

const SalesChart: FC = async () => {
  // api'dan sipariş verisini al
  const orders = await getOrders();

  // grafik için gerekli veriyi hazırla
  const data: ChartData = {
    labels: orders.map((i) => i.order_date),
    datasets: [
      {
        label: "Satış Toplamı",
        data: orders.map((i) => i.total_price),
        borderColor: "rgb(0,150,255)",
        backgroundColor: "rgba(0,150,255, 0.5)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card p-5 size-full lg:pb-16">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="subtitle">Satış Grafiği</h2>
          <p className="text-sm text-zinc-500 mt-0.5">Dönemsel satış toplamları</p>
        </div>
      </div>

      <div className="size-full pt-5">
        <LineGraphic data={data} />
      </div>
    </div>
  );
};

export default SalesChart;
