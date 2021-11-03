import { useDispatch } from "react-redux";
import { removeTodo } from "../Store/action";


export function Todo(todo){
  const dispatch =useDispatch()
  return(
  <div key={todo.id}>
    {todo.text}
  
  <button onClick={()=>dispatch({type:"REMOVE_TODO",payload:todo.id})}>X</button>
  </div>)
}