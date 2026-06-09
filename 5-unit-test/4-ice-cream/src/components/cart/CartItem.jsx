import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../store/cartSlice";
import { MdDelete, MdRemove, MdAdd } from "react-icons/md";

// A single cart line: thumbnail, name, serving tag, line price, qty controls.
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, serving, quantity } = item;
  const identity = { id, serving };

  const handleRemove = () => {
    dispatch(removeFromCart(identity));
    toast.info(`${name} sepetten çıkarıldı`);
  };

  return (
    <li className="flex gap-3 py-md border-b border-outline-variant/40">
      {/* Thumbnail */}
      <img src={image} alt={name} className="w-16 h-16 rounded-md object-cover bg-surface-container shrink-0" />

      {/* Details */}
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-headline-md text-on-surface text-base leading-tight truncate">{name}</h3>
          <button
            type="button"
            aria-label={`${name} ürününü sepetten çıkar`}
            onClick={handleRemove}
            className="text-on-surface-variant hover:text-error transition-all p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-error shrink-0 active:scale-75 active:bg-error/10"
          >
            <MdDelete size={20} />
          </button>
        </div>

        {/* Serving tag */}
        <span className="inline-block mt-1 bg-surface-container text-on-surface-variant text-label-sm font-label-sm px-2 py-0.5 rounded-full">
          {serving}
        </span>

        {/* Quantity controls + line price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 bg-surface-container rounded-full p-1">
            <button
              type="button"
              aria-label="Adet azalt"
              onClick={() => dispatch(decreaseQuantity(identity))}
              disabled={quantity <= 1}
              className="text-on-surface-variant hover:text-primary disabled:opacity-40 disabled:hover:text-on-surface-variant transition-all p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-primary active:scale-75 active:bg-primary/10 disabled:active:scale-100"
            >
              <MdRemove size={24} />
            </button>
            <span className="font-label-lg text-on-surface text-label-lg min-w-[1.5rem] text-center">{quantity}</span>
            <button
              type="button"
              aria-label="Adet artır"
              onClick={() => dispatch(increaseQuantity(identity))}
              className="text-on-surface-variant hover:text-primary transition-all p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-primary active:scale-75 active:bg-primary/10"
            >
              <MdAdd size={24} />
            </button>
          </div>

          <span className="font-label-lg text-primary text-label-lg">₺{(price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
