import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import Card from "../../components/card";
import Shorts from "../../components/shorts";
import QueryListing from "../../components/query-listing";

const Category = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  // url'deki searchQuery parametresine eriştik
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // bileşen ekrana basılınca ve aratılan kelime değiştiğinde
  useEffect(() => {
    setIsLoading(true);

    const params = { query, geo: "TR", lang: "tr" };

    api
      .get("/search", { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.messsage))
      .finally(() => setIsLoading(false));
  }, [query]);

  // daha fazla butonuna tıklanınca içeriğin devamını yükle
  const handleLoadMore = () => {
    setIsMoreLoading(true);

    // parametrelere önceki istekten gelen tokenı ekle
    const params = { token, query, geo: "TR", lang: "tr" };

    api
      .get("/search", { params })
      .then((res) => {
        setToken(res.data.continuation);
        setData([...data, ...res.data.data]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsMoreLoading(false));
  };

  // api'dan gelen data dizisi içerisindeki ihticamız olan verileri filtrele
  const filtredArr = data.filter(
    (i) => i.type == "video" || i.type == "shorts" || i.type == "shorts_listing" || i.type == "query_listing",
  );

  return (
    <div className="page pb-10">
      <h2 className="text-2xl mb-4">
        <b>{query}</b> için sonuçlar
      </h2>

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <div className="flex flex-col gap-4 @container">
            {filtredArr.map((item, key) =>
              item.type == "shorts_listing" ? (
                <Shorts key={key} data={item.data} />
              ) : item.type == "query_listing" ? (
                <QueryListing key={key} data={item.data} />
              ) : (
                <Card key={key} video={item} isRow />
              ),
            )}
          </div>

          {isMoreLoading && <Spinner designs="h-30!" />}

          {!isMoreLoading && token && (
            <div className="flex justify-center">
              <button onClick={handleLoadMore} className="my-10 bg-zinc-800 py-2 px-5 rounded-md hover:bg-zinc-700">
                Daha Fazla
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Category;
