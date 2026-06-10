import { useDispatch, useSelector } from "react-redux";
import { toggleCart, selectTotalItems } from "../store/cartSlice";
import { MdLanguage, MdShoppingCart, MdMenu } from "react-icons/md";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#", active: true },
  { label: "Ürünler", href: "#urunler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#iletisim" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-gutter py-base max-w-container-max mx-auto">
        {/* Brand */}
        <a
          href="#"
          className="font-headline-md text-headline-md font-bold text-primary hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
        >
          The Artisanal Scoop
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-md items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-primary border-b-2 border-primary pb-1 font-label-lg text-label-lg hover:scale-105 transition-transform duration-200"
                  : "text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg hover:scale-105"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing actions */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Dil seçimi"
            className="text-on-surface-variant hover:text-primary transition-all p-2 hover:bg-surface-container rounded-full focus:outline-none focus:ring-2 focus:ring-primary active:scale-90 active:bg-surface-container"
          >
            <MdLanguage size={24} />
          </button>
          <button
            aria-label="Sepet"
            onClick={() => dispatch(toggleCart())}
            className="text-on-surface-variant hover:text-primary transition-all p-2 hover:bg-surface-container rounded-full focus:outline-none focus:ring-2 focus:ring-primary active:scale-90 active:bg-surface-container relative"
          >
            <MdShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-primary text-on-primary text-[10px] font-label-lg leading-none">
                {totalItems}
              </span>
            )}
          </button>
          {/* Mobile menu toggle */}
          <button
            aria-label="Menü"
            className="md:hidden text-on-surface-variant p-2 hover:bg-surface-container rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all active:scale-90 active:bg-surface-container"
          >
            <MdMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
