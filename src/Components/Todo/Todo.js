import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../Store/action";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTodo } from "./todo.styled";

export const Todo = ({ id, text, complete }) => {
  const dispatch = useDispatch();
  return (
    <StyledTodo
      onClick={() => dispatch(toggleTodo(id))}
      style={{
        textDecoration: complete ? "line-through" : "none",
      }}
      key={id}
    >
      {text}

      <IconButton aria-label="delete" onClick={() => dispatch(removeTodo(id))}>
        <DeleteIcon />
      </IconButton>
    </StyledTodo>
  );
};
