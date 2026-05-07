import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import PlaneMarker from "./plane-marker";
import Modal from "../modal";
import { useState } from "react";
import AirportMarker from "./airport-marker";

const Map = () => {
  const { flights, searchTerm } = useSelector((store) => store.flightReducer);
  const { isLoading, info, route } = useSelector((store) => store.detailReducer);
  const [isOpen, setIsOpen] = useState(null);

  const filtredFlights = searchTerm
    ? flights.filter((i) => i.callsign.toLowerCase().includes(searchTerm.toLowerCase().trim()))
    : flights;

  return (
    <>
      <MapContainer
        className="h-[calc(100vh-72px)] md:h-[calc(100vh-78px)]"
        center={[38.949767, 35.419122]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Uçuşları renderla */}
        {filtredFlights.map((flight) => (
          <PlaneMarker flight={flight} isOpen={isOpen} setIsOpen={setIsOpen} />
        ))}

        {/* Kalkış noktasını işaretle */}
        {!isLoading && isOpen && info && info?.airport?.origin && (
          <AirportMarker title="Kalkış" info={info.airport.origin} />
        )}

        {/* İniş noktasını işaretle */}
        {!isLoading && isOpen && info && info?.airport?.destination && (
          <AirportMarker title="İniş" info={info.airport.destination} />
        )}

        {/* Uçağın gittiği rotayı çiz */}
        {!isLoading && isOpen && route && <Polyline positions={route} pathOptions={{ color: "#4f39f6" }} />}
      </MapContainer>

      <Modal id={isOpen} close={() => setIsOpen(null)} />
    </>
  );
};

export default Map;
