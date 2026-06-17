/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birer şablon görevi görür
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özellik ve methodlarını tanımlarız
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi görür
*/

abstract class Foto {
  // normal sınıflar gibi constructor tanımı yapabiliriz
  constructor(kameraModu: string, filtre: string) {}

  // normal sınıflarda olduğu gibi method tanımlayalım
  fotoCek(): void {
    console.log("Fotoğraf çekiliyor");
  }

  // soyut method: sadece tipini tanımlayıp görevini tanımlamadığımız fonksiyon
  // soytut method'ların görevini miras alan sınıfta tanımlarız
  abstract fotoPaylas(kim: string): void;
}

// soyut sınıfı miras alan bir sınıf tanımlayalım
class Instagram extends Foto {
  fotoPaylas(kim: string): void {
    console.log(`Foto instada ${kim} ile paylaşıldı`);
  }
}

// soyut sınıfı miras alan başka bir sınıf tanımlayalım
class Twitter extends Foto {
  fotoPaylas(kim: string): void {
    console.log(`Foto twitter'da ${kim} ile paylaşıldı`);
  }
}

new Instagram("Geniş Açı", "Siyah Beyaz").fotoPaylas("Ahmet");
new Twitter("Portre", "Canlı").fotoPaylas("Mehmet");
