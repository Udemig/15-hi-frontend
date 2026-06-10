import { useEffect, useMemo, useState } from "react";
import { getIcecreams } from "../../api/icecreams";
import ProductCard from "./ProductCard";

// Filter chips → maps to db.json `category` values ("all" = no filter).
const FILTERS = [
  { key: "all", label: "Tümü" },
  { key: "klasik", label: "Klasik" },
  { key: "meyveli", label: "Meyveli" },
  { key: "vegan", label: "Vegan" },
];

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      setStatus("loading");
      try {
        const data = await getIcecreams();
        if (!ignore) {
          setProducts(data);
          setStatus("success");
        }
      } catch {
        if (!ignore) setStatus("error");
      }
    };

    load();
    return () => {
      ignore = true;
    };
  }, []);

  const visibleProducts = useMemo(
    () =>
      activeFilter === "all"
        ? products
        : products.filter((product) => product.category === activeFilter),
    [products, activeFilter],
  );

  return (
    <section id="urunler" className="py-xl px-gutter relative">
      <div className="max-w-container-max mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Öne Çıkan Lezzetler
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Usta ellerden çıkan, mevsimin en taze meyveleri ve birinci sınıf
            malzemelerle hazırlanan favori dondurmalarımız.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={
                  isActive
                    ? "bg-primary text-on-primary font-label-lg text-label-lg px-6 py-2 rounded-full shadow-md transition-all active:scale-95 select-none"
                    : "bg-surface text-on-surface border border-outline-variant font-label-lg text-label-lg px-6 py-2 rounded-full hover:bg-surface-container-high transition-all active:scale-95 select-none"
                }
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* States */}
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <p className="font-body-md text-on-surface-variant">Lezzetler yükleniyor…</p>
          </div>
        )}

        {status === "error" && (
          <div className="text-center py-12">
            <p className="font-body-md text-error mb-2">
              Ürünler yüklenemedi.
            </p>
            <p className="font-body-md text-on-surface-variant text-sm">
              Lütfen API sunucusunun çalıştığından emin olun
              (<code>npm run server</code>).
            </p>
          </div>
        )}

        {status === "success" && visibleProducts.length === 0 && (
          <p className="text-center font-body-md text-on-surface-variant py-12">
            Bu kategoride ürün bulunamadı.
          </p>
        )}

        {/* Grid */}
        {status === "success" && visibleProducts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
