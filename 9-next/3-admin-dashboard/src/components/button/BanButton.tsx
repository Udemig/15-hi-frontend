"use client";

import { deleteUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const BanButton: FC<Props> = ({ id }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (!confirm("Bu kullanıcıyı kaldırmak istediğinizden emin misiniz?")) return;

    deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı engellendi");
        router.refresh();
      })
      .catch(() => toast.error("İşlem başarısız"))
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      type="button"
      title="Kullanıcıyı engelle"
      disabled={isLoading}
      onClick={handleClick}
      className="button hover:bg-red-50 border-red-200 hover:border-red-300"
    >
      <BsTrash className="text-red-600" />
    </button>
  );
};

export default BanButton;
