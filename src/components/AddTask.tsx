import { useState } from "react";
import { TodoItem } from "../Types/type";

const AddTask = ({ addNewTask }: { addNewTask: (task: string) => void }) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (error: React.FormEvent<HTMLFormElement>) => {
    error.preventDefault();
    addNewTask(newTask);
    setNewTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTask}
          className="todo-input"
          placeholder="Add you task here"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddTask;
