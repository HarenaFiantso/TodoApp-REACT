import TodoHeader from "./components/TodoHeader/TodoHeader";
import { useEffect, useState } from "react";
import "./app.css";

/* Initialisation of the localstorage key */
const LOCAL_STORAGE_KEY = "todo:tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  /* Useful functions */
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
  useEffect(() => {
    loadSavedTasks();
  }, []);

  /* 1st: Adding task function */
  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <div>
      <TodoHeader handleAddTask={addTask} />
    </div>
  );
};

export default App;
