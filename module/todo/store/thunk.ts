import {AppThunk} from "../../../common/store";
import {getTodoBackend} from "../api";
import {setTodo} from "./reducers";
import {Todo} from "../../../common/types/todo.interface";

export const loadTodos = (): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.loadTodo();
      await dispatch(setTodo({todo}));
    }
)

export const removeTodo = (uuid: string): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.removeTodo(uuid);
      await dispatch(setTodo({todo}));
    }
)
