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

## Tasarım Deseni Türleri ve Elemanları — Kısa Özet

Tasarım desenleri genel olarak **3 ana gruba** ayrılır:

| Tür                                   | Amacı                                                          | Elemanları / Örnek Desenler                                                                                                     |
| ------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Creational — Oluşturucu Desenler**  | Nesnelerin nasıl oluşturulacağını yönetir.                     | Singleton, Factory Method, Abstract Factory, Builder, Prototype                                                                 |
| **Structural — Yapısal Desenler**     | Sınıf ve nesnelerin nasıl bir araya geleceğini düzenler.       | Adapter, Decorator, Facade, Proxy, Composite, Bridge, Flyweight                                                                 |
| **Behavioral — Davranışsal Desenler** | Nesnelerin nasıl iletişim kuracağını ve davranacağını yönetir. | Strategy, Observer, Command, State, Template Method, Chain of Responsibility, Mediator, Iterator, Memento, Visitor, Interpreter |

---

## 1. Creational — Oluşturucu Tasarım Desenleri

Nesne oluşturma sürecini daha esnek ve kontrollü hale getirir.

| Desen                | Kısa Açıklama                                                |
| -------------------- | ------------------------------------------------------------ |
| **Singleton**        | Bir sınıftan yalnızca bir nesne oluşturulmasını sağlar.      |
| **Factory Method**   | Nesne oluşturma kararını merkezi veya alt sınıflara bırakır. |
| **Abstract Factory** | Birbiriyle ilişkili nesne aileleri oluşturur.                |
| **Builder**          | Karmaşık nesneleri adım adım oluşturur.                      |
| **Prototype**        | Var olan nesneyi kopyalayarak yeni nesne üretir.             |

---

## 2. Structural — Yapısal Tasarım Desenleri

Sınıflar ve nesneler arasındaki yapıyı düzenler.

| Desen         | Kısa Açıklama                                         |
| ------------- | ----------------------------------------------------- |
| **Adapter**   | Uyumsuz iki arayüzü uyumlu hale getirir.              |
| **Decorator** | Nesneye sonradan yeni özellikler ekler.               |
| **Facade**    | Karmaşık sistemi basit bir arayüzle sunar.            |
| **Proxy**     | Bir nesneye erişimi kontrol eder.                     |
| **Composite** | Tekil nesne ve nesne gruplarını aynı şekilde yönetir. |
| **Bridge**    | Soyutlama ile uygulama detayını birbirinden ayırır.   |
| **Flyweight** | Çok sayıda benzer nesnede bellek kullanımını azaltır. |

---

## 3. Behavioral — Davranışsal Tasarım Desenleri

Nesnelerin sorumluluklarını, iletişimini ve davranışlarını düzenler.

| Desen                       | Kısa Açıklama                                                          |
| --------------------------- | ---------------------------------------------------------------------- |
| **Strategy**                | Birden fazla algoritmayı değiştirilebilir hale getirir.                |
| **Observer**                | Bir olay olduğunda bağlı nesneleri haberdar eder.                      |
| **Command**                 | İstekleri nesne olarak temsil eder.                                    |
| **State**                   | Nesnenin durumuna göre davranışını değiştirir.                         |
| **Template Method**         | Algoritmanın iskeletini belirler, bazı adımları alt sınıflara bırakır. |
| **Chain of Responsibility** | İsteği bir zincirdeki nesnelerden geçirir.                             |
| **Mediator**                | Nesneler arası iletişimi merkezi bir yapı üzerinden yönetir.           |
| **Iterator**                | Koleksiyon elemanlarında standart şekilde gezinmeyi sağlar.            |
| **Memento**                 | Nesnenin önceki durumunu saklar ve geri yükler.                        |
| **Visitor**                 | Mevcut nesne yapısını değiştirmeden yeni işlemler ekler.               |
| **Interpreter**             | Basit dil veya kuralları yorumlar.                                     |

---

## En Kısa Özet

**Creational** desenler nesne oluşturmayı,
**Structural** desenler nesnelerin yapısını,
**Behavioral** desenler ise nesnelerin davranış ve iletişimini düzenler.

Tasarım desenleri; kodun daha **esnek**, **bakımı kolay**, **test edilebilir** ve **genişletilebilir** olmasını sağlar.

## S.O.L.I.D Prensipleri — Kısa Özet

