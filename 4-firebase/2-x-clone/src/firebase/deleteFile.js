import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../firebase";

const deleteFile = async (mediaUrl) => {
  if (!mediaUrl) return;

  try {
    // url'deki karakter kodlarını normale çevir %2f === /  %20 === " "
    const normalUrl = decodeURIComponent(mediaUrl);

    // url'den dosya yolunu çıkart
    const startIndex = normalUrl.indexOf("/o/") + 3;
    const endIndex = normalUrl.indexOf("?");
    const path = normalUrl.slice(startIndex, endIndex);

    // silinecek dosyanın referansını al
    const fileRef = ref(storage, path);

    // medyayı sil
    await deleteObject(fileRef);
  } catch (error) {
    toast.error("Bir hata oluştu");
  }
};

export default deleteFile;
