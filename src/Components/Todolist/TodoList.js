import { useSelector } from "react-redux";
import { Todo } from "../Todo/Todo";
import { StyledTodoList } from "./TodoList.styles";
import { SORT_DONE_TODO, SORT_NOT_DONE_TODO } from "../../Store/constants";
import { useEffect } from "react";

export const TodoList = () => {
  const todoArr = useSelector((state) => state.todos);
  const sortFlag = useSelector((state) => state.flag);
  useEffect(()=>{localStorage.setItem("savedStateTodos",JSON.stringify(todoArr))})
  useEffect(()=>{localStorage.setItem("savedFlag",JSON.stringify(sortFlag))})

  const sortTodoArr = (todoArr, sortFlag) => {
    switch (sortFlag) {
      case SORT_DONE_TODO:
        return todoArr.filter((todo) => todo.complete);

      case SORT_NOT_DONE_TODO:
        return todoArr.filter((todo) => !todo.complete);

      default:
        return todoArr;
    }
  };
  const sortArr = sortTodoArr(todoArr, sortFlag);
  return (
    <StyledTodoList>
      
        {sortArr.map((todo) => (
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
