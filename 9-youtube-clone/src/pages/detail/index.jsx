import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import Card from "../../components/card";
import ChannelInfo from "./channel-info";
import Description from "./description";
import Comments from "./comments";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

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
  }, [id]);

  if (isLoading) return <Spinner />;

  if (error || video.error) return <Error message={error || video.error} />;

  return (
    <div className="page flex flex-col lg:flex-row gap-6 mx-auto max-w-500">
      <div className="flex-1">
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            autoPlay
          ></iframe>
        </div>

        <div className="space-y-4 mt-4">
          <h1 className="text-xl font-bold line-clamp-2 leading-tight">{video.title}</h1>

          <ChannelInfo video={video} />

          <Description video={video} />

          <Comments videoId={id} count={video?.commentCount} />
        </div>
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
