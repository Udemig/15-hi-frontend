# React Hooks

- **useState**: bileşende veri tutmak

- **useEffect**: bileşenin yaşım döngüsünü takip eder

- **useRef**: jsx elementine erişmek için kullanılır

- **useContext**: bileşenler arasında prop göndermeden veri paylaşmayı sağlar

- **useMemo**: yoğun hesaplama yapan fonksiyonların ürettikleri sonuçları cache'de saklar

- **useCallback**: her render sırasında fonksiyonun yeniden oluşurulup farklı bir referansa sahip olmasını engellemek istersek useCallback kullanırız

- **useReducer**: action-dispatch-reducer aracılığıyla state yönetimi yapmamızı sağlar

# Temel Kavramlar

## State

- Component'ın verisini tutumak için kullanılır
- Her değiştiğinde component yeniden render olur

## Prop

- Veriyi bir bileşenden diğerine aktarma yöntemidir. (Üst > Alt)

## Prop Drilling

- İç içe bir çok bileşen olduğu durumda en üstteki bileşenden alt bileşeni prop gönderme.
- Yani prop gönderme işleminin ard arda bir kaç kez gerçekleşmesi

## Context

- Bileşenlerden bağımsız noktalarda state depolamamızı sağlar
- Context'de tutulan state bütün bileşenler tarafından direkt erişebilir
- Prop drillngi önler

## Context

- Context yapısı çok iyi bir state yönetim seçeneği olsada büyük çaptaki projelerde çok fazla kod tekrarı olduğundan hem okunabilirlik hem performans anlamında reduxa göre geride kalır

## Redux Artıları

- Kod tekrarını önler
- Daha performanslı
- Bileşenlerdeki karşılıklığı engeller
- Hata ayıklama daha gelişmiştir

# Redux Anatomisi

1. Store: Uygulamadaki tüm reducer'ları bir arada tutarak veriye tek bir merkezden ulaşmamıza olanak sağlar

2. Reducer: Dispatch edilen action'a göre state'in nasıl değişeceğine karar veren fonksiyon

3. Dispatch: Action'u reducer'a ileten fonksiyon

4. Action: State'in nasıl değişleceğine ifade eden nesne

- - type: action'un görevini tanımlayan string
- - payload: reducer'ın işlemni gerçekleştirebilmesi için gönderdiğimiz veri

5. Subscribe: Component içerisinden store'daki veirlere erişme yöntemi

6. Provider: Store'de tutulan state'lerin bileşenlere aktarılmasını sağlar

# Kurulum

1. paket indirme
   `npm i redux react-redux`

2. reducer'ları oluştur

3. store'u oluştur

4. provider ile store'u projeye tanıt
