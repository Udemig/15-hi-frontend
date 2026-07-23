import ProductDetails from "@/components/detail/ProductDetails";
import ProductInfo from "@/components/detail/ProductInfo";
import { Link } from "@/i18n/navigation";
import { getProductDetails } from "@/service/product-service";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  params: Promise<{ id: string }>;
}

const Grocery: FC<Props> = async ({ params }) => {
  const { id } = await params;
  const { grocery } = await getProductDetails(id);
  const t = await getTranslations("Product");

  return (
    <div className="page">
      <div>
        <Link href="/" className="flex items-center gap-2 text-green-600 hover:underline">
          <FaArrowLeft />
          {t("back-home")}
        </Link>
      </div>

      <div className="mt-10">
        <ProductDetails product={grocery} />

        <ProductInfo product={grocery} />
      </div>
    </div>
  );
};

export default Grocery;
