import { useEffect, useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    // her saniye sayaç değerini 1 azalt
    const id = setInterval(() => setCount((prev) => (prev > 0 ? prev - 1 : 0)), 1000);

    // bileşen ekrandan ayrılınca: sayacı tamizle
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>Geri Sayım: {count}</h2>

      <br />
      <hr />
    </div>
  );
};

export default Countdown;
