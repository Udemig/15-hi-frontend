import React, { useReducer } from "react";
import { crudReducer, initialState } from "../reducers/crudReducer";

const Crud = () => {
  const [state, dispatch] = useReducer(crudReducer, initialState);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // reducer'a haber ver
    dispatch({ type: "EKLE", payload: text });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo yazınız" />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>

            <button onClick={() => dispatch({ type: "SİL", payload: todo.id })}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
