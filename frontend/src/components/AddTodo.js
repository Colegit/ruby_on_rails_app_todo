import { useState } from "react";

export const AddTodo = ({ handleAdd }) => {
  const [input, setInput] = useState("");

  const performAction = () => {
    handleAdd(input);
    setInput("");
  };

  return (
    <div className="add-todo">
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="add-input"
        type="text"
        value={input}
      />
      <button onClick={performAction} className="add-button">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
