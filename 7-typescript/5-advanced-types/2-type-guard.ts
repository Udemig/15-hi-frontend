/*
 ! Type Guard
 * Bu teknik sayesinde belirli türdeki değeleri kontrol edip türe özgü işmler gerçekleştirebiliyoruz
 * Bu tekniği typeOf ve instanceOf javascript methodları ile uygularız
*/

// typeOf: bir değişkenin tipini kontrol etmek için kullanılır
console.log(typeof "hello");
console.log(typeof 234);
console.log(typeof false);
console.log(typeof { id: 123 });

// typeof ile typeguard tekniği uygulama
function log(input: string | number) {
  if (typeof input === "string") {
    input.trim();
  } else {
    input.toFixed(2);
  }
}

// typeof örnek
// girdi olarak hem string "123" hem de number 123 formatında sayı kabul eden bir fonksiyon yazalım
// eğerki girdi sayı ise direkt return etsin
// eğerki girdi string ise sayıya çevirip return tesin
// sayıya çevirlmiyorsa 0 return etsin

const formatNumber = (input: string | number) => {
  if (typeof input === "number") {
    return input;
  } else {
    const value = parseInt(input);

    // sayı değilse 0 döndür
    return isNaN(value) ? 0 : value;
  }
};

formatNumber(1321);
formatNumber("3478");
formatNumber("sdfjsdjnf");

// instanceOf nedir?
class Kaplumbaga {}

class Tavsan {}

const tospik = new Kaplumbaga();

console.log("Tospik nesnesi, Tavşan sınıfından oluşturlan bir örnek mi?", tospik instanceof Tavsan);
console.log("Tospik nesnesi, Kaplumbaga sınıfından oluşturlan bir örnek mi?", tospik instanceof Kaplumbaga);

//! instanceOf ile typeguard tekniği

class Kedi {
  isim: string = "Tekir";

  miyavla(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Kopek {
  isim: string = "Karabaş";

  havla(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

// aşağıdaki fonksiyon parametre olarak aldığı hayvana göre hayvanın sesini çıakran fonksiyonu çalıştırsın
function sesCikar(hayvan: Kedi | Kopek) {
  if (hayvan instanceof Kedi) {
    hayvan.miyavla();
  } else {
    hayvan.havla();
  }
}

sesCikar(new Kedi());
sesCikar(new Kopek());
