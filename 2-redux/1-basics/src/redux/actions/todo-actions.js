import api from "../../utils/api";
import AT from "./action-types";

// Aksiyon oluşturan fonksiyonlar
// Bu fonksiyonlar sayesinde bileşen içerisindeki aksiyon yazmını daha pratik hale getiririz
// export const createTodo = (payload) => ({ type: AT.CREATE, payload });
// export const deleteTodo = (payload) => ({ type: AT.DELETE, payload });
// export const toggleTodo = (payload) => ({ type: AT.TOGGLE, payload });
// export const setLoading = () => ({ type: AT.LOADING });
// export const setError = (payload) => ({ type: AT.ERROR, payload });
// export const setTodos = (payload) => ({ type: AT.SUCCESS, payload });

/*
 ! Thunk Aksiyonu
 * İki fonksiyonu iç içe yazarız
 * İçerideki fonks asenkron olabilir ve dispatch'i parametre olarak alır
 * Bizde bu aksiyon fonksiyonu içersinde hem api isteği atabiliyor hem de dispatch ile reducer'a haber verebiliyoruz
*/
export const getTodos = () => (dispatch) => {
  dispatch({ type: AT.LOADING });

  api
    .get("/todos")
    .then((res) => dispatch({ type: AT.SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: AT.ERROR, payload: err.message }));
};

export const createTodo = (newTodo) => (dispatch) => {
  api
    .post("/todos", newTodo)
    .then(() => dispatch({ type: AT.CREATE, payload: newTodo }))
    .catch(() => alert("işlem başarısız oldu"));
};

export const deleteTodo = (todoId) => (dispatch) => {
  api
    .delete(`/todos/${todoId}`)
    .then(() => dispatch({ type: AT.DELETE, payload: todoId }))
    .catch(() => alert("işlem başarısız"));
};

export const toggleTodo =
  ({ todoId, isDone }) =>
  (dispatch) => {
    api
      .patch(`/todos/${todoId}`, { isDone })
      .then(() => dispatch({ type: AT.TOGGLE, payload: todoId }))
      .catch(() => alert("işlem başarısız"));
  };
