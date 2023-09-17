import { Dispatch } from "react";

import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit";
import stateTodosT from "./stateTodos";

type currentTodoDispatchT = ThunkDispatch<
  CombinedState<{
    todos: stateTodosT;
  }>,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;

export default currentTodoDispatchT