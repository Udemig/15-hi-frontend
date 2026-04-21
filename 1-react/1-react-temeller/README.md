# Komutlar

## Proje Oluşturma

- `npx create-react-app .` komutuyla terminalin bulunduğu dizine react projesi oluşturabiliyoruz

## Projeyi Ayağa Kaldırma

- `npm start` komutuyla bir react projesini ayğa kaldırabiliyoruz

## Kütüphane İndirme/Kaldırma

- `npm install/i kütüphane-ismi`: indirme
- `npm uninstall kütüphane-ismi`: kaldırma

# React Klasör Yapısı

- **node_modules**
- projede kullanılan tüm npm paketlerini içerir
- React ve diğer bağımlılıklar burada bulunur
- örn:
- react | bootstrap | sass

- **public**
- Bu klasör statik dosyaların bulunduğu yerdir
- Projede kullanıcağımız sabit resimleri logo/hero buraya koyarız
- `public/index.html`: react uygulmasının tek html dosyasıdır
- - react uygulması bu root id'li div içerisinde render edilir

- **.gitignore**
- githuba gönderilmesini istemediğimiz dosyaların/klasörlerin belirlendiği yerdir.
- örneğin:
- node_modules çok büyük boyutta olduğu için githuba gönderilmez
- başkalarıyla paylaşmak istemediğim bir dosya olursa bunuda gitignore'a ekleyip githuba gitmesini engellerim

- **package-lock.json**

- proje bağımlılıklarının detaylı bir şekilde (versiyon bilgisi / bağımlılıkların birbiriyle ilişkisi) tutan dosyadır

- **package.json**
- Projede kullanaılan kütüphanelerin sürümlerinin ve scriptlerin tutulduğu dosyadır

- **/src**
- src yani source (kaynak) dosyası proje gelişitirme anında yazılacak bütün kodlar bu klasör içerisinde yer alır
- - app/index.css: stillendirme
- - app.js: Bir component'dır. Projenin ana bileşenidir.
- - index.js: react uygulmasının başlangıç noktasıdır. App bileşenini alır ve html'deki id'si root olan div'in içerisinde ekrana bassar.

# Bileşen - Component

- React'ın temel yapı taşlarıdır.
- Projedeki sayfalarımız yazdığımız component'ların birleştirilmesiyle oluşur.
- Herhangi bir projeyi yapboz olarak düşündüğümüzde yapbozun her bir parçası bizim projemizdeki bir bileşen denk gelir.

# JSX

- JSX (Javascript XML), reacta özel syntax'dır. Javascript kodu içerisinde html benzeri kod yazmamıza olanak sağlar.

## JSX vs HTML - Farklar

- Attribute isimleri farklı:
- - class -> className
- - for -> htmlFor

- HTML içerisinde javascript kodu yazma şansımız yok. JSX içerisinde javascript kodu yazabiliriz.
- - JSX kodu içerisinde {} açarak istediğimiz yerde js kodu yazabiliriz.
- - Bunun sayesinde olayları addEventListener'a gerek kalmadan izleyebiliriz.
- - Dinamik değişkenleri daha pratik bir şekilde ekrana basabiliriz.

- `<Header />` ifadesiyle JSX içerisinde Component çağırabiliriz

- İçeriği olmayan etiketler self-closing olabilir
- - `<div /> <h1 /> <p /> <button />`

- JSX içerisinde boş etiket (fragment) kullanabiliyoruz
- - Dom'da boşuna alan kaplamasını istemediğimiz yerlerde kullanırrız
- - Tek parent element kuralına uyum sağlar

# Çoklu Renderlama

- Ekrana basmamaız gereken eleman sayısı fazla olduğunda hepsini tek tek yazmak kod tekrarına sebep olucağundan bu yöntemi kullanırız.

# Koşullu Renderlama

- Render: Ekrana bir içeriğin basılması
- Koşullu Renderlama: Renderlama işleminin koşula bağlı olma durumu
- jsx içerisinde if else / switch casse gibi yapılar kullanılamaz
- Koşullu renderlama iki farklı şekilde yapılabilir

1. Terneray Operator (? :)

- Koşulun hem gerçekleştiği hemde de gerçekleşmediği durumda ekrana basılacak içeriği belirleyeniliyoruz
- `?` koşulun gerçekleştiği durumu ifade eder
- `:` koşulun gerçekleşmediği durumu ifade eder

2. Ve Operatörü (&&)

- Sadece koşulun gerçekleştiği seneryoda ekrana basılacak içeriği belirleriz
- Koşulun gerçekleşmediği seneryoda ekrana hiçbir şey basılmaz

# Props

- Bir bileşene veri aktarma yönetmidir.
- Prop olmadığı seneryoda bileşenler dinamik olamayacağından dolayı yeniden kullanılabilir olmaz ve bir bileşen olmasının neredeyse hiç bir artısı kalmaz.
- Prop yapısı sayesinde bileşenin içeriği dinamik olarak belirleyip, bileşeni yeniden kullanılabilir yapabiliriz.

# React Virtual DOM

- **DOM**: Document Object Model, tarayıcnın HTML sayfasını ağaç yapısı şeklinde temsil etmesidir

- **Virtual DOM**, React'ın kullanıcı arayüzün daha hızlı güncellemesini sağlayan bir tekniktir. React gerçek tarayıc DOM'una doğrudan işlem yapmak yerine önce sanal bir DOM (Virtual DOM) üzerinde değişiklikleri hesaplar

## Nasıl Çalışır ?

- Arayüz değişimine sebep olan bir sepete ekle butoanu düşünelim.

1. Butona tıklanır
2. React yeni Virtual DOM oluşturur
3. Butonda gerçkleşen değişimi Virtual DOM'da gerçekleştirir
4. Eski Virtual DOM ile güncelleme sonrası Virtual DOM'u karşılaştırır
5. Karşılaştırma sonucunda hangi arayüz elemanın değiştiğini tespi eder
6. Gerçek DOM içerisinde sadece değişen elemanı günceller

## Neden VDOM Kullanılır ?

- Gerçek DOM üzerinden yapılan işlemler yavaştır. Sayfadaki en küçük bie değişiklik bile ağaç yapısının yeniden render olmasına neden olabilir. Virtual DOM bütün ağaç yapısının render olması yerinde sadece değişen kısmın render olmasını sağlayarak, arayüz güncelleme sürecini hızlandırır.
