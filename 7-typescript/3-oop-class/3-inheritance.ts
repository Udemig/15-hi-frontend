/*
 ! Inheritance (Kalıtım / Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasını sağlar.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır 
*/

// Parent Class
class GeometrikSekil {
  isim: string;
  renk: string;

  constructor(isim: string, renk: string) {
    this.isim = isim;
    this.renk = renk;
  }

  tanit() {
    console.log(`${this.isim} isimli ve ${this.renk} renginde bir şekildir`);
  }
}

// Derived Class (Alt Sınıf) - Kendi Constructor'ı Yok
class Kare extends GeometrikSekil {
  kenarSayisi: number = 4;
  kenarUzunlugu: number = 340;
}

console.log(new Kare("Kare", "beyaz"));

// Derived Class (Alt Sınıf) - Kendi Constructor'ı Var
class Daire extends GeometrikSekil {
  yariCap: number;

  constructor(isim: string, renk: string, yariCap: number) {
    // super: parent class'ın constructor'ına değer göndermeye yarar
    super(isim, renk);
    this.yariCap = yariCap;
  }
}

console.log(new Daire("Daire", "pembe", 89));

// Örnek
// Parent Clas
class Arac {
  constructor(
    public marka: string,
    public model: string,
  ) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor..");
  }
}

// Derived Class
class Otomobil extends Arac {
  beygir: number;
  yakitTipi: string;

  constructor(marka: string, model: string, beygir: number, yakitTipi: string) {
    super(marka, model);
    this.beygir = beygir;
    this.yakitTipi = yakitTipi;
  }

  gazaBas(): void {
    console.log("Gaza basılıyor...");
  }
}

const bmw = new Otomobil("BMW", "X4", 250, "benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();

// Bir class aynı anda birden fazla class'ı miras alamaz
// Ama miras alma olayı birden fazla kez gerçekleşebilir

class Insan {
  gozRengi: string = "";
}

class Anne extends Insan {
  gozRengi: string = "Mavi";
}

class Baba extends Insan {
  gozRengi: string = "Kahverengi";
}

class Cocuk extends Baba {}

console.log(new Cocuk());
