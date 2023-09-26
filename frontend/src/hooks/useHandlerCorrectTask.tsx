import { useCallback } from "react";
import taskI from "../shared/interfaces/task";
import currentTodoDispatchT from "../shared/types/currentTodoDispatch";
import { correctTask } from "../store/slices/todosSlice";

const useHandlerCorrectTask = (
  dispatch: currentTodoDispatchT,
) => {
  const handlerCorrect = useCallback(
    (values: Omit<taskI, "complete"> & { index: number }) => {
      dispatch(correctTask(values));
    },
    []
  );

  return (
      values: Omit<taskI, "complete"> & { index : number },
      handlerOnCorrect: (index: number) => () => void
    ) =>
    () => {
      handlerCorrect(values);
      handlerOnCorrect(-1)();
    };
};

export default useHandlerCorrectTask;
