"use strict";
/*
 ! Promise
 * Asenkron olan fonksiyonların return tipinde kullanılır
 * Promise<T>
*/
const fetchQuotes = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    return res.json();
};
(async () => console.log(await fetchQuotes()))();
