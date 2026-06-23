/*
 * Aşağıdaki tipler typescript içerisinde varsayılan olarak bulunur:

 ! Partial
 * Generic olarak aldığı nesnenin tüm özelliklerini opsiyonel yapar
 */

type User = {
  name: string;
  password: string;
  age: number;
};

const createUser = (data: User) => {};

const updateUser = (data: Partial<User>) => {};

createUser({ name: "Faruk", password: "123fdsfds", age: 34 });
updateUser({ age: 35 });

/*
 ! Required
 * Generic olarak aldığı nesnenin tüm özelliklerini zorunlu yapar
*/

type User2 = {
  name?: string;
  password?: string;
  age?: number;
};

const createUser1 = (data: Required<User2>) => {};

createUser1({ name: "faruk", password: "32eradsfd", age: 34 });

/*
 ! Readonly
 * Parametre olarak aldığı nesnenin tüm özelliklerini okunabilir yapar
*/

const ali: Readonly<User> = {
  name: "ali",
  password: "deneme123",
  age: 23,
};

// ali.age = 213;
