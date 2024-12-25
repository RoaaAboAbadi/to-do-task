import "./ToDoData.css";

interface IProp {
  totalTasks: number;
  completedTasks: number;
  urgentTasks: number;
}

const ToDoData = ({ totalTasks, completedTasks, urgentTasks }: IProp) => {
  return (
    <div className="ToDoData">
      <div className="together">
        <div className="createdTasks">
          Total Tasks: <span className="theNumber">{totalTasks}</span>
        </div>
        <div className="completedTasks">
          Completed Tasks: <span className="theNumber">{completedTasks}</span>
        </div>
      </div>
      <div className="urgentTasks">
        Urgent Tasks: <span className="theNumber">{urgentTasks}</span>
      </div>
    </div>
  );
};

export default ToDoData;
