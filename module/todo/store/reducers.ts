import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "./state";
import {Todo} from "../../../common/types/todo.interface";

interface setTodoPayload {
  todo: Todo[];
}

const TodoSlice = createSlice({
  initialState,
  name: 'Todo',
  reducers: {},
  }
})

export default TodoSlice;
