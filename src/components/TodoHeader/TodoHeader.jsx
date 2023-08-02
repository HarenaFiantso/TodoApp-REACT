import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./todoHeader.css";

const TodoHeader = () => {
  return (
    <header className="header">
      <h1 className="logo">Todo</h1>
      <form className="newTaskForm">
        <input type="text" placeholder="Add task" />
        <button>
          Create task <FontAwesomeIcon icon={faCirclePlus} size={20} />
        </button>
      </form>
    </header>
  );
};

export default TodoHeader;
