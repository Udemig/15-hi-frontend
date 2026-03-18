# API Nedir?

- API, bi uygulamanın başka bir uygulamayla konuşmasını sağlayan arayüzdür.
- İki farklı yazılımın birbirleriyle veri alışverişi yapmasını sağlar
- Frontend projelerinde ekrana basıcağımız dinamik veriyi elde etmek için api'a istek atarız bu durumda api veritabanından ilgili verileri alıp cevap gönderen katmandır

# JSON-SERVER

- Hılzıca bir REST API oluşturmak için kullanılan node.js kütüphanesidir.
- Mock (sahte) bir api oluşturmak isteyen geliştiricilerinin işine yarar
- Gerçek bir veritabanı kullanmak yerine `db.json` dosyası üzerinden çalışan sahte bir api API oluşturur

## Neden MOCK API'A ihtiyacaç duyarım?

- MOCK API'lar prototipleme amacıyla kullanılaibilir.
- MOCK API'lar sadece oluşturan kişinin ağında çalıştığı için mock api kullanılan projeler yayınlanamaz
- MOCK API'lara get | post | put | patch | delete istekleri atarak kendimizi geliştiriceğimiz basit projeler yapabiliriz.

## JSON Server Kurulum

1. projeye `json-server@0.17.4` kütüphanesini indir

2. projenin en dış klasöründe veritabanı olarak kullanıcağımız `db.json` dosyası oluştur

3. api'ı ayağa kaldırmak için terminale `npx json-server --watch db.json --port 5000` komutunu yazınız

# Axios

- Axios, tarayıcıda (frontend) ve node.js (backend) ortamında HTTP istekleri atmamızı sağalayan fetch muadili XMLHTTPRequest tabanlı bir kütüphane

## Neden Axios?

- fetch yöntemine göre daha pratik
- istek verilerini otomatik olarak json ve js formatılarına çevirir
- isteklerde gönderilmesi gereken bazı gerekli header'ları otomatik ekler
- intercept özelliği ile yapılan her istek veya gelen her yanıtta fonksiyon çalıştırabiliyoruz.
- timeout, baseUrl, header, params gibi ayarları yapılabilir

- **GET**

```jsx
// api'a get isteği at
fetch("http://localhost:5000/todos")
  // api'dan olumlu yanıt gelirce veriyi js formatına çevir
  .then((res) => res.json())
  // veriye eriş
  .then((data) => console.log(data));

// -------------------

axios
  .get("http://localhost:5000/todos")
  // api'dan olumlu yanıt gelince veriye eriş
  .then((res) => console.log(res.data));
```

- **POST**

- **PATCH**

- **DELETE**
