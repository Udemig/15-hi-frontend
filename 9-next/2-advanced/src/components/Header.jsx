import { fetchRecipes } from "@/utils/service";
import Link from "next/link";

const Header = async () => {
  const data = await fetchRecipes();

  return (
    <header className="p-5 text-lg border flex justify-between">
      <h1>NEXT</h1>

      <nav className="flex gap-5">
        <Link href="/recipes-client">Client</Link>
        <Link href="/recipes-server">Server ({data.recipes.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
