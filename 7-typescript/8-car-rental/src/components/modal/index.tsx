import type { FC } from "react";
import type { ICar } from "../../types";
import Images from "./images";
import Info from "./info";

interface Props {
  isOpen: boolean;
  close: () => void;
  car: ICar;
}

const Modal: FC<Props> = ({ isOpen, close, car }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black-50 backdrop-blur-sm z-20 grid place-items-center">
          <div className="car-details-dialog-panel w-[90%] sm:min-w-150 min-h-[70vh]">
            <button
              onClick={close}
              className="car-details-close-btn cursor-pointer"
            >
              X
            </button>

            <Images car={car} />

            <Info car={car} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
