import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Comments = ({ videoId, count }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);

  console.log(comments);

  useEffect(() => {
    setIsLoading(true);

    const params = { id: videoId, sort_by: "top", geo: "TR", lang: "tr" };

    api
      .get("/comments", { params })
      .then((res) => setComments(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{count} Yorum</h2>

      <input
        type="text"
        placeholder="Yorum ekleyiniz"
        className="w-full bg-transparent border-b border-zinc-700 py-2 my-3 outline-none"
      />

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error message={error} />
      ) : (
        comments.map((comment, key) => (
          <div key={key} className="px-1 py-2 sm:py-4 flex gap-3 sm:gap-5 items-start">
            <img
              src={comment?.authorThumbnail?.[0]?.url}
              alt={comment?.authorText}
              className="rounded-full size-8 sm:size-10"
            />

            <div>
              <div className="flex gap-2 items-center text-sm">
                <b>{comment?.authorText}</b>
                <span className="text-zinc-400">{comment?.publishedTimeText}</span>
              </div>

              <p className="whitespace-pre-wrap text-sm my-2">{comment?.textDisplay}</p>

              <div className="flex items-center gap-3 mt-2 text-sm">
                <button className="flex items-center gap-1 comment-btn">
                  <AiOutlineLike />
                  <span>{comment?.likesCount}</span>
                </button>
                <button className="comment-btn">
                  <AiOutlineDislike />
                </button>

                <button className="comment-btn text-sm font-semibold">yanıtla</button>
              </div>

              {comment.replyCount > 0 && (
                <button className="flex gap-2 items-center rounded-lg px-2 py-1 w-fit text-blue-400 hover:bg-blue-500/20 hover:text-white">
                  <IoIosArrowDown />
                  <span>{comment.replyCount} yanıt</span>
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
