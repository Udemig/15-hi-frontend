import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Emoji } from "react-icons/fa";
import Loader from "../../components/loader";

const FormActions = ({ handleMediaChange, isLoading, isDisabled }) => {
  return (
    <div className="flex justify-between">
      <div className="text-blue text-xl flex gap-4">
        <label htmlFor="media" type="button" className="form-icon">
          <Image />
          <input id="media" name="media" type="file" className="hidden" onChange={handleMediaChange} />
        </label>

        <button type="button" className="form-icon">
          <Gif />
        </button>

        <button type="button" className="form-icon">
          <Emoji />
        </button>
      </div>

      <button disabled={isLoading || isDisabled} type="submit" className="submit-button">
        {isLoading ? <Loader /> : "Gönder"}
      </button>
    </div>
  );
};

export default FormActions;
