import React from "react";
import "./App.css";
import { Input } from "./Components/Input/Input";
import { TodoList } from "./Components/Todolist/TodoList";
import { Typography } from "@mui/material";
import { SortButtons } from "./Components/SortButtons/SortButtons";

function App() {
  return (
    <div className="App">
      <Typography textAlign="center" variant="h2">
        Todo Redux
      </Typography>
      <Input />
      <TodoList />
      <SortButtons />
    </div>
  );
}

export default App;
