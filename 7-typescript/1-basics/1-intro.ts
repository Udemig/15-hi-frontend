/*
  ! Typescript
  * Typescript, javascript'in tip tanımlanabilir bir üst versiyonu olarak microsoft tarafından geliştirilmiş bir programalama dilidir

  * Neden typescript ?
  * * JS'de koddaki hataları runtime'da görürüz
  * * TS'de koddaki hataları kod editöründeyken daha projeyi çalıştırmadan görürüz   
 
  * * JS'de tanımladığımız değişkene daha sonra farklı tipte değer ataması YAPILABİLİR
  * * TS'de tanımladığımız değişkene daha sonra farklı tipte değer ataması YAPILAMAZ
   
  * * JS'de çok kısıtlı bir otomatik tamamalama desteği bulunur
  * * TS'de çok daha geniş kapsamlı bir otomatik tamamlama desteği bulunur 
   */

let user1 = {
  name: "ali",
  age: 34,
};

// console.log("soyad", user1.surname); //! HATA

let y = "merhaba";

y = "selam";

// y = 45; //! HATA

// y = true; //! HATA

// y = [{}]; //! HATA
