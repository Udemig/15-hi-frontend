import { divIcon } from "leaflet";

// İmleçlerin icon'unu oluşturan fonksiyon
export const getIcon = (flight, isOpen) => {
  return divIcon({
    html: `<img src="/plane.png" alt="plane" style="width:30px;height:30px;transform:rotate(${flight.track}deg)" />`,
    iconSize: [30, 30],
    className: `${isOpen && "passive-marker"} ${isOpen === flight.id && "active-marker"}`,
  });
};

export const formatDate = (time) => {
  // değer yoksa null döndür
  if (!time || time === 0) return null;

  // saniye formatındaki veriyi milisaniye formatına çevir
  const formatted = new Date(time * 1000);

  // saat ve dakikayı döndür
  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
