import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const TodoList = (store) => {
  const todoState = useSelector((state) => state.startState);
  return (
    <div>
      {todoState.map((todo) => (
        <Todo key={todo.id} todo={todo.text} complete={todo.complete} />
      ))}
    </div>
  );
};
