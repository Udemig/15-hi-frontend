# Kütüphaneler

- axios
- react-router-dom
- react-icons
- tailwindcss
- millify
- react-simple-maps
- @reduxjs/toolkit
- react-redux
- react-testing-library
- jest

# Kaynaklar

- İstatistik API: https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics
- Ülke Covid API: https://covid-api.com/api/

# Test Yazma Zamanı

- Önce proje sonra testleri
- Adım adım ilerle
- - önce bileşen sonra test
- - önce test sonra bileşen

# TDD - Test Driven Development

- Test güdümlü geliştirme, yazılım geliştirme sürecinde testlerinde koddan önce yazıldığı bir tekniktir.
- red to green test

1. Test Yaz: İstenen özellikler için önce testler yazılır
2. Test Çalıştır: Testler başarısız olur
3. Kod Yaz: Testleri geçicek minimum kodu yaz
4. Test Çalıştır: Tüm testlerin geçtiğini kontrol et
5. Refeactor: Kodu iyileştir, testlerin hala geçtiğinden emin ol.

# Selectors - Seçici Methodlar

- Selectors, test ortamında renderlanan elementleri almak için kullandığımız methodlardır.
- Seçiciler 3 ana parçadan oluşur

1. Yöntem

- _get_: ekrandaki elementi alır, elementi bulumazsa hata verir
- - ekranda olduğunu kontrol etmek istediğimiz elementler için kullanırız

- _query_: ekrandaki elementi alır, elementi bulamazsa hata vermez ve null döndür
- - elementin ekranda olmadığını kontrol etmek istediğimiz zaman kullanırız

- _find_: ekrana asenkron olarak basılan elementleri almak için kullanılır
- - eğer api isteğinin ardından ekrana basılan elementi almak istiyorsak kullanırız

2. All İfadesi (Opsiyonel)

- Eğerki ekranda aynı koşula uyan birden fazla element varsa ve hepsini almak istiyorsak kullandığımız yöntemin devamına `All` ifadesi ekleriz
- All ifadesini kullanırsak dönden cevap her zaman dizi formatında olur
- `getAllBy` `queryAllBy` `findAllBy`

3. Sorgu Türü

- Hnagi yöntemle elementi seçiceğimizi belirleyen methodlardır.
- ByRole
- ByLabelText
- ByPlaceholderText
- ByAltText
- ByTitle
- ByTestId
