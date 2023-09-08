import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todosReducer from "./reducers/todosSlice";

const store = configureStore({
  reducer: combineReducers({ todos: todosReducer }),
});

export default store;
