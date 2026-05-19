import { toast } from "react-toastify";
import UserAvatar from "../../components/shared/user-avatar";
import FormActions from "./form-actions";
import TextArea from "./text-area";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const PostForm = ({ user }) => {
  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.content.value.trim();

    // girdi yoksa bildirim gönder
    if (!text) return toast.warning("Lütfen içeriği giriniz");

    // veritabanına yeni tweet'i kaydet
    try {
      // kolleksiyonun referansını al
      const collectionRef = collection(db, "tweets");

      // belgeyi kolleksiyona kaydet
      await addDoc(collectionRef, {
        user: {
          id: user.uid,
          name: user.displayName,
          user: user.photoURL,
        },
        content: {
          text,
          media: null,
          mediaType: null,
        },
        likes: [],
        createdAt: serverTimestamp(),
      });

      // bildirim gönder ve sıfırla
      toast.success("Gönderi paylaşıldı");
      e.target.reset();
    } catch (error) {
      toast.error("Hata! " + error.message);
    }
  };

  return (
    <div className="border-b border-gray p-4 flex gap-5">
      <UserAvatar url={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <FormActions />
      </form>
    </div>
  );
};

export default PostForm;