| Harf  | Prensip                             | Kısa Açıklama                                                                                                                |
| ----- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **S** | **Single Responsibility Principle** | Bir sınıf, fonksiyon veya component yalnızca tek bir ana sorumluluğa sahip olmalıdır.                                        |
| **O** | **Open/Closed Principle**           | Kod geliştirmeye açık, değiştirmeye kapalı olmalıdır. Yeni özellik eklerken mevcut kod mümkün olduğunca değiştirilmemelidir. |
| **L** | **Liskov Substitution Principle**   | Aynı aileden gelen yapılar birbirinin yerine kullanıldığında sistem bozulmamalıdır.                                          |
| **I** | **Interface Segregation Principle** | Bir yapı, kullanmadığı özelliklere veya props’lara bağımlı bırakılmamalıdır.                                                 |
| **D** | **Dependency Inversion Principle**  | Üst seviye modüller, alt seviye teknik detaylara doğrudan bağımlı olmamalıdır; soyutlamalar üzerinden çalışmalıdır.          |

---

## React Açısından Kısa Yorum

### 1. Single Responsibility Principle

Bir component tek bir işe odaklanmalıdır.

Kötü yaklaşım:

```jsx
function UserPage() {
  // API çağrısı
  // filtreleme
  // form yönetimi
  // liste render
  // hata yönetimi
}
```

İyi yaklaşım:

```jsx
useUsers();
filterUsers();
<UserCard />;
<UserListPage />;
```

---

### 2. Open/Closed Principle

Component yeni ihtiyaçlara göre sürekli değiştirilmemeli, dışarıdan genişletilebilir olmalıdır.

Kötü yaklaşım:

```jsx
if (type === "primary") {
}
if (type === "danger") {
}
if (type === "warning") {
}
```

İyi yaklaşım:

```jsx
<Button variant="warning">Dikkat</Button>
```

veya:

```jsx
<Button className="btn-warning">Dikkat</Button>
```

---

### 3. Liskov Substitution Principle

Benzer component’ler aynı props sözleşmesine uymalıdır.

Kötü yaklaşım:

```jsx
<PrimaryButton label="Kaydet" onClick={save} />
<DangerButton text="Sil" handleDelete={remove} />
```

İyi yaklaşım:

```jsx
<PrimaryButton onClick={save}>Kaydet</PrimaryButton>
<DangerButton onClick={remove}>Sil</DangerButton>
```

---

### 4. Interface Segregation Principle

Component’e sadece ihtiyaç duyduğu props verilmelidir.

Kötü yaklaşım:

```jsx
<UserCard user={fullUserObject} />
```

İyi yaklaşım:

```jsx
<UserCard name={user.name} email={user.email} />
```

---

### 5. Dependency Inversion Principle

Component doğrudan API, storage veya dış servis detayına bağımlı olmamalıdır.

Kötü yaklaşım:

```jsx
function UserList() {
  fetch("/api/users");
}
```

İyi yaklaşım:

```jsx
function UserList({ userService }) {
  const users = useUsers(userService);
}
```

---

## En Kısa Haliyle

**S** → Tek sorumluluk al.
**O** → Mevcut kodu bozmadan genişlet.
**L** → Aynı türdeki yapılar birbirinin yerine geçebilsin.
**I** → Kullanılmayan props/metotlara bağımlı olma.
**D** → Detaylara değil, soyutlamalara bağlı çalış.

SOLID prensipleri, React projelerinde component’leri daha **temiz**, **test edilebilir**, **bakımı kolay** ve **ölçeklenebilir** hale getirir.

# 12 Factor Uygulama İlkeleri

| No  | İlke                    | Kısa Açıklama                                                                           |
| --- | ----------------------- | --------------------------------------------------------------------------------------- |
| 1   | **Codebase**            | Uygulamanın tek bir kod tabanı olur, farklı ortamlara aynı koddan deploy edilir.        |
| 2   | **Dependencies**        | Tüm bağımlılıklar açıkça tanımlanır. Örneğin `package.json`, `requirements.txt`.        |
| 3   | **Config**              | Ortam ayarları ve gizli bilgiler kod içinde değil, environment variable olarak tutulur. |
| 4   | **Backing Services**    | Veritabanı, cache, queue gibi dış servisler bağımsız kaynaklar olarak yönetilir.        |
| 5   | **Build, Release, Run** | Derleme, yayınlama ve çalıştırma aşamaları birbirinden ayrılır.                         |
| 6   | **Processes**           | Uygulama stateless çalışır; kalıcı veri bellekte değil dış servislerde tutulur.         |
| 7   | **Port Binding**        | Uygulama kendi portundan servis verir.                                                  |
| 8   | **Concurrency**         | Uygulama birden fazla process/instance ile yatay ölçeklenebilir olmalıdır.              |
| 9   | **Disposability**       | Uygulama hızlı başlamalı ve güvenli şekilde kapanmalıdır.                               |
| 10  | **Dev/Prod Parity**     | Development, test ve production ortamları birbirine mümkün olduğunca benzer olmalıdır.  |
| 11  | **Logs**                | Loglar dosyada saklanmak yerine dışarıya event stream olarak aktarılır.                 |
| 12  | **Admin Processes**     | Migration, seed gibi yönetimsel işler tek seferlik process olarak çalıştırılır.         |
