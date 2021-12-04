import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SORT_DONE_TODO,
  SORT_NOT_DONE_TODO,
  SHOW_ALL,
} from "./constants";

const InitialState = localStorage.length||localStorage.sortedTodos
  ? {
      todos: JSON.parse(localStorage.savedStateTodos),
      sortedTodos: JSON.parse(localStorage.savedStateTodos),
      flag: "SHOW_ALL",
    }
  : { todos: [], sortedTodos: [], flag: "SHOW_ALL" };

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
    sortedTodos: [
      ...state.todos,
      {
        id: action.id,
        text: action.text,
        complete: false,
      },
    ],
  };
};

const removeTodo = (state, action) => {
  return {
    todos: state.todos.filter((todo) => todo.id !== action.id),
    flag: state.flag,
    sortedTodos: state.todos.filter((todo) => todo.id !== action.id),
  };
};

const toggleTodo = (state, action) => {
  return {
    todos: state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
    flag: state.flag,
    sortedTodos: state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
  };
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
      return {
        ...state,
        flag: action.type,
        sortedTodos: [...state.todos.filter((todo) => todo.complete)],
      };

    case SORT_NOT_DONE_TODO:
      return {
        ...state,
        sortedTodos: [...state.todos.filter((todo) => !todo.complete)],
        flag: action.type,
      };

    case SHOW_ALL:
      return {
        ...state,
        sortedTodos: [...state.todos.map((todo) => todo)],
        flag: action.type,
      };

    default:
      return state;
  }
};
