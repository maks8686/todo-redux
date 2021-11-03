import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Input = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: userInput, id: nanoid() });
    setUserInput("");
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={handleSubmit}>add</button>
    </div>
  );
};
