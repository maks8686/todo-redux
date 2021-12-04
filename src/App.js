import React from "react";
import { StyledApp } from "./App.styled.js";
import { Input } from "./components/inputTodo/input";
import { TodoList } from "./components/todoList/todoList";
import { Typography } from "@mui/material";
import { SortButtons } from "./components/sortButtons/sortButtons";

function App() {
  return (
    <StyledApp>
      <Typography textAlign="center" variant="h3">
        Todo Redux
      </Typography>
      <Input />
      <TodoList />
      <SortButtons />
    </StyledApp>
  );
}

export default App;
