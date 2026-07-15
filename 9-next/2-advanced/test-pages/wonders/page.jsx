import { data } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Wonders = () => {
  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-4xl">Dünyanın 7 Harikası</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {data.map((item) => (
          <Link key={item.id} href={`/wonders/${item.id}`}>
            <Image
              src={item.src}
              alt={item.name}
              className="aspect-square object-cover w-full rounded-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wonders;
