const Airport = ({ airportData }) => {
  console.log(airportData);

  return (
    <div className="relative grid grid-cols-2 p-5 bg-white/3 rounded-2xl border border-white/8">
      {/* kalkış */}
      <div>kalkış</div>

      {/* icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-indigo-400 to-indigo-500 shadow-xl border border-white/20 rounded-full p-1.5">
        <img src="/plane.png" alt="plane" className="size-7 rotate-90" />
      </div>

      {/* iniş */}
      <div className="pl-10">iniş</div>
    </div>
  );
};

export default Airport;
