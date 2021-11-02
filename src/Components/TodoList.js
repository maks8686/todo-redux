
import { useSelector } from "react-redux";
import { store } from "../Store/store";
import { Todo } from "./Todo"


export function TodoList ({store}){
  const todos =useSelector(store=>store.todos)
  return(
  <div>
    {todos.map((todo)=>
    <Todo
      key={todo.id}
      todo={todo.text}
      complete={todo.complete}
    />
    )}
  </div>
    )
}
  
