import { useEffect, useState } from "react";
import { totalApi } from "../../utils/api";
import Loader from "../../components/loader";
import Item from "./item";
import millify from "millify";

const Statistics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    totalApi
      .get("/reports/total")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container py-0">
      <div className="bg-white/95 backdrop-blur-md shadow-md rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-5 -mt-8.5 md:-mt-12 animate-slide-up">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p className="col-span-3 text-center text-red-400 font-medium">Üzgünüz bir hata oluştu</p>
        ) : (
          data && (
            <>
              <Item color="text-pink-500" label="Toplam Vaka" value={millify(data.confirmed)} />
              <Item color="text-green-500" label="Aktif Vaka" value={millify(data.active)} />
              <Item color="text-gray-500" label="Toplam Vefat" value={millify(data.deaths)} />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Statistics;
