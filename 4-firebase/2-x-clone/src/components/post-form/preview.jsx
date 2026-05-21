import { IoMdClose } from "react-icons/io";

const Preview = ({ previewUrl, mediaType, cancel, isLoading }) => {
  if (!mediaType && !previewUrl) return;

  return (
    <div className="relative mb-5">
      <button
        type="reset"
        onClick={cancel}
        disabled={isLoading}
        className="absolute top-3 inset-e-3 text-2xl p-1 rounded-lg z-99999 bg-primary/50"
      >
        <IoMdClose />
      </button>

      {mediaType === "not-supported" && (
        <div className="pt-5">
          <p className="text-red-500">Dosya tipi desteklenmiyor</p>
        </div>
      )}

      {mediaType === "image" && <img src={previewUrl} alt="preview" className="rounded-xl" />}

      {mediaType === "audio" && <audio src={previewUrl} controls className="w-[90%] my-5" />}

      {mediaType === "video" && <video src={previewUrl} controls className="w-full rounded-xl" />}
    </div>
  );
};

export default Preview;
