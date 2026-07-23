import { getAllProducts } from "@/service/product-service";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { getTranslations } from "next-intl/server";

const ProductList = async () => {
  const { groceries } = await getAllProducts();
  const t = await getTranslations("Category");

  // api'dan karışık olarak gelen ürün verisini kategorilerine göre dizilere ayır
  const groupedProducts = groceries.reduce<Record<string, Product[]>>((obj, grocery) => {
    // ürünün kategorisini al
    const category = grocery.category;

    // nesne içerisinde kategori ismine karşılık gelen bir dizi yoksa boş bir dizi oluştur
    if (!obj[category]) {
      obj[category] = [];
    }

    // ürünün kategorisine göre oluşturulan diziye ürünü gönder
    obj[category].push(grocery);

    return obj;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(groupedProducts).map(([category, products], key) => (
        <div key={key}>
          <h2 className="text-2xl font-bold mb-5">{t(category)}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
