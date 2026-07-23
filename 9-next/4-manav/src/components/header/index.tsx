import { FC } from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import SearchForm from "./SearchForm";
import { RiFileList3Line } from "react-icons/ri";
import CartBadge from "./CartBadge";
import LocaleSwitcher from "./LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const Header: FC = async () => {
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-0 z-10 bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link
        href="/"
        className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center gap-2"
      >
        <MdOutlineLocalGroceryStore />
        <span>MANAV</span>
      </Link>

      <SearchForm />

      <div className="flex items-center gap-5">
        <Link href="/orders" className="header-link">
          <RiFileList3Line className="text-2xl" />
          <span className="max-md:hidden">{t("orders")}</span>
        </Link>

        <CartBadge />

        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
