/*
 ! Tuple Type
 * Tuple, dizinin bir alt tipidir.
 * Uzunluğu ve elemanlarının sırası sabit olan dizilerin tipinin tanımlanması için kullanılır
*/

// Örnek - 1: Elemanlarının sırası sabit bir dizinin tipini tanımlayalım
// yanlış yol (union type):
const der1: (string | number)[] = [5, "Matematik", "Fen"];

// doğru yol (tuple):
const ders2: [string, number] = ["Matematik", 5];

// Örnek-2: Bir css gradient verisi api'dan dizi içerisinde geliyor
// [doğrultu,renk1,renk3]
let gradient: [number, string, string] = [180, "#000000", "#ffffff"];

// Örnek-3: Bir api'dan dizi içerisinde rgb/rgba verisi geliyor
// [red,green,blue,alpha(opsiyonel)]
// Bu seneryoda dizideki son değer opsiyonel yani isteğe bağlıdır
// Kural: Opsiyonel bir elemanın ardından zorunlu bir eleman gelemez

let color: [number, number, number, number?];

color = [123, 78, 92];
color = [123, 78, 92, 0.5];

// Örnek-4: Projede kullanım örneği
// API'dan kordinat dizisi geliyor olsun ve bunun tipini tanımlayalım

const coordinates: [number, number][] = [
  [45.23, 67.84],
  [32.6, 58.92],
  [11.2, 24.34],
];
