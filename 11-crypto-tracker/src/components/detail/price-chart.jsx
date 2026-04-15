import { Line } from "react-chartjs-2";
import "chart.js/auto";

const PriceChart = ({ symbol, priceHistory, days }) => {
  // grafik ayarları
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  // graifk verisi
  const data = {
    labels: ["Ocak", "Şubat", "Mart", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [234, 567, 134, 658, 1190, 234, 768, 123, 79],
        borderColor: "aqua",
        backgroundColor: "crimson",
      },
    ],
  };

  return (
    <div className="h-80 w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceChart;
