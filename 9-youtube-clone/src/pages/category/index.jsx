import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import CategoryLoader from "../../components/loader/category-loader";
import Error from "../../components/error";
import Shorts from "../../components/shorts";
import Card from "../../components/card";

const Category = () => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // sayfa yüklenince veya kategori her değiştiğinde çalışır
  useEffect(() => {
    setIsLoading(true);

    // istek atılacak api enpointini belirle
    const url = category === "trendler" ? `/trending` : `/search?query=${category}`;

    // isteğin yanında gönderilecek parametreleri belirle
    const params = {
      geo: "TR",
      lang: "tr",
    };

    // api isteğini at
    api
      .get(url, { params })
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category]);

  // api'dan gelen veriyi kategorize et
  const videos = data.filter((item) => item.type === "video" || item.type === "shorts");
  const shortsListings = data.filter((item) => item.type === "shorts_listing");

  if (isLoading) return <CategoryLoader />;

  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        {shortsListings?.[0] && <Shorts data={shortsListings[0].data} />}

        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {videos.map((video, key) => (
            <Card key={key} video={video} />
          ))}
        </div>

        {shortsListings?.[1] && <Shorts data={shortsListings[1].data} />}
      </div>
    </div>
  );
};

export default Category;
