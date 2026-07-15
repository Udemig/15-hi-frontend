import delay from "@/utils/delay";

const Users = async () => {
  await delay();
  // throw new Error("İnternetin yavaş");
  return <div className="box">Users</div>;
};

export default Users;
