import { Marker, Popup } from "react-leaflet";

const AirportMarker = ({ title, info }) => {
  return (
    <Marker position={[info?.position?.latitude, info?.position?.longitude]}>
      <Popup>
        <div className="text-center flex flex-col gap-2">
          <span className="font-semibold">{title}</span>

          <span className="font-bold">{info?.name}</span>

          <div className="text-zinc-500">
            <span>{info?.position?.country?.name}</span> / <span>{info?.position?.region?.city}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default AirportMarker;
