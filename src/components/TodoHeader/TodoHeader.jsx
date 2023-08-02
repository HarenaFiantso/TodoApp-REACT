import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./todoHeader.css";

const TodoHeader = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  /* onSubmit event for the form */
  function handleSubmit(event) {
    event.preventDefault();
    handleAddTask(title);
    setTitle("");
  }

  return (
    <header className="header">
      <h1 className="logo">Todo</h1>
      <form className="newTaskForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add task" />
        <button>
          Create task <FontAwesomeIcon icon={faCirclePlus} size={20} />
        </button>
      </form>
    </header>
  );
};

export default TodoHeader;
