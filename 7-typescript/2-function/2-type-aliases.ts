/*
 * Typescripde bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine type aliases ile ayru bir tip oluşturabiliyoruz
 */

// 1. Yöntem: fonksiyonu yazarken tip tanımlama
let func1 = (par1: number, par2: string): string => {
  return par1 + par2;
};

// 2. Yöntem: Type aliases ile fonksiyonun tipini ayrıca tanımla
type FuncType = (par1: number, par2: string) => string;

let func2: FuncType = (par1, par2) => {
  return par1 + par2;
};

// Örnek
// Parametre olarak kişinin bulunduğu şehri ve hava derecesini alan:
// eğer derece 30'dan büyükse "Hava Sıcak" return eden
// eğer derece 10'dan küçükse "Hava Soğuk" return eden
// eğer derece 10-30 aralığındaysa "Hava Normal" return eden fonksiyon yazalım
type HavaDurumuFonksiyonu = (sehir: string, derece: number) => string;

const havaDurumu: HavaDurumuFonksiyonu = (sehir, derece) => {
  if (derece > 30) {
    return `${sehir}'de hava sıcak`;
  } else if (derece < 10) {
    return `${sehir}'de hava soğuk`;
  } else {
    return `${sehir}'de hava normal`;
  }
};

const sonuc = havaDurumu("Edirne", 5);

console.log(sonuc);
