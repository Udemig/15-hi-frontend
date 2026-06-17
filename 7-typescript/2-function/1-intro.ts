/*
 ! Function Type
 * Typescript'de fonksiyon tipini tanımlamaktan kastımız fonksiyonun aldığı parametrenin ve döndürdüğü değeri tipini tanımlamaktır
*/

// normal function
function topla(a: number, b: string): string {
  return a + b;
}

// arrow function
const topla2 = (a: number, b: string): string => {
  return a + b;
};

// Örnek - 1
// sayının pozitif olup olmadığını kontrol eden fonksiyon
// 10 => true || -3 => falset
const isPositive = (sayi: number): boolean => {
  return sayi > 0;
};

console.log(isPositive(10));
console.log(isPositive(-3));

// Örnek - 2
// Bir dizi sayıyı parametre olarak alıp ortalamasını döndüren fonksiyon
const ortalama = (sayilar: number[]): number => {
  const toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);

  return toplam / sayilar.length;
};

console.log(ortalama([54, 12, 67, 89, 123, 67, 12]));
