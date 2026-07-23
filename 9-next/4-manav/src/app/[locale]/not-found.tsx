import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

const NotFound: FC = async () => {
  const t = await getTranslations("NotFound");

  return (
    <div className="page my-60 flex flex-col text-center items-center justify-center gap-5">
      <h1 className="text-3xl">404</h1>

      <p>{t("message")}</p>

      <Link href="/" className="border border-zinc-200 py-2 px-4 rounded-md hover:underline">
        {t("home")}
      </Link>
    </div>
  );
};

export default NotFound;
