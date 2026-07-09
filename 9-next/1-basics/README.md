# Next.js Routing

- Bir next.js projesinde routing (sayfalama) için 2 farklı yöntem vardır
- - App Router(Önerilen Yöntem): v13 ile birlikte gelen yöntemdir
- - Pages Routes: v13 öncesi kullanılan yöntemdir

# App Router

- Dosya dizinine göre klasör tabanlı sayfalama yapılır
- Bütün sayfalar `/src/app` klasörü içerisinde olmalıdır
- `/src/app` klasörü içerisinde tanımlanan ve içerisinde `page.jsx` dosyası olan bütün klasörler sayfa olarak algılanır
- `page.jsx` içeriisnde bileşen tanımlayıp export ederiz
- `page.jsx` dosyasını kapsayan klasörün isminde yeni bir route oluşur
- next `page.jsx` olarak tanımlanan sayfaları tespit edip otomatik olarak kendi router'ına ekler

# Nested Routes - İçe İçe Yollar

- örn:
- /profile > profil görüntüle
- /profile/friend > arkadaşlarını görüntüle
- /profile/edit > profilini düzenle

# Dynamic Routes - Dinamik Yollar

- Url'deki parametreye göre sayfa içeriğinin değiştiği saygalar
- Örn: `/products/10` `/videos/jsdb16235` `/cars/tesla`
- Bir route parametresi tanımlamak için react-router-dom'da `/:parametre_ismi`
- Next.js route parametresi tanımlamak için `[parametre_ismi]` isminde klasör tanımlarız
- Component içerisinde url'deki parametrelere erişmek için component'a otomatik olarak gelen params propunu kullanırız

# Catch All Segments - Birden fazla paramtre

- /docs/belge-1
- /docs/belge-1/sayfa-10
- /docs/belge-1/sayfa-10/satir-20
- /docs/[...slug]

# Route Group

- Çok fazla route olduğu seneryoda route'ları kategorize edip erişimini kolaylaştırmak için route'ları gruplandırmak isteyebiliriz

- Route'ları normal klasör içerisinde koyarsak klasör ismi url'i etkiler ama klasör ismini `()` içine yazarsak url'i etkilemez

# Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını / ortak elementlerini / yetkilendirme durmunu belirlemek için kullandığımız bileşendir

# Template

- Layout ile aynı özelliklere sahiptir, tek farkı sayfa geçişlerinde state yenilenir

# Özel Dosyalar

- `page.jsx` > sayfa tanımlar
- `layout.jsx` > sayfa gruplarının ortak özelliklerini tanımlar
- `template.jsx` > sayfa gruplarının ortak özelliklerini tanımlar
- `not-found.jsx` > 404 sayfası tanımlamak için kullanılır

- `loading.jsx`
- - bir bileşen asenkron işlemi beklediği süre boyunca otomatik olarak ekrana gelir
- - loading dosyası oluşturduğumuz klasöre bağlı olarak sayfalara etki eder

- `error.jsx`
- - bir bileşen hata fırlattığı zaman otomatik olarak ekrana gelir
- - error dosyası oluşturduğumuz klasöre bağlı olarak sayfalara etki eder
- - hata bilgilerini ve component'ı yeniden renderlamaya yarayan fonksiyonu prop olarak alır
- - mutlaka sayfa üstünde `use-client` ifadesi kullanılmalı

# Metadata

- Klasik react projelerinde bütün sayfalara index.html üzerinden ortak metadata tanımı yapıyorduk ama her sayfaya ayrı metadata tanımlamak mümkün değildi, bu durumda seo anlamında - yazıyordu

- Next.js'de react'dan farklı olarak her sayfaya ayrı ayrı bir metadata tanımlama şansımız var bundan dolayı SEO anlamında next.js bir react projesine göre daha iyidir.

- Bir sayfanın metadatasını tanımlamak için o sayfada bir `metadata` isminde nesne oluşturup export ederiz
