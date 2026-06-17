/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz
  
 * tanim: (a:string, b?:number) => bu seneryoda a zorunlu b ise opsiyonel olur
 * not: opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez 
*/

function exaFunction(par1: number, par2?: string, par3?: boolean) {}

exaFunction(123, "selam", true);
exaFunction(123, "selam");
exaFunction(123);

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `${zaman}, ${isim}`;
  }

  return `Merhaba, ${isim}`;
};

console.log(karsilama("Ahmet"));
console.log(karsilama("Ahmet", "Günaydın"));

// Opsiyonel değerleri nesne tipi tanımında da kullanabiliyoruz
type User = {
  name: string;
  age: number;
  childCount?: number;
};

let user1: User = {
  name: "Ahmet",
  age: 34,
  childCount: 3,
};

let user2: User = {
  name: "Mehmet",
  age: 23,
};
