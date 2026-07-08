import Card from "../../components/card";
import Error from "../../components/error";
import Loader from "../../components/loader";
import { useGetAllProducts } from "../../service/product";

const List = () => {
  const { isLoading, error, data, refetch } = useGetAllProducts();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-12 xl:gap-x-10 xl:gap-y-20 my-10">
      {data?.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default List;
