import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then(() => navigate("/home"));
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="bg-white text-black flex items-center justify-center py-2 px-10 rounded-full hover:bg-gray-200 whitespace-nowrap gap-x-3"
    >
      <img src="/google-logo.png" alt="google-logo" className="h-5" />
      <span>Google ile Giriş Yap</span>
    </button>
  );
};

export default GoogleButton;
