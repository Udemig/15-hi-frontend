import { ArrowRight, Volume2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translate-slice";

const TextContainer = () => {
  const dispatch = useDispatch();
  const { textToTranlate, translatedText } = useSelector((store) => store.translateReducer);

  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Çevrilcek Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-zinc-300">Çevrilcek Metin</label>

          <div className="flex items-center gap-3">
            <button className="btn">
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn">Temizle</button>
          </div>
        </div>

        <div>
          <textarea
            maxLength={500}
            value={textToTranlate}
            onChange={(e) => dispatch(setText(e.target.value))}
            placeholder="Çevirmek istediğiniz metni buraya yazınız"
          />
        </div>
      </div>

      {/* Ok */}
      <div className="flex items-center justify-center lg:flex-col">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center">
          <ArrowRight className="size-4 lg:size-5 max-lg:rotate-90" />
        </div>
      </div>

      {/* Çeviri Sonucu */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-zinc-300">Çeviri Sonucu</label>

          <div className="flex items-center gap-3">
            <button className="btn">
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn">Kopyala</button>
          </div>
        </div>

        <div>
          <textarea value={translatedText} disabled className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
