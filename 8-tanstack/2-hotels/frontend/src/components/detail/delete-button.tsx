import type { FC } from "react";
import { useDeletePlace } from "../../service/hooks";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const { isPending, mutate } = useDeletePlace();

  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;
    mutate(id);
  };

  return (
    <div className="flex justify-end">
      <button
        disabled={isPending}
        onClick={handleDelete}
        className="border border-red-500 py-1 px-4 rounded-md transition hover:bg-red-100 text-red-500"
      >
        {isPending ? "Siliniyor" : "Sil"}
      </button>
    </div>
  );
};

export default DeleteButton;
