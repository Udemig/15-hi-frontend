import { Moon, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="text-gray-100" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">Udemig Tracker</h1>
              <p className="text-xs text-gray-500">Kripta para takip sistemi</p>
            </div>
          </Link>

          {/* Iconlar */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 text-gray-600">
              <Star className="size-5" />
              <span className="text-sm">3</span>
            </button>

            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Moon className="size-5" />
            </button>

            <button className="flex items-center gap-2 text-gray-600">
              <div className="size-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm">Canlı</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
