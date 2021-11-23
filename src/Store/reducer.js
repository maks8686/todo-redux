import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SORT_DONE_TODO,
  SORT_NOT_DONE_TODO,
} from "./constants";


export const todoReducer = (
  state = { todos: [], flag: "SHOW_ALL" },
  action
) => {
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
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case SORT_DONE_TODO:
      return { ...state, flag: action.type };

    case SORT_NOT_DONE_TODO:
      return { ...state, flag: action.type };

    default:
      return { ...state, flag: action.type };
  }
};
