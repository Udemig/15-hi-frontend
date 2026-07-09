const DocPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="space-y-10">
      <h1>Belge Sayfısı</h1>

      <h2>{slug.join("/")}</h2>
    </div>
  );
};

export default DocPage;
