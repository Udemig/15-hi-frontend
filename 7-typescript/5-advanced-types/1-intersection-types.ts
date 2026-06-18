/*
 ! Intersection Types | Kesişim Türler
 * Type'de kesişim türler, iki veya daha fazla tipi birleştirerek yeni bir tür oluşturmamıza olanak sağlar
*/

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki nesne tipinin özelliklerini birleştirelim
type ABType = AType & BType;

let foo: ABType = { key1: "Merhaba", key2: 78 };

// Örnek
type Kisi = {
  id: string;
  isim: string;
};

type Iletisim = {
  eposta: string;
  telefon: string;
};

type Calisan = {
  departman: string;
  maas: number;
};

type Kullanici = {
  bakiye: number;
  aktif: boolean;
};








type Eleman = Kisi & Iletisim & Calisan;

const eleman: Eleman = {
  id: "1",
  isim: "Veli",
  eposta: "veli@firma.com",
  telefon: "444-666-77-88",
  departman: "Satış",
  maas: 56730,
};

type Musteri = Kisi & Iletisim & Kullanici;

const musteri: Musteri = {
  id: "2",
  isim: "Feyza",
  eposta: "feyza@gmail.com",
  telefon: "444-222-11-66",
  bakiye: 321432,
  aktif: true,
};
