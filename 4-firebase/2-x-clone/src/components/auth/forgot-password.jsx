const ForgotPassword = ({ isLoginMode }) => {
  if (!isLoginMode) return <div className="h-7 w-1" />;

  return (
    <>
      <button className="text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer">
        Şifreni mi unuttun ?
      </button>
    </>
  );
};

export default ForgotPassword;
