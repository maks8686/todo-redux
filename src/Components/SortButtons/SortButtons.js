import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  showAllTodos,
  sortDoneTodo,
  sortNotDoneTodo,
} from "../../Store/action";
import { StyledSortDiv } from "./SortButtons.styled";

export const SortButtons = () => {
  const dispatch = useDispatch();

  return (
    <StyledSortDiv>
      <Button size="small" variant="contained" onClick={() => dispatch(sortDoneTodo())}>
        Выполненные
      </Button>
      <Button size="small" variant="contained" onClick={() => dispatch(sortNotDoneTodo())}>
        В процессе
      </Button>
      <Button size="small" variant="contained" onClick={() => dispatch(showAllTodos())}>
        Все
      </Button>
    </StyledSortDiv>
  );
};
