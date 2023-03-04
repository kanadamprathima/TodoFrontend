import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <header className="header">
        <h1>TodoApp</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
