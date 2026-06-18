"use strict";
/*
 ! Inheritance (Kalıtım / Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasını sağlar.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır
*/
// Parent Class
class GeometrikSekil {
    isim;
    renk;
    constructor(isim, renk) {
        this.isim = isim;
        this.renk = renk;
    }
    tanit() {
        console.log(`${this.isim} isimli ve ${this.renk} renginde bir şekildir`);
    }
}
// Derived Class (Alt Sınıf) - Kendi Constructor'ı Yok
class Kare extends GeometrikSekil {
    kenarSayisi = 4;
    kenarUzunlugu = 340;
}
console.log(new Kare("Kare", "beyaz"));
// Derived Class (Alt Sınıf) - Kendi Constructor'ı Var
class Daire extends GeometrikSekil {
    yariCap;
    constructor(isim, renk, yariCap) {
        // super: parent class'ın constructor'ına değer göndermeye yarar
        super(isim, renk);
        this.yariCap = yariCap;
    }
}
console.log(new Daire("Daire", "pembe", 89));
// Örnek
// Parent Clas
class Arac {
    marka;
    model;
    constructor(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    calistir() {
        console.log("Araca giriş yapılıyor..");
    }
}
// Derived Class
class Otomobil extends Arac {
    beygir;
    yakitTipi;
    constructor(marka, model, beygir, yakitTipi) {
        super(marka, model);
        this.beygir = beygir;
        this.yakitTipi = yakitTipi;
    }
    gazaBas() {
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
    gozRengi = "";
}
class Anne extends Insan {
    gozRengi = "Mavi";
}
class Baba extends Insan {
    gozRengi = "Kahverengi";
}
class Cocuk extends Baba {
}
console.log(new Cocuk());
