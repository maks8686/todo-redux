import { nanoid } from "@reduxjs/toolkit";



export const addTodo = (userInput) => ({
  type: "ADD_TODO",
  id: nanoid(),
  text: userInput,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})