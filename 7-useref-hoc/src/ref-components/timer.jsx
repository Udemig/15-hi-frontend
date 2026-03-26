import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // sayacı başlat
  const startTimer = () => {
    setInterval(() => setSeconds((prev) => prev + 1), 1000);
  };

  // sayacı durdur
  const stopTimer = () => {};

  // sayacı sıfırla
  const clearTimer = () => {};

  return (
    <div>
      <h3>Örnek-4: Değer Tutma</h3>
      <p>
        <b>Açıklama</b> Kronometre
      </p>

      <h2>{seconds}</h2>

      <div>
        <button onClick={startTimer} className="btn btn-primary">
          Başlat
        </button>
        <button onClick={stopTimer} className="btn btn-danger ms-2">
          Durdur
        </button>
        <button onClick={clearTimer} className="btn btn-warning ms-2">
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
