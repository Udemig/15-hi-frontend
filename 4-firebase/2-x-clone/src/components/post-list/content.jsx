const Content = ({ content }) => {
  return (
    <div className="my-2">
      {content.text && <p>{content.text}</p>}

      {content.media && content.mediaType === "image" ? (
        <img src={content.media} className="rounded-xl my-2 object-cover max-h-100" />
      ) : content.mediaType == "video" ? (
        <video src={content.media} controls className="w-full my-2 rounded-xl" />
      ) : content.mediaType === "audio" ? (
        <audio src={content.media} controls className="w-full my-2" />
      ) : null}
    </div>
  );
};

export default Content;
