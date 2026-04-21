import axios from "axios";

// .create() ile yeni bir axios örneği oluşturuyoruz
// bu örneği oluştururken bütün ayarları istediğimiz gibi değiştirebiliriz
const api = axios.create({
  baseURL: "http://localhost:5000", // temel api adresi
  // params: { lang: "tr" }, // varsayılan parametreleri
  // headers: { Authorization: "api-anahtarı" }, // varsayılan header
  timeout: 3000, // zaman aşımı
});

export default api;
