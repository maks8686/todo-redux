import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { fixTodo, removeTodo, toggleTodo } from "../../Store/action";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from '@mui/icons-material/Create';
import { StyledTodo } from "./todo.styled";

export const Todo = ({ id, text, complete }) => {
  const dispatch = useDispatch();
  
  const handleFix =(e)=>{
     let fixText  =prompt("Изменить")
      dispatch(fixTodo(id,fixText))
    
  }
  return (
    <StyledTodo
      onClick={() => dispatch(toggleTodo(id))}
      style={{
        textDecoration: complete ? "line-through" : "none",
      }}
      key={id}
    >
      {text}
      <div>
      <IconButton  color="inherit" aria-label="delete" onClick={handleFix }>
        <CreateIcon/>
      </IconButton>
      <IconButton  color="inherit" aria-label="delete" onClick={() => dispatch(removeTodo(id))}>
        <DeleteIcon />
      </IconButton>
      </div>
    </StyledTodo>
  );
};
