import millify from "millify";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between sm:items-center max-sm:flex-col max-sm:gap-3">
      {/* Kanal */}
      <div className="flex items-center gap-5">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            src={video?.channelThumbnail?.[0]?.url}
            alt={video?.channelTitle}
            className="rounded-full size-10 sm:size-12"
          />

          <div>
            <h4 className="font-bold">{video?.channelTitle}</h4>
            <p className="text-zinc-400">{video?.subscriberCountText}</p>
          </div>

          <button className="bg-white px-4 py-1 text-black rounded-full whitespace-nowrap">Abone Ol</button>
        </div>
      </div>

      {/* Beğeni */}
      <div className="flex items-center bg-dark rounded-full max-sm:w-fit cursor-pointer">
        <div className="py-2 px-3 sm:px-4 flex items-center gap-2 font-bold border-r border-zinc-600">
          <AiOutlineLike />
          <span>{millify(video?.likeCount)}</span>
        </div>
        <div className="py-2 px-3 sm:px-4">
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
