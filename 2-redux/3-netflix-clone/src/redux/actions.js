import api from "../utils/api";
import AT from "./action-types";

// izleme listesindeki verileri almak içina api'a istek atıp gelen cevaba göre reducer'a haber verene thunk aksiyonu
export const getWatchlist = () => (dispatch) => {
  dispatch({ type: AT.LIST_LOADING });

  api
    .get("/account/19719088/watchlist/movies")
    .then((res) => dispatch({ type: AT.LIST_SUCCESS, payload: res.data.results }))
    .catch((err) => dispatch({ type: AT.LIST_ERROR, payload: err.message }));
};

// film izleme listesinde yoksa eklemek için varsa kaldırmak için api'a istek atıp gelen cevaba göre reducer'a haber veren thunk aksiyonu
export const toggleWatchlist = (movie, isAdd) => (dispatch) => {
  // api'a gönderilecek cevabı hazırla
  const body = { media_type: "movie", media_id: movie.id, watchlist: isAdd };

  // api isteğini at
  api.post("/account/19719088/watchlist", body).then(() => {
    // ekleme/çıkarma durumuna göre reducer'a haber ver
    isAdd
      ? dispatch({ type: AT.ADD_TO_LIST, payload: movie })
      : dispatch({ type: AT.REMOVE_FROM_LIST, payload: movie.id });
  });
};
