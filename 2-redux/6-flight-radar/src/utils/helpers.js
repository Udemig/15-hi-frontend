import { divIcon } from "leaflet";

// İmleçlerin icon'unu oluşturan fonksiyon
export const getIcon = (flight) => {
  return divIcon({
    html: `<img src="/plane.png" alt="plane" style="width:30px;height:30px;transform:rotate(${flight.track}deg)" />`,
    iconSize: [30, 30],
    className: "marker",
  });
};
