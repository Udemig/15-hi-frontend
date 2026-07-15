import delay from "@/utils/delay";
import { fetchRecipes } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

// export const dynamic = "force-dynamic";

export const revalidate = 60;

const RecipesServer = async () => {
  await delay(2500);
  const data = await fetchRecipes();

  if ("kullanıcı admin değilse") {
    // return notFound();
  }

  return (
    <div className="border border-blue-500 p-5">
      <h1 className="font-bold text-center text-4xl">Tarifler - Server</h1>

      <div>
        {data.recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes-server/${recipe.id}`}
            className="flex gap-5 mt-5 p-5 pb-10 border-b"
          >
            <Image src={recipe.image} width={100} height={100} />

            <div>
              <h1>{recipe.name}</h1>
              <h1>{recipe.cuisine}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipesServer;
