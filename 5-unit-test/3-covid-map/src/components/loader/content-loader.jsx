const ContentLoader = () => {
  return (
    <div data-testid="loader" className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {new Array(9).fill("").map((i, key) => (
        <div className="h-24 bg-linear-to-r from-zinc-300 via-zinc-400 to-zinc-300 rounded-2xl animate-pulse shadow-md" />
      ))}
    </div>
  );
};

export default ContentLoader;
