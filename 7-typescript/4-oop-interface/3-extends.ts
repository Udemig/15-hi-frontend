/*
 ! Interface Extends
 * Interface'ler extends ile bir/birkaç interface'i miras alabilir
 * Class'lardan farklı olarak birden fazla elemanı aynı anda miras almak mümkün
*/

interface IEsya {
  isim: string;
  fiyat: number;
  marka: string;
}

interface IMobilya extends IEsya {
  renk: string;
  boyut: string;
}

const masa: IMobilya = {
  isim: "Bilgisayar Masası",
  fiyat: 2450,
  marka: "IKEA",
  renk: "Ceviz",
  boyut: "120x60",
};

// Örnek - 2
interface IEsya {
  isim: string;
  fiyat: number;
  marka: string;
}

interface IElektronik {
  garanti?: number;
  sarj: boolean;
  bataryaOmru: number;
}

interface IBilgisayar extends IEsya, IElektronik {
  islemci: string;
  ram: number;
}

const laptop: IBilgisayar = {
  isim: "Monster Abra A5",
  fiyat: 490000,
  marka: "Monster",
  garanti: 44,
  sarj: true,
  bataryaOmru: 8,
  islemci: "Intel i7",
  ram: 32,
};

/*
 ! Challange
 * İlk olarak 2 interface oluşturun
 * Ardından 3. bir interface oluşturun ve ilk 2 interface'i miras alın
 * Son olarak en son oluşturduğunuz interface'i bir nesne tipi tanımında kullanın
 * Yasaklı: Kisi, Bilgisayar, Araba
*/

interface IEsya1 {
  isim: string;
  fiyat: number;
  marka: string;
}

interface IElektronik1 {
  garanti: number;
}

interface IMakine extends IEsya1, IElektronik1 {
  programsayisi: number;
  kurutma: boolean;
}

const camasirMakinesi: IMakine = {
  isim: "Arcelik",
  fiyat: 5000000,
  marka: "Lux",
  garanti: 5,
  programsayisi: 12,
  kurutma: true,
};
