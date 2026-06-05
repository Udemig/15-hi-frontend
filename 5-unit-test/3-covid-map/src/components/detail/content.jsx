import { useSelector } from "react-redux";
import ContentLoader from "../loader/content-loader";
import Error from "../error";
import Card from "./card";

const Content = () => {
  const { isLoading, error, data } = useSelector((store) => store);

  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        arr.map(([label, value], key) => <Card key={key} label={label} value={value} />)
      )}
    </div>
  );
};

export default Content;
