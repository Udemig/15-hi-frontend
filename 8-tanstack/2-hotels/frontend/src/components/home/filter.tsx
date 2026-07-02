import type { FC } from "react";
import { SORT_OPTIONS } from "../../utils/constants";
import { useGetPlaces } from "../../service/hooks";

const Filter: FC = () => {
  // konaklama alanlarının verisini al
  const { data } = useGetPlaces();

  // konaklama alanlarının şehir isimlerinden bir dizi oluştur (benzersiz)
  const cities = [...new Set(data?.map((item) => item.location))];

  // todo: filtrelemeyi yap

  return (
    <form className="flex flex-col gap-5 lg:gap-8 lg:mt-15 lg:sticky lg:top-24 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
      <h1 className="text-xl font-bold text-zinc-800 pb-3 border-b border-zinc-200">Filtrele</h1>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Nereye gitmek istiyorsunuz?</label>

        <select name="location" className="input">
          <option>Seçiniz</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Konaklama noktası adı?</label>

        <input type="text" className="input" placeholder="örn: Seaside Villa" name="title" />
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Sıralama Ölçütü</label>

        <select name="order" className="input">
          <option>Seçiniz</option>
          {SORT_OPTIONS.map((item, key) => (
            <option key={key} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <button type="reset" className="btn-primary">
        Filtreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
