const HeaderLoader = () => {
  return (
    <div className="flex items-center gap-4" data-testid="loader">
      <div className="h-10 w-30 bg-linear-to-r from-gray-300 via-gray-300 to-gray-300 rounded-xl animate-pulse shadow-md" />
      <div className="h-10 w-16 bg-linear-to-r from-gray-300 via-gray-300 to-gray-300 rounded-xl animate-pulse shadow-md" />
    </div>
  );
};

export default HeaderLoader;
