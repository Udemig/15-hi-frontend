import { useState } from "react";

const Counter = () => {
  /*
   * React'ta arayüzde değişime sebep olucak bütün veriler state'de tutulur
   * useState parametre olarak tutucağımız verinin başlangıç değerini alır
   * useState fonksiyonunu çağırınca geriye dizi içerisinde 2 veri döner
   * * [stateDegeri, stateGuncelle]
   * stateGuncelle fonksiyonu çağrılıp state her değiştirildiğinde bileşen yeniden render olur ve gerçekleşen güncelleme arayüze yansır
   */
  const [stateDegeri, stateGuncelle] = useState(0);

  return (
    <div>
      <h2>Sayaç</h2>

      <button onClick={() => stateGuncelle(stateDegeri - 1)}>Azalt</button>

      <h2>{stateDegeri}</h2>

      <button
        onClick={() => {
          // setState methodu 1. kullanım
          // aynı fonksiyon içerisinde state'i 1 den fazla kere güncelleyemiyoruz
          stateGuncelle(stateDegeri + 1); // 0 + 1 = 1
          stateGuncelle(stateDegeri + 1); // 0 + 1 = 1
          stateGuncelle(stateDegeri + 1); // 0 + 1 = 1

          // setState methodu 2. kullanım
          // aynı fonksiyon içerisinde state'i 1 den fazla kere güncelleyebiliyor
          stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 0 + 1 = 1
          stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 1 + 1 = 2
          stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 2 + 1 = 3
        }}
      >
        Arttır
      </button>

      <br />
      <br />
      <hr />
    </div>
  );
};

export default Counter;
