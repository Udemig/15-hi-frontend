import { TrendingDown, TrendingUp } from "lucide-react";
import { formatPrice, formatPercantage, formatBigNumber } from "../../utils/helpers";

const CoinCard = ({ coin }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;
  const color = isPositive ? "text-green-500" : "text-red-500";
  const icon = isPositive ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 hover:scale-105 transition">
      {/* Üst Kısım */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={coin.image} alt={coin.symbol} className="size-12 rounded-full" />
            <span className="absolute -top-2 -right-2 bg-blue-500 size-6 text-xs flex items-center justify-center font-bold rounded-full text-white">
              {coin.market_cap_rank}
            </span>
          </div>

          <div>
            <h5 className="font-bold text-lg text-gray-900 dark:text-white">{coin.symbol}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-40 truncate">{coin.name}</p>
          </div>
        </div>
      </div>

      {/* Orta Kısım */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="card-label">Fiyat</span>
          <span className="card-value text-xl font-bold">{formatPrice(coin.current_price)}</span>
        </div>

        <div className="flex justify-between">
          <span className="card-label">24s Değişim (%)</span>
          <span className={`card-value text-xl font-semibold flex items-center gap-1 ${color}`}>
            {icon} {formatPercantage(coin.price_change_percentage_24h)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="card-label">Market Hacmi</span>
          <span className="card-value">{formatBigNumber(coin.market_cap)}</span>
        </div>

        <div className="flex justify-between">
          <span className="card-label">24s Hacim</span>
          <span className="card-value">{formatBigNumber(coin.total_volume)}</span>
        </div>
      </div>

      {/* Alt Kısım */}
      <div></div>
    </div>
  );
};

export default CoinCard;
