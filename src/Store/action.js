import { nanoid } from "@reduxjs/toolkit";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SORT_DONE_TODO,
  SORT_NOT_DONE_TODO,
  SHOW_ALL,
  FIX_TODO
} from "./constants";


export const addTodo = (userInput) => ({
  type: ADD_TODO,
  id: nanoid(),
  text: userInput,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const fixTodo = (id,fixText) => ({
  type: FIX_TODO,
  id,
  text: fixText,
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const sortDoneTodo = () => ({
  type: SORT_DONE_TODO,
});

export const sortNotDoneTodo = () => ({
  type: SORT_NOT_DONE_TODO,
});

export const showAllTodos = () => ({
  type: SHOW_ALL,
});
