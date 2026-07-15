import Link from "next/link";

const Page2 = () => {
  return (
    <div className="page">
      <h1>Sayfa - 2</h1>

      <Link href="/page1">Sayfa-1'e dön</Link>
    </div>
  );
};

export default Page2;
