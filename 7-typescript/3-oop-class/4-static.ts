/*
 ! Static
 * Static anahtar kelimesi, özelliği veya methodu sınıfın örneği oluşturulmadan kullanabilmemizi sağlar
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
*/

//! Static Method
class Matematik {
  x: number = 10;

  // static olmayan methodlar sınıfın içerisindeki özelliklere erişebilir
  topla(y: number) {
    console.log(this.x + y);
  }

  // static methodlar sınıf içerisindeki özelliklere erişemez
  static carp(a: number, b: number) {
    console.log(a * b);
  }
}

// static olmayan topla fonksiyonuna erişmek için öncelikle sınıfın örneği alınmalı
const math = new Matematik();
math.topla(20);

// static olan carp fonksiyonuna erişmek için sınıftan örnek almaya gerek yok
Matematik.carp(3, 5);

//? Örnekler

// static olmayan bir method örneği
new Date("2026-01-01").toLocaleDateString();

// static method örneği
Date.now();

// statik olmayan
new Date().getFullYear();

// static method örneği
Object.fromEntries([]);

//! Static Property
// Doğrudan class üzerinden erişilebilen özelliklerdir
class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    this.isim = isim;

    Ogrenci.ogrenciSayisi++;
  }
}

console.log(new Ogrenci("Meryem"));
console.log(new Ogrenci("Mert"));
console.log(new Ogrenci("Ömer"));
console.log(new Ogrenci("Vedat").isim);

console.log(Ogrenci.ogrenciSayisi); // 4 
