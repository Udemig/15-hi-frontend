/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'deki varolan tiplerin yanısıra birkaç ts'e özel tip kullandık
 * Kapsamlı projelerde o an yaptığımız işe özel spesifiktiplere ihitiyaç duyarız
 * Bunları tanımlamak için type anahtar kelimesini kullanarak kendi tiplerimizi oluşturabiliriz
  
 * Neden ihtiyaç duyarız ?
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde defalarca kullanaabiliyoruz her seferinde baştan yazmak yerine kendi tipimizi oluşturup ismiyle çağırmak kod kalabalığını azaltır 
*/

// Örnek - 1
// Kendi özel tipimizi oluşturalım
type metinTipi = string;

// kendi oluştuğumuz tipi kullanalım
let kullaniciAdi: metinTipi = "furkan";

// Örnek - 2
// Uçuş projesinde sıkça kullandığımız [enlem,boylam] dizisi vardır..

// type aliases kullanmadan
const x1: [number, number] = [45.3456, 78.4523];
const y1: [number, number] = [79.452, 80.235];
const z1: [number, number] = [12.69, 24.671];
const flightRoute1: [number, number][] = [x1, y1, z1];

// type aliases kullanarak
type Coord = [number, number];

const x2: Coord = [45.3456, 78.4523];
const y2: Coord = [79.452, 80.235];
const z2: Coord = [12.69, 24.671];
const flightRoute2: Coord[] = [x2, y2, z2];

// Örnek - 3
// Aynı nesne tipini birden fazla kullanmamız gereken bir seneryo

// type aliases olmadan
const user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "ali",
  age: 34,
};

const user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "ayşe",
  age: 25,
};

const users: { id: number; name: string; age: number }[] = [user1, user2];

// type aliases kullanarak
type User = { id: number; name: string; age: number };

const user3: User = {
  id: 1,
  name: "ali",
  age: 34,
};

const user4: User = {
  id: 2,
  name: "ayşe",
  age: 25,
};

const users2: User[] = [user1, user2];

// Örnek - 4
// E-ticaret sitesindeki bir ürün tipini tanımlayalım

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  size: "xs" | "sm" | "m" | "lg" | "xl";
  inStock: boolean;
};

let product: Product = {
  id: 23,
  name: "Kırmızı elbise",
  price: 2545.88,
  category: "Elbise",
  size: "m",
  inStock: true,
};

let products: Product[] = [product, product, product, product, product, product];
