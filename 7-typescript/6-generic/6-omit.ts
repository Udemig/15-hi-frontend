/*
! Omit
* Bir type'da istemediğimiz değer / değerler olduğunda bütün tipi baştan yazmak yerine istemediğimiz değerleri tipten kaldırmak için kullanırız
*/

type Urun = {
  id: number;
  isim: string;
  fiyat: number;
  stok: number;
};

// api'dan ürünleri alan fonksiyon
const urunlerGetir = (): Urun[] => {
  return [{ id: 1, isim: "Iphone", fiyat: 43569, stok: 310 }];
};

// api'a yeni ürün ekleyen fonksiyon - v1
const urunOlustur1 = (yeniUrun: { isim: string; fiyat: number; stok: number }) => {};

// api'a yeni ürün ekleyen fonksiyon - v2
const urunOlustur2 = (yeniUrun: Omit<Urun, "id">) => {};

urunOlustur1({ isim: "Iphone", fiyat: 43569, stok: 310 });
urunOlustur2({ isim: "Iphone", fiyat: 43569, stok: 310 });
