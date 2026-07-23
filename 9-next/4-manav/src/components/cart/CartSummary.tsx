import { Link } from "@/i18n/navigation";
import { Basket } from "@/types";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import CheckoutButton from "./CheckoutButton";

interface Props {
  cart: Basket;
}

const CartSummary: FC<Props> = async ({ cart }) => {
  const total = cart.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const t = await getTranslations("Cart");

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6 sticky mt-4">
      <h2 className="font-semibold">{t("summary")}</h2>

      <div className="space-y-3 mt-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>{t("products-total")}</span>
          <span className="font-semibold text-lg text-green-600">{total} ₺</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>{t("shipping")}</span>
          <span className="font-semibold text-lg">{t("free")}</span>
        </div>

        <hr />

        <div className="flex justify-between text-gray-600">
          <span>{t("total")}</span>
          <span className="font-semibold text-lg text-green-600">{total} ₺</span>
        </div>
      </div>

      <CheckoutButton totalPrice={total} />

      <Link href="/" className="block text-center mt-4 text-green-600 hover:underline">
        {t("continue-shopping")}
      </Link>
    </div>
  );
};

export default CartSummary;
