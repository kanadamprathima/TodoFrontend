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
      {todo &&
        todo.map((item, i) => {
          return (
            <div key={i}>
              <h3>
                {item.id}-{item.task}
              </h3>
              {/* <input type="checkbox" value={item.important} /> */}
            </div>
          );
        })}
      <AddTask addNewTask={addNewTask} />
    </div>
  );
};
export default TodoList;
