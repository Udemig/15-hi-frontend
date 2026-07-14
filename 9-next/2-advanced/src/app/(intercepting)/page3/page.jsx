import Link from "next/link";

const Page3 = () => {
  return (
    <div className="page">
      <h1>Sayfa - 3</h1>

      <Link href="/page4">Sayfa 4'ye Git</Link>
    </div>
  );
};

export default Page3;
