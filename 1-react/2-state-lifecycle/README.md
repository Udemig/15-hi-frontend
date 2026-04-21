# Resim

- Resimleri yöntemek için 2 yol vardır:
- - Eğer resimleri src klasörü içerisinde saklarsak resmi kullanabilmek için import etmek gerekir.
- - Eğer resimleri public klasörü içerisinde saklarsak doğrudan url üzerinden erişebiliriz

- **Ne zaman src klasörü tercih edilmeli ?**
- Bileşen içerisinde kullanılan resimler
- Build sırasında optimize edilmesini istediğimiz resimler
- Küçük / Orta Boy resimler

- **Ne zaman public klasörü tercih edilmeli ?**
- Çok büyük resimler
- Statik dosyalar

# React Hooks

- React'ta bazı özel yetenekli fonksiyonlara verilen isim.
- isimleri use kelimesi ile başlar
- useState
- useEffect
- useRef
- useContext
- useReducer
- useMemo
- useCallback

# State

- Bileşen içerisinde veri (durum) tutmak için kullanılır
- React'da _arayüzde değişme sebep olucak_ bütün veriler state'de tutulmalı
- State her güncellendiğinde _arayüz yeniden render olur_
- Yeniden render sayesinde güncelleme arayüze yansır.

## Diziye Eleman Ekleme

- State'de tutulan diziye eleman eklemenin 2 yolu vardır:

```jsx
// 1. yol) spread operator
setList([...list, product]);

// 2. yol) concat method
setList(list.concat(product));
```

# Map Yaparken Neden Key Vermeliyiz ?

- Key, map yaparak ekrana bastığımız elemanlara verilen benzersiz değerdir.
- Key'leri ekrana basılan elemanların tc no su olarak düşünebilirisiniz key olmadığında ve listedeki bir eleman güncellendiğin react hangi elemanın güncellendiğini tespit edemez ve bütün listeyi yeniden renderlar.
- Key değeri verdiğinizde listedeki hangi elemanın güncellenidğini tespit edebilir ve sadece güncellenen elemanı renderlar
- Bu sayede key vererek map alanlarındaki performası arttırabiliriz

# Bileşen Türleri

- React'da 2 farklı bileşen tanımlama yöntemi mevcuttur:

1. Function Component (Fonksiyonel Bileşen)

- Modern react projelerinde en çok kullanılan bileşen türüdür
- Basit fonksiyon yapısındadır
- useState,useEffect gibi react hookları kullanılabilir
- Daha az kod yazılır, anlaşılması daha kolaydır.

```jsx
const FunctionComponent = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};
```

2. Class Components (Sınıf Tabanlı Bileşen)

- Bu react'ın eski sürümlerinde daha yaygın
- `extends React.Component` ifadesi ile bileşen yapsını miras alan bir sınıf tanımlanır
- `render` methodu ile JSX döner
- `this.props` `this.state` `this.setState` gibi yapılar kullanılır
- `lifecycle` (yaşam döngüsü) methodları vardır

```jsx
class ClassComponent extend React.Component {
   constructor(props){
       super(props)
   }

   render(){
       return (
         <div>
           <h3>{this.props.title}</h3>
         </div>
       )
   }
}
```

# Lifecycle (Yaşam Döngüsü) Methods

- Bir component'in oluşum, güncellenme, kaldırılma süreçlerini yönetmek için kullanılan özel methodlardır.
- Bu kavram özellikle class component'larda vardır.
- Fakat modern react'ta bu işlemleri useEffect hooku aracılığıyla fonksiyonel component'larda yapabiliyoruz.

- Bir bileşenin yaşam döngüsüs 3 aşamadan oluşur:

1. Mount (Oluşturulması)
2. Update (Güncellenmesi)
3. Unmount (Kaldırılması)
