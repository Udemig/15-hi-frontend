import { FC } from "react";
import { getTranslations } from "next-intl/server";

const Hero: FC = async () => {
  const t = await getTranslations("Hero");

  return (
    <div className="lg:grid lg:grid-cols-2 gap-5 text-white">
      <div className="flex flex-col justify-between p-6 rounded-lg bg-linear-to-r from-green-600 to-green-700">
        <h1 className="text-2xl font-bold">{t("title-1")}</h1>

        <p className="my-3">{t("desc-1")}</p>

        <button className="bg-white w-fit text-green-700 py-2 px-4 rounded-md hover:bg-green-50">
          {t("button-1")}
        </button>
      </div>

      <div className="flex flex-col justify-between p-6 rounded-lg bg-linear-to-r from-orange-600 to-orange-700 max-lg:hidden">
        <h1 className="text-2xl font-bold">{t("title-2")}</h1>

        <p className="my-3">{t("desc-2")}</p>

        <button className="bg-white w-fit text-orange-700 py-2 px-4 rounded-md hover:bg-orange-50">
          {t("button-2")}
        </button>
      </div>
    </div>
  );
};

export default Hero;
