/*
 ! Erişim Belirteçleri
 * Class elemanları ile veri tutucağımız zaman, bu verilerin class'ın dışarısında erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim Belirteçleri:
 * public (varsayılan): Her yerde erişilebilir
 * protected: sadece sınıfın kendisi ve alt sınıflar özelliğe erişebilir
 * private: sadece sınıfın kendisi özelliğe erişebilir
*/

// Ev Sınıfı
class Ev {
  public adres: string = "İstanbul";
  protected fiyat: number = 54089999;
  private sahip: string = "Ahmet Yılmaz";

  tanim() {
    console.log(`Bilgiler: ${this.adres}, ${this.fiyat}, ${this.sahip}`);
  }
}

// Ev sınıfını miras alan Villa sınıfı
class Villa extends Ev {
  tanim() {
    console.log(`Bilgiler: ${this.adres}, ${this.fiyat}`);
  }
}

// Ev sınıfından bir örnek oluştur
const ev = new Ev();
console.log(ev.adres);

/*

  * Belirteç          Tanımlandığı Sınıf                  Alt Sınıf                Sınıf Örneği

  * public                   evet                            evet                      evet

  * protected                evet                            evet                      hayır

  * private                  evet                            hayır                     hayır

*/

// Örnek

class BankaHesabi {
  public hesapNumarasi: string;
  protected bakiye: number;
  private pin: number;

  constructor(h: string, b: number, p: number) {
    this.hesapNumarasi = h;
    this.bakiye = b;
    this.pin = p;
  }

  public paraYatir(miktar: number): void {
    this.bakiye += miktar;
  }

  protected bakiyeSorgula(): number {
    return this.bakiye;
  }
}

const hesap = new BankaHesabi("1110002303428004043234", 450000, 1234);
console.log(hesap);
hesap.paraYatir(1500);
