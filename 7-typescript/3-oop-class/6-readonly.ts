/*
 ! Readonly
 * Readonly anahtar kelimesi class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readınly ile tanımladığımız özelliklere değer ataması sadece şu durumlarda gerçekleşir:
 * - sınıflarda sadece constructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturuken değer atanabilir
*/

//? Nesneler için Kullanım

// bir nesne tipi tanımladık
type Insan = {
  isim: string;
  soyad: string;
  readonly tcNo: string;
};

const kisi: Insan = {
  isim: "Ahmet",
  soyad: "Çimen",
  tcNo: "111018327482374",
};

kisi.isim = "Mehmet";
kisi.soyad = "Gündüz";
// kisi.tcNo = "182733298637825";

//? Sınıflardaki Kullanım
class Kitap {
  public isim: string = "Game Of Thrones";
  public sayfa: number = 1400;
  private readonly yazar: string = "George R.R Martin";
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
  public marka: string = "Lenovo";
  public model: string = "LOQ";
  protected ram: number = 32;
  private readonly seriNo: string = "özk34";
  bilgiVer(): void {
    console.log(`${this.marka} ${this.model}`);
  }
}

const laptop1 = new Laptop();
console.log(laptop1.marka);
laptop1.bilgiVer();

///

class Utu {
  marka: string = "Samsung";
  public model: string = "GTI";
  protected akilli: boolean = true;
  private readonly seriNo: number = 12345;
  hakkinda(): void {
    console.log(`${this.marka} ${this.model}`);
  }
}
