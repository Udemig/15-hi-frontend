import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // .todo verilerini tuttuğumuz state
  const [todos, setTodos] = useState([]);

  // useEffect ile bileşenin ekrana basılma anında fn çalıştır
  useEffect(() => {
    // api'a get isteği at
    axios
      .get("http://localhost:5000/todos")
      // api'dan olumlu yanıt gelince veriye eriş
      .then((res) => setTodos(res.data));
  }, []);

  console.log(todos);

  return (
    <div className="container">
      <header>
        <h1>TODO App</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>
    </div>
  );
};

export default App;
