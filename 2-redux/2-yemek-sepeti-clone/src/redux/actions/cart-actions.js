import api from "../../utils/api";
import AT from "./action-types";

// redux thunk aksiyonu
// sepetteki ürünler için api'a istek atıp reducer'a haber vericek
export const getCart = () => (dispatch) => {
  dispatch({ type: AT.CART_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: AT.CART_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: AT.CART_ERROR, payload: err.message }));
};

// sepete ürün eklemek için api'a istek atıp reducer'a haber vericek
export const addToCart = (product) => (dispatch) => {
  // 1) api'a gönderilecek veriyi hazırla
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // 2) api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)
    // 3) istek başarılı olursa reducer'a haber ver
    .then((res) => dispatch({ type: AT.ADD_TO_CART, payload: res.data }))
    .catch(() => alert("Bir sorun oluştu"));
};

// sepetteki ürün miktarını güncellemek için api'a istek atıp reducer'a haber vericek
export const updateAmount = (productId, newAmount) => (dispatch) => {
  // api'a miktar güncellemesi için istek at
  api
    .patch(`/cart/${productId}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber ver
    .then((res) => dispatch({ type: AT.UPDATE_AMOUNT, payload: res.data }));
};

// sepetteki ürün kaldirmak için api'a istek atıp reducer'a haber vericek
export const deleteFromBasket = (productId) => (dispatch) => {
  // api'a delete isteği atalım
  api
    .delete(`/cart/${productId}`)
    // istek başarılı olursa reducer'a haber verelim
    .then(() => dispatch({ type: AT.DELETE_FROM_CART, payload: productId }))
    .catch(() => alert("işlem başarısız"));
};
