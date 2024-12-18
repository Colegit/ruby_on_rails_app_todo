import { MdDeleteForever } from "react-icons/md";
import { update_todo } from "../api/endpoints";
import { useState } from "react";

const Todo = ({ taskId, task, completed, deleteTodo }) => {
  const [isChecked, setChecked] = useState(completed);

  const performDelete = () => {
    deleteTodo(taskId);
  };

  const performUpdate = async () => {
    await update_todo({ id: taskId, completed: !isChecked });
    setChecked(!isChecked);
  };
  return (
    <div className="todo">
      <div className="todo-container">
        <input
          className="checkbox"
          checked={isChecked}
          onClick={performUpdate}
          type="checkbox"
        />
        <h3>{task}</h3>
        <MdDeleteForever size="30px" onClick={performDelete} />
      </div>
    </div>
  );
};

export default Todo;
