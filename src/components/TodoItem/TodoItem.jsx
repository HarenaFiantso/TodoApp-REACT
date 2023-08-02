import { faCircleCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./todoItem.css";

const TodoItem = ({ task, onDelete, onComplete }) => {
  return (
    <div className="task">
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <FontAwesomeIcon icon={faCircleCheck} /> : <div />}
      </button>

      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>

      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoItem;
