import { X } from "lucide-react";
import HeadLoader from "../loader/head-loader";

const Head = ({ isLoading, error, info, close }) => {
  return (
    <div className="flex items-center justify-between bg-linear-to-r from-indigo-500 to-indigo-600 rounded-xl p-3">
      {isLoading || error ? (
        <HeadLoader />
      ) : (
        <div className="flex items-center gap-2">
          <h3 title="Çağrı İşareti" className="text-xl font-bold">
            {info?.identification?.callsign}
          </h3>
          <span title="Uçuş Numarası" className="badge">
            {info?.identification?.number?.default}
          </span>
          <span title="Uçak Tip Kodu" className="badge">
            {info?.aircraft?.model?.code}
          </span>
        </div>
      )}

      <button onClick={close} className="py-1 px-3 bg-black/15 border border-black/30 rounded-lg">
        <X size={20} />
      </button>
    </div>
  );
};

export default Head;
