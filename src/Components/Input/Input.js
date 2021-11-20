import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/action";
import Button from "@mui/material/Button";
import { TextField} from "@mui/material";
import { StyledInput } from "./Input.styles";


export const Input = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(userInput));
    setUserInput("");
  };

  return (
    <StyledInput>
      <TextField sx={{width:'70%' }}
        id="standard-basic"
        label="Введи задачу"
        variant="standard"
        value={userInput}
        onChange={handleChange}
      />
      <Button  variant="contained" onClick={handleSubmit} >
        Добавить
      </Button>
      
    </StyledInput>
  );
};
