import delay from "@/utils/delay";
import { fetchRecipes, fetchRecipesById } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

// statik sayfayı dinamik hale çevir
export const generateStaticParams = async () => {
  const data = await fetchRecipes();

  return data.recipes.map((i) => ({ id: String(i.id) }));
};

// server component'larda parametreye prop yöntemiyle erişiriz: {params}
const Page = async ({ params }) => {
  const { id } = await params;
  await delay(2500);
  const data = await fetchRecipesById(id);

  return (
    <div className="p-10">
      <Link href="/">Geri</Link>

      <div className="flex flex-col gap-10 items-center pt-20">
        <Image src={data.image} width={150} height={150} alt={data.name} className="rounded-md" />

        <h1 className="text-3xl">{data.name}</h1>

        <p className="text-2xl">Mutfak: {data.cuisine}</p>
        <p className="text-2xl">Zorluk: {data.difficulty}</p>
        <p className="text-2xl">Rating: {data.rating}</p>
      </div>
    </div>
  );
};

export default Page;
