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

export const changeTodoStatus = (currentTodo: Todo): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.changeTodoStatus(currentTodo);
      await dispatch(setTodo({todo}));
    }
)

export const clearCompleted = (): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.clearCompleted();
      await dispatch(setTodo({todo}));
    }
)

export const addNewTodo = (content: string): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.addNewTodo(content);
      await dispatch(setTodo({todo}));
    }
)

export const loadActiveTodo = (): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.loadTodo();
      const filteredTodo = todo.filter(todo => !todo.completed)
      await dispatch(setTodo({todo: filteredTodo}));
    }
)

export const loadCompletedTodo = (): AppThunk => (
    async dispatch => {
      const backendInstance = await getTodoBackend();
      const todo = await backendInstance.loadTodo();
      const filteredTodo = todo.filter(todo => todo.completed)
      await dispatch(setTodo({todo: filteredTodo}));
    }
)
