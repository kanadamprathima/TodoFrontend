import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoItem } from "../Types/type";
const TodoList = () => {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [task, setTask] = useState<string>("");
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todoitems");
      //   console.log("response from API in frontend", response.data);
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTodo([...todo, e.target.value]);
  };
  return (
    <div className="container">
      <form>
        <label>
          Add Task:
          <input
            type="text"
            placeholder="Add your task here"
            value={task}
            onChange={handleSubmit}
          />
        </label>
      </form>
      {todo &&
        todo.map((item, i) => {
          return (
            <div key={i}>
              <h3>
                {item.id}-{item.task}
              </h3>
            </div>
          );
        })}
    </div>
  );
};
export default TodoList;
