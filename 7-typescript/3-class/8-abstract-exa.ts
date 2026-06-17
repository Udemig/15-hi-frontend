// Soyut Sınıf
abstract class MuzikCalar {
  constructor(public apiURL: string) {}

  muzikleriGetir(): void {
    console.log(this.apiURL + " adresinden müzikler alınıyor...");
  }

  abstract muzikCal(isim: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MuzikCalar {
  muzikCal(isim: string): void {
    console.log(`${isim} Spotify'da çalıyor`);
  }
}

// Soyut sınıfı miras alan farklı sınıf
class AppleMusic extends MuzikCalar {
  muzikCal(isim: string): void {
    console.log(`${isim} Apple Music'te çalışıyor...`);
  }
}

const spotify = new Spotify("htts://api.spotify.com");
const appleMusic = new AppleMusic("htts://api.apple.com");

spotify.muzikleriGetir();
appleMusic.muzikleriGetir();

spotify.muzikCal("despacito");
appleMusic.muzikCal("yüz yüze");
