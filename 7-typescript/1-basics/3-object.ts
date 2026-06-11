/*
 ! Object
 * Normal şartlarda TS'de bir object type'ı mebvut ama object type'ı ucu çok açık olduğundan kullanmayı tercih etmiyoruz
 * Onun yerine nesne içerisinde özelliklerin tiplerini ayrı ayrı tanımlamayı tercih ederiz
*/

// nesne tipi tanımlamanın yanlış yolu
let data: object;
data = {};
data = [];
data = () => {};
data = new Date();

// nesne tipi tanımalmanın doğru yolu
// doğru yol: nesnedeki alanların ayrı ayrı tanımlanması
let ogrenci: {
  id: number;
  ad: string;
  soyad: string;
  mezunMu: boolean;
};

// belirlediğimiz tipe göre değer ataması yapalım
ogrenci = {
  id: 123,
  ad: "Ahmet",
  soyad: "Yılmaz",
  mezunMu: true,
};

/*
 ! Görev
 * urun isminde bir değişken oluşturun (nesne)
 * nesne içerisinde ürünün string / number / boolean tiplerinde keyleri olsun
 * nesnenin önce tipini ardından değerini tanımla
*/