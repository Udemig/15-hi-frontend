export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    // cache: "no-store",
    // force-cache: aynı veri tekrar tekrar fetch edilmez
    // no-store: her istekde api isteği tekrar atılır
    // no-cache: önce cache kontrol edilir ve api'a veri değiştiğimi diye sorgu yapılır
    // next: { revalidate: 60 },
    // 60 saniye boyunca cachedeki veriyi kullanır 60 saniye sonra yapılan sorguda api'a tekrar istek atıp cache'i günceller
  });
  return res.json();
};

export const fetchRecipesById = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  return res.json();
};
