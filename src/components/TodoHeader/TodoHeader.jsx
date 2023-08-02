import { AiOutlinePlusCircle } from "react-icons/ai";

import "./todoHeader.css";

const TodoHeader = () => {
  return (
    <header className="header">
      <h1 className="logo">Todo</h1>
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
