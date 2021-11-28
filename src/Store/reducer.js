import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SORT_DONE_TODO,
  SORT_NOT_DONE_TODO,
} from "./constants";

const InitialState = localStorage.length
  ? { todos: JSON.parse(localStorage.savedStateTodos), flag: "SHOW_ALL" }
  : { todos: [], flag: "SHOW_ALL" };

const addTodo = (state, action) => {
  return {
    todos: [
      ...state.todos,
      {
        id: action.id,
        text: action.text,
        complete: false,
      },
    ],
    flag: state.flag,
  };
};

const removeTodo = (state, action) => {
  return {
    todos: state.todos.filter((todo) => todo.id !== action.id),
    flag: state.flag,
  };
};

const toggleTodo = (state, action) => {
  return {
    todos: state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
    flag: state.flag,
  };
};

const setFlag = (state, action) => {
  return { ...state, flag: action.type };
};
export const todoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);

    case REMOVE_TODO:
      return removeTodo(state, action);

    case TOGGLE_TODO:
      return toggleTodo(state, action);

    case SORT_DONE_TODO:
      return setFlag(state, action);

    case SORT_NOT_DONE_TODO:
      return setFlag(state, action);

    default:
      return setFlag(state, action);
  }
};
