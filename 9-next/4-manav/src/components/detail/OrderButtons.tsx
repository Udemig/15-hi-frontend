"use client";

import { useRouter } from "@/i18n/navigation";
import { addToBasket, checkoutSingleItem } from "@/service/basket-service";
import { Product } from "@/types";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

const OrderButtons: FC<Props> = ({ product }) => {
  const t = useTranslations("Product");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // sepete ekle
  const handleBasket = () => {
    if (quantity < 1 || quantity > product.stock) return;

    setLoading(true);

    addToBasket(product._id, quantity)
      .then(() => {
        router.refresh();
        setQuantity(1);
        toast.success(t("added", { quantity, unit: product.unit, name: product.name }));
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  // hemen satın al
  const handleBuyNow = () => {
    if (quantity < 1 || quantity > product.stock) return;

    if (quantity * product.price <= 50) return toast.warning(t("min-order"));

    setLoading(true);

    checkoutSingleItem(product, quantity)
      .then((data) => {
        setQuantity(1);
        window.location.href = data.url;
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {/* Miktar Seçimi */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            disabled={quantity === 1 || loading}
            onClick={() => setQuantity(quantity - 1)}
            className="counter-button"
          >
            <FaMinus />
          </button>

          <span className="px-3 py-2 border-x border-gray-300 min-w-10 text-center">
            {quantity}
          </span>

          <button
            disabled={quantity === product.stock || loading}
            onClick={() => setQuantity(quantity + 1)}
            className="counter-button"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Butonlar */}
      <div className="flex items-center gap-3 mt-4">
        <button className="order-button" onClick={handleBasket} disabled={loading}>
          <FaShoppingCart />
          {t("add")}
        </button>
        <button
          className="order-button bg-green-600 text-white hover:bg-green-700"
          disabled={loading}
          onClick={handleBuyNow}
        >
          {t("buy")}
        </button>
      </div>
    </div>
  );
};

export default OrderButtons;
