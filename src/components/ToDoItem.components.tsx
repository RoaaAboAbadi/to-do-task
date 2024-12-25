import "./ToDoItem.component.css";

interface IProp {
  title: string;
  isUrgent: boolean;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onDelate: () => void;
}

const ToDoItem = ({
  title,
  isUrgent,
  isCompleted,
  onToggleComplete,
  onDelate,
}: IProp) => {
  return (
    <div className="yyy">
      <div
        className={`todo-item ${
          isUrgent ? "todo-item-urgent" : "todo-item-normal"
        }`}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggleComplete}
        />
        <span
          className={`todo-item-text ${
            isCompleted ? "todo-item-completed" : ""
          } ${isUrgent ? "todo-item-urgent-text" : ""}`}
        >
          {title}
        </span>
        {isUrgent && <span> (🚨)</span>}
        <button className="todo-item-button" onClick={onDelate}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
