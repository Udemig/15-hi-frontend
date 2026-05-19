import Loader from "./index";

const PageLoader = () => {
  return (
    <div className="h-screen bg-primary grid place-items-center">
      <Loader designs="text-white text-xl" />
    </div>
  );
};

export default PageLoader;
