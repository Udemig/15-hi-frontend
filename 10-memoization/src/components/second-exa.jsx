import { useState, useCallback } from "react";
import Display from "./display";

const SecondExa = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /*
  * Component her render olduğunda bu fonksiyon yeniden oluşur (Bellekte farklı bir referansı oluşur)

  * Fonksiyonu prop olarak gönderdiğimizde display component'ı react.memo() kullanıyor olsa bile her render sırasında farklı referans değerine sahip fonksiyon prop olarak gönderdiğimiz için react.memo() bunları farklı fonksiyon sanarak görevini yapamaz

  * useCallback ile count değişmedikçe her render sırasında fonksyionun yeniden farklı bir referans ile oluşturulmasının önüne geçer
  */
  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>React.memo()</h1>

      <Display count={count} handleIncrease={handleIncrease} />

      <h2>İsminiz: {name}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default SecondExa;
