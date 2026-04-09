import InfoList from "../../components/home/info-list";
import CoinCard from "../../components/home/coin-card";
import useCoins from "../../hooks";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Home = () => {
  // kendi yazdığımız custom hook ile api isteği atma ve state'i yönetme işlerini bu bileşenin dışarısına taşıdık
  const { isLoading, error, coins, lastUpdated, fetchCoins } = useCoins();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} refetch={fetchCoins} />;

  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400">En popüler kripto para birimleri</p>
        </div>
      </div>

      <InfoList total={coins.length} lastUpdated={lastUpdated} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
        {coins.map((coin, key) => (
          <CoinCard key={key} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Home;
