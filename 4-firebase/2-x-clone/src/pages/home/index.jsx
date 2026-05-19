import { useOutletContext } from "react-router-dom";
import Aside from "../../components/home/aside";
import Main from "../../components/home/main";
import Nav from "../../components/home/nav";

const Home = () => {
  const user = useOutletContext();

  return (
    <div className="min-h-screen bg-primary text-secondary grid grid-cols-[1fr_minmax(300px,600px)_1fr] items-start">
      <Nav user={user} />

      <Main user={user} />

      <Aside />
    </div>
  );
};

export default Home;
