import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { TodoItem } from "../Types/type";
import AddTask from "./AddTask";
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

  //addNewTask = (newTask: Task)
  const addNewTask = (task: string) => {
    // const { id, task, important } = newTask;
    console.log("Lets add a new task:", task);
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        task: task,
        important: true,
      },
    ]);
  };

  return (
    <div className="container">
      <AddTask addNewTask={addNewTask} />
      <div>
        {todo &&
          todo.map((item, i) => {
            return (
              <div key={i} className="todo-row ">
                <h3>
                  {item.id}-{item.task}
                </h3>
                <label>
                  {/* <input type="checkbox" checked={item.important} /> */}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default TodoList;
