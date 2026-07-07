import type { FC } from "react";
import UserInfo from "./user-info";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-white grid grid-cols-3 p-4 md:p-6 xl:p-8 rounded-[20px] mb-6 md:mb-7 xl:mb-8">
      <button className="cursor-pointer md:hidden">
        <img src="/Menu.png" alt="search" />
      </button>

      <nav className="hidden md:flex items-center gap-5 xl:gap-10 font-bold">
        <Link to="/" className="whitespace-nowrap">
          Yeni Gelenler🔥
        </Link>
        <Link to="/">Erkek</Link>
        <Link to="/">Kadın</Link>
      </nav>

      <Link to="/" className="flex items-center justify-center">
        <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
      </Link>

      <UserInfo />
    </header>
  );
};

export default Header;
