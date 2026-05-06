import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import PlaneMarker from "./plane-marker";

const Map = () => {
  const { flights, searchTerm } = useSelector((store) => store.flightReducer);

  const filtredFlights = searchTerm
    ? flights.filter((i) => i.callsign.toLowerCase().includes(searchTerm.toLowerCase().trim()))
    : flights;

  return (
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

      {filtredFlights.map((flight) => (
        <PlaneMarker flight={flight} />
      ))}
    </MapContainer>
  );
};

export default Map;
