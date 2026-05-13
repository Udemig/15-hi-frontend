import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate, useOutletContext } from "react-router-dom";

const Room = () => {
  // useOutletContext: outlet bileşenine context ismiyle gönderilen prop'a erişmeye yarar
  const user = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim().toLowerCase().replaceAll(" ", "-");

    navigate(`/chat/${text}`);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => toast.info("Oturum kapandı"));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="box flex flex-col gap-10 text-center">
        <h1 className="text-4xl">Chat Odası</h1>
        <p>
          Selam <span className="font-semibold">{user?.displayName}</span> Hangi Odaya Giriceksin?
        </p>

        <input
          type="text"
          placeholder="örn: haftaiçi"
          className="border border-gray-300 rounded-md shadow-lg px-4 py-2"
        />

        <button type="submit" className="btn bg-zinc-700 text-white">
          Odaya Gir
        </button>

        <button onClick={handleSignOut} className="btn bg-red-500 text-white">
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default Room;
