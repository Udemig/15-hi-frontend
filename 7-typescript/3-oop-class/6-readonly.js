"use strict";
/*
 ! Readonly
 * Readonly anahtar kelimesi class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readınly ile tanımladığımız özelliklere değer ataması sadece şu durumlarda gerçekleşir:
 * - sınıflarda sadece constructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturuken değer atanabilir
*/
const kisi = {
    isim: "Ahmet",
    soyad: "Çimen",
    tcNo: "111018327482374",
};
kisi.isim = "Mehmet";
kisi.soyad = "Gündüz";
// kisi.tcNo = "182733298637825";
//? Sınıflardaki Kullanım
class Kitap {
    isim = "Game Of Thrones";
    sayfa = 1400;
    yazar = "George R.R Martin";
}
/*
 ! Challange
 * Bir class tanımlayın ve bu class'tan bir örnek oluşturun
 * Bu class en az 4 özelliğe sahip olsun
 * Bu özelliklerden en az 1'i readonly olsun
 * Erişim belirteçlerini kullanın (public protected private)
  
 * Yasaklı: Kişi, İnsan, Araba
*/
class Laptop {
    marka = "Lenovo";
    model = "LOQ";
    ram = 32;
    seriNo = "özk34";
    bilgiVer() {
        console.log(`${this.marka} ${this.model}`);
    }
}
const laptop1 = new Laptop();
console.log(laptop1.marka);
laptop1.bilgiVer();
