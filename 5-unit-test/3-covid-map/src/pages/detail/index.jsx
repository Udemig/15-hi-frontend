import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import Header from "../../components/detail/header";
import Content from "../../components/detail/content";

const Detail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(country));
  }, []);

  return (
    <div className="flex-1 min-h-[calc(100vh-77px)] grid place-items-center p-6 relative">
      <div className="bg-white/95 backdrop-blur-md border border-white/30 shadow-lg min-h-[65%] rounded-3xl py-8 px-10 max-w-4xl max-md:w-full md:w-[80%] relative z-10 animate-fade-in">
        <Header />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
