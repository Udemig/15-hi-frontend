import { useDispatch } from "react-redux";
import { INPUTS } from "../utils/constants";
import { createTask } from "../redux/slices/crudSlice";

const TaskModal = ({ isOpen, close }) => {
  if (!isOpen) return;

  const dispach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const formData = new FormData(e.target);

    // inputlardaki verilere nesne formatında eriş
    const taskData = Object.fromEntries(formData.entries());

    // reducer'a task ekleniceğini haber ver
    dispach(createTask(taskData));

    // modal'ı kapat
    close();
  };

  return (
    <div className="fixed bg-black/20 inset-0 backdrop-blur-xs grid place-items-center">
      <div className="bg-white p-5 rounded-md min-w-100">
        <div className="flex justify-end">
          <button onClick={close}>X</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          {INPUTS.map((item, key) => (
            <div key={key} className="flex flex-col gap-1">
              <label htmlFor={item.name}>{item.label}</label>
              <input id={item.name} name={item.name} type={item.type} />
            </div>
          ))}

          <div className="flex gap-5 mt-5">
            <button type="button" onClick={close} className="flex-1 bg-zinc-600">
              İptal
            </button>

            <button type="submit" className="flex-1">
              Oluştur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
