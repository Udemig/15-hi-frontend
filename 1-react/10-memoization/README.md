# Memoization

- Bileşenlerin gereksiz yere render edilmesini veya fonksiyonların gereksiz hesaplamalar yapmasını önlemek için kullandığımız performans optimizasyonlarına denir

## Temel Mantık

- Eğer bir bileşenin veya fonksiyonun girdileri değişmiyorsa (parametre,prop) sonuç değişmez -- o zaman react'ın aynı işlemi yeniden yapmasına gerek olmamalı

## Yöntemler

1. useMemo()
2. React.memo()
3. useCallback()

## Cache (Önbellek)

- Verilerin daha hızlı erişilebilen bir yerde geçici olarak saklanmasıdır

- **Neden Gerekli**
- Bir veriyi her seferinde:
- - Veritabanından çekmek
- - API'a tekrar istek atmak
- - Aynı hesaplamayı tekrar yapmak yerine
- Bir kez işlemi yapıp sonucunu cache'de saklarsak sonraki yapıcağımız aynı işlemde baştan yapmak yerine cache'de saklana sonucu kullanırız
- İlk sefer ZOR ----- sonraki sefer HIZLI

- **Benzetme**
- İnsan hafızasına birebir benzetebiliriz
- Birine 14 \* 50 işlemninin sonucu sorarsanız ortalama 5 saniyede hesaplayıp cevap verir
- Kısa süre içerisinde aynı kişiye aynı soruyu sorarsanız hafızasında zaten sonuç olduğu için tekrar hesaplama yapmadan 1 saniyeden kısa sürede cevap verir
- - Bu seneryodaki insan geçici hafızasının yazılımdaki karşılığı cache'dir

## useMemo() - Hesaplanmış Değerleri Hatırlamak

- useMemo, yoğun hesaplama yapan fonksiyonların ürettikleri sonuçları cache'de saklar
- Ve aynı hesaplama kısa süre içerisinde tekrar yapılacğaında basştan ehsplamak yerine cache'de saklanan sonuç kullanılır
- Bu da ilk hesaplamadan sonraki hesaplamaların sonucunun daha hızlı elde edilmesini sağlar
- Bu seneryo hesaplamadaki girdiler değişmediği durum için geçerlidir, girdi değişirse hespalama baştan yapılmalı

## React.memo() - Component Gereksiz Renderını Önler

- Component'ların aldığı prop değişmediği müddetçe render olmasının önüne geçer
- Kapsayıcı elementlerin render olduğunda lat elementlerinde render olmasının önüne geçer

## useCallback() - Fonksiyonun Yeniden Oluşmasını Önler

- Her render sırasında fonksiyonun yeniden oluşurulup farklı bir referansa sahip olmasını engellemek istersek useCallback kullanırız
- useCallback() bağımlılık dizisindeki değer değişmedikçe fonksiyonun yeniden oluşmasını engeller

# Javascript Veri Türleri

1. **Primitive Types**

- Primitive (ilkel) tipler, değerin kendisi tutar
- Hafızda sabit bir alan kaplar
- Bir değişkene atandığında kopyası oluşturulur
- string, number boolean, null, undefined, symbol, bigint

2. **Referance Types**

- Referans üzerinde saklanır ve değerleri değiştirelebilir
- Bellekte değişkenin referansı saklanır
- object, array, function, class

# 1 Cümlede Fark

- Primitive değerler (number,string,boolean) doğrudan değerin kendisini kopyalar, referans tipler (object,array) ise değerin kendisini değil bellekteki adresini (referansı) kopyalar
