import { useState } from "react";
import "./ToDoInputs.css";

interface IProp {
  onAddTodo: (title: string, isUrgent: boolean) => void;
}
const ToDoInputs = ({ onAddTodo }: IProp) => {
  console.log( onAddTodo);

  const [title, setTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length === 0 || title === null) {
      alert("fill in the task input");
      return;
    }
    onAddTodo(title, isUrgent);
    setTitle("");
    setIsUrgent(false);
  };

  return (
    <form className="toDoForm" onSubmit={handelSubmit}>
      <div className="container">
        <input
          className="title"
          type="text"
          placeholder="Enter The Task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>

        <input
          className={isUrgent ? "urgent checked":"urgent"}
          type="checkbox"
          checked={isUrgent}
          onChange={(event) => setIsUrgent(event.target.checked)}
        ></input>
      </div>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ToDoInputs;
