"use client";

import { FC } from "react";
import { GoSearch } from "react-icons/go";

const SearchForm: FC = () => {
  return (
    <form className="flex gap-3 py-2 px-4 mx-5 border border-zinc-300 md:w-1/3 rounded-full focus-within:border-zinc-800 transition max-sm:hidden">
      <button className="text-xl text-zinc-700 cursor-pointer">
        <GoSearch />
      </button>

      <input
        type="text"
        className="outline-none text-zinc-800 w-full"
        placeholder="Ürün veya kategori ara.."
      />
    </form>
  );
};

export default SearchForm;
