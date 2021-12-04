import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  showAllTodos,
  sortDoneTodo,
  sortNotDoneTodo,
} from "../../Store/action";
import { StyledSortDiv } from "./sortButtons.styled";

export const SortButtons = () => {
  const flag = useSelector((state) => state.flag);
  const dispatch = useDispatch();

  return (
    <StyledSortDiv>
      <Button
        size="small"
        variant="contained"
        color={flag === "SORT_DONE_TODO" ? "success" : "primary"}
        onClick={() => dispatch(sortDoneTodo())}
      >
        Выполненные
      </Button>
      <Button
        size="small"
        variant="contained"
        color={flag === "SORT_NOT_DONE_TODO" ? "success" : "primary"}
        onClick={() => dispatch(sortNotDoneTodo())}
      >
        В процессе
      </Button>
      <Button
        size="small"
        variant="contained"
        color={flag === "SHOW_ALL" ? "success" : "primary"}
        onClick={() => dispatch(showAllTodos())}
      >
        Все
      </Button>
    </StyledSortDiv>
  );
};
