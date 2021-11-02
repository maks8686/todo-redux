import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/action";


export const Input = () => {
  const dispatch =useDispatch()
  const [userInput, setUserInput] = useState('');

  const handleChange=(e)=>{
    setUserInput(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTodo(userInput))
    console.log(userInput)
    setUserInput('')
  
  }

  return (
    <div>
      <input  type="text" value={userInput} onChange={handleChange}/>
      <button onClick={handleSubmit}>add</button>
    </div>
  );
};
