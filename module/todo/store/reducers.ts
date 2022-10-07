import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "./state";
import {Todo} from "../../../common/types/todo.interface";

interface setTodoPayload {
  todo: Todo[];
}

const TodoSlice = createSlice({
  initialState,
  name: 'Todo',
  reducers: {
    setTodo(state, action: PayloadAction<setTodoPayload>) {
      state.todo = action.payload.todo;
    },
  }
})

export const {setTodo} = TodoSlice.actions;
export default TodoSlice;
