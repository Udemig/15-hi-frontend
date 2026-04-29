# Redux Toolkit

- Redux'ın karmaşık ve tekrarlı yapısını sadeleştirir, geliştirme deneyimini iyileştirir.
- Daha az kod daha çok iş

- **Neden Ortaya Çıktı**
- Klasik redux kullanırken karşılaştığımız durumlar:
- Çok fazla boilerplate kod
- Action type sabitleri
- action creator fonksiyonları
- switch-case reducer yapıları
- state immutable olduğu için doğrudan state'i değiştirememe

```js
// mutable
state.isLoading = true

// immutable
{...state, isLoading: true}
```

- **Kurulması Gereken Kütüphaneler**

- react-redux
- @reduxjs/toolkit

- **Klasik redux'ta oluşturulması gereken yapılar**
- store | reducer | action-types | action-creator

- **Toolkit de oluşturduğumuz yapılar**
- store | slice

- **Slice**
- Klasik redux'ta aksiyonları, aksiyon tiplerini, reducer'ları ayrı ayrı tanımlıyorduk.
- Redux toolkit içeriisnde yer alan slice yapısı sayesinde tek bir noktadan hepsini tanımlayabiliyoruz
