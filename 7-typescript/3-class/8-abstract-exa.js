"use strict";
// Soyut Sınıf
class MuzikCalar {
    apiURL;
    constructor(apiURL) {
        this.apiURL = apiURL;
    }
    muzikleriGetir() {
        console.log(this.apiURL + " adresinden müzikler alınıyor...");
    }
}
// Soyut sınıfı miras alan sınıf
class Spotify extends MuzikCalar {
    muzikCal(isim) {
        console.log(`${isim} Spotify'da çalıyor`);
    }
}
// Soyut sınıfı miras alan farklı sınıf
class AppleMusic extends MuzikCalar {
    muzikCal(isim) {
        console.log(`${isim} Apple Music'te çalışıyor...`);
    }
}
const spotify = new Spotify("htts://api.spotify.com");
const appleMusic = new Spotify("htts://api.apple.com");
spotify.muzikleriGetir();
appleMusic.muzikleriGetir();
spotify.muzikCal("despacito");
appleMusic.muzikCal("yüz yüze");
