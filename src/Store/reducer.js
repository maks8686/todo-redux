export const todoReducer = (
  state = { todos: [], flag: "SHOW_ALL" },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state.todos,
        {
          id: action.id,
          text: action.text,
          complete: false,
        },
      ];

    case "REMOVE_TODO":
      return state.todos.filter((todo) => todo.id !== action.id);

    case "TOGGLE_TODO":
      return state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case "SORT_DONE_TODO":
      return (state.flag = "SORT_DONE_TODO");

    case "SORT_NOT_DONE_TODO":
      return (state.flag = "SORT_NOT_DONE_TODO");

    default:
      return state.todos;
  }
};
