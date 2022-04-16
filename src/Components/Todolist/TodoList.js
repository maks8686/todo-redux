import { useSelector } from "react-redux";
import { Todo } from "../todo/todo";
import { StyledTodoList } from "./todoList.styled";
import { useEffect } from "react";

export const TodoList = () => {
  const todoArr = useSelector((state) => state.sortedTodos);
  const sortFlag = useSelector((state) => state.flag);
  
  useEffect(() => {
    localStorage.setItem("savedStateTodos", JSON.stringify(todoArr))
  });
  useEffect(() => {
    localStorage.setItem("savedFlag", JSON.stringify(sortFlag));
  });
  
  return (
    <StyledTodoList>
      {todoArr.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          complete={todo.complete}
        />
      ))}
    </StyledTodoList>
  );
};
