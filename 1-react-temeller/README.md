# Proje Oluşturma

- `npx create-react-app .` komutuyla terminalin bulunduğu dizine react projesi oluşturabiliyoruz

# Projeyi Ayağa Kaldırma

- `npm start` komutuyla bir react projesini ayğa kaldırabiliyoruz

# React Klasör Yapısı

- **node_modules**
- projede kullulan tüm npm paketlerini içerir
- React ve diğer bağımlılıklar burada bulunur
- örn:
- react | bootstrap | sass

- **public**
- Bu klasör statik dosyaların bulunduğu yerdir
- Projede kullanıcağımız sabit resimleri logo/hero buraya koyarız
- `public/index.html`: react uygulmasının tek html dosyasıdır
- - react uygulmasu bu root id'li div içerisinde render edilir

- **.gitignore**
- githuba gönderilmesini istemediğimiz dosyların/klasörlerin belirlendiği yerdir.
- örneğin:
- node_modules çok büyük boyutta olduğu için githuba gönderilmez
- başkalarıyla paylaşmak istemediğim bir dosya olursa bunuda gitignore'a ekleyip githuba gitmesini engellerim
