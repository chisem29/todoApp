import { useCallback } from "react";
import currentTodoDispatchT from "../shared/types/currentTodoDispatch";
import { toogleCompleteTask } from "../store/slices/todosSlice";
import taskI from "../shared/interfaces/task";

const useHandlerToogleTask = (dispatch: currentTodoDispatchT) => {
  const handlerToogle = useCallback((values: taskI) => {
    dispatch(toogleCompleteTask(values));
  }, []);

  return (values: taskI) => () => {
    handlerToogle(values);
  };
};

export default useHandlerToogleTask;
