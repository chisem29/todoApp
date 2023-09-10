import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todosReducer from "./slices/todosSlice";

const store = configureStore({
  reducer: combineReducers({ todos: todosReducer }),
});

export default store;
