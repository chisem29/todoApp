import { createSlice } from "@reduxjs/toolkit";

import stateTodosT from "../../shared/types/stateTodos";
import todosInitState from "../initStates/todosInitState";

import todoReducers from "../reducers/todosReducers";

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitState as stateTodosT,
  reducers: todoReducers,
});

export default todosSlice.reducer;
export const { addTask, deleteTask, clearAll, toogleCompleteTask, correctTask } =
  todosSlice.actions;
