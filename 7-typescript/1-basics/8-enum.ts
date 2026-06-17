/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/

// Örnek - 1
// Trafik ışığının aşamalarının verisini tut

// 1) klasik js yöntemi
const color = {
  kirmizi: 0,
  sari: 1,
  yesil: 2,
};

// bu renklerden birini değişkene atayalım
const renk1: number = color.sari;

// 2) typescript enum yöntemi
enum Light {
  kirmizi,
  sari,
  yesil,
}

// bu renklerden birini değişkene atayalım
// enumları tip ataması olarak kullanabiliyoruz bu sayede değişken sadece enum içerisindeki değerleri alır
const renk2: Light = Light.sari;

// Örnek - 2
enum Gun {
  pazartesi = 1,
  sali,
  carsamba,
  persembe,
  cuma,
  cumartesi,
  pazar,
}

let gun1 = Gun.cumartesi;
let gun2 = Gun[3];

console.log(gun1); // 6
console.log(gun2); // carsamba

// Örnek - 3
// Bir kargo takip sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor. Bu durumda kargo aşamalarını js'de bir nesneye atar ve ordan çağırırdık ts'de ise daha kullanışlı olması için enum'ı tercih ederiz
enum Status {
  pending = "Beklemede",
  on_the_way = "Yola çıktı",
  delivered = "Teslim edilidi",
  canceled = "İptal edildi",
}

// değşikenin tipini tanımlarken enumı kullanabiliriz
let kullanıcı_kargo_durumu: Status = Status.on_the_way;

console.log(kullanıcı_kargo_durumu);
