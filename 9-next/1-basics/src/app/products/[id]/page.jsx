// statik metadata
// export const metadata = {
//   title: "Ürün Detay",
//   description: "ürünün açıklaması...",
// };

// dinamik metadata
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  // api'dan ürün bilgilerini alır...

  // metadatayı return ederiz
  return {
    title: `${id} id'li ürün`,
    description: "selam",
  };
};

const Detail = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>{id} id'li Ürün Detayı </h1>
    </div>
  );
};

export default Detail;
