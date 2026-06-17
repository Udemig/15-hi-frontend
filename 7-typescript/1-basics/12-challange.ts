/*
 ! Challange
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array / object / tuple
 * string literal / union type
 
 * tiplerine sahip bir nesne tipine tanımlayın ve oluşturduğunuz tipi bir değişken üzerinde kullanın
 * tip herhangi bir nesne hakkında olabilir: araba, bilgisayar, film, kitap, takim....
*/

type Car = {
  name: string;
  year: number;
  working: boolean;
  props: string[];
  gear: "otamatic" | "manuel";
};

const araba: Car = {
  name: "Mitsubishi",
  year: 2012,
  working: true,
  props: ["carplay", "koltuk ısıtma"],
  gear: "manuel",
};

type Araba = {
  marka: string;
  yas: number;
  otomatik: boolean;
  Özellikler: string[];
  yakıt_türü: "benzin" | "motorin";
};

const arac: Araba = {
  marka: "Opel",
  yas: 25,
  otomatik: true,
  Özellikler: ["hecbek", "sanroof"],
  yakıt_türü: "benzin",
};
