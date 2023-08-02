import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoTask from "./components/TodoTask/TodoTask";
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

  /* 2nd: Deleting task by id */
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  /* 3rd: Toggling finished task */
  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div>
      <TodoHeader handleAddTask={addTask} />
      <TodoTask
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  );
};

export default App;
