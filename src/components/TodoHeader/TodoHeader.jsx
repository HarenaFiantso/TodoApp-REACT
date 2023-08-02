import { AiOutlinePlusCircle } from "react-icons/ai";
import "./todoHeader.css";

const TodoHeader = () => {
  return (
    <header className="header">
      <form className="newTaskForm">
        <input type="text" placeholder="Add task" />
        <button>
          Create task <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default TodoHeader;
