import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/slices/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, error, users } = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA OLDU: {error}</h1>;

  return (
    <div>
      {users.map((user) => (
        <h1>
          {user.firstName}
          {user.lastName}
        </h1>
      ))}
    </div>
  );
};

export default Users;
