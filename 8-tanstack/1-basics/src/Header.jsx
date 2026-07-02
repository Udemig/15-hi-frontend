import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGetUsers } from "./service";

const Header = () => {
  const { data } = useGetUsers();

  return (
    <header>
      <h1>LOGO</h1>

      <span>Kullanıcı Sayısı: {data?.data?.users?.length} </span>
      <br />
      <hr />
    </header>
  );
};

export default Header;
