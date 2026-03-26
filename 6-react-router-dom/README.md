# React Router Dom

- React projelerinde sayfalama yapmamıza olanak sağlayan kütüphanedir

- **Browser Router**
- Bu yapı tüm uygulamayı sarar
- Görevi: url değiştiğinde react'a hangi bileşeni göstermesi gerektiğini söyler.

- **Routes**
- Bütün route'ların tanımlarının yapıldığı kapsayıcıdır (Home,Product,Category)

- **Route**
- Proejedeki her sayfa için bir route tanımlanır
- Görevi: Hangi url'de ekrana hangi bileşenin basılması gerektiğini söyler
- Örnek: Url `/ürünler` olursa ekrana <Urunler /> bileşenini ekrana bas

- **Link**
- Proje içerisinde yönlendirme yapmak için kullanılır
- href değeri yerine to özelliği tanımlanır

- **NavLink**
- Link ile aynı görevi üstlenir
- Link'ten farklı olarak ziyaret edilen sayfanın linkine active class'ı verir.

- **useParams()**
- Url'deki path parametrelerine erişmemizi sağlayan hook

- **useNavigate()**
- Link elementinin fonksiyon versiyonudur.
- Parametre olarak aldığı adrese kullanıcıyı yönlendirir

- **useLocation()**
- kullanıcının bulunduğu adres (url) ile alakalı bilgilere erişmemizi sağlayan hook

- **Dynamic Routes**
- Sayfa içeriğinin url'deki parametreye göre dinamik olarak değiştiği detay sayfalarına denir.
- Bu route'ları tanımlarken urldeki parametreleri `:parametre_ismi` şeklinde tanımarız.
- Component içerisinden url'deki parametrelere erişmek için `useParams` hook'unu kullanırız
- Bu sayede youtube'un video detay sayfası, amazon'un ürün detay sayfassı gibi içeriği dinamik olarak değişen sayfaları tanımlayabiliriz.

- **404 Route**
- Kullanıcı tanımladığımız route'ların dışarısında bir route'a gitmeye çalışırsa 404 sayfası göstermek isteriz
- 404 sayfası tanımlamak için en alta bir route oluştururuz ve route'a path değeri olarak `*` tanımlarız

- **Nested Routes**
- Bir kapsayıcı route içerisinde başka route/route'lar oluşturduğumuzda buna `Nested (İç İçe)` denir.
- Bu özellik sayesinde sadece belirli sayfalara özel ortak element / özellik tanımlanabilir.
- ```jsx
  <Route>
    <Route />
    <Route />
    <Route />
  </Route>
  ```

- **Outlet**
- Bir parent route içerisinde child route'un elementini ekrana basmaya yarar

- **useSearchParams**
- url'deki queryParams/searchParams parametrelerini yönetmemizi sağlayan hoook
