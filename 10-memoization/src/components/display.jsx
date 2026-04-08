import React from "react";

const Display = ({ count, handleIncrease }) => {
  console.log("display bileşeni render oldu");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Arttır</button>
    </div>
  );
};

/*
 * Bu örnekte kapsayıcı component'ın state'leri her değiştiğinde kapsayıcının render olmasından kaynaklı display component'I değişen state'i prop olarak almasa gereksiz yere render olur

 * Bir component'ın aldığı proplar değişmediği müddetçe kapsayıcı component kaynaklı render olması gereksiz render olarak adlandırılır
 
 * Bu durumun önüne React.memo() ile geçeriz

 ! eğer primitive (string,number,boolean) yerine referance (object,array,function) bir değer prop olarak geliyorsa react.memo() görevini yapamazz
 */

export default React.memo(Display);
