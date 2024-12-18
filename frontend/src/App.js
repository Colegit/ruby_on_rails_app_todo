import "./App.css";

import TodoList from "./components/TodoList";
import { get_todos, create_todo, delete_todo } from "./api/endpoints";
import { AddTodo } from "./components/AddTodo";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = () => {
      get_todos().then((todosData) => {
        setTodo(todosData); // Update the state with the fetched todos
      });
    };

    fetchTodos(); // Call the fetchTodos function
  }, []);

  const handleAdd = async (todo_name) => {
    const todo = await create_todo({ todo_name });
    setTodo([todo, ...todos]);
  };

  const handleDelete = async (id) => {
    delete_todo({ id });
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo App</h1>
        <AddTodo handleAdd={handleAdd} />
        <TodoList todos={todos} deleteTodo={handleDelete} />
      </div>
    </div>
  );
}

export default App;
