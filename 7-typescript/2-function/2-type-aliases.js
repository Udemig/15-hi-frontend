"use strict";
/*
 * Typescripde bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine type aliases ile ayru bir tip oluşturabiliyoruz
 */
// 1. Yöntem: fonksiyonu yazarken tip tanımlama
let func1 = (par1, par2) => {
    return par1 + par2;
};
let func2 = (par1, par2) => {
    return par1 + par2;
};
const havaDurumu = (sehir, derece) => {
    if (derece > 30) {
        return `${sehir}'de hava sıcak`;
    }
    else if (derece < 10) {
        return `${sehir}'de hava soğuk`;
    }
    else {
        return `${sehir}'de hava normal`;
    }
};
const sonuc = havaDurumu("Edirne", 5);
console.log(sonuc);
