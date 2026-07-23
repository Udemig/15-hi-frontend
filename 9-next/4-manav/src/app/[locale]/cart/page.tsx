import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import ClearButton from "@/components/cart/ClearButton";
import EmptyCart from "@/components/cart/EmptyCart";
import { getBasket } from "@/service/basket-service";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

const Cart: FC = async () => {
  const { cart } = await getBasket();
  const t = await getTranslations("Cart");

  if (cart.items.length === 0) return <EmptyCart />;

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">{t("title")}</h1>

      <div className="lg:flex gap-6">
        {/* Ürünler */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2>
                {t("your-cart")} ({cart.items.length})
              </h2>

              <ClearButton />
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Sipariş Özeti */}
        <div className="lg:w-1/3">{cart.items.length > 0 && <CartSummary cart={cart} />}</div>
      </div>
    </div>
  );
};

export default Cart;
