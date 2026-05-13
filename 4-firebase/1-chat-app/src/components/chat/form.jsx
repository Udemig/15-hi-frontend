import EmojiPicker from "emoji-picker-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../../firebase";

const Form = ({ user, room }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formu sıfırla
    setText("");
    setIsOpen(false);

    // mesajın kaydedileceği kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // veritabanındaki messages kolleksiyonuna yeni belge kaydet
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  const handleEmoji = (e) => {
    // inputta imleçle yapılan seçimin başladığı nokta
    const start = inputRef.current.selectionStart;

    // inputta imleçle yapılan seçimin bittiği nokta
    const end = inputRef.current.selectionEnd;

    // seçilen metnin yerine emoji koy
    setText((prev) => prev.slice(0, start) + e.emoji + prev.slice(end));
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3">
      <input
        type="text"
        value={text}
        ref={inputRef}
        placeholder="mesaj giriniz..."
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-200 shadow-sm py-2 px-3 rounded-md w-1/2"
      />

      <div className="relative">
        <div className="absolute -top-117.5 -right-35">
          <EmojiPicker open={isOpen} onEmojiClick={handleEmoji} />
        </div>

        <button type="button" className="btn" onClick={() => setIsOpen(!isOpen)}>
          😂
        </button>
      </div>

      <button disabled={!text.trim()} className="btn bg-black text-white">
        Gönder
      </button>
    </form>
  );
};

export default Form;
