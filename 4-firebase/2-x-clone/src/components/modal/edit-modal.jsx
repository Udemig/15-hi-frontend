import { toast } from "react-toastify";
import Modal from ".";
import { useState } from "react";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../loader";
import deleteFile from "../../firebase/deleteFile";
import uploadFile from "../../firebase/uploadFile";

const EditModal = ({ isOpen, close, post }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMediaDeleting, setIsMediaDeleting] = useState(false);

  const handleClose = () => {
    close();
    setIsMediaDeleting(false);
  };

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputtan veriyi al
    const text = e.target.text.value.trim();
    const file = e.target.media?.files[0];
    const fileType = file?.type?.split("/")?.[0];

    // veri boşsa hata ver
    if (!text && !file && !post.content.media && !isMediaDeleting) return toast.warning("İçerik boş olamaz");

    try {
      setIsLoading(true);

      // güncellenicek veriyi hazırla
      let updateData = {
        "content.text": text,
        updatedAt: serverTimestamp(),
      };

      // medya silinicekse güncellenicek veriyi değiştir
      if (isMediaDeleting) {
        updateData["content.media"] = null;
        updateData["content.mediaType"] = null;

        // kaldırılacak medyayı storage'da sil
        await deleteFile(post.content.media);
      }

      // eğer yeni dosya seçilidyse onu storage'a yükle
      if (file) {
        const mediaUrl = await uploadFile(file);
        updateData["content.media"] = mediaUrl;
        updateData["content.mediaType"] = fileType;
      }

      // güncellenicek belgenin referansını al
      const docRef = doc(db, "tweets", post.id);

      // belgeyi güncelle
      await updateDoc(docRef, updateData);

      // modal'ı kapat
      handleClose();
    } catch (error) {
      toast.error("Güncelleme başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} close={handleClose}>
      <h1 className="text-2xl">Tweet'i Düzenle</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10 min-w-[%90]">
        <label className="text-sm mb-3 text-zinc-400">Metni Değiştir</label>

        <textarea
          name="text"
          defaultValue={post.content.text}
          className="resize-y min-h-20 max-h-62.5 bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
        ></textarea>

        <label className="text-sm mb-3 text-zinc-400 mt-8">Medyayı Değiştir</label>

        {post.content.media && !isMediaDeleting ? (
          <button
            type="button"
            onClick={() => setIsMediaDeleting(true)}
            className="submit-button font-semibold tracking-tight"
          >
            Medyayı Kaldır
          </button>
        ) : (
          <input type="file" name="media" className="border border-zinc-700 p-3 rounded-md" />
        )}

        <div className="flex justify-end mt-10 gap-5">
          <button type="button" onClick={handleClose}>
            Vazgeç
          </button>
          <button disabled={isLoading} type="submit" className="submit-button tracking-tight font-semibold">
            {isLoading ? <Loader /> : "Kaydet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
