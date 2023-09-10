
import actionWithPayloadI from "../../shared/interfaces/actionWithPayload" 
import taskI from "../../shared/interfaces/task"
import stateTodosT from "../../shared/types/stateTodos"

const todoReducers = {
  addTask(state : stateTodosT , action : actionWithPayloadI<taskI>) {
    return [...state, action.payload]
  }
}

export default todoReducers