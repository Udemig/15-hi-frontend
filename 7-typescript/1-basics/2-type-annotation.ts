/*
 * JS'de değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat ts'de tanımladığımız değişkenlerin tiplerini belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz.
 * Bu kısıtlama kodda olulabilicek hataların daha erken tespit edilmesini sağlar.
 */

let foo: number = 10;
foo = 30;

/*
 * Javascript'de bulunan veri tipleri
 * number
 * string
 * boolean
 * object >
 * array >
 * funtion >
 * null
 * undefined
 * symbol
 * bigint
 */

let value1: string = "yurotek";
let value2: number = 345;
let valu3: boolean = true;
let valu4: null = null;
let value5: undefined = undefined;
let value6: undefined;
let value7: object = {};
let value8: object = [];
let value9: object = () => {};
let value10: symbol = Symbol("123");
let value11: bigint = 10n;

/*
 ! Type Inferance
 * Eğer bir değişkenin tipini belirlemezsek TS kendisi değişkenin değerine göre otomatik olarak belirler
 * Bu özelliği mümkünse hiç kullanmasak daha iyi (Bazen olması gereken tip yerine yanlış tip algılayabiliyor)
*/
let value12 = 564;
