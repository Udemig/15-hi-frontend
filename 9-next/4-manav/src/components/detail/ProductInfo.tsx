import { Product } from "@/types";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

interface Props {
  product: Product;
}

const ProductInfo: FC<Props> = async ({ product }) => {
  const t = await getTranslations("Product");
  const tc = await getTranslations("Category");

  const info = [
    { title: t("category"), value: tc(product.category) },
    { title: t("origin"), value: product.origin },
    { title: t("freshness"), value: product.expiryDays + " " + t("day") },
    { title: t("organic"), value: product.isOrganic ? t("yes") : t("no") },
    { title: t("unit"), value: product.unit },
    { title: t("stock"), value: product.stock },
  ];

  return (
    <div className="p-6 border-t border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">{t("product-info")}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {info.map((item, key) => (
          <div key={key} className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm text-gray-500">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
