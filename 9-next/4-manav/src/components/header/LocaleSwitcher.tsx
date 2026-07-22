import { FC } from "react";
import { TbWorld } from "react-icons/tb";

const LocaleSwitcher: FC = () => {
  return (
    <label className="header-link cursor-pointer">
      <TbWorld className="text-2xl" />

      <select>
        <option value="">tr</option>
        <option value="">en</option>
        <option value="">de</option>
      </select>
    </label>
  );
};

export default LocaleSwitcher;
