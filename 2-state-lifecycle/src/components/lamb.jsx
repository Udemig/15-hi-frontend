import { useState } from "react";
import open from "../assets/open.png";
import closed from "../assets/closed.png";

const Lamb = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Lamba</h2>

      {/* Butona her tıklandığında state'in değerini tersine çevirdik */}
      <button onClick={() => setIsOpen(!isOpen)}>Kapat / Aç</button>

      {/* State'in değerine göre koşullu şekilde açık / kapalı yazdırdık */}
      <p>
        Lamba şu anda: <b>{isOpen ? "açık" : "kapalı"}</b>
      </p>

      {/* Resmin src değerini isOpen state'ine göre koşullu şekilde değiştirdik */}
      <img src={isOpen ? open : closed} width={300} />

      <br />
      <br />
      <hr />
    </div>
  );
};

export default Lamb;
