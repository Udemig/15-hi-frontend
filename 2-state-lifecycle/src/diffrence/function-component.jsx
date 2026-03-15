import { useState, useEffect } from "react";

// Object Destructor yöntemi
// Props nesnesine erişmek yerine içerisindeki title özelliğine doğrudan erişebilmek için kullanırız
const FunctionComponent = ({ title }) => {
  const [count, setCount] = useState(0);

  /*
   * Fonksiyonel bileşenlerde sınıflardan bildiğimiz yaşam döngüsü methodlarını kullanamayız
   * Yaşam döngüsü methodlarının yerine useEffect adlı react hook'unu kullanırız
   * useEffect'in bizden istediği parametreler:
   * 1) çalışıcak olan olan
   * 2) bağımlılık dizisi (dependecy array)
   */

  // Bileşenin ekrana gelme anını izle (componentDidMount)
  useEffect(() => {
    console.log("component ekrana geldi");
  }, []);

  // Bileşenin güncelleme anını izle (componentDidUpdate)
  useEffect(() => {
    console.log("component güncellendi");
  }, [count]);

  // Bileşenin ekrandan gitme anını izle (componentWillUnmout)
  useEffect(() => {
    // return satırı içerisinde fonksiyon tanımlanan fonksiyon bileşen ayrılınnca çalışır
    return () => {
      console.log("component ekrandan ayrıldı");
    };
  }, []);

  // Her render anını izler
  useEffect(() => {
    // setCount(count + 1);
  });

  return (
    <div>
      <h2>{title}</h2>

      <div>
        <button onClick={() => setCount(count - 1)}>Azalt</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Arttır</button>
      </div>

      <br />
      <hr />
    </div>
  );
};

export default FunctionComponent;
