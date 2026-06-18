// Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanılabilir type/interface yazmak için de kullanabilirz

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const arrayObject: ArrayType<number> = {
  items: [1, 2, 3, 4],

  addItem(newItem) {
    arrayObject.items.push(newItem);
  },

  getItem(index) {
    return arrayObject.items[index];
  },
};

// İsimlendirme
// Generic isimlendiriken genelde tek harf kullanılır
// T: Type
// K: Key
// V: Value
// E: Error / Element
// R: Return Type
// S: State type

interface IPerson<T, K> {
  id: K;
  name: T;
  age: K;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  id: 123412,
  name: "Ali",
  age: 32,
  father: "Ahmet",
  mother: "Ayşe",
};

// Proje içerisinde generic kullanımı:
// Seneryo: İki farklı API isteği attık ve gelen yanıtların tipini tanımla
// Tip  tanımındaki kod tekrarını engellemek için generic kullanıcaz

interface IQuote {
  id: number;
  quote: string;
  author: string;
}

interface IRecipe {
  id: number;
  name: string;
  cuisine: string;
}

interface APIResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

















const quoteResponse: APIResponse<IQuote> = {
  data: [{ id: 1, quote: "Özlü söz", author: "Söyleyen" }],
  total: 60,
  page: 2,
  limit: 20,
};

const recipeResponse: APIResponse<IRecipe> = {
  data: [{ id: 1, name: "Margarita Pizza", cuisine: "Italian" }],
  total: 120,
  page: 4,
  limit: 10,
};
