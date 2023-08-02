import TodoItem from "../TodoItem/TodoItem";
import "./todoTask.css";

const TodoTask = ({ tasks, onDelete, onComplete }) => {
  const taskCount = tasks.length;
  return (
    <section className="tasks">
      <header className="header">
        <div>
          <p>Created tasks</p>
          <span>{taskCount}</span>
        </div>
      </header>
      <TodoItem />
    </section>
  );
};

export default TodoTask;
