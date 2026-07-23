import { Link } from "@/i18n/navigation";
import { getBasket } from "@/service/basket-service";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartBadge: FC = async () => {
  const t = await getTranslations("Header");
  const data = await getBasket();

  // sepetteki toplam ürün miktarını hesapla
  const totalAmount =
    data?.cart?.items?.reduce<number>((total, item) => total + item.quantity, 0) || 0;

  return (
    <Link href="/cart" className="header-link">
      <div className="relative">
        <FaShoppingCart className="text-2xl" />

        <span className="absolute -right-3.5 -top-3.5 shadow font-bold text-sm text-shadow-xl bg-green-500 text-white size-6 grid place-items-center rounded-full tabular-nums border-2 border-white">
          {totalAmount}
        </span>
      </div>

      <span className="max-md:hidden">{t("cart")}</span>
    </Link>
  );
};

export default CartBadge;
