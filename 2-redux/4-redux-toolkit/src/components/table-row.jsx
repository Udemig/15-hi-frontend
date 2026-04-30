import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";
import { useState } from "react";
import TaskModal from "./task-modal";

const TableRow = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <tr>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td>{task.deadline}</td>
        <td className="flex flex-wrap gap-2">
          <button onClick={() => setIsOpen(true)}>düzenle</button>

          <button onClick={handleDelete} className="bg-red-500">
            sil
          </button>
        </td>
      </tr>

      <TaskModal isOpen={isOpen} close={() => setIsOpen(false)} task={task} />
    </>
  );
};

export default TableRow;
