import Head from "./head";
import Gallery from "./gallery";
import Airport from "./airport";
import Time from "./time";
import Aircraft from "./aircraft";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import Loader from "../loader";
import Error from "../error";

const Modal = ({ id, close }) => {
  if (!id) return;

  const { isLoading, error, info } = useSelector((store) => store.detailReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  return (
    <div className="fixed top-0 left-0 h-screen z-99999! flex items-center max-sm:justify-center max-sm:inset-0 max-sm:backdrop-blur-xs">
      <div className="w-90 max-sm:w-[70%] min-h-10/12 ml-4 gradient text-white rounded-3xl flex flex-col p-5 shadow-2xl mt-10 overflow-y-auto">
        <Head isLoading={isLoading} error={error} info={info} close={close} />

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <div className="flex flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-5">
              <Gallery images={info.aircraft.images} />
              <Airport airportData={info.airport} />
              <Time timeData={info.time} />
            </div>

            <Aircraft aircraftData={info.aircraft} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
