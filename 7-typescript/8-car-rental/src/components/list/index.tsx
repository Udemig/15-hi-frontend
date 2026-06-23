import { useEffect, type FC } from "react";
import { fetchCars } from "../../utils/service";

const List: FC = () => {
  useEffect(() => {
    fetchCars().then((data) => console.log(data));
  }, []);

  return <div>List</div>;
};

export default List;
