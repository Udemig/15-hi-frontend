"use client";

import { useRouter } from "@/i18n/navigation";
import { removeFromBasket, updateQuantity } from "@/service/basket-service";
import { BasketItem } from "@/types";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  item: BasketItem;
}

const ItemActions: FC<Props> = ({ item }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations("Cart");

  const handleQuantity = async (newQuantity: number) => {
    setLoading(true);

    try {
      await updateQuantity(item.grocery._id, newQuantity);
      router.refresh();
    } catch (error) {
      toast.error(t("action-failed"));
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    setLoading(true);

    try {
      await removeFromBasket(item.grocery._id);
      router.refresh();
    } catch (error) {
      toast.error(t("action-failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded-md mr-4">
        <button
          onClick={() => handleQuantity(item.quantity - 1)}
          disabled={loading || item.quantity === 1}
          className="counter-button"
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-9 text-center">
          {item.quantity}
        </span>

        <button
          onClick={() => handleQuantity(item.quantity + 1)}
          disabled={loading || item.quantity === item.grocery.stock}
          className="counter-button"
        >
          <FaPlus />
        </button>
      </div>

      <button disabled={loading} onClick={handleRemove} className="text-red-600 hover:text-red-700">
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
