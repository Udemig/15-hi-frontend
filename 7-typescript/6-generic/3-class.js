"use strict";
// Generic yapısını sınıflarda da kullanabiliyoruz
class Sorter {
    data;
    constructor(data) {
        this.data = data;
    }
    sortData() {
        return this.data.sort();
    }
}
const arr1 = new Sorter(["f", "b", "a", "c", "d"]);
console.log(arr1.sortData());
const arr2 = new Sorter([5, 3, 6, 2, 1, 9]);
console.log(arr2.sortData());
