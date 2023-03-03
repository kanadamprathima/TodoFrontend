export type TodoItem = {
  id: number;
  task: string;
  important: Boolean;
};
export type TodoList = {
  id: number;
  name: String;
  userId: number;
  todoItems: TodoItem[];
};
