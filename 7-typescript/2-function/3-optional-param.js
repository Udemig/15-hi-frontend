"use strict";
/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz
  
 * tanim: (a:string, b?:number) => bu seneryoda a zorunlu b ise opsiyonel olur
 * not: opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez
*/
function exaFunction(par1, par2, par3) { }
exaFunction(123, "selam", true);
exaFunction(123, "selam");
exaFunction(123);
// Örnek
const karsilama = (isim, zaman) => {
    if (zaman) {
        return `${zaman}, ${isim}`;
    }
    return `Merhaba, ${isim}`;
};
console.log(karsilama("Ahmet"));
console.log(karsilama("Ahmet", "Günaydın"));
