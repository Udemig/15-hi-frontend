"use client";
import { useRouter } from "@/i18n/navigation";
import { clearBasket } from "@/service/basket-service";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { toast } from "react-toastify";

const ClearButton: FC = () => {
  const router = useRouter();
  const t = useTranslations("Cart");
  const [loading, setLoading] = useState<boolean>(false);

  const handleClear = async () => {
    setLoading(true);

    try {
      await clearBasket();
      router.refresh();
      toast.success(t("cleared"));
    } catch (error) {
      toast.error(t("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <button disabled={loading} onClick={handleClear} className="hover:text-green-700">
      {t("clear")}
    </button>
  );
};

export default ClearButton;
