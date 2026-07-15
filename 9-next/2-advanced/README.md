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

## İç İçe Kullanımı

- `Aynı türden` iki component'ı iç içe kullanmakta bir problem yoktur

- Bir `server component` içerisinde `client component` kullanmakta bir problem yoktur

- Bir `client component` içerisinde `server component` kullanırsak, server component özelliklerini kaybeder ve client component'a dönüşür

- Bir `client component` içerisinde `server component`'ı HOC yöntemiyle kullanırsak, server component özelliklerini kaybetmez

# Data Fetching

- Next.js api'dan alınan veriyi cache'de tutar ve aynı api isteğini tekrar atarsak api'a tekrar istek atmak yerine cache'de tutulan veriyi kullanır

- Bu sayede:
- - ilk istei atılan bütün isteklerde cevap beklemeye gerek kalmaz
- - api'a gereksiz istek gitmez
- - asenkron state'ler için context / redudx / tanstack gibi yöntemlere gerek kalmaz

- Next.js varsayılan olarak bütün api isteklerini cache'ler ama bazen biz cache'lemesini önlemek isteyebiliriz. Bu durumda fetch methodunun ayarlarını buna göre yaparız.

# Next.js Methods

## useRouter

- sadece `client` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | replace() | push() | refresh()

## redirect

- sadece `server` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanırlır
- genelde yetkilendirme işlemlerinde kullanılır

## notFound

- hem `client` hem `server` component'larda kullanılabilir
- ekrana 404 sayfasını basar

## usePathname

- sadece `client` component'larda kullanılabilir
- url'den kullanıcının bulunduğu adresi getirir

## useParams

- sadece `client` component'larda kullanılabilir
- url'deki parametrelere erişmemizi sağlar

## useSearchParams

- sadece `client` component'larda kullanılabilir
- url'deki arama parametrelere erişmemizi sağlar

# Form

- Normal şartlarda formlarda bolca kullanıcı etkileşiöi izlememiz gerektiğinden formaları client component yaparız
- Server action yöntemi kullanarak form içerisindeki veriye erişme ve form gönderilince fonksiyon çalıştırma işlemini server componentlarda yapabiliriz

# Static Site Generation (SSG)

- SSG, next.js'in build (derleme) sırasında sayfaları önceden html olarak üretip sunucuda saklamasıdır
- Kullanıcı siteyi ziyaret ettiğinde sayfalar önceden hazırlandığını için çok hızlı bir şekilde kullanıcıya sunulur.

### Statik Sayfa

- Build anında html'i hazırlanıp sunucuda saklanır, kullanıcı sayfaya girdiğinde tekrar hazırlanmadan direkt kullanıcıya sunulur
- Varsayılan olarak url parametresi olmayan bütün sayfalar statik sayfa olur

### Dinamik Sayfa

- Kullanıcı sayfaya girdiği anda html'i hazırlanıp sunulan sayfalardır
- Varsayılan olarak url parametresi olan sayfalar dinamik sayfa olur

### Statik Bir Sayfayı Dinamik Hale Getirme (revalidate | dynamic)

- Next.js varsayılan olarak parametreye sahip olmayan bütün sayfaları statik yapar
- Bazen biz statik sayfada gösterilen verilerin sıkça güncelleneceğinden ve kullanıcıya eski içerik sunmak istemediğimizden statik sayfaları dinamik sayfaya çevirmek isteriz
- Bunun 2 yöntemi vardır:
- revalidate: statik olan sayfanın belirli aralıklarla yeniden oluşturulmasını sağlar
- dynamic: statik sayfayı tamamen dinamik yapar

### Dinamik Bir Sayfayı Statik Hale Getirme (generateStaticParams)

- generateStaticParams, dinamik bir sayfanın statik şekilde oluşturulmasını sağlar
- build sırasında çağrılan dinamik route'lar için bir parametre listesi return ederz
- - `generateStaticParams([{id:123},{id:234},{id:213}])`
- - next.js bu parametre listesindeki her bir eleman için o sayfanın statik bir halini oluşturur
- - Genelde içeriği çok değişmeyen ve sayısı az olan detay sayfalarında tercih ederiz
