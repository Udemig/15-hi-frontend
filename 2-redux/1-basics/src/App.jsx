import { useEffect } from "react";
import Form from "./components/form";
import List from "./components/list";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux/actions/todo-actions";

const App = () => {
  const dispatch = useDispatch();

  // api'a istek atıp cevaba göre reducer'a haber verecek olan thunk aksiyonunu dispatch et
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="h-screen container mx-auto p-10">
      <h1 className="text-2xl text-center font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
