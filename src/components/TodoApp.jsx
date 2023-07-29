import { useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = { id: Date.now(), text: task, completed: false };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter your task"
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;

/* Continuer l'app, en faisant des CRUD */
