import { useEffect, useState } from "react";
import api from "./api";
import ListItem from "./components/list-item";
import Form from "./components/form";

const App = () => {
  // .todo verilerini tuttuğumuz state
  const [todos, setTodos] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  // useEffect ile bileşenin ekrana basılma anında fn çalıştır
  useEffect(() => {
    // api'a gönderilecek parametreleri hazırla
    const params = { _sort: "date", _order: isAscending ? "asc" : "desc" };

    // api'a get isteği at
    api.get("/todos", { params }).then((res) => setTodos(res.data));
  }, [isAscending]);

  // kaldırma fonksiyonu
  const deleteTodo = (id) => {
    // api'a todoyu silmek için istek at
    api
      .delete(`/todos/${id}`)
      // api isteği başarılı olursa todo'yu state'den kaldır
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  // ekleme fonksiyonu
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <header>
        <h1>TODO App</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>

      <Form addTodo={addTodo} />

      <button className="sort-btn" onClick={() => setIsAscending(!isAscending)}>
        Sırala: {isAscending ? "artan" : "azalan"}
      </button>

      <div className="list">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
