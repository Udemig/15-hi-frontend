"use client";

import { useRouter } from "@/i18n/navigation";
import { addToBasket } from "@/service/basket-service";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  productId: string;
  stock: number;
}

const CardAction: FC<Props> = ({ productId, stock }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations("Cart");
  const router = useRouter();

  const handleBasket = () => {
    if (stock === 0) return;
    setLoading(true);

    addToBasket(productId, 1)
      .then(() => {
        toast.success(t("added"));
        router.refresh();
      })
      .catch((err) => toast.error(t("action-failed")))
      .finally(() => setLoading(false));
  };

  return (
    <button
      onClick={handleBasket}
      disabled={loading || stock === 0}
      className="bg-green-500 text-white shadow-md rounded-full hover:bg-green-600 hover:shadow-md p-2"
    >
      {loading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </button>
  );
};

export default CardAction;
