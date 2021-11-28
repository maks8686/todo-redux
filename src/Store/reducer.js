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

const removeTodo = (state, action) => {
  return { todos: state.todos.filter((todo) => todo.id !== action.id) };
};

const toggleTodo = (state, action) => {
  return {
    todos: state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
  };
};

const setFlag = (state, action) => {
  return { ...state, flag: action.type };
};
export const todoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            complete: false,
          },
        ],
      };

    case REMOVE_TODO:
      return removeTodo(state,action);

    case TOGGLE_TODO:
      return toggleTodo(state,action);

    case SORT_DONE_TODO:
      return setFlag(state, action);

    case SORT_NOT_DONE_TODO:
      return setFlag(state, action);

    default:
      return setFlag(state, action);
  }
};
