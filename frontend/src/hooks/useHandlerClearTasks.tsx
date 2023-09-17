import { useCallback } from "react";
import currentTodoDispatchT from "../shared/types/currentTodoDispatch";
import { clearAll } from "../store/slices/todosSlice";

const useHandlerClearTasks = (dispatch: currentTodoDispatchT) => {
  const handlerClearAll = useCallback(() => {
    dispatch(clearAll());
  }, []);

  return () => {
    handlerClearAll();
  };
};

export default useHandlerClearTasks;
