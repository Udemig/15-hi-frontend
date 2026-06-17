/*
 ! OOP (Object Orianted Programming)
 * Nesneye yönelimli programlama, yazılım geliştime sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım hayattaki kavrmları koda uyarlar.
 * Kod tekrar azaltır
 * Daha düzenli, modüler bir yapı kurmak için tercih edilir
 * Java, C#, C++, Phyton, Ruby, Swift, Kotlin, PHP, Typescript, Javascript, Dart
  
 * OOP'nin temel kavramları:
 * Class (Sınıf) 
 * Object (Nesne)
 * Inheritance (Kalıtım)
 * Interface (Arayüz)
 * Polymorphism (Çok bicimcilik)
 * Encapsulation (Kapsülleme)
 * Abstraction (Soyutlama)
*/

/*
 ! Class (Sınıf)
 * Sınıflar nesnelerin şablonudur
 * Bir sınıf, belirli türdeki nesneler için özellik ve fonksiyon tanımlar
 * Örneğin "Araba" sınıfı bir arabanın sahip olcucağı özellikleri (renk,marka,model) ve davranışlarını (hızlanma,frenleme,vites değiştirme) tanımlar
*/

class AkilliTelefon {
  // properties (özellikler)
  marka: string = "Apple";
  model: string = "Iphone 17";
  ekranTuru: string = "OLED";
  batarya: number = 99;

  // methods
  ekranAc(): void {
    console.log("Ekran açıldı");
  }

  aramaYap(numara: string): void {
    console.log(numara + " aranıyor...");
  }
}

/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir anlam ifade etmez
 * Fonksiyonlarda olduğu gibi tanımladıktan sonra çağırmamız gerekli
 * Class'larda da durum aynıdır class'ı new anahtar kelimesi ile çağırırız ve bir nesne oluşturur
 * Class'ın oluşturduğu bu nesneye "instance" (örnek) denir
*/

const telefon1 = new AkilliTelefon();
const telefon2 = new AkilliTelefon();
const telefon3 = new AkilliTelefon();

console.log(telefon1);
console.log(telefon2);
telefon1.ekranAc();
telefon1.aramaYap("+9056781243");
