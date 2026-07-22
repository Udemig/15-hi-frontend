import Link from "next/link";
import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartBadge: FC = () => {
  return (
    <Link href="/cart" className="header-link">
      <div className="relative">
        <FaShoppingCart className="text-2xl" />

        <span className="absolute -right-3.5 -top-3.5 shadow font-bold text-sm text-shadow-xl bg-green-500 text-white size-6 grid place-items-center rounded-full tabular-nums border-2 border-white">
          4
        </span>
      </div>

      <span className="max-md:hidden">Sepet</span>
    </Link>
  );
};

export default CartBadge;
