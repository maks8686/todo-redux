import React from "react";
import "./App.css";
import { Input } from "./Components/Input";
import { TodoList } from "./Components/TodoList";

function App() {
 
  return (
    <div>
      <span>
        <h1>Todo Redux</h1>
      </span>
      <Input />
      <TodoList/>
      <div>
      
       
      </div>
    </div>
  );
}

export default App;
