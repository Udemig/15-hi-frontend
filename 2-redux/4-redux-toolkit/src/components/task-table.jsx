import { useSelector } from "react-redux";

const TaskTable = () => {
  const { tasks } = useSelector((store) => store.crudReducer);

  return (
    <div>
      {tasks.map((task) => (
        <h1>{task.title}</h1>
      ))}
    </div>
  );
};

export default TaskTable;
