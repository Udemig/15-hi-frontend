import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import Card from "../../components/card";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  console.log(video);

  useEffect(() => {
    setIsLoading(true);

    // api'a gönderilecek parametreleri hazırla
    const params = { id, extend: "1", geo: "TR", lang: "tr" };

    // api'a video bilgileri için istek at
    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Spinner />;

  if (error || video.error) return <Error message={error || video.error} />;

  return (
    <div className="page flex flex-col lg:flex-row gap-6 mx-auto max-w-500">
      <div className="flex-1">
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>

        <div></div>
      </div>

      <div className="lg:w-100">
        <h2 className="text-lg font-semibold mb-4 max-lg:hidden">İlgili Videolar</h2>

        <div className="space-y-2 @container">
          {video.relatedVideos.data
            .filter((item) => item.type === "video")
            .map((video, key) => (
              <Card key={key} video={video} isRow />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
