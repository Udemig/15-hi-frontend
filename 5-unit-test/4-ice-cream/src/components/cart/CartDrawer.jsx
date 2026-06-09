import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdClose, MdShoppingCart, MdCheckCircle } from "react-icons/md";
import {
  selectCartItems,
  selectCartIsOpen,
  selectTotalItems,
  selectTotalPrice,
  closeCart,
  clearCart,
} from "../../store/cartSlice";
import CartItem from "./CartItem";

// Right-side slide-in drawer. Kept mounted; visibility animated via transform.
const CartDrawer = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const isOpen = useSelector(selectCartIsOpen);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  // Close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") dispatch(closeCart());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, dispatch]);

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(closeCart());
    toast.success("Siparişiniz alındı, afiyet olsun! 🍦");
  };

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div
        onClick={() => dispatch(closeCart())}
        className={`absolute inset-0 bg-inverse-surface/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Sepetim"
        className={`absolute top-0 right-0 h-full w-[90vw] sm:w-[420px] bg-surface flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-md py-md border-b border-outline-variant">
          <h2 className="font-headline-md text-headline-md text-on-surface">Sepetim</h2>
          <button
            type="button"
            aria-label="Sepeti kapat"
            onClick={() => dispatch(closeCart())}
            className="text-on-surface-variant hover:text-primary transition-all p-2 hover:bg-surface-container rounded-full focus:outline-none focus:ring-2 focus:ring-primary active:scale-90 active:bg-surface-container"
          >
            <MdClose size={24} />
          </button>
        </header>

        {/* Body */}
        <div className="flex-grow overflow-y-auto px-md">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-lg">
              <MdShoppingCart size={56} className="text-outline mb-2" />
              <p className="font-headline-md text-on-surface text-lg mb-1">Sepetiniz boş</p>
              <p className="font-body-md text-on-surface-variant text-sm">
                Favori lezzetlerinizi keşfedin ve sepetinize ekleyin.
              </p>
            </div>
          ) : (
            <ul>
              {items.map((item) => (
                <CartItem key={`${item.id}-${item.serving}`} item={item} />
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="sticky bottom-0 bg-surface-container-low border-t border-outline-variant px-md py-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-label-lg text-on-surface-variant text-label-lg">{totalItems} ürün</span>
              <span className="font-headline-md text-primary text-xl">₺{totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full bg-primary text-on-primary font-label-lg text-label-lg py-3 rounded-full hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center space-x-2 active:scale-95 shadow-[0_4px_14px_rgba(157,61,44,0.25)] hover:shadow-[0_6px_18px_rgba(157,61,44,0.35)] select-none"
            >
              <MdCheckCircle size={20} />
              <span>Sepeti Onayla</span>
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
