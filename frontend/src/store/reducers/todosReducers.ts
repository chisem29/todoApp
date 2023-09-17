import actionWithPayloadI from "../../shared/interfaces/actionWithPayload";
import taskI from "../../shared/interfaces/task";
import stateTodosT from "../../shared/types/stateTodos";

const todoReducers = {
  addTask(state: stateTodosT, { payload }: actionWithPayloadI<taskI>) {
    return !state.length
      ? [...state, payload]
      : state.every(({ name }) => name !== payload.name)
      ? [...state, payload]
      : state;
  },
  deleteTask(
    state: stateTodosT,
    { payload }: actionWithPayloadI<Pick<taskI, "name">>
  ) {
    return state.filter(({ name }) => name !== payload.name);
  },
  toogleCompleteTask(
    state: stateTodosT,
    { payload }: actionWithPayloadI<taskI>
  ) {
    return state.map(({ complete, name, description }) => ({
      complete: name === payload.name ? !complete : complete,
      name,
      description
    }));
  },
  clearAll() {
    return [];
  },
};

export default todoReducers;
