import type { FC } from "react";
import { useAppSelector } from "../../redux";

const Home: FC = () => {
  const { notes } = useAppSelector((store) => store.noteReducer);

  //TODO: NOTE'LARI LİSTELE
  console.log(notes);

  return <div>Home</div>;
};

export default Home;
