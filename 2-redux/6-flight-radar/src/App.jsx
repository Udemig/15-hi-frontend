import { useDispatch } from "react-redux";
import Header from "./components/header";
import Map from "./components/map";
import { useEffect } from "react";
import { getFlights } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <div>
      <Header />

      <Map />
    </div>
  );
};

export default App;
