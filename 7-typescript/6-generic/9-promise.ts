/*
 ! Promise
 * Asenkron olan fonksiyonların return tipinde kullanılır
 * Promise<T>
*/

interface QuoteResponse {
  quotes: { id: number; quote: string; author: string }[];
  total: number;
  skip: number;
  limit: number;
}

const fetchQuotes = async (): Promise<QuoteResponse> => {
  const res = await fetch("https://dummyjson.com/quotes");

  return res.json();
};

(async () => console.log(await fetchQuotes()))();
