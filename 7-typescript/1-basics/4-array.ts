/*
 ! Array Type
 * Typescript'de dizilerin tipini tanımlarken sadece bu değişkenin bir dizi olucak demek yerine bu değişken string elemenlara sahip bir dizi olucak deriz

 * Yani dizinin içeriği ne olucak? dizinin elemanlarının tipi ne olucak gibi belirtmemiz gerekiyor

 * Tanım:
 * tip[]
 * string[]   number[]   object[]    boolean[]
*/

// Örnek - 1
let numbers: number[] = [1, 4, 7, 9, 10];

// Örnek - 2
let names: string[] = ["Ahmet", "Furkan", "Fatma"];

// Soru: Dizide birden fazla farklı tipte elemanlar olabilir mi?
// Cevap: Evet, union types özelliğini kullanarak yapabiliriz.
let mixed: (string | number)[] = ["a", 4, "b", 9, "c"];
