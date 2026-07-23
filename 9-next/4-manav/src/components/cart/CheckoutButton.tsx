"use client";
import { checkoutBasket } from "@/service/basket-service";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  totalPrice: number;
}

const CheckoutButton: FC<Props> = ({ totalPrice }) => {
  const t = useTranslations("Cart");
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    if (totalPrice <= 50) return toast.warning(t("min-order"));

    setLoading(true);

    try {
      const res = await checkoutBasket();

      window.location.href = res.url;
    } catch {
      toast.error(t("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleCheckout}
      className="flex items-center cursor-pointer justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700"
    >
      <MdOutlineShoppingCartCheckout />
      {t("checkout")}
    </button>
  );
};

export default CheckoutButton;
