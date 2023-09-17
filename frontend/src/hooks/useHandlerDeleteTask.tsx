import { useCallback } from "react";
import { deleteTask } from "../store/slices/todosSlice";
import currentTodoDispatchT from "../shared/types/currentTodoDispatch";
import taskI from "../shared/interfaces/task";

const useHandlerDeleteTask = (dispatch: currentTodoDispatchT) => {
  const handlerDelete = useCallback((name: string) => {
    dispatch(deleteTask({ name }));
  }, []);

  return ({ name }: Pick<taskI, "name">) =>
    () => {
      handlerDelete(name);
    };
};

export default useHandlerDeleteTask;
