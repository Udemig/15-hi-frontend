import millify from "millify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import { useState } from "react";
dayjs.extend(relativeTime);

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dark mt-4 p-2 cursor-pointer hover:bg-dark/80 transition rounded-md overflow-hidden">
      <div className="flex gap-4 mb-2 font-semibold text-sm">
        <span>{millify(video?.viewCount)} görüntülenme</span>
        <span>{dayjs(video?.publishedAt).locale("tr").fromNow()}</span>
      </div>

      <p onClick={() => setIsOpen(!isOpen)} className="whitespace-pre-wrap">
        {isOpen ? video.description : video.description.slice(0, 150) + "...daha fazla"}
      </p>
    </div>
  );
};

export default Description;
