import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // sayacı başlat
  const startTimer = () => {
    // sayaç çalışıyor mu state'ini true yap
    setIsRunning(true);

    // her saniye seconds state'ini 1 arttır
    intervalRef.current = setInterval(() => setSeconds((prev) => prev + 1), 1000);
  };

  // sayacı durdur
  const stopTimer = () => {
    // sayaç çalışıyor mu state'ini false yap
    setIsRunning(false);

    // interval'ı durdur
    clearInterval(intervalRef.current);
  };

  // sayacı sıfırla
  const clearTimer = () => {
    // sayacı durdur
    stopTimer();
    // saniye değerini 0'a eşitle
    setSeconds(0);
  };

  // bileşen ekrandan ayrılınca sayacı temizle
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return (
    <div>
      <h3>Örnek-4: Değer Tutma</h3>
      <p>
        <b>Açıklama</b> Kronometre
      </p>

      <h2>
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </h2>

      <div>
        <button onClick={startTimer} disabled={isRunning} className="btn btn-primary">
          Başlat
        </button>
        <button onClick={stopTimer} disabled={!isRunning} className="btn btn-danger ms-2">
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
