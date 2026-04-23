import AT from "../actions/action-types";

/*
 ! Reducer fonksiyonu
 * State'i tutuan ve yöneten fonksiyon
 * Tutucağı state'in ilk değerini initialState olarak tanımlarız

 * Parametre olarak:
 * 1) state'in güncel değerini
 * 2) dispatch edilen aksiyonu
  
 * reducer fonksiyonundan return edilen değer, state'in son hali olur 
 */

const initialState = {
  isLoading: true,
  error: null,
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.CREATE: {
      // aksiyonun payload'u ile gelen yeni nesneyi diziye ekle
      const newTodos = state.todos.concat(action.payload);

      // state'in son halini return et
      return { ...state, todos: newTodos };
    }

    case AT.DELETE: {
      // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // state'in son halini return et
      return { ...state, todos: filtredTodos };
    }

    case AT.TOGGLE: {
      // aksiyonun payload'ı ile gelen todo'nun isDone değerini güncelle
      const toggledTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );

      // state'in son halini return et
      return { ...state, todos: toggledTodos };
    }

    case AT.LOADING: {
      return { ...state, isLoading: true };
    }

    case AT.ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case AT.SUCCESS: {
      return { ...state, isLoading: false, error: null, todos: action.payload };
    }

    default:
      return state;
  }
};

export default todoReducer;
