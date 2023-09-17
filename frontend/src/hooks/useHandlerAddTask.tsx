
import { MouseEventHandler, useCallback } from "react";
import { addTask } from "../store/slices/todosSlice"
import taskI from "../shared/interfaces/task";
import currentTodoDispatchT from "../shared/types/currentTodoDispatch";

const useHandlerAddTask = (
  dispatch: currentTodoDispatchT,
  { description, name }: Omit<taskI, "complete">
) : MouseEventHandler => {
  const handlerAdd = useCallback((values: Omit<taskI, "complete">) => {
    dispatch(addTask({ complete: false, ...values }));
  }, []);

  return (e) => {
    e.preventDefault()
    handlerAdd({ name, description });
  };
};

export default useHandlerAddTask