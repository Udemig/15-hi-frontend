"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RecipesClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const pathname = usePathname();

  const fetchRecipes = () => {
    setIsLoading(true);
    setError(null);

    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isLoading) return <h1 className="text-center my-20 text-4xl">Yükleniyor....</h1>;

  if (error)
    return (
      <div>
        <h1 className="text-center my-20 text-4xl">Hata: {err.message}</h1>
        <button onClick={fetchRecipes}>Tekrar Dene</button>
      </div>
    );

  return (
    <div className="border border-red-500 p-5">
      <h1 className="font-bold text-center text-4xl">Tarifler - Client</h1>

      <div>
        {data.map((recipe) => (
          <div key={recipe.id} className="flex gap-5 mt-5 p-5 pb-10 border-b">
            <Image src={recipe.image} width={100} height={100} />

            <div>
              <h1>{recipe.name}</h1>
              <h1>{recipe.cuisine}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesClient;
