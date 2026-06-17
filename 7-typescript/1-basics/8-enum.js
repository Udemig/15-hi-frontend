"use strict";
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
const renk1 = color.sari;
// 2) typescript enum yöntemi
var Light;
(function (Light) {
    Light[Light["kirmizi"] = 0] = "kirmizi";
    Light[Light["sari"] = 1] = "sari";
    Light[Light["yesil"] = 2] = "yesil";
})(Light || (Light = {}));
// bu renklerden birini değişkene atayalım
// enumları tip ataması olarak kullanabiliyoruz bu sayede değişken sadece enum içerisindeki değerleri alır
const renk2 = Light.sari;
// Örnek - 2
var Gun;
(function (Gun) {
    Gun[Gun["pazartesi"] = 1] = "pazartesi";
    Gun[Gun["sali"] = 2] = "sali";
    Gun[Gun["carsamba"] = 3] = "carsamba";
    Gun[Gun["persembe"] = 4] = "persembe";
    Gun[Gun["cuma"] = 5] = "cuma";
    Gun[Gun["cumartesi"] = 6] = "cumartesi";
    Gun[Gun["pazar"] = 7] = "pazar";
})(Gun || (Gun = {}));
let gun1 = Gun.cumartesi;
let gun2 = Gun[3];
console.log(gun1); // 6
console.log(gun2); // carsamba
// Örnek - 3
// Bir kargo takip sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor. Bu durumda kargo aşamalarını js'de bir nesneye atar ve ordan çağırırdık ts'de ise daha kullanışlı olması için enum'ı tercih ederiz
var Status;
(function (Status) {
    Status["pending"] = "Beklemede";
    Status["on_the_way"] = "Yola \u00E7\u0131kt\u0131";
    Status["delivered"] = "Teslim edilidi";
    Status["canceled"] = "\u0130ptal edildi";
})(Status || (Status = {}));
// değşikenin tipini tanımlarken enumı kullanabiliriz
let kullanıcı_kargo_durumu = Status.on_the_way;
console.log(kullanıcı_kargo_durumu);
