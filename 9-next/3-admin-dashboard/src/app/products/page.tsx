import List from "@/components/products/List";
import Link from "next/link";
import { FC, Suspense } from "react";
import { BiPlus } from "react-icons/bi";
import Loading from "../loading";

const Products: FC = () => {
  return (
    <div className="page">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h1 className="title">Ürünler</h1>
            <p className="text-zinc-500 mt-1">Tüm ürünlerinizi yönetin</p>
          </div>

          <Link
            href="/products/create"
            className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition"
          >
            <BiPlus className="text-xl" />
            Yeni Ürün Ekle
          </Link>
        </div>

        {/* Ürün Listesi */}
        <Suspense fallback={<Loading />}>
          <List />
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
