import { useState, type FC } from "react";
import { SIZES } from "../../constants";

interface Props {
  sizes: string;
}

const Size: FC<Props> = ({ sizes }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (newValue: string) => {
    setSelected(newValue === selected ? "" : newValue);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Numara Seçiniz</h2>

      <div className="grid grid-cols-5 gap-4">
        {SIZES.map((size, key) => {
          const inStock = sizes.split(",").includes(size);

          return (
            <button
              key={key}
              disabled={!inStock}
              onClick={() => toggle(size)}
              className={`py-2 px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#d2d1d3] disabled:text-[#363637] disabled:cursor-not-allowed ${selected === size ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
