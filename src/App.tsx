import { useState } from "react";
import ToDoInputs from "./components/ToDoInputs.components";
import ToDoData from "./components/ToDoData.components";
import ToDoItem from "./components/ToDoItem.components";
import AllToDoItems from "./components/AllToDoItems.components";
import "./App.css";

interface Todo {
  id: number;
  title: string;
  isUrgent: boolean;
  isCompleted: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string, isUrgent: boolean) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      isUrgent,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  let totalTasks = todos.length;
  let completedTasks = todos.filter((todo) => todo.isCompleted).length;
  let urgentTasks = todos.filter((todo) => todo.isUrgent).length;

  return (
    <>
      <ToDoInputs onAddTodo={handleAddTodo} />
      <ToDoData
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        urgentTasks={urgentTasks}
      />

      <AllToDoItems
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDelate={handleDelete}
      />
    </>
  );
}

export default App;
