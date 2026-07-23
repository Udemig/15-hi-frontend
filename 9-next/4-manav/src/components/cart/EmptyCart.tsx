import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";
import { BsCartX } from "react-icons/bs";

const EmptyCart: FC = async () => {
  const t = await getTranslations("Cart");

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">{t("title")}</h1>

      <div className="border border-zinc-200 shadow p-10 rounded-md flex flex-col items-center gap-5 my-20 max-w-2xl mx-auto">
        <BsCartX className="text-4xl text-green-700" />

        <h3 className="text-lg">{t("empty-title")}</h3>

        <Link
          href="/"
          className="border border-green-700 text-green-700 hover:bg-green-700/10 py-1 px-4 rounded-md"
        >
          {t("browse")}
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
