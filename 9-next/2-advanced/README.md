# Parallel Routes

- Birden fazla `page.jsx`'i parallel olarak aynı layout içerisinde ekrana basmak için kullanılır.
- Bu yöntemi dinamik içeriğe sahip admin dashboard vaya sosyal medya feedi gibi sayfalarda kullanırız

- Admin paneli üzerinden örnek vericek olursak:

- - Bileşenler kullanılırsa:

```jsx
<Revenue />
<Users />
<Notification />
```

- - Parallel routes kullanılırsa:

```jsx
@Revenue
@Users
@Notification
```

- - Bu yöntemde yukarıdaki @ işareti ile yazılanlar normal bileşen değil ayrı route segmentleridir.
- - Yani:
- - ayrı loading olabilir
- - ayrı veri çekebilir
- - bağımsız render edilir
- - route mantığıyla çalışır

# Intercepting Routes

- Kullanıcı deneyimini arttırmak amacıyla modal tabanlı navigasyon sağlar

- Bu sayede farklı bir sayfa içeriğini kullanıcıya bulunduğu sayfadan ayrılmadan modal arayüzünden gösterebiliyoruz bu yöntemin klasik bir modal yapısında asıl farkı, arayüz ekrana modal olarak gelsede kullanıcı o sayfayı ziyaret etmiş yani SEO anlamında çok daha iyi sonuç verir.

# Images

- Normal img elementi yerine next.js Image Component'ını kullanarak resimleri çok daha optimze bir şekilde ekrana basabiliriz
- - Optimizasyon
- - Webp formatına çevirir
- - Lazy loading

# Import

## Relative Import

- dosya konumuna bağlı olarak `../../` ifadesiyle import yolunu yazarız

## Absolute Import

- import yolunun başına `@` koyduğunuzda yol olarak src'ye gidiyorsunuz.
- Bu yöntemle yapılan importlar sayesinde dosya konumu değişse bile import yolunu değiştirmeye gerek kalmaz

# Font

- Next.js, resimlerde olduğu gibi fontlar için optimizasyon yapar.

## Remote Font

- Next.js'de goolge fonts'dan alıcağımız fontları css'e import etmek yerine `next/fonts/google` klasöründen import ederiz

# Rendering Yöntemleri

## Client Side Rendering (CSR)

- Bu yöntemde, kullanıcı sayfaya girdiğinde `boş html dosyası` ve `javascript dosyası` indirir. İndirilen js kodları `kullanıcının cihazında çalışır`, html dosyasının içi dolar ve kullanıcı sayfa içeriğini görür

## Server Side Rendering (SSR)

- Bu yöntemde, kullanıcı sayfaya girdiğinde js kodları `sunucuda çalışır` ve html içeriği sunucu oluşur ve kullanıcı sadece `dolu html dosyası` indirir ve sayfa içeriğini görür.

- Bu iki yöntemi karşılaştırırsak, SSR hem SEO hem de Performans açısından daha iyidir.

# Component Çeşitleri

## Server Component

- Next.js'de varsayılan component türüdür.
- Yeni bir component oluşturulduğunda direkt server component olarak oluşur.
- Bu component içeriği `SSR` ile render olur
- Hem `SEO` hem `Performans` açısından daha iyidir.
- Kullanıcı etkileşimlerini takip edemiyor ve hook'ları kullanamıyoruz

## Client Component

- Bir component'ın en üst satırına `uses client` ifadesini yazarsanız client component olur
- Bu compoennt içeriği `CSR` ile render olur
- Kullanıcı etkileşimleri izlenebiliyor ve hook'ları kullanabilliyoruz

## Özetle

- Sever component'lar daha iyi olduğu için projelerimizde olabildiğince çok server component kullanmaya çalışıcaz sadece zorunda kaldığımız durumlarda (kullanıcı etkileşimini izleyeceksek veya hook kullanıcaksak) client component kullanırız

- Not: Next.js bizden olabildiğince çok server component kullanmamızı istediği için sayfa içerisinde kullanıcı etkileşimini takip ediceğimiz bir yer varsa bütün sayfayı client component'a çevirmek yerine o kısmı ayrı bir client component haline getirip sayfanın geri kalanını server component olarak tutmak daha mantıklıdır
