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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          placeholder="Add you task here"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddTask;
