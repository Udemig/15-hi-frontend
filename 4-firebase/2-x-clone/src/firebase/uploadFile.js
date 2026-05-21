import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./index";
import { v4 } from "uuid";

// medya içeriklerini firebase storage servisine yükleyip medya url'ini döndürür
const uploadFile = async (file) => {
  // 1) dosya yoksa durdur
  if (!file) return null;

  // 2) dosya formatı resim, video, ses değilse yüklemeye izin verme
  if (!file.type.startsWith("image") && !file.type.startsWith("video") && !file.type.startsWith("audio")) {
    throw new Error("Medya tipi desteklenmiyor");
  }

  // 3) dosya boyutu 20 mb üzerindeyse yüklemeye izin verme
  if (file.size > 20000000) {
    throw new Error("Medya boyutu sınırı aşıyor (20mb)");
  }

  // 4) medyanın yükleniceği konumun referansını al (klasör/dosya_ismi)
  const mediaRef = ref(storage, `post-media/${v4()}${file.name}`);

  // 5) medyayı storage'a yükle
  await uploadBytes(mediaRef, file);

  // 6) yüklenen medyanın url'ini döndür
  const url = getDownloadURL(mediaRef);

  return url;
};

export default uploadFile;
