// useContext: context yapılarına abone olmamızı sağlayan react hooku
import { useContext } from "react";
// abone olmak istediğimiz context yapısını import ederiz
import { ProductContext } from "../context/product-context";

const Home = () => {
  // product context yapısındaki verilere erişmek için abone oluyoruz
  const { isLoading, error, products } = useContext(ProductContext);

  return <div>Home</div>;
};

export default Home;
