/*
 ! Any Type
 * Bir değişkene any type'ı atadığımız zaman typescript tip kontrolü yapmaz.
 * Any type atanmış değişkene her türlü tipte değer atayabiliriz.
 * Otomatik tamamlama desteği, editördeki hata kontrolü, tip kısıtlaması tamamen devre dışı kalır.
 * Any type'ını kullanmak genelde kötü bir fikirdir.
 * Aby type'ını ancak acileyeti olan durumlarda "geçici" olarak kullanılır
*/

let foo: any;
foo = 123;
foo = "selam";
foo = true;
foo = null;
foo = [];
foo = {};
foo = () => {};
