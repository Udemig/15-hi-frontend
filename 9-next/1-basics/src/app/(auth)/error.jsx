"use client";

// Error component'ı 2 prop alır:
// 1) hata detaylarını içeren error nesnesi
// 2) component'ı yeniden renderlayan fonksiyon
const Error = ({ error, reset }) => {
  return (
    <div className="space-y-5">
      <h1>Üzgünüz bir sorun oluştu</h1>

      <p className="text-red-500">{error.message}</p>

      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
