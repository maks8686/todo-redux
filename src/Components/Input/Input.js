import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/action";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { StyledInput } from "./Input.styles";

export const Input = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    if (userInput) {
      e.preventDefault();
      dispatch(addTodo(userInput));
      setUserInput("");
    }
  };
  const onKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <StyledInput>
      <TextField
        sx={{ width: "70%" }}
        id="standard-basic"
        label="Введи задачу"
        variant="standard"
        value={userInput}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Добавить
      </Button>
    </StyledInput>
  );
};
