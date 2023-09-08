import { useSelector } from "react-redux";
import stateTodosT from "../shared/types/stateTodos";

const useTodosSelector = (): stateTodosT => {
  const state = useSelector<{ todos: stateTodosT }, stateTodosT>(
    (state) => state.todos
  );
  return state;
};

export default useTodosSelector;
