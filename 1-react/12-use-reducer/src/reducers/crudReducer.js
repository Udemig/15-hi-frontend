// başlangıç state'i
export const initialState = {
  todos: [],
  theme: "DARK",
};

// reducer fonksiyonu
export const crudReducer = (state, action) => {
  switch (action.type) {
    case "EKLE":
      // yeni todo nesnesi oluştur
      const newTodo = { text: action.payload, id: new Date().getTime() };

      // yeni todo nesnesini diziye ekle
      const updatedTodos = [...state.todos, newTodo];

      // state'in yeni değerini return et
      return { ...state, todos: updatedTodos };

    case "SİL":
      // aksiyonun payload'I ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // state'in yeni değerini return et
      return { ...state, todos: filtredTodos };

    default:
      return state;
  }
};
