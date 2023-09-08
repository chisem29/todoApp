import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name : "todos",
  initialState : [1, 2, 3],
  reducers : {}
})

export default todosSlice.reducer
export const {} = todosSlice.actions