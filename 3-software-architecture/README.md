# Yazılım Mimarisi

- Bir yazılımın iskelet planıdır.
- Bir binanın mimari planı, nasıl odaları, kolonları, elektrik-su tesisatını belirtiyorsa, yazılım mimarisi de yazılımın:

* Hangi parçalardan oluşacağını
* Bu parçaların birbirleriyle nasıl iletişim kuracağını
* Hangi tekenolojilerin kullanılacağını
* Performans ve ölçeklenebilirliğin nasıl sağlanacağını
* Güvenliğin nasıl işleyeceğini
  belirleyen en üst seviye tasarımdır.

## Neden Gerekli ?

- Daha hızlı geliştirme
- Daha kolay bakım
- Büyüdükçe çökmeyecek şekilde ölçeklendirme
- Performanslı ve güvenli tutmak için

# Yazılım Mimarisi Türleri

1. Katmanlı Mimari (Layered Architecture)

- Kod katmanlara bölünür
- UI / Business / Data (DB)
- Katmanlı mimarinin bazı türleri: MVC, MVVM...

- MVC (Model-View-Controller)
- - Model: Veri yapısı ve veriyi yöneten kodları içerir
- - View: Kullanıcı arayüzü kodlarını içerir
- - Controller: İş mantığı ile alakalı kodları içerir.

2. Monolothic Mimari

- Tüm uygulama tek bir bürün olarak çalışır
- Backend, frontend, ürün işlemleri, kullanıcı işlemleri..., hepsi aynı kod tabanında yer alır.
- Örn: Bütün amazon websitesinin tek bir react projesinde yazılması

3. Microservice Mimari

- Uygulamanın birçok küçük, bağımsız servislerden oluşur.
- Her servis kendi veritabanına ve kendi kod tabanına sahiptir.
- Örn: Amazon websitesinin, Kullanıcıların Alışveriş Yapıcağı Kısım, Admin Paneli, Satıcı Paneli, Kullanıcı Destek Paneli, birer ayrı frontend projesi olarak yazılır
- Kullanıcıların Alışveriş Yapıcağı Kısım: Next.js
- Admin Paneli: React
- Satıcı Paneli: Angular

4. Olay Tabanlı Mimari (Event-Driven Architecture)

- Sistem, olaylar aracılığıyla birbirine haber gönderir.
- "Sipariş Oluşturuldu" "Kayıt Oldu" gibi event'ler üretilir.

- olay tabanlı projenin 3 ana yapısı

1. Producer (Üreten)

- Olayı oluşturan bileşen
- Örn: Sipariş verisi ---> OrderCreated

2. Event Brocker

- Olaylar dağıtan merkez sistem
- Örn: Apache Kafka, RabbitMQ, Redis

3. Consumer (Tüketen)

- Olayı dinleuen ve aksiyon alan servis
- Örn: OrderCreated olayında
- Mail Servisi --> Sipariş maili yollar
- Stok Servisi --> Stoğu azaltır
- Bildirim Servisi --> Push notification gönderir

## Doğru mimari tercihinin faydaları

1. Performans
2. Ölçeklenebilirlik
3. Bakım
4. Ekipler arası işbirliği ve verimlilik artırır
5. Maaliyet
6. Yeniden kullanılabilirlik
7. Esneklik

# Ölçeklenebilirlik (Scaling)

- Ölçeklendirme, bir uyglamanın trafik, kullanıcı, veri veya işlem yükü arttırıldığında performansını koruyarak çalışmaya devam etmesini sağlayacak şekilde yapılandırılmasısıdır.
- Daha fazla kullanıcı --> daha fazla istek --> daha fazla veri --> daha fazla işlem

- **Dikey Ölçekleme**: Projeyi daha üst seviye donanıma sahip bir sunucuda yayınlama
- **Yatay Ölçekleme**: Projeyi birden fazla sunucuda yayınlama
- **Load Balancer**: Gelen kullanıcı isteklerini birden fazla sunucuya dengeli şekilde dağıtan sistemdir
