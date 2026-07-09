import delay from "@/utils/delay";

const Login = async () => {
  await delay(2500);
  throw new Error("İnternetin çok yavaş");

  return (
    <div>
      <h1>Login Sayfası</h1>
    </div>
  );
};

export default Login;
