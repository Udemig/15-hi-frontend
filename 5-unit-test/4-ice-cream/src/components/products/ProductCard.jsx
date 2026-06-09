import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../store/cartSlice";
import { MdShoppingCart, MdCheck } from "react-icons/md";

// Per-category accent color + display label for the small overline tag.
const CATEGORY_META = {
  klasik: { label: "Klasik", color: "text-tertiary" },
  meyveli: { label: "Meyveli", color: "text-error" },
  vegan: { label: "Vegan", color: "text-secondary" },
};

const SERVINGS = ["Külah", "Kap"];

const ProductCard = ({ product }) => {
  const { id, name, description, price, image, category } = product;
  const meta = CATEGORY_META[category] ?? {
    label: category,
    color: "text-tertiary",
  };

  const dispatch = useDispatch();

  const [serving, setServing] = useState(SERVINGS[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image, serving }));
    toast.success(`${name} (${serving}) sepete eklendi`);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-surface-container-low rounded-lg p-4 border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square mb-4 rounded-md overflow-hidden bg-surface-container">
        <img
          alt={name}
          src={image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="flex-grow">
        <span
          className={`text-xs font-label-sm uppercase tracking-wider mb-1 block ${meta.color}`}
        >
          {meta.label}
        </span>
        <h3 className="font-headline-md text-on-surface text-[22px] leading-tight mb-2">
          {name}
        </h3>
        <p className="font-body-md text-on-surface-variant text-sm mb-4">
          {description}
        </p>
      </div>

      {/* Footer: price + serving toggle + add-to-cart (visual) */}
      <div className="space-y-4 mt-auto pt-4 border-t border-outline-variant/20">
        <div className="flex items-center justify-between">
          <span className="font-label-lg text-primary text-lg">
            ₺{price}
          </span>
          <div className="flex bg-surface-container rounded-full p-1 gap-1">
            {SERVINGS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setServing(option)}
                className={`px-3 py-1 rounded-full text-[10px] font-label-lg transition-all active:scale-90 ${
                  serving === option
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-dim"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full font-label-lg text-label-lg py-3 rounded-full transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95 select-none ${
            added
              ? "bg-secondary text-on-secondary cursor-default"
              : "bg-primary text-on-primary hover:bg-on-primary-fixed-variant shadow-[0_4px_14px_rgba(157,61,44,0.25)] hover:shadow-[0_6px_18px_rgba(157,61,44,0.35)]"
          }`}
        >
          {added ? (
            <>
              <MdCheck size={20} />
              <span>Eklendi!</span>
            </>
          ) : (
            <>
              <MdShoppingCart size={20} />
              <span>Sepete Ekle</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
