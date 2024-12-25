import ToDoItem from "./ToDoItem.components";
import TodoItem from "./ToDoItem.components";

interface Todo {
  id: number;
  title: string;
  isUrgent: boolean;
  isCompleted: boolean;
}

interface IProp {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelate: (id: number) => void;
}

const AllToDoItems = ({todos, onToggleComplete, onDelate}:IProp) => {
    return(
        <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              isUrgent={todo.isUrgent}
              isCompleted={todo.isCompleted}
              onToggleComplete={() => onToggleComplete(todo.id)}
              onDelate={() => onDelate(todo.id)}
            />
          ))
        ) : (
          <p>There is no tasks</p>
        )}
      </div>
  
    )
};

export default AllToDoItems;
