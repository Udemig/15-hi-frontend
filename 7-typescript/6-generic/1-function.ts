/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın interface'in içerisindeki bazı tipleri dinamik olarak aldığı parametreye göre değişmesini sağlar.
 * Generic özelliğini kullanarak fonksiyonu veya tipi kullanıcağımız zaman parametre olarak tip gönderebiliyoruz
 * Generic, kullandığımız yapının yeniden kullanılabilirliğini arttırır 
*/

/*
 ? Yazmak istediğim fonksiyon
 * 1) parametre olarak number dizisi gelirse rastgele sayı döndürsün
 * 2) parametre olarak string dizisi gelirse rastgele string döndürsün
*/

const getRandomElement = (array: string[] | number[]): string | number => {
  return 123;
};

const getRandomString = (array: string[]): string => {
  return "123";
};

const getRandomNumber = (array: number[]): number => {
  return 123;
};

// generic yardımıyla fonksiyonu tekrar yazalım
// dinamik olmasını istediğimiz tipi generic parametre olarak alıcaz
const getRandom = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

// fonksiyonu kullanırken hem generic olarak tip parametresi hem değer parametresi göndeririz
getRandom<string>(["a", "b", "c"]);
getRandom<number>([1, 2, 3, 4, 5]);

// react projesinde nerde karşımıza çıkıcak:
// useState<number>(56)
// useRef<InputElementType>(input)
// axios.get<UserType>("/api/users")
