import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../../utils/helpers";
import { useState } from "react";

const PlaneMarker = ({ flight, isOpen, setIsOpen }) => {
  return (
    <Marker position={[flight.lat, flight.lon]} icon={getIcon(flight, isOpen)}>
      <Popup>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-center">{flight.callsign}</span>
          <button className="px-4 py-1 border rounded-sm hover:bg-black/10" onClick={() => setIsOpen(flight.id)}>
            Detay
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default PlaneMarker;
