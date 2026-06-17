/*
 ! Unknown
 * Bir değişkenin tipini gerçekten bilmediğimiz durumlarda kullanırız
 * Ama unknown tipine sahip bir değişkenin tip kontrolünü yapmadan kullanamayız
 * Değer ataması konusunda "any"'de olduğu gibi her türlü değer atayabiliriz
 * Any'den farklı noktası değeri kullanırken kontrol etmeden kullanamıyor oluşumuz
*/

// any
let value1: any;

value1 = 1123;
value1 = true;
value1 = "asfdsnf";

console.log(value1.toUpperCase());

// unknown
let value2: unknown;

value2 = 123;
value2 = true;
value2 = "gdkmgksdfg";

// console.log(value2.toUpperCase());

/*
 * Nerelerde kullanırız?
 * 1) API'dan gelen veri tipi belli değil
 * 2) Kullanıcı inputu belirsiz
 * 3) catch kod bloğu hata yakaladı ama türü belirsiz
 */

function parseData(data: unknown) {
  if (typeof data === "string") {
    console.log("Metnin uzunluğu:" + data.length);
  } else {
    console.log("Girdi metin değil");
  }
}

parseData("selamlar");
parseData(true);
