

import { useSelector } from "react-redux";
import { Todo } from "../Todo/Todo";
import { StyledTodoList } from "./TodoList.styles";



export const TodoList = () => {
  const todoArr = useSelector((state) => state.todos);
  const sortFlag =useSelector((state)=>state.flag)
   console.log(todoArr)
   
  const sortTodoArr=(todoArr,sortFlag)=>{
   switch(sortFlag){
    case "SORT_DONE_TODO":
      return todoArr.filter((todo) => todo.complete);

    case "SORT_NOT_DONE_TODO":
      return todoArr.filter((todo) => !todo.complete);

    default:
      return todoArr;
   
   }

  }
  const sortArr=sortTodoArr(todoArr,sortFlag)
return (
     
    <StyledTodoList>
      <div>
       {sortArr.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complete={todo.complete}
          />
        ))}
      </div>
    </StyledTodoList>
  );
       }
       