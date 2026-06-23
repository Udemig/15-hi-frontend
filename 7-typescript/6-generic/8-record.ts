// Eğer nesnenin keyleri sabit ise klasik tip tanımlama yöntemini kullanırız
interface Yetki {
  rol: string;
  yazmaYetkisi: true;
  kullaniciBanlandi: number;
}

const admin: Yetki = {
  rol: "admin",
  yazmaYetkisi: true,
  kullaniciBanlandi: 230,
};

// Eğer nesnenin keyleri sabit değilde değişkense bu durumda Record tipi kullanırız
const puanTablosu: Record<string, number> = {
  ahmet: 92,
  ali: 23,
  ayse: 78,
  murat: 12,
  fatma: 89,
  fadime: 14,
};

// Örnek - 2
// Aşağıdaki nesnenin tipini tanımlayalım
const codes: Record<number, string | number> = {
  200: "Başarılı",
  423: "Yetersiz Yetki",
  404: "Bulunamadı",
  500: 500,
};
