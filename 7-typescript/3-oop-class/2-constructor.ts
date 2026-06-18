/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan alamaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelene parametreler erişebiliriz
*/

class Insan {
  // özellikler:
  isim: string;
  soyad: string;
  yas: number;

  // constructor
  constructor(isim: string, soyad: string, yas: number) {
    this.isim = isim;
    this.soyad = soyad;
    this.yas = yas;
  }

  // method
  konus() {
    console.log(`Merhaba ben ${this.isim} ${this.soyad} ve ${this.yas} yaşındayım`);
  }
}

const insan1 = new Insan("Ali", "Kaya", 34);
const insan2 = new Insan("Fatma", "Çimen", 47);

console.log(insan1);
console.log(insan2);
insan1.konus();

/*
 ! Challange
 * Bir teknolojik / ev aleti için class oluşturun
 * Bu class oluşturduğunuz nesnenin değerlerini constructor'dan alsın
 * Bu class en az 4 özellik ve 1 mehtoda sahip olsun
 * Class'tan bir örnek oluşturun
*/
class EvEsyasi {
  marka: string;
  model: string;
  renk: string;
  fiyat: number;

  constructor(marka: string, model: string, renk: string, fiyat: number) {
    this.marka = marka;
    this.model = model;
    this.renk = renk;
    this.fiyat = fiyat;
  }

  bilgileriGoster(): void {
    console.log(`Marka: ${this.marka}, Model: ${this.model}, Renk: ${this.renk}, Fiyat: ${this.fiyat} TL`);
  }
}

const kahveMakinesi = new EvEsyasi("Arçelik", "K-3300", "Beyaz", 2500);
