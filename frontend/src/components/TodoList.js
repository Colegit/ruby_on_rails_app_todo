import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {Array.isArray(todos) ? (
        todos.map((item) => {
          return (
            <Todo
              key={item.id}
              taskId={item.id}
              task={item.todo_name}
              completed={item.completed}
              deleteTodo={deleteTodo}
            />
          );
        })
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default TodoList;
