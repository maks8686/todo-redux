import React from "react";
import { StyledApp } from "./App.styled.js";
import { Input } from "./Components/Input/Input";
import { TodoList } from "./Components/Todolist/TodoList";
import { Typography } from "@mui/material";
import { SortButtons } from "./Components/SortButtons/SortButtons";

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
