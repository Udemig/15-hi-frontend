import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import ProductForm from "../../components/form/product-form";
import { useCreateProduct } from "../../service/product";
import type { ProductValues } from "../../types";

const Create: FC = () => {
  const { isPending, mutate } = useCreateProduct();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link to="/admin/dashboard" className="text-blue flex items-center gap-2 mb-2">
          <ArrowLeft />
          <span>Geri</span>
        </Link>

        <h1 className="text-2xl lg:text-3xl font-semibold mb-5">Ürün Ekle</h1>
      </div>

      <ProductForm isPending={isPending} mutate={(data: ProductValues) => mutate(data)} />
    </div>
  );
};

export default Create;
