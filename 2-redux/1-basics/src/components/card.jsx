import { useDispatch } from "react-redux";

const Card = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: todo.id });
  };

  const handleStatus = () => {
    dispatch({ type: "TOGGLE", payload: todo.id });
  };

  return (
    <div className={`border rounded p-4 shadow-lg ${todo.isDone ? "border-green-600" : "border-zinc-700"}`}>
      <div className="flex flex-col gap-2">
        <h3 className={`text-xl font-bold ${todo.isDone ? "line-through" : ""}`}>{todo.text}</h3>

        <h6 className="text-zinc-500">{new Date(todo.createdAt).toLocaleString()}</h6>
      </div>

      <div className="flex gap-4 mt-4">
        <button onClick={handleStatus} className="btn bg-yellow-500">
          {todo.isDone ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn bg-red-500">
          Sil
        </button>
      </div>
    </div>
  );
};

export default Card;
