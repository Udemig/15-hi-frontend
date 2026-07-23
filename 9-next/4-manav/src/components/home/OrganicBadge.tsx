import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { FaLeaf } from "react-icons/fa";

interface Props {
  isOrganic: boolean;
}

const OrganicBadge: FC<Props> = async ({ isOrganic }) => {
  if (!isOrganic) return null;
  const t = await getTranslations("Product");

  return (
    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs py-1 px-2 rounded-full flex items-center gap-1">
      <FaLeaf />
      <span>{t("organic")}</span>
    </div>
  );
};

export default OrganicBadge;
