import { useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";

const Card = ({ video, isRow }) => {
  // mouse card'ın üzerinde mi statei
  const [isHover, setIsHover] = useState(false);

  // thumbnail dizisindeki sonuncu elemanın url'ine eriş
  const thumbnail = video.thumbnail.at(-1)?.url;
  const richThumbnail = video.richThumbnail?.at(-1)?.url;

  // yatay card
  if (isRow) {
    return (
      <Link
        to={`/watch?v=${video.videoId}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="group flex gap-2 p-2 hover:bg-zinc-900 cursor-pointer transition rounded-lg"
      >
        {/* Banner */}
        <div className="relative rounded-xl overflow-hidden w-full aspect-video bg-zinc-900 flex-1 max-w-125 min-w-47.5">
          <img
            src={isHover && richThumbnail ? richThumbnail : thumbnail}
            className="size-full object-contain group-hover:scale-105 transition"
          />

          {video.lengthText && (
            <span
              className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded
             ${video.isLive ? "bg-red-500" : "bg-black/80 "}`}
            >
              {video.lengthText}
            </span>
          )}
        </div>

        {/* Video Bilgileri */}
        <div className="flex-1 gap-2 flex flex-col">
          <h3 className="text-white line-clamp-2 leading-tight text-sm font-medium @2xl:text-xl">{video.title}</h3>

          <p className="flex items-center gap-1 text-xs text-zinc-400">
            <span className="whitespace-nowrap">{video.viewCountText}</span>*
            <span className="line-clamp-1">{video.publishedTimeText}</span>
          </p>

          <div className="flex items-center gap-2">
            <img
              src={video.channelThumbnail?.[0]?.url}
              alt={video.channelTitle}
              className="size-6 rounded-full @max-md:hidden @2xl:size-8"
            />
            <p className="text-xs text-zinc-400 @2xl:text-sm">{video.channelTitle}</p>
          </div>

          <p className="text-xs line-clamp-2 text-zinc-400 @max-md:hidden @2xl:text-sm">{video?.description}</p>
        </div>
      </Link>
    );
  }

  // dikey
  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="group block"
    >
      {/* Banner */}
      <div className="relative rounded-xl overflow-hidden w-full aspect-video bg-zinc-900 mb-3">
        <img
          src={isHover && richThumbnail ? richThumbnail : thumbnail}
          className="size-full object-contain group-hover:scale-105 transition"
        />

        {video.lengthText && (
          <span
            className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded
             ${video.isLive ? "bg-red-500" : "bg-black/80 "}`}
          >
            {video.lengthText}
          </span>
        )}
      </div>

      {/* Video Bilgileri */}
      <div className="flex gap-3">
        <img src={video.channelThumbnail?.[0]?.url} alt={video.channelTitle} className="size-14 rounded-full" />

        <div className="flex-1 text-zinc-400">
          <h3 className="text-white line-clamp-2 leading-tight font-semibold">{video.title}</h3>

          <p className="my-1">{video.channelTitle}</p>

          <p className="flex items-center gap-1 text-sm">
            <span className="whitespace-nowrap">{millify(video.viewCount)} görüntülenme</span>*
            <span className="line-clamp-1">{video.publishedTimeText}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
