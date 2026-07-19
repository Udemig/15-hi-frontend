import { getProducts } from "@/utils/service";
import { FC } from "react";
import ProductCard from "./ProductCard";

const List: FC = async () => {
  const products = await getProducts();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default List;
