import React from "react";
import { StyledApp } from "./App.styled.js";
import { Input } from "./components/inputTodo/input";
import { TodoList } from "./components/todoList/todoList";
import { Typography } from "@mui/material";
import Switch from '@mui/material/Switch';
import { SortButtons } from "./components/sortButtons/sortButtons";
import {useState} from "react"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme"



function App() {
  
  const [theme, setTheme]=useState('light')
  
  const themeTogler =()=>{
  theme==="light"? setTheme("dark"): setTheme("light")
  
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
    <StyledApp>
       <div style={{display:"flex",justifyContent:"space-around"}} >
      <Typography textAlign="left" variant="h3" >
        Список дел <Switch onChange={themeTogler}>
          
        </Switch>

      </Typography>
      </div>
      <Input />
      <TodoList />
      <SortButtons />
    </StyledApp>
    </>
    </ThemeProvider>
  );
}

export default App;
