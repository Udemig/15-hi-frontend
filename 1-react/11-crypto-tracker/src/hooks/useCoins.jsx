/*
 ! Custom Hook
 * React'ta tekrar eden state'i veya kodu component'lardan alıp yeniden kullanılabilir hasle getirdiğimiz fonksiyonlara denir.
 * Hook'lar her zaman use ile başlar
 * Her zaman data / fonksiyon return eder
*/

import { useEffect, useMemo, useState } from "react";
import api from "../utils/api";

const useCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLasUpdated] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // api'dan verileri alan fonksiyon
  const fetchCoins = (isRefreshing) => {
    isRefreshing ? setRefreshing(true) : setIsLoading(true);

    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => {
        setError(null);
        setCoins(res.data);
        setLasUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
        setRefreshing(false);
      });
  };

  // bileşen ekrana basıldığında çalışır
  useEffect(() => {
    fetchCoins();
  }, []);

  // otomatik yenileme
  useEffect(() => {
    // her 30 saniyede bir api'dan güncel verileri al
    const id = setInterval(() => fetchCoins(true), 30000);

    // perfromans kaybını önlemek için interval'ı durdur
    return () => clearInterval(id);
  }, []);

  // aratılan terim veya coinler değişirse filtreleme yap
  const filtredCoins = useMemo(
    () => coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [coins, searchTerm],
  );

  // hook'un döndüreceği verileri belirle
  return { isLoading, error, coins, filtredCoins, lastUpdated, refreshing, fetchCoins, searchTerm, setSearchTerm };
};

export default useCoins;
