import TodoItem from "../TodoItem/TodoItem";
import "./todoTask.css";

const TodoTask = ({ tasks, onDelete, onComplete }) => {
  const taskCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="tasks">
      <header className="header">
        <div>
          <p>Created tasks</p>
          <span>{taskCount}</span>
        </div>

        <div>
          <p className="text">Completed tasks</p>
          <span>
            {completedTasks} of {taskCount}
          </span>
        </div>
      </header>

      <div className="list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoTask;
