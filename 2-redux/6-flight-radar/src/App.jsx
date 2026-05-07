import { useDispatch } from "react-redux";
import Header from "./components/header";
import Map from "./components/map";
import { useEffect } from "react";
import { getFlights } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // sayfa yüklendiği anda uçuşları al
    dispatch(getFlights());

    // sayfa yüklendikten sonra her 5 saniyede bir api'a tekrar istek at
    const id = setInterval(() => dispatch(getFlights()), 5000);

    // kullanıcı sayfadan ayrılırsa tekrar eden interval'ı durdur
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Header />

      <Map />
    </div>
  );
};

export default App;
