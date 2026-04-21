# useRef

- useRef, javascriptteki documentGetElementById, querySelector gibi methdoların alternatifidir.
- useRef, react'ta şu durumlarda kullanılabilir

1. DOM Elementlerine erişim sağlamak
2. Component yeniden render olmadan değer saklama

# Higher Order Components (HOC)

- Üst Düzeydeki Bileşen

- Normal bileşenlerden farklı olarak `self-closing` değildir ve kendi kapanış etiketleri vardır.

- Açılış / Kapanış etiketleri arasında yer alan içerik bileşene `children` propu ile aktarılır

- Bir bileşen farklı bir bileşeni/elementi kapsıyorsa, o bileşen hoc'dır.

- HOC yapısı projede kod tekrarını azaltmak için bileşenlerin dinamik içeriklerini sonradan belirlemek için kullanırız
