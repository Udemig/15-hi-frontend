import Image from "next/image";
import { FC } from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import avatar from "@/assets/images/avatar.webp";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-200 bg-white flex justify-between items-center px-5 md:px-8 h-16 sticky top-0 z-10 gap-5">
      <form className="flex items-center gap-2 text-zinc-500 bg-zinc-100 rounded-lg px-3 py-2 w-full max-w-xs focus-within:border-blue-300 transition">
        <GoSearch />
        <input
          type="text"
          placeholder="Ara..."
          className="bg-transparent outline-none text-sm w-full text-zinc-800 placeholder:text-zinc-400"
        />
      </form>

      <div className="flex gap-4 items-center">
        <button className="relative size-9 grid place-items-center rounded-lg hover:bg-zinc-100 text-zinc-600 transition">
          <BiSolidBellRing />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="h-8 w-px bg-zinc-200" />

        <div className="flex gap-3 items-center">
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full size-10 ring-2 ring-zinc-100 shrink-0"
          />

          <div className="hidden sm:block">
            <p className="font-semibold text-zinc-900 text-sm line-clamp-1">Furkan Evin</p>
            <p className="text-xs text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
