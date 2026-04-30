import { ArrowLeftRight } from "lucide-react";
import ReactSelect from "react-select";
import { selectStyles } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { setSource, setTarget } from "../redux/slices/translate-slice";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const { isLoading, error, languages } = useSelector((store) => store.languageReducer);
  const { sourceLang, targetLang } = useSelector((store) => store.translateReducer);

  // store'daki languages dizisindeki nesnelerin keylerini güncelle
  // api'dan gelen: {language:"", name:""}
  // istediğimiz  : {label:"", value:""}
  const formatted = useMemo(() => languages.map((item) => ({ label: item.name, value: item.language })), [languages]);

  // dili algıla seçeneği
  const detect = { label: "Dili algıla", value: undefined };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-col lg:flex-row">
        {/* Kaynak Dil */}
        <div className="flex-1 w-full">
          <label className="text-sm text-zinc-300 mb-2 block">Kaynak Dil</label>
          <ReactSelect
            isLoading={isLoading}
            isDisabled={isLoading}
            options={[detect, ...formatted]}
            className="text-black"
            styles={selectStyles}
            value={sourceLang}
            onChange={(selected) => dispatch(setSource(selected))}
          />
        </div>

        {/* Değiştirme Butonu */}
        <div className="flex justify-center items-center">
          <button className="size-10 lg:size-12 bg-zinc-700 rounded-full flex justify-center items-center disabled:opacity-50">
            <ArrowLeftRight className="size-4 lg:size-5 max-lg:rotate-90" />
          </button>
        </div>

        {/* Hedef Dil */}
        <div className="flex-1 w-full">
          <label className="text-sm text-zinc-300 mb-2 block">Hedef Dil</label>
          <ReactSelect
            isLoading={isLoading}
            isDisabled={isLoading}
            options={formatted}
            className="text-black"
            styles={selectStyles}
            value={targetLang}
            onChange={(selected) => dispatch(setTarget(selected))}
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-zinc-500">189 dil destekleniyor</p>
      </div>
    </div>
  );
};

export default LanguageSelector;
