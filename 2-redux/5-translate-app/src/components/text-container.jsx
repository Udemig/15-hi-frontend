import { ArrowRight, Volume2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translate-slice";
import Loader from "./loader";

const TextContainer = () => {
  const dispatch = useDispatch();
  const { sourceLang, targetLang, textToTranslate, translatedText, isLoading } = useSelector(
    (store) => store.translateReducer,
  );

  // çevirilecek metni temizler
  const handleClear = () => {
    dispatch(setText(""));
  };

  // çeviri sonucunu kopyalar
  const handleCopy = () => {
    window.navigator.clipboard.writeText(translatedText);
  };

  // kaynak metni seslendir
  const handleSpeakSource = () => {
    // devam eden bir seslendirme varsa durdur
    window.speechSynthesis.cancel();

    // SpeechSynthesisUtterance: seslendirilecek metni ve ayarlarını tutan bir nesne oluşturur
    const uttarance = new SpeechSynthesisUtterance(textToTranslate);

    // utterance.lang: hangi dilde / aksanda seslendirileceğini belirle
    if (sourceLang.value) {
      uttarance.lang = sourceLang.value;
    }

    // oluşturulan utterance nesnesini seslendirmeye başla
    // tarayıcnın ses sentezleme motorunu kullanarak metni sesli olarak okur
    window.speechSynthesis.speak(uttarance);
  };

  // çeviri sonucunu seslendir
  const handleSpeakTarget = () => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(translatedText);

    if (targetLang.value) {
      utterance.lang = targetLang.value;
    }

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Çevrilcek Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-zinc-300">Çevrilcek Metin</label>

          <div className="flex items-center gap-3">
            <button className="btn" onClick={handleSpeakSource}>
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn" onClick={handleClear}>
              Temizle
            </button>
          </div>
        </div>

        <div>
          <textarea
            maxLength={500}
            value={textToTranslate}
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
            <button className="btn" onClick={handleSpeakTarget}>
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn" onClick={handleCopy}>
              Kopyala
            </button>
          </div>
        </div>

        <div className="relative">
          <textarea value={translatedText} disabled className="text-gray-300" />

          {isLoading && <Loader />}

          {!isLoading && !translatedText && !textToTranslate?.trim() && (
            <div className="absolute inset-0 grid place-items-center">
              <p className="text-zinc-500 text-sm">Çeviri bekleniyor...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
