/*
 ! Generic Extends
 * Tipi generic olarak tanımladığımızda her türlü tipte değer atanmasına izin vermiş oluyoruz
 * Extends kullanarak generic olan tipi alabilceği değerleri kısıtlayabiliyoruz
*/

type Container<T extends string | number> = {
  foo: T;
  bar: T;
};

const x: Container<string> = {
  foo: "sdfk",
  bar: "gmkı",
};

const y: Container<number> = {
  foo: 453,
  bar: 456,
};

/*
 ! Challange
 * En az 1 generic tip alan bir type / interface / fonksiyon / class yazınız
 * Tanımladığınız yapıyı en az 1 kez kullanın
 * Daha önce tanımladığımız tiplerde farklı olursa iyi olur
 * Bonus: extends kullanımı
*/

type Book<T extends string | number> = {
  name: T;
  page: T;
  author: T;
};

const kitap: Book<string> = {
  name: "Fire And Sword",
  page: "430",
  author: "Henryk Sienkiewicz",
};
