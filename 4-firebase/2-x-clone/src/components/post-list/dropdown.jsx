import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import deleteFile from "../../firebase/deleteFile";

const Dropdown = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  // silme butonuna tıklanınca
  const handleDelete = async () => {
    // kullanıcının onayını al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // dökümanın referansını al
    const docRef = doc(db, "tweets", post.id);

    // eğer tweet'in medyası varsa storeage'dan medyayı sil
    if (post.content.media) {
      await deleteFile(post.content.media);
    }

    // tweet'i kaldır
    await deleteDoc(docRef);
  };

  // tweet'i atan kullanıcı ile oturumu açık olan kullanıcı aynı kişi mi?
  const isOwn = post.user.id === auth.currentUser.uid;

  // tweet'i başkası attıysa butonu gösterme
  if (!isOwn) return;

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <BsThreeDots className="text-zinc-400" />
      </button>

      {isOpen && (
        <div className="absolute bg-zinc-700/50 -inset-e-1 rounded-lg z-99 backdrop-blur-lg shadow-lg">
          <button className="flex items-center gap-5 px-4 py-2 border-b border-zinc-500">
            <MdEdit />
            <span className="text-sm">Düzenle</span>
          </button>
          <button onClick={handleDelete} className="flex items-center gap-5 px-4 py-2">
            <MdDelete />
            <span className="text-sm">Sil</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
