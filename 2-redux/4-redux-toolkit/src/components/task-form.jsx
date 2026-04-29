import { useState } from "react";
import TaskModal from "./task-modal";

const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</button>

      {/* Modal */}
      <TaskModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default TaskForm;
