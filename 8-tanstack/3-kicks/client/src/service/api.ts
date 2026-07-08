import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // çerezleri backend'e göndermek için
});

// axios interceptor (middleware)
// api'a atılan her istekte veya api'dan gelen her cevapta fonksiyon çalıştıralım
api.interceptors.response.use(
  // api'dan olumlu yanıt gelince çalışır
  (res) => res,
  // api'dan olumsuz yanıt gelince çalışır
  async (err) => {
    // hata aldığımız api isteğini değişkene aktar
    const originalRequest = err.config;

    // hata access tokenın süresi dolmasından kaynaklı bir hata ise
    if (err.response.status === 401 && err.response?.data?.message === "Access token expired") {
      try {
        // access tokenını yenile
        await authService.refresh();

        // hata aldığımız api isteğini tekrar at
        return api.request(originalRequest);
      } catch (error) {
        // refresh token geçersiz ise: çıkış yap
        await authService.logout();

        //login sayfasına yönlendir
        window.location.href = "/login";
      }
    }
  },
);

export default api;
