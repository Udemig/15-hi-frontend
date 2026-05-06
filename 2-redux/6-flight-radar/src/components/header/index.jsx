import { Plane, Search, Wifi, X, WifiOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/slices/flight-slice";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights, searchTerm } = useSelector((store) => store.flightReducer);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_rgba(108,99,221,0.88)]">
      {/* Üstteki gradient çizgi */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-primary to-transparent" />

      <div className="flex justify-between items-center px-6 py-3 max-w-480 mx-auto">
        {/* Sol - Marka */}
        <div className="flex items-center gap-3 group">
          <div className="relative">
            {/* parlama */}
            <div className="absolute inset-0 bg-linear-to-br from-primary to-light blur rounded-2xl opacity-40 group-hover:opacity-70 transition duration-500" />

            {/* logo */}
            <div className="relative flex items-center justify-center size-11 rounded-2xl bg-linear-to-br from-primary via-dark to-light shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition duration-300 group-hover:scale-105">
              <Plane size={22} strokeWidth={2.5} className="text-white -rotate-45" />

              {/* animasyon */}
              <span className="absolute inset-0 rounded-2xl border-2 border-primary/40 animate-ping opacity-20" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-extrabold bg-linear-to-r from-primary to-dark bg-clip-text text-transparent tracking-tight">
                Udemig Radar
              </h1>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-md border border-primary/20">
                v2.0
              </span>
            </div>
            <p className="text-[11px] text-text/50 font-medium tracking-wide">Real-time Flight Tracking</p>
          </div>
        </div>

        {/* Orta - Arama */}
        <div className="hidden md:flex items-center gap-2">
          {/* form */}
          <div className="relative flex items-center group">
            <Search
              size={15}
              className="absolute left-3.5 text-primary/60 group-focus-within:text-primary transition pointer-events-none"
            />

            <input
              type="text"
              placeholder="Callsign ara (örn:THY123)"
              className="w-64 pl-10 pr-9 py-2.5 text-sm font-medium bg-linear-to-br from-primary/5 to-light/10 border border-primary/15 rounded-xl text-text placeholder:text-text/40 focus:outline-none focus:border-primary/40 focus:shadow-md focus:shadow-primary/10 transition duration3-00"
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              value={searchTerm}
            />

            {searchTerm.trim() && (
              <button
                onClick={() => dispatch(setSearchTerm(""))}
                className="absolute right-2.5 flex items-center justify-center size-5 rounded-md hover:bg-primary/10 text-text/50 hover:text-primary transition"
              >
                <X />
              </button>
            )}
          </div>
          {/* aktif uçuş */}
          <div className="group flex items-center gap-2.5 px-4 py-2 bg-linear-to-br from-primary/5 to-light/10 border border-primary/15 rounded-xl hover:border-primary/30 transition duration-300 hover:shadow-md hover:shadow-primary/10">
            <div className="flex items-center justify-center size-8 rounded-lg bg-linear-to-br from-primary to-dark text-white">
              <Plane className="-rotate-45" size={15} strokeWidth={2.5} />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-text/50 font-semibold uppercase tracking-wider leading-tight">
                Aktif Uçuş
              </span>
              <span className="text-base font-bold text-text leading-tight">
                {isLoading ? "..." : error ? "—" : flights?.length || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Sağ - Canlı */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border transition duration-300 ${error ? "bg-red-50 border-red-200" : "border-emerald-200 bg-emerald-100/50"}`}
          >
            {error ? (
              <WifiOff size={14} strokeWidth={2.5} className="text-red-600" />
            ) : (
              <Wifi size={14} strokeWidth={2.5} className="text-emerald-600" />
            )}

            <div className="flex items-center gap-1.5">
              <div
                className={`relative flex items-center justify-center size-1.5 rounded-full ${error ? "bg-red-500" : "bg-emerald-500"}`}
              >
                {!error && <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />}
              </div>

              <span
                className={`text-[11px] font-extrabold tracking-widest ${error ? "text-red-700" : "text-emerald-700"}`}
              >
                {error ? "OFFLINE" : "LIVE"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
