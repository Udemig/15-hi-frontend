/*
 ! String Literal Type
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabileceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlması yaparız

 * Örn: Bir kullanıcı nesnesinin tipini tanımlamak istiyoruz kullanıcının rolüne string yazmak yerine string olarka alabileceği 3-4 fakrlı değer üzerinden kısıtlama yapabiliriz
*/

// Örnek - 1
let user: {
  id: number;
  isim: string;
  tip: "admin" | "kullanıcı" | "ziyaretçi";
  cinsiyet: "erkek" | "kadın";
};

user = {
  id: 123123,
  isim: "Ahmet",
  cinsiyet: "erkek",
  tip: "admin",
};

// Örnek - 2
let araba: {
  marka: string;
  model: string;
  yil: number;
  renk: string;
  vites: "otomatik" | "manuel";
  km: number;
  yakit: "benzin" | "dizel" | "elektrik" | "benzin+lpg";
  agirHasar: boolean;
  yayinTarihi: Date;
  owner: any;
};

araba = {
  marka: "bmw",
  model: "320",
  yil: 2014,
  renk: "beyaz",
  vites: "otomatik",
  km: 156000,
  yakit: "dizel",
  agirHasar: false,
  yayinTarihi: new Date("05-06-2026"),
  owner: { id: 1, name: "Ali" },
};
