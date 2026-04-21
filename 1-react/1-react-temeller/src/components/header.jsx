/*
 ! Bileşenin Temel Özellikleri
 * Bileşenler birer javascript fonksiyonudur.
 * Her bileşen JSX (HTML benzeri) kodu return eder
 * Bileşeni farklı bir dosyada kullanabilmek için export ederiz.

 ! Bir fonksiyon bileşen olmassı için:
 * İsmi büyük harfle başlamalı
 * JSX kodu return etmeli
*/

function Header() {
  return (
    <header>
      <h1>React</h1>

      <nav>
        <span>Anasayfa</span>
        <span>Hakkımızda</span>
      </nav>
    </header>
  );
}

export default Header;
