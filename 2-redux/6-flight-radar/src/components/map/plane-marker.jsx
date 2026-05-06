import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../../utils/helpers";
import { useState } from "react";
import Modal from "../modal";

const PlaneMarker = ({ flight }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Marker position={[flight.lat, flight.lon]} icon={getIcon(flight)}>
        <Popup>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-center">{flight.callsign}</span>
            <button className="px-4 py-1 border rounded-sm hover:bg-black/10" onClick={() => setIsOpen(true)}>
              Detay
            </button>
          </div>
        </Popup>
      </Marker>

      <Modal id={flight.id} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default PlaneMarker;
