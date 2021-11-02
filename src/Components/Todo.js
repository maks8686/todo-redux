import { useDispatch } from "react-redux";
import { removeTodo } from "../Store/action";


export function Todo(todo){
  const dispatch =useDispatch()
  return(
  <div key={todo.id}>
    {todo.text}
  
  <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
  </div>)
}