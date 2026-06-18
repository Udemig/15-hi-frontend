// Generic yapısını sınıflarda da kullanabiliyoruz

class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["f", "b", "a", "c", "d"]);
console.log(arr1.sortData());

const arr2 = new Sorter<number>([5, 3, 6, 2, 1, 9]);
console.log(arr2.sortData());
