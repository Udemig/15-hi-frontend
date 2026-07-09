import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetOneProduct, useUpdateProduct } from "../../service/product";
import Loader from "../../components/loader";
import Error from "../../components/error";
import ProductForm from "../../components/form/product-form";
import { ArrowLeft } from "lucide-react";
import type { ProductValues } from "../../types";

const Edit: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data, refetch } = useGetOneProduct(id!);
  const { isPending, mutate } = useUpdateProduct();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link to="/admin/dashboard" className="text-blue flex items-center gap-2 mb-2">
          <ArrowLeft />
          <span>Geri</span>
        </Link>

        <h1 className="text-2xl lg:text-3xl font-semibold mb-5">Ürün Düzenle</h1>
      </div>

      <ProductForm
        isPending={isPending}
        mutate={(data: ProductValues) => mutate({ id, data })}
        data={data}
      />
    </div>
  );
};

export default Edit;
