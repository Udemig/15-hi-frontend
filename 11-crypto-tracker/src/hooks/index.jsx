/*
 ! Custom Hook
 * React'ta tekrar eden state'i veya kodu component'lardan alıp yeniden kullanılabilir hasle getirdiğimiz fonksiyonlara denir.
 * Hook'lar her zaman use ile başlar
 * Her zaman data / fonksiyon return eder
*/

import { useEffect, useState } from "react";
import api from "../utils/api";

const useCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLasUpdated] = useState(new Date());

  // api'dan verileri alan fonksiyon
  const fetchCoins = () => {
    setIsLoading(true);
    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => {
        setError(null);
        setCoins(res.data);
        setLasUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  // bileşen ekrana basıldığında çalışır
  useEffect(() => {
    fetchCoins();
  }, []);

  // hook'un döndüreceği verileri belirle
  return { isLoading, error, coins, lastUpdated, fetchCoins };
};

export default useCoins;
